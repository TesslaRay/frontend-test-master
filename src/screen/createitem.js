import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Divider from '@material-ui/core/Divider';
import {Container} from '@material-ui/core';

import InputBase from '@material-ui/core/InputBase';

import {ActivityIndicator} from '../components/activityindicator.component';
import {useDispatch, useSelector} from 'react-redux';
import addCounter from '../redux/actions/addCounterActions';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {unselectItem} from '../redux/actions/selectItemActions';

const useStyles = makeStyles((theme) => ({
  dimmer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '70px',
  },
  root: {
    // marginTop: '20hv',
    borderRadius: '16px 16px 0px 0px',
    height: '70px',
    backgroundColor: 'white',
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
  // TODO: opacity?
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
      border: `2px solid ${theme.palette.primary.main}`,
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
}));

const CreateItem = () => {
  const dispatch = useDispatch();
  const count_reducer = useSelector((state) => state.count_reducer);
  const ui_reducer = useSelector((state) => state.ui_reducer);

  const [counter, setCounter] = useState();

  const classes = useStyles();

  const onChange = (event) => {
    setCounter(event.target.value);
  };

  const saveItem = (counter) => {
    dispatch(addCounter(counter));
  };

  const handleClickOpen = () => {};

  const handleClose = () => {};

  // TODO: eliminate -
  return (
    <div className={classes.dimmer}>
      -
      <Container className={classes.root}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
          component={Link}
          to="/main"
        >
          <AddCircleIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          Create Counter
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.saveButton}
          onClick={() => saveItem(counter)}
        >
          Save
        </Button>
      </Container>
      <Divider className={classes.separator} />
      <div className={classes.body}>
        <Typography variant="h6">Name</Typography>
        <div className={classes.search}>
          <InputBase
            fullWidth={true}
            placeholder="Cups of coffee"
            classes={{
              input: classes.inputInput,
            }}
            inputProps={{'aria-label': 'search'}}
            onChange={onChange}
          />
        </div>
        <Typography className={classes.subtitle}>
          Give it a name. Creative block? See <u>examples</u>.
        </Typography>
      </div>
      {count_reducer.loadingAddCounter === true ? (
        <div className={classes.loader}>
          <ActivityIndicator />
        </div>
      ) : (
        <p></p>
      )}
      <Dialog
        open={count_reducer.errorAddCounter !== ''}
        // onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          Couldn’t create counter
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Couldn’t create counter
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {}} color="primary">
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateItem;
