import React, {useEffect} from 'react';

import {Dimmer} from '../../components/dimmer.component';

import Divider from '@material-ui/core/Divider';

import {useDispatch, useSelector} from 'react-redux';
import {fetchCount} from '../../redux/actions/fetch-counts.actions';
import {unselectItem} from '../../redux/actions/select-item.actions';
import {desactivateSearch} from '../../redux/actions/search-counter.actions';

import AddButton from '../../components/addbutton.component';
import DeleteButton from '../../components/deletebutton.component';
import SearchBar from '../../components/searchbar.component';
import ShareButton from '../../components/sharebutton.component';
import DeletetionError from '../../components/deletetionerror.component';
import {ActivityIndicator} from '../../components/activityindicator.component';

import {Box} from '@material-ui/core';

import useStyles from './main.style';

const Main = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const countReducer = useSelector((state) => state.countReducer);
  const uiReducer = useSelector((state) => state.uiReducer);
  const searchReducer = useSelector((state) => state.searchReducer);

  useEffect(() => {
    dispatch(fetchCount());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let hasContent = false;
  if (countReducer.counts[0] === undefined) {
  } else {
    hasContent = countReducer.counts[0].length ? true : false;
  }

  const mainStateRender = () => {
    return (
      <React.Fragment>
        {/* Loading */}
        {countReducer.loading && <ActivityIndicator />}

        {/* No content */}
        {!hasContent && !countReducer.loading && (
          <div>
            <p className={classes.title}>No counters yet</p>
            <p className={classes.subtitle}>
              “When I started counting my blessings, my whole life turned
              around.” —Willie Nelson
            </p>
          </div>
        )}

        {/* Has content */}
        {hasContent && (
          <div>
            <Dimmer />
            {countReducer.errorDeleteCounter !== '' && <DeletetionError />}
          </div>
        )}

        {/* Error  */}
        {countReducer.error !== '' && (
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
      <div
        className={classes.root}
        onClick={() => {
          if (searchReducer.searchState) {
            dispatch(desactivateSearch());
          }
        }}
      >
        <div
          className={classes.searchBarContainer}
          onClick={() => {
            if (uiReducer.itemSelected.length > 0) {
              dispatch(unselectItem());
            }
          }}
        >
          <SearchBar />
        </div>

        <Box
          className={hasContent ? classes.body : null}
          onClick={() => {
            if (uiReducer.itemSelected.length > 0) {
              dispatch(unselectItem());
            }
          }}
        >
          {mainStateRender()}
        </Box>

        <div
          className={classes.bottom}
          onClick={() => {
            dispatch(desactivateSearch());
          }}
        >
          <Divider className={classes.divider} />

          <div className={classes.containerButtons}>
            {uiReducer.itemSelected.length > 0 && (
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
