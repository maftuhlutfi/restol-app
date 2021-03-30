import { createSelector } from "reselect";

const selectProduct = state => state.product

export const selectProductItems = createSelector(
    [selectProduct],
    product => product.productItems
)

export const selectIsLoading = createSelector(
    [selectProduct],
    product => product.isLoading
)

export const selectErrorMessage = createSelector(
    [selectProduct],
    product => product.errorMessage
)