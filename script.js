const c = (el) => {return document.querySelector(el)};
const cs = (el) => {return document.querySelector(el)};

pizzaJson.map((item,index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);
      // Clonando um Elmento da arvore DOM 
    
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

  c('.pizza-area').append(pizzaItem);
      // Atribuindo o PizzaItem A Pizza-area

  
}) 