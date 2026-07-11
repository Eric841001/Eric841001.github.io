(function () {
  const visualSelector =
    '.theme-doc-markdown .mermaid, .theme-doc-markdown div[class*="mermaid"], .theme-doc-markdown img:not(.no-zoom), .theme-doc-markdown .kc-ai-journey, .theme-doc-markdown .kc-signal-grid, .theme-doc-markdown .kc-asset-catalog, .theme-doc-markdown .kc-pathway';
  let activeDialog = null;

  function getVisual(frame) {
    if (frame.tagName === 'IMG') return frame;
    if (
      frame.classList.contains('kc-ai-journey') ||
      frame.classList.contains('kc-signal-grid') ||
      frame.classList.contains('kc-asset-catalog') ||
      frame.classList.contains('kc-pathway')
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

    const clone = visual.cloneNode(true);
    if (clone.tagName === 'IMG') {
      clone.removeAttribute('width');
      clone.removeAttribute('height');
      clone.setAttribute('alt', clone.getAttribute('alt') || 'Expanded visual');
    } else if (clone.tagName === 'svg') {
      clone.removeAttribute('width');
      clone.removeAttribute('height');
      clone.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    } else {
      clone.removeAttribute('role');
      clone.removeAttribute('tabindex');
      clone.removeAttribute('title');
      clone.classList.remove('kc-visual-frame', 'kc-html-visual-frame');
    }
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
    closeButton.focus();
  }

  function closeDialog() {
    if (!activeDialog) return;
    activeDialog.remove();
    activeDialog = null;
    document.body.classList.remove('kc-diagram-modal-open');
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
    if (event.key === 'Escape') closeDialog();
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
