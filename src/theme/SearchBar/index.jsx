import React, {useEffect} from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';

export default function SearchBar(props) {
  useEffect(() => {
    // Keep the browser-only autocomplete module in the main bundle so first focus
    // does not depend on an additional lazy script request after publication.
    import(/* webpackMode: "eager" */ '@easyops-cn/autocomplete.js').catch((error) => {
      console.error('Search suggestions could not initialize.', error);
    });

    let revealFrame;
    const revealKeyboardSelection = (event) => {
      if (!['ArrowDown', 'ArrowUp'].includes(event.key) ||
          !(event.target instanceof HTMLInputElement) || !event.target.closest('.navbar')) return;
      const input = event.target;
      window.cancelAnimationFrame(revealFrame);
      revealFrame = window.requestAnimationFrame(() => {
        const selected = document.getElementById(input.getAttribute('aria-activedescendant'));
        const menu = selected?.closest('[class*="dropdownMenu_"]');
        if (!menu || menu.scrollHeight <= menu.clientHeight) return;
        const itemBounds = selected.getBoundingClientRect();
        const menuBounds = menu.getBoundingClientRect();
        if (itemBounds.top < menuBounds.top || itemBounds.bottom > menuBounds.bottom) {
          selected.scrollIntoView({block: 'nearest', inline: 'nearest'});
        }
      });
    };
    document.addEventListener('keydown', revealKeyboardSelection);
    return () => {
      document.removeEventListener('keydown', revealKeyboardSelection);
      window.cancelAnimationFrame(revealFrame);
    };
  }, []);
  return <OriginalSearchBar {...props} />;
}
