import React, {useEffect} from 'react';

import {makeStyles} from '@material-ui/core/styles';

import {SearchBar} from '../components/searchbar.component';
import {Dimmer} from '../components/dimmer.component';

import {AddButton} from '../components/addbutton.component';
import {DeleteButton} from '../components/deletebutton.component';

import {ActivityIndicator} from '../components/activityindicator.component';
import Divider from '@material-ui/core/Divider';

import {useDispatch, useSelector} from 'react-redux';
import fetchCount from '../redux/actions/fetch-counts.actions';
import {ShareButton} from '../components/sharebutton.component';
import {unselectItem} from '../redux/actions/select-item.actions';
import {desactivateSearch} from '../redux/actions/search-counter.actions';
import {DeletetionError} from '../components/deletetionerror.component';

import {container} from '../utils/constans';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100%',
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
}));

const Main = () => {
  const dispatch = useDispatch();
  const count_reducer = useSelector((state) => state.count_reducer);
  const ui_reducer = useSelector((state) => state.ui_reducer);
  const search_reducer = useSelector((state) => state.search_reducer);

  useEffect(() => {
    dispatch(fetchCount());
  }, []);

  const classes = useStyles();

  const mainStateRender = () => {
    return (
      <React.Fragment>
        {/* Loading */}
        {count_reducer.loading && <ActivityIndicator />}

        {/* No content */}
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

        {/* Has content */}
        {count_reducer.counts.length >= 1 && (
          <div>
            <Dimmer />
            {/* Loading */}
            {count_reducer.errorDeleteCounter !== '' && <DeletetionError />}
          </div>
        )}

        {/* Error  */}
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
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.searchBarContainer}>
          <SearchBar />
        </div>

        <div
          onClick={() => {
            if (ui_reducer.itemSelected.length > 0) {
              dispatch(unselectItem());
            }
            if (search_reducer.searchState) {
              dispatch(desactivateSearch());
            }
          }}
        >
          {mainStateRender()}
        </div>
        <div
          className={classes.bottom}
          onClick={() => {
            dispatch(desactivateSearch());
          }}
        >
          <Divider className={classes.divider} />

          <div className={classes.containerButtons}>
            {ui_reducer.itemSelected.length > 0 && (
              <React.Fragment>
                <DeleteButton />
                <ShareButton />
              </React.Fragment>
            )}
            <AddButton />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
