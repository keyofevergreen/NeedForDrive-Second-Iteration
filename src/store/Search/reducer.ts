import { createReducer } from '@reduxjs/toolkit';
import { setSearchSort } from './actions';
import { SearchState } from '../../types/Search';

const searchReducer = createReducer<SearchState>({
  searchSort: '',
}, {
  [setSearchSort.type]: (state, { payload }) => ({
    searchSort: payload,
  }),
});

export default searchReducer;
