import React from 'react';

import {CounterCell} from './countercell.component';

export const ItemList = ({items}, props) => {
  return items.map((item, key) => {
    return <CounterCell item={item} key={key} />;
  });
};
