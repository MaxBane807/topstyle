export const updateProducts = "updateProducts";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case updateProducts: {
      return { ...state, allProducts: action.payload };
    }
    default:
      return state;
  }
};

export default ProductReducer;