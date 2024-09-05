export const reducers = {
  setProducts: (store, action) => {
    store.products = action.payload;

    return store;
  },
};
