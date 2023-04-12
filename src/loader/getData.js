import { getStoredCart } from '../utils/fakeDB'

export const jobData = async () => {
  const productsData = await fetch('/jobs.json')
  const products = await productsData.json()

  let initialCart = []
  const savedCart = getStoredCart()
  
  for (const id in savedCart) {
    const foundProduct = products.data.find(product => product.id == id)
    if (foundProduct) {
      const quantity = savedCart[id]
      foundProduct.quantity = quantity
      initialCart.push(foundProduct)
    }
  }

  return { products, initialCart }
}
