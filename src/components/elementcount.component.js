import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  box: {
    // backgroundColor: '#abaeb3',
    // position: 'absolute',
    // width: '411px',
    height: '67px',
    alignItems: 'center',
    display: 'flex',
  },
  text: {
    position: 'absolute',
    fontFamily: theme.typography.fontFamily,
    fontWeight: '400',
    color: '#212121',
    fontSize: '12px',
    width: '50%',
  },
  rigthside: {
    marginLeft: '200px',
    display: 'flex',
    alignItems: 'center',
  },
  number: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '600',
    color: '#212121,',
    margin: '20px',
  },
}));

export const ElementCount = ({element}) => {
  const classes = useStyles();

  return (
    <Container className={classes.box}>
      <div className={classes.text}>{element.text}</div>
      <div className={classes.rigthside}>
        <RemoveIcon color="primary" />
        <span className={classes.number}>{element.number}</span>
        <AddIcon color="primary" />
      </div>
    </Container>
  );
};
