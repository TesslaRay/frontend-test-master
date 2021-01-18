import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    width: '570px',
    margin: 'auto',
  },
  title: {
    marginTop: '30vh',
    fontFamily: theme.typography.fontFamily,
    fontSize: '18px',
    fontWeight: '600',
  },
  subtitle: {
    margin: theme.spacing(8),
    fontFamily: theme.typography.fontFamily,
    fontSize: '13px',
    color: '#4A4A4A',
  },
  bottom: {
    position: 'fixed',
    bottom: theme.spacing(1),
    width: '100%',
  },
  searchBarContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
    width: '379px',
    margin: 'auto',
  },
  containerButtons: {
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
    width: '570px',
  },
  body: {
    height: '92vh',
  },
}));

export default useStyles;
