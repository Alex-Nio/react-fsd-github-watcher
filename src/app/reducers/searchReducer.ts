import { createReducer, createAction, PayloadAction } from '@reduxjs/toolkit';
import { IRepository } from 'shared/types';
import { ISearchState } from 'shared/types/types';

const initialState: ISearchState = {
  query: '',
  searchResults: [],
};

export const setQuery = createAction<string>('search/setQuery');
export const setSearchResults = createAction<IRepository[]>(
  'search/setSearchResults'
);

const searchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuery, (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    })
    .addCase(
      setSearchResults,
      (state, action: PayloadAction<IRepository[]>) => {
        state.searchResults = action.payload;
      }
    );
});

export default searchReducer;
