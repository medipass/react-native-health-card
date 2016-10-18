export const getFocusStyle = (targetAttribute, attribute, blurColor = '#bfbfbf') => (
  (targetAttribute === attribute || targetAttribute === 'all') ?
    { fontWeight: targetAttribute !== 'all' ? 'bold' : 'normal' } :
    { color: blurColor }
);
