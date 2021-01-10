import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from 'react-redux';
import {
  activateSearch,
  searchCounter,
} from '../redux/actions/searchCounterActions';

// TODO: font-family
const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: 'white',
    '&:hover': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    marginRight: theme.spacing(2),
    marginTop: '2vh',
    marginLeft: 0,
    width: '100%',
    color: '#888B90',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888B90',
    fontSize: '16px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(searchCounter(event.target.value));
  };

  return (
    <Box>
      <div
        className={classes.search}
        onClick={() => dispatch(activateSearch())}
      >
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          fullWidth={true}
          placeholder="Search Counters"
          classes={{
            input: classes.inputInput,
          }}
          onChange={onChange}
          inputProps={{'aria-label': 'search'}}
        />
      </div>
    </Box>
  );
};
