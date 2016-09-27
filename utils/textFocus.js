export const getFocusStyle = (targetAttribute, attribute) => (
  (targetAttribute === attribute || targetAttribute === 'all') ?
    { fontWeight: targetAttribute !== 'all' ? 'bold' : 'normal' } :
    { color: '#bfbfbf' }
);
