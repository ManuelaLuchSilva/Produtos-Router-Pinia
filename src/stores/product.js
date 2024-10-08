import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Liquidificador', price: 79.9, qty: 100 },
    { id: 2, name: 'Batedeira', price: 129.9, qty: 110 },
    { id: 3, name: 'Chuveiro elétrico', price: 99.9, qty: 130 },
    { id: 4, name: 'Sanduicheira', price: 89.9, qty: 90 },
    { id: 5, name: 'Mixer', price: 69.9, qty: 175 },
    { id: 6, name: 'Forno elétrico', price: 459.9, qty: 40 },
    { id: 7, name: 'Panela de pressão', price: 75.9, qty: 170 }
  ])
  const lastId = ref(7)

  function deleteProductById(id) {
    const position = products.value.findIndex((product) => product.id === id);
    if (position !== -1) {
      products.value.splice(position, 1);
    }
  }

  function AddProduct(addProduct) {
    lastId.value++;
    products.value.push({
      id: lastId.value,
      name: addProduct.name,
      price: addProduct.price,
      qty: addProduct.qty
    });
  }

  function getProductById(id) {
    // for (const product of products.value) {
    //   if (product.id == id) {
    //     return product
    //   }
    // }
    return products.value.find((product) => product.id == id)
  }

  // const getProductById = (id) => products.value.find((product) => product.id == id)

  return { products, getProductById, deleteProductById, AddProduct }
})
