import { createReducer } from '@reduxjs/toolkit';
import { setRepositories } from 'app/actions/repoActions';
import { IRepository } from 'shared/types';

const initialState: IRepository[] = [];

const repoReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRepositories, (state, action) => {
    return action.payload;
  });
});

export default repoReducer;
