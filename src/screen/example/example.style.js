import {makeStyles} from '@material-ui/core/styles';
import {primary} from '../../utils/colors';
import {boxShadow} from '../../utils/constans';

const useStyles = makeStyles((theme) => ({
  dimmer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100vh',
  },
  root: {
    backgroundColor: 'white',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '97vh',
      borderRadius: '16px 16px 0px 0px',
      marginTop: '0px',
    },
    marginTop: '15vh',
    borderRadius: '16px 16px 16px 16px',
    width: '485px',
    height: '612px',
    margin: 'auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    transform: 'rotate(45deg) scale(2)',
    color: '#C4C4C4',
  },
  title: {
    flexGrow: 1,
    fontWeight: '600',
  },
  saveButton: {
    color: '#FFFFFF',
    textTransform: 'none',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
  },
  separator: {
    backgroundColor: '#C4C4C4',
    height: '3px',
  },
  body: {
    marginTop: '10px',
    margin: '10px',
    alignItems: 'center',
  },
  search: {
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    '&:hover': {
      border: `2px solid ${primary}`,
    },
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em)`,
  },
  subtitle: {
    marginTop: '4px',
    color: '#888B90',
    fontWeight: 400,
  },
  loader: {
    textAlign: 'center',
  },
  text: {
    margin: '20px ',
    color: '#888B90',
    fontSize: '12px',
    fontWeight: 400,
  },
  section: {
    text: 'center',
  },
  titleSection: {
    marginLeft: '20px ',
    marginTop: '25px ',
    color: '#000000',
    fontSize: '12px',
    fontWeight: 500,
  },
  chip: {
    margin: '10px',
    backgroundColor: '#ECECEC',
    border: '1px solid #DCDCDF',
    boxShadow: boxShadow.boxShadow,
    color: '#000000',
    fontSize: '12px',
    fontWeight: 500,
  },
}));

export default useStyles;
