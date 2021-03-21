<template>
  <Shoppingcart />
</template>

<script>
import { onMounted } from 'vue';
import Shoppingcart from "./components/Shoppingcart";
import { useStore } from 'vuex';
import {db} from './firebase'

export default {
  name: "App",
  components: {
    Shoppingcart,
  },
  setup(){
    const store = useStore()
    onMounted(()=>{
       db.collection("cart").orderBy('timestamp')
    .onSnapshot((querySnapshot) => {
        store.dispatch('cleanStore')
        querySnapshot.forEach((doc) => {
           
            store.dispatch('addAllProducts',doc.data())
        });
        
    });
    })
    return {

    }
  }
};
</script>

<style></style>
