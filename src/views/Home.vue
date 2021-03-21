<template>
  <div>
    <Shoppingcart />
  </div>
</template>

<script>
// @ is an alias to /src
import Shoppingcart from "@/components/Shoppingcart.vue";

export default {
  name: "Home",
  components: {
    Shoppingcart,
  },
};
</script>
