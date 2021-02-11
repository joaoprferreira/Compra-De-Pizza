const c = (el) => {return document.querySelector(el)};
const cs = (el) => {return document.querySelector(el)};
const area = document.querySelector('.pizzaWindowArea');

//Listagem das pizzas

pizzaJson.map((item,index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);
      // Clonando um Elmento da arvore DOM 
    
    pizzaItem.setAttribute('data-key', index); 
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e) => { 
      e.preventDefault()
      let key = e.target.closest('.pizza-item').getAttribute('data-key');

            c('.pizzaBig img').src = pizzaJson[key].img;
            c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
            c(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
            c(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
            
            c('.pizzaInfo--size.selected').classList.remove("selected")


            document.querySelectorAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
               if(sizeIndex == 2){
                 size.classList.add('selected');
               }
              size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
                
            });
            

            area.style.opacity = 0;
            area.style.display = "flex";
            setTimeout(() => {
              c('.pizzaWindowArea').style.opacity = 1;
             },200);
    });

  c('.pizza-area').append(pizzaItem);
  
      // Atribuindo o PizzaItem A Pizza-area

}) ;


// EVENTOS DO MODAL 

  

  function closeModal(){
      const modal = document.querySelector('.pizzaWindowArea');
        setTimeout(() => { 
          modal.style.opacity = 0;
          modal.style.display = 'none';
          modal.style.transition = '1s'
        }, 500);
      };

    document.querySelectorAll(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach((item) => {
      item.addEventListener('click', closeModal);
    });
    
  