<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'
import { ref } from 'vue'

const router = useRouter()
const productsStore = useProductStore()

const name = ref('')
const price = ref(0)
const qty = ref(1)

function visualizar(id) {
  router.push(`/product/${id}`)
}

function addProduct() {
  if (name.value && price.value && qty.value) {
    productsStore.AddProduct({
      name: name.value,
      price: price.value,
      qty: qty.value
    })

    name.value = ''
    price.value = 0
    qty.value = 1
  }
}
</script>

<template>
  <h1>Listagem de produtos:</h1>
  <div class="inputs">
    <form @submit.prevent="addProduct">
      <table>
        <tr>
          <th><label for="">Nome </label></th>
          <th><label for="">Preço </label></th>
          <th><label for="">Quantidade </label></th>
        </tr>
        <tr>
          <td><input type="text" v-model="name" placeholder="Nome do produto" /></td>
          <td><input type="number" v-model="price" placeholder="Preço" /></td>
          <td><input type="number" v-model="qty" min="1" placeholder="Quantidade" /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td><button class="AddProduct" type="submit">Adicionar produto</button></td>
        </tr>
      </table>
    </form>
  </div>

  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Quantidade</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productsStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.qty }}</td>
        <td><button @click="visualizar(product.id)">Ver</button></td>
        <td><button @click="productsStore.deleteProductById(product.id)">Excluir</button></td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
.AddProduct {
  margin: 10px 0 20px;
  width: 100%;
}
button:hover{
  transition-timing-function: ease-in;
  transition-duration: 200ms;
  background-color: gray;
}
</style>
