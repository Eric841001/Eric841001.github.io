(function () {
  const diagramSelector = '.theme-doc-markdown .mermaid, .theme-doc-markdown div[class*="mermaid"]';
  let activeDialog = null;

  function getSvg(frame) {
    return frame.querySelector('svg');
  }

  function getAspectRatio(svg) {
    const viewBox = svg.getAttribute('viewBox');
    if (!viewBox) return 1;
    const parts = viewBox.split(/\s+/).map(Number);
    if (parts.length !== 4 || !parts[2] || !parts[3]) return 1;
    return parts[2] / parts[3];
  }

  function ensureFrameState(frame) {
    if (frame.dataset.kcZoomReady === 'true') return;
    const svg = getSvg(frame);
    if (!svg) return;

    frame.dataset.kcZoomReady = 'true';
    frame.classList.add('kc-mermaid-frame');
    frame.setAttribute('role', 'button');
    frame.setAttribute('tabindex', '0');
    frame.setAttribute('aria-label', 'Open diagram in a larger view');
    frame.title = 'Click to enlarge diagram';

    const aspectRatio = getAspectRatio(svg);
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
    root.querySelectorAll(diagramSelector).forEach(ensureFrameState);
  }

  function openDialog(frame) {
    const svg = getSvg(frame);
    if (!svg) return;
    closeDialog();

    const overlay = document.createElement('div');
    overlay.className = 'kc-diagram-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Expanded architecture diagram');

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

    const clone = svg.cloneNode(true);
    clone.removeAttribute('width');
    clone.removeAttribute('height');
    clone.setAttribute('preserveAspectRatio', 'xMidYMid meet');
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
