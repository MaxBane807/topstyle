export const updateProducts = "updateProducts";
export const modifyProducts = "modifyProducts";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case updateProducts: {
      return { ...state, allProducts: action.payload };
    }
    case modifyProducts: {

      return {allProducts: state.allProducts.filter((x) => {

        return x.Name.includes(action.payload);
      })};     
    }
    default:
      return state;
  }
};

export default ProductReducer;