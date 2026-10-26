import React, {useEffect} from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';

export default function SearchBar(props) {
  useEffect(() => {
    // Keep the browser-only autocomplete module in the main bundle so first focus
    // does not depend on an additional lazy script request after publication.
    import(/* webpackMode: "eager" */ '@easyops-cn/autocomplete.js').catch((error) => {
      console.error('Search suggestions could not initialize.', error);
    });
  }, []);
  return <OriginalSearchBar {...props} />;
}
