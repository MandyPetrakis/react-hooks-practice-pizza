import React from "react";

function Pizza({ pizza, editPizza }) {
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          onClick={() => editPizza(pizza)}
          className="btn btn-primary"
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
