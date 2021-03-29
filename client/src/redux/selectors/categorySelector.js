import { createSelector } from "reselect";

const selectCategory = state => state.category

export const selectCategoryItems = createSelector(
    [selectCategory],
    category => category.categoryItems
)

export const selectIsLoading = createSelector(
    [selectCategory],
    category => category.isLoading
)

export const selectErrorMessage = createSelector(
    [selectCategory],
    category => category.errorMessage
)