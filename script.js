const c = (el) => { return document.querySelector(el)};
const cs = (el) => { return document.querySelector(el)}

pizzaJson.map((item, index) => {
  let pizzaItem = c(".models .pizza-item").cloneNode(true)
  //preencher as informaçoes em pizza item

  c('.pizza-area').append( pizzaItem );
})