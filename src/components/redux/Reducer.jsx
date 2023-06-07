import React from "react";
import { Products } from "../../assets/Data";
const data = {
  Products: Products,
  Cart: [],
};

export default function Reducer(state = data, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, Cart: [...state.Cart, { ...action.payload, qte: 1 }] };
    case "DELETE":
      return {
        ...state,
        Cart: state.Cart.filter((e) => e.id !== action.payload),
      };
    case "UPDATE":
      return {
        ...state,
        Cart: state.Cart.map((e) =>
          e.id === action.payload
            ? { ...e, qte: e.qte + 1 * action.payload.signe }
            : e
        ),
      };
    default:
      return state;
  }
}
