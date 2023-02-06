import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [editedPizza, setEditedPizza] = useState([]);
  const [topping, setTopping] = useState("");
  const [size, setSize] = useState("");
  const [veg, setVeg] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((data) => setPizzas(data));
  }, []);

  function editPizza(pizza) {
    setEditedPizza(pizza);
    setTopping(pizza.topping);
    setSize(pizza.size);
    setVeg(pizza.vegetarian);
    setId(pizza.id);
  }

  function postPizza(newPizzaDetails) {
    const updatedPizza = pizzas.map((pizza) => {
      if (pizza.id === newPizzaDetails.id) {
        return newPizzaDetails;
      } else return pizza;
    });
    setPizzas(updatedPizza);
  }
  return (
    <>
      <Header />
      <PizzaForm
        editedPizza={editedPizza}
        topping={topping}
        size={size}
        veg={veg}
        setTopping={setTopping}
        id={id}
        postPizza={postPizza}
        setSize={setSize}
        setVeg={setVeg}
      />
      <PizzaList pizzas={pizzas} editPizza={editPizza} />
    </>
  );
}

export default App;
