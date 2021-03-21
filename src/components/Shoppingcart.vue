<template>
  <div class="container">
    <div class="row mt-2 justify-content-center">
      <div class="col-2" v-for="product in products" :key="product.id">
        <div class="card" style="width: 10rem;">
          <img :src="product.url" class="card-img-top" />
          <div class="card-body">
            <h6 class="card-title">
              {{ product.name }} - $ {{ product.price }}
            </h6>
            <button
              :disabled="product.cart"
              @click="addProduct(product)"
              href="#"
              class="btn  btn-block"
              :class="{
                'btn-primary': !product.cart,
                'btn-success': product.cart,
              }"
            >
              {{ !product.cart ? "Add" : "Added" }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <table class="table  text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in cart" :key="product.id">
            <th scope="row">{{ index + 1 }}</th>
            <th scope="row">
              <img :src="product.url" style="width: 4rem;" />
            </th>
            <td>{{ product.name }}</td>
            <td>
              {{ product.price }}
            </td>
            <td>
              <button
              :disabled='product.quantity < 2'
                @click="decreaseQ(product.id)"
                class="btn btn-primary btn-sm"
              >
                -
              </button>
              {{ product.quantity }}
              <button
                @click="increaseQ(product.id)"
                class="btn btn-primary btn-sm"
                size="sm"
              >
                +
              </button>
            </td>

            <td>
              <button @click="removeProduct(product.id)" class="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <div class="col text-center">
        <h4>TOTAL: {{ total }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Shoppingcart",
  setup() {
    const store = useStore();
    function addProduct(p) {
      let product = { ...p };
      console.log('click')
      product.timestamp=new Date().getTime()
      store.dispatch("addProduct", product);
    }
    function removeProduct(id) {
      store.dispatch("removeProduct", id);
    }
    function increaseQ(id) {
      store.dispatch("increase", id);
    }
    function decreaseQ(id) {
      store.dispatch("decrease", id);
    }

    return {
      addProduct,
      increaseQ,
      removeProduct,
      decreaseQ,
      cart: computed(() => store.getters.getCart),
      products: computed(() => store.getters.getProducts),
      total: computed(() => store.getters.getTotal),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
