var product = !{ JSON.stringify(product) }
var addToCartButton = document.getElementById('addToCart')

var addToCartCount = addToCartButton.getElementsByClassName('btn-count')[0]

var quantity = window.getQuantityForProductSlug(product.slug)

if (quantity > 0) {
  addToCartCount.innerText = quantity
  addToCartCount.style.display = 'block'
}

//- addToCartButton.innerText = "Add to Cart (" + quantity + ")"

addToCartButton.onmousedown = function(event) {
  var quantity = addToCart(product)

  addToCartCount.innerText = quantity
  addToCartCount.style.display = 'block'

  event.preventDefault()
  return false
}
