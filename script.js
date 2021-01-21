const c = (el) => {return document.querySelector(el)};
const cs = (el) => {return document.querySelector(el)};

pizzaJson.map((item,index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);
      // Clonando um Elmento da arvore DOM 
    
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e) => { 
      e.preventDefault()
      let area = document.querySelector('.pizzaWindowArea');
      document.querySelector('.pizzaWindowArea').style.opacity = 0;
        area.style.display = "flex";
         setTimeout(() => {
          document.querySelector('.pizzaWindowArea').style.opacity = 1;
         },200);
            document.querySelector('.pizzaBig img').src = item.img;
              document.querySelector('.pizzaInfo h1').innerHTML = item.name
                document.querySelector(".pizzaInfo--desc").innerHTML = item.description;
                  document.querySelector('.pizzaInfo--size') = `${item.sizes}`;

    })

  c('.pizza-area').append(pizzaItem);
      // Atribuindo o PizzaItem A Pizza-area

}) 