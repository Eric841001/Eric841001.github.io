import React from 'react';

const textOf = node => React.Children.toArray(node).map(child =>
  React.isValidElement(child) ? textOf(child.props.children) : String(child),
).join('').trim();

function findHeaders(children) {
  for (const child of React.Children.toArray(children)) {
    if (!React.isValidElement(child)) continue;
    if (child.type === 'thead') {
      const row = React.Children.toArray(child.props.children).find(e => React.isValidElement(e) && e.type === 'tr');
      return row ? React.Children.toArray(row.props.children).filter(React.isValidElement).map(e => textOf(e.props.children)) : [];
    }
  }
  return [];
}
function complexCells(children) {
  return React.Children.toArray(children).some(child => React.isValidElement(child) &&
    (Number(child.props.colSpan || 1) > 1 || Number(child.props.rowSpan || 1) > 1 || complexCells(child.props.children)));
}
function labelRows(children, labels) {
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    if (child.type === 'tr') {
      let column = 0;
      return React.cloneElement(child, {role: 'row'}, React.Children.map(child.props.children, cell => {
        if (!React.isValidElement(cell) || !['td', 'th'].includes(cell.type)) return cell;
        const label = labels[column++];
        return React.cloneElement(cell, cell.type === 'td' ? {'data-label': label, role: 'cell'} : {scope: 'col', role: 'columnheader'});
      }));
    }
    return React.cloneElement(child, undefined, labelRows(child.props.children, labels));
  });
}
export default function ResponsiveTable({children, className = '', ...props}) {
  const labels = findHeaders(children);
  const cards = labels.length >= 2 && labels.length <= 4 && !complexCells(children);
  return (
    <div className={cards ? 'kc-table-region' : 'kc-table-region kc-table-region--scroll'}>
      {!cards && <p className="kc-table-scroll-hint">표를 좌우로 스크롤하면 모든 열을 볼 수 있습니다.</p>}
      <div className="kc-table-viewport" role="region" aria-label={labels.length ? labels.join(' / ') : '데이터 표'} tabIndex={cards ? undefined : 0}>
        <table {...props} data-columns={labels.length} role="table" className={`${className} ${cards ? 'kc-responsive-table' : ''}`.trim()}>{cards ? labelRows(children, labels) : children}</table>
      </div>
    </div>
  );
}
