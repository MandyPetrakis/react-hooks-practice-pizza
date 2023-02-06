import React from "react";

function PizzaForm({
  topping,
  setTopping,
  size,
  setSize,
  veg,
  setVeg,
  id,
  postPizza,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const newPizzaDetails = {
      id: id,
      topping: topping,
      size: size,
      vegetarian: veg,
    };
    console.log(newPizzaDetails);
    fetch(`http://localhost:3001/pizzas/${newPizzaDetails.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPizzaDetails),
    })
      .then((r) => r.json())
      .then((data) => postPizza(data));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={(e) => setTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={true}
              checked={veg ? true : null}
              onChange={(e) => setVeg(!veg)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={false}
              onChange={(e) => setVeg(!veg)}
              checked={veg ? null : true}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
