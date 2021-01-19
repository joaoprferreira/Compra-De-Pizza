const c = (el) => {return document.querySelector(el)};
const cs = (el) => {return document.querySelector(el)};

pizzaJson.map((item,index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);
      // Clonando um Elmento da arvore DOM 
  let cart = c(".models .cart--item").cloneNode

  c('.pizza-area').append(pizzaItem);
      // Atribuindo o PizzaItem A Pizza-area

  
}) 