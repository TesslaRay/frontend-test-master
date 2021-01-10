import React from 'react';
import {useSelector} from 'react-redux';

import {CounterCell} from './countercell.component';

export const ItemList = () => {
  const count_reducer = useSelector((state) => state.count_reducer);
  const search_reducer = useSelector((state) => state.search_reducer);

  let searchFilter = count_reducer.counts[0].filter((count) =>
    count.title.includes(search_reducer.searchCounter),
  );

  if (search_reducer.searchState && search_reducer.searchCounter.length > 0) {
    return searchFilter.map((item, key) => {
      return <CounterCell item={item} key={key} />;
    });
  }

  return count_reducer.counts[0].map((item, key) => {
    return <CounterCell item={item} key={key} />;
  });
};
