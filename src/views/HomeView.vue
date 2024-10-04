<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product';

const router = useRouter()
const productsStore = useProductStore()
function visualizar(id) {
  router.push(`/product/${id}`)
} 
</script>

<template>
  <h1>Listagem de produtos:</h1>
  <div class="inputs">
    <form @submit.prevent="productsStore.AddProduct(product.id)">
      <label for="">Nome </label>
      <input type="text" v-model="name">
      <label for="">Preço </label>
      <input type="number" v-model="price">
      <label for="">Quantidade </label>
      <input type="number" v-model="qty">
      <button type="submit">Adicionar produto</button>
    </form>
  </div>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productsStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td><button @click="visualizar(product.id)">Ver</button></td>
        <td><button @click="productsStore.deleteProductById(product.id)">Excluir</button></td>
      </tr>
    </tbody>
  </table>
</template>
