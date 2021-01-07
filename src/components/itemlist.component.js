import React from 'react';
import {useSelector} from 'react-redux';

import {CounterCell} from './countercell.component';

export const ItemList = () => {
  const count_reducer = useSelector((state) => state.count_reducer);

  return count_reducer.counts[0].map((item, key) => {
    return <CounterCell item={item} key={key} />;
  });
};
