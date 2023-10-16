const categoryButtons = document.querySelectorAll('.selecciocategoria');
const categoryIndicator = document.querySelector('.category_indicator');

function filterProducts(category) {
  const products = document.querySelectorAll('.product-item');
  products.forEach(product => {
    if (category === 'move-all' || product.getAttribute('category') === category) {
      product.style.display = 'flex';
      console.log("Variable Categoria: ", category)
      console.log("Opció n1")
    } else {
      console.log("--------------------")
      console.log("aqui començara if de move-pizzes")
      console.log("Variable Categoria: ", category)
      console.log("ATENCIÓ!")
      console.log(product.getAttribute('category'))
      console.log("Ha de ser igual a: ")
      console.log(category)
      console.log("------------------")
      if (category === 'move-pizzes' && product.getAttribute('category') === category) {
        console.log("Categoria extreta de html: ", product.getAttribute('category'))
        product.style.display = 'flex';
        console.log("Variable Categoria: ", category)
        console.log("Opció n3")
      } else {
        if (category === 'move-begudes' && product.getAttribute('category') === category) {
          console.log("Categoria extreta de html: ", product.getAttribute('category'))
          product.style.display = 'flex';
          console.log("Variable Categoria: ", category)
          console.log("Opció n3")
        } else {
          product.style.display = 'none';
          console.log("Variable Categoria: ", category)
          console.log("Opció n4")
        }
      }
    }
  });
}


categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.category;
    categoryIndicator.className = 'category_indicator ' + category;
    filterProducts(category);
    console.log(category)
  });
});
