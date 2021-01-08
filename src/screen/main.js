import React, {useEffect} from 'react';

import {makeStyles} from '@material-ui/core/styles';

import {SearchBar} from '../components/searchbar.component';
import {Header} from '../components/header.component';
import {ItemList} from '../components/itemlist.component';
import {AddButton} from '../components/addbutton.component';
import {ActivityIndicator} from '../components/activityindicator.component';
import Divider from '@material-ui/core/Divider';

import {useDispatch, useSelector} from 'react-redux';
import fetchCount from '../redux/actions/fetchCountActions';

// TODO: align center !!
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
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
    bottom: theme.spacing(2),
    width: '95%',
  },
}));

const Main = () => {
  const dispatch = useDispatch();
  const count_reducer = useSelector((state) => state.count_reducer);

  useEffect(() => {
    dispatch(fetchCount());
  }, []);

  const classes = useStyles();

  const mainStateRender = () => {
    return (
      <React.Fragment>
        {count_reducer.loading && <ActivityIndicator />}
        {!count_reducer.loading &&
          count_reducer.counts.length < 1 &&
          count_reducer.error === '' && (
            <div>
              <p className={classes.title}>No counters yet</p>
              <p className={classes.subtitle}>
                “When I started counting my blessings, my whole life turned
                around.” —Willie Nelson
              </p>
            </div>
          )}
        {count_reducer.counts.length >= 1 && (
          <div>
            <Header />
            <ItemList />
          </div>
        )}
        {count_reducer.error !== '' && (
          <div>
            <p className={classes.title}>Couldn’t load the counters</p>
            <p className={classes.subtitle}>
              The Internet connection appears to be offline.
            </p>
          </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <SearchBar />
      {mainStateRender()}
      <div className={classes.bottom}>
        <Divider />
        <AddButton />
      </div>
    </div>
  );
};

export default Main;
