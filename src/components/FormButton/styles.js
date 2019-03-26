export default theme => ({
  button: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    boxShadow: 'none',
    width: '100%',
    height: '50px',
    fontFamily: 'Averta, Arial, sans-serif',
  },
  buttonProgress: {
    color: '#ffffff',
  },
  loader: {
    position: 'absolute',
  },
  progress: {
    color: theme.palette.primary.main,
  },
  progressOutline: {
    color: theme.palette.primary.main,
  },
});
