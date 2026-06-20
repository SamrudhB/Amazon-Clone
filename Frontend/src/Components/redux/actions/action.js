// export const getProducts = () => async (dispatch) => {
//   try {
//     const data = await fetch("/api/products", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const res = await data.json();

//     dispatch({
//       type: "SUCCESS_GET_PRODUCTS",
//       payload: Array.isArray(res) ? res : [],
//     });

//   } catch (error) {
//     dispatch({
//       type: "FAIL_GET_PRODUCTS",
//       payload: error.message,
//     });
//   }
// };

export const getProducts = (page = 1, limit = 12) => async (dispatch) => {
  try {
    const response = await fetch(
      `/api/products?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = await response.json();

    dispatch({
      type: "SUCCESS_GET_PRODUCTS",
      payload: {
        products: res.products || [],
        totalPages: res.totalPages || 1,
        currentPage: res.currentPage || 1,
        totalProducts: res.totalProducts || 0,
      },
    });
  } catch (error) {
    dispatch({
      type: "FAIL_GET_PRODUCTS",
      payload: error.message,
    });
  }
};