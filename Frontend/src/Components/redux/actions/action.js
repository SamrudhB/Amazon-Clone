export const getProducts = () => async (dispatch) => {
  try {
    const data = await fetch("/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await data.json();

    dispatch({
      type: "SUCCESS_GET_PRODUCTS",
      payload: Array.isArray(res) ? res : [],
    });

  } catch (error) {
    dispatch({
      type: "FAIL_GET_PRODUCTS",
      payload: error.message,
    });
  }
};