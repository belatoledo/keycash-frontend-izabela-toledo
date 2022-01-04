<template>
 <section>
  <div v-if="property" class="property">
   <ul class="images" v-if="property.images">
    <li v-for="(image, index) in property.images" :key="index">
     <img :src="image.src" :alt="image.titulo">
     <img :src="property.images[0]" :alt="property.images[0].titulo">
     <img :src="property.images[1]" :alt="property.images[1].titulo">
     <img :src="property.images[2]" :alt="property.images[2].titulo">
     <img :src="property.images[3]" :alt="property.images[3].titulo">
     <img :src="property.images[4]" :alt="property.images[4].titulo">
     <img :src="property.images[5]" :alt="property.images[5].titulo">
    </li>
   </ul>
  </div>
  <LoadingPage v-else />
  <div class="info">
   <h3 class="p-title">{{property.address.formattedAddress}}</h3>
   <img :src="property.images[0].src" :alt="property.images[0].titulo">
   <p class="p-price">{{property.price}}</p>
   <p class="p-bathroom">{{property.bathrooms}}</p>
   <p class="p-bedroom">{{property.bedrooms}}</p>
   <p class="p-parking">{{property.parkingSpaces}}</p>
   <p class="p-area">{{property.usableArea}}</p>
  </div>
 </section>
</template>

<script>
import { api } from "@/services.js"

export default {
 name: "Properties",
 props: ["id"],
 data() {
  return {
   property: null
  };
 },
 methods: {
  getProperty() {
   api.get(`/property/${this.id}`).then(response => {
    this.property = response.data
   });
  }
 },
 created() {
  this.getProperty();
 }
};
</script>

<style scoped>
.property {
 display: grid;
 grid-auto-columns: 1fr 1fr;
 gap: 30px;
 max-width: 900px;
 padding: 60px 20px;
 margin: 0 auto;
}

.p-title {
 color: #F60094;

}
.p-price {
 color: #000;
 font-weight: 800;
 font-size: 1.3rem;
 margin-bottom: 40px;
}
</style>