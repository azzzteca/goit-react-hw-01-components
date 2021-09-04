export const getColor = el => {
  switch (el.label) {
    case '.docx':
      return 'blue';
    case '.pdf':
      return 'violet';
    case '.mp3':
      return 'red';
    case '.psd':
      return 'green';
    default:
      return null;
  }
};
