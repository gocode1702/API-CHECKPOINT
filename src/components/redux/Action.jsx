export const AddProduct = (payload) => {
  return {
    type: "ADD",
    payload: payload,
  };
};

export const DeleteProduct = (payload) => {
  return {
    type: "DELETE",
    payload: payload,
  };
};
export const UpdateProduct = (payload) => {
  return {
    type: "UPDATE",
    payload: payload,
  };
};
