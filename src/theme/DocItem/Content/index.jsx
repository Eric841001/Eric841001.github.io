import React from 'react';
import OriginalContent from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import SourceReview from '../../../components/SourceReview';
import reviews from '../../../data/documentReviews.json';
export default function DocItemContent(props) {
  const {metadata} = useDoc();
  const key = metadata.permalink.replace(/\/$/, '');
  return <><OriginalContent {...props} /><SourceReview review={reviews[key]} /></>;
}
