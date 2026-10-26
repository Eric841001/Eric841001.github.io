(function () {
  const visualSelector =
    '.theme-doc-markdown .mermaid, .theme-doc-markdown div[class*="mermaid"], .theme-doc-markdown img:not(.no-zoom), .theme-doc-markdown .kc-ai-journey';
  let activeDialog = null;
  let activeOpener = null;
  let cloneSequence = 0;

  function isolateCloneIdentifiers(clone) {
    const elements = [clone, ...clone.querySelectorAll('*')];
    const ids = new Map();
    const prefix = `kc-expanded-${++cloneSequence}-`;
    elements.forEach((element) => {
      if (element.id) {
        const oldId = element.id;
        const newId = prefix + oldId;
        ids.set(oldId, newId);
        element.id = newId;
      }
    });
    const idReferenceAttributes = new Set([
      'aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-owns',
      'aria-flowto', 'aria-activedescendant', 'headers', 'for',
    ]);
    elements.forEach((element) => {
      [...element.attributes].forEach((attribute) => {
        if (attribute.name === 'id') return;
        let value = attribute.value;
        if (idReferenceAttributes.has(attribute.name)) {
          value = value.split(/\s+/).map((id) => ids.get(id) || id).join(' ');
        } else if (['href', 'xlink:href'].includes(attribute.name) && value.startsWith('#')) {
          value = '#' + (ids.get(value.slice(1)) || value.slice(1));
        }
        attribute.value = value.replace(/url\((['"]?)#([^)'"\s]+)\1\)/g,
          (match, quote, id) => ids.has(id) ? `url(${quote}#${ids.get(id)}${quote})` : match);
      });
      if (element.localName === 'style') {
        element.textContent = element.textContent.replace(/#([A-Za-z_][\w-]*)/g,
          (match, id) => ids.has(id) ? '#' + ids.get(id) : match);
      }
    });
  }

  function getVisual(frame) {
    if (frame.tagName === 'IMG') return frame;
    if (
      frame.classList.contains('kc-ai-journey')
    ) {
      return frame;
    }
    return frame.querySelector('svg');
  }

  function getAspectRatio(visual) {
    if (visual.tagName === 'IMG') {
      const width = visual.naturalWidth || visual.width;
      const height = visual.naturalHeight || visual.height;
      return width && height ? width / height : 1;
    }
    const rect = visual.getBoundingClientRect();
    if (rect.width && rect.height) return rect.width / rect.height;
    const viewBox = visual.getAttribute('viewBox');
    if (!viewBox) return 1;
    const parts = viewBox.split(/\s+/).map(Number);
    if (parts.length !== 4 || !parts[2] || !parts[3]) return 1;
    return parts[2] / parts[3];
  }

  function ensureFrameState(frame) {
    if (frame.dataset.kcZoomReady === 'true') return;
    const visual = getVisual(frame);
    if (!visual) return;

    frame.dataset.kcZoomReady = 'true';
    frame.classList.add('kc-visual-frame');
    if (visual.tagName !== 'IMG' && visual !== frame) frame.classList.add('kc-mermaid-frame');
    if (visual === frame) frame.classList.add('kc-html-visual-frame');
    frame.setAttribute('role', 'button');
    frame.setAttribute('tabindex', '0');
    frame.setAttribute('aria-label', 'Open visual in a larger view');
    frame.title = 'Click to enlarge visual';

    const aspectRatio = getAspectRatio(visual);
    if (aspectRatio > 2.2) frame.classList.add('kc-mermaid-wide');
    if (aspectRatio > 3.6) frame.classList.add('kc-mermaid-ultrawide');

    frame.addEventListener('click', () => openDialog(frame));
    frame.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDialog(frame);
      }
    });
  }

  function enhanceDiagrams(root) {
    root.querySelectorAll(visualSelector).forEach(ensureFrameState);
  }

  function openDialog(frame) {
    const visual = getVisual(frame);
    if (!visual) return;
    closeDialog();

    const overlay = document.createElement('div');
    overlay.className = 'kc-diagram-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Expanded visual');

    const panel = document.createElement('div');
    panel.className = 'kc-diagram-modal__panel';

    const toolbar = document.createElement('div');
    toolbar.className = 'kc-diagram-modal__toolbar';

    const title = document.createElement('div');
    title.className = 'kc-diagram-modal__title';
    title.textContent = findNearestHeading(frame) || 'Architecture diagram';

    const closeButton = document.createElement('button');
    closeButton.className = 'kc-diagram-modal__close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close expanded diagram');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', closeDialog);

    const canvas = document.createElement('div');
    canvas.className = 'kc-diagram-modal__canvas';
    canvas.tabIndex = 0;
    canvas.setAttribute('role', 'region');
    canvas.setAttribute('aria-label', 'Expanded visual; use arrow keys to scroll');

    const clone = visual.cloneNode(true);
    if (clone.tagName === 'IMG') {
      clone.removeAttribute('width');
      clone.removeAttribute('height');
      clone.setAttribute('alt', clone.getAttribute('alt') || 'Expanded visual');
    } else if (clone.tagName === 'svg') {
      clone.removeAttribute('width');
      clone.removeAttribute('height');
      clone.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      const bounds = visual.viewBox.baseVal;
      if (bounds.width > 0 && bounds.height > 0) {
        // Keep diagram labels readable on narrow screens instead of fitting the entire chart.
        clone.style.width = `${Math.ceil(bounds.width * 1.25)}px`;
        clone.style.height = 'auto';
        clone.style.maxWidth = 'none';
      }
    } else {
      clone.removeAttribute('role');
      clone.removeAttribute('tabindex');
      clone.removeAttribute('title');
      clone.classList.remove('kc-visual-frame', 'kc-html-visual-frame');
    }
    isolateCloneIdentifiers(clone);
    canvas.appendChild(clone);

    toolbar.append(title, closeButton);
    panel.append(toolbar, canvas);
    overlay.appendChild(panel);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeDialog();
    });

    document.body.appendChild(overlay);
    document.body.classList.add('kc-diagram-modal-open');
    activeDialog = overlay;
    activeOpener = frame;
    closeButton.focus();
  }

  function closeDialog() {
    if (!activeDialog) return;
    activeDialog.remove();
    activeDialog = null;
    document.body.classList.remove('kc-diagram-modal-open');
    if (activeOpener?.isConnected) activeOpener.focus({preventScroll: true});
    activeOpener = null;
  }

  function findNearestHeading(frame) {
    let node = frame.previousElementSibling;
    while (node) {
      if (/^H[1-4]$/.test(node.tagName)) return node.textContent.trim();
      node = node.previousElementSibling;
    }
    return '';
  }

  document.addEventListener('keydown', (event) => {
    if (!activeDialog) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDialog();
      return;
    }
    if (event.key !== 'Tab') return;
    const controls = [...activeDialog.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )].filter((element) => !element.disabled && element.getClientRects().length > 0);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (!first) return;
    const outside = !activeDialog.contains(document.activeElement);
    if (event.shiftKey && (outside || document.activeElement === first)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (outside || document.activeElement === last)) {
      event.preventDefault();
      first.focus();
    }
  });

  function start() {
    enhanceDiagrams(document);
    const observer = new MutationObserver(() => enhanceDiagrams(document));
    observer.observe(document.body, {childList: true, subtree: true});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
