import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Divider from '@material-ui/core/Divider';
import {Container} from '@material-ui/core';

import InputBase from '@material-ui/core/InputBase';

import {ActivityIndicator} from '../../components/activityindicator.component';
import {AddError} from '../../components/adderror.component';

import {useDispatch, useSelector} from 'react-redux';
import {addCounter} from '../../redux/actions/add-counter.actions';

import useStyles from './createitem.style';

const CreateItem = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const countReducer = useSelector((state) => state.countReducer);

  const [counter, setCounter] = useState();

  const onChange = (event) => {
    setCounter(event.target.value);
  };

  const saveItem = (counter) => {
    dispatch(addCounter(counter));
  };

  return (
    <div className={classes.dimmer}>
      <br></br>
      <Container className={classes.root}>
        <div className={classes.header}>
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
            component={Link}
            to="/main"
          >
            Save
          </Button>
        </div>
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
            Give it a name. Creative block? See&nbsp;
            <Link to="/example">
              <u>examples.</u>
            </Link>
          </Typography>
        </div>
        {/* Loading */}
        {countReducer.loadingAddCounter === true ? (
          <div className={classes.loader}>
            <ActivityIndicator />
          </div>
        ) : (
          <p></p>
        )}
        {/* Error */}
        {countReducer.errorAddCounter !== '' && <AddError />}
      </Container>
    </div>
  );
};

export default CreateItem;
