import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesId: 0,
  currentPage: 1,
  sort: {
    id: 0,
    name: 'популярности (по убыванию)',
    sort: 'rating',
    order: 'desc',
  },
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoriesId(state, action) {
      state.categoriesId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },  
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});
export const { setCategoriesId, setSort, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;
