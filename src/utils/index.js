export const capitalizeText = text => {
  if (text) {
    const textArray = text.split(' ');
    return textArray
      .map(text => {
        if (text && text.length) {
          const s = text.trim();
          return `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`;
        }
        return '';
      })
      .join(' ');
  }
  return '';
};