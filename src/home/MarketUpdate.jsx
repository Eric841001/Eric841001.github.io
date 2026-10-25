import React from 'react';
import Link from '@docusaurus/Link';
import {updateHighlights} from '../data/updateHighlights';
import styles from './MarketUpdate.module.css';
export default function MarketUpdate(){return <section className={styles.update}><div className={styles.inner}><div className={styles.copy}><p>Official platform updates</p><h2>Current Copilot and agent guidance</h2></div><div className={styles.cards}>{updateHighlights.map(item=><Link key={item.path} to={item.path} className={styles.card}><strong>{item.category}</strong><h3>{item.title}</h3><p>{item.description}</p><span>{item.date} · {item.status}</span></Link>)}</div></div></section>;}
