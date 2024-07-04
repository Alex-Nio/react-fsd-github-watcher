import { createAction } from '@reduxjs/toolkit';

export const setQuery = createAction<string>('SET_QUERY');

export const setSearchResults = createAction<any[]>('SET_SEARCH_RESULTS');
