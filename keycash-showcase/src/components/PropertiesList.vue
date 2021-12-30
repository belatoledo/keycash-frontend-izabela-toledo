<template>
 <section class="properties-container">
  <div v-if="properties && properties.length > 0" class="properties">
   <div class="property" v-for="property in properties" :key="property.id">
    <router-link to="/">
     <h3 class="p-title">{{property.address.formattedAddress}}</h3>
     <img :src="property.images[0].src" :alt="property.images[0].titulo">
     <p class="p-price">{{property.price}}</p>
     <p class="p-bathroom">{{property.bathrooms}}</p>
     <p class="p-bedroom">{{property.bedrooms}}</p>
     <p class="p-parking">{{property.parkingSpaces}}</p>
     <p class="p-area">{{property.usableArea}}</p>
    </router-link>
   </div>
   <PropertiesPagination :propertiesTotal="propertiesTotal" :propertiesPages="propertiesPages" />
  </div>
  <div v-else-if="properties && properties.length === 0 ">
   <p class="no-result">Oops! 😢 <br> Essa busca não retornou resultados. Tente outro termo! </p>
  </div>
  <div v-else>
   <LoadingPage />
  </div>
 </section>
</template>

<script>
import PropertiesPagination from "@/components/PropertiesPagination.vue"
import { api } from "@/services.js";
import { sequency } from "@/generals.js"

export default {
 name: "PropertiesList",
 components: {
  PropertiesPagination
 },
 data() { 
  return {
   properties: null,
   propertiesPages: 5,
   propertiesTotal: 0
  };
 },
 computed: {
  url() {
   const query = sequency(this.$route.query);
   return `/properties?_limit=${this.propertiesPages}"${query}`;
  }
 },
 methods: {
  getProperties() {
   this.properties = null
   window.setTimeout(() => {
   api.get(this.url).then(response => {
    this.propertiesTotal = Number(response.headers["x-total-count"])
    console.log(response)
    this.properties = response.data
   });
   }, 1500)
  }
 },
 watch: {
  url() {
   this.getProperties();
  }
 },

 created() {
  this.getProperties();
 }
}
</script>

<style scoped>

.properties-container {
 position: relative;
 top: -200px;
 max-width: 1400px;
 margin: 0 auto;
}

.properties {
 margin: 30px;
 display: grid;
 grid-template-columns: repeat(5, 1fr);
 gap: 30px;
}

.property {
 box-shadow: 0 4px 8px rgba(90, 30, 65, 0.1);
 padding: 10px;
 background: #FFC107;
 border-radius: 8px;
 transition: all 0.2s;
}

.property:hover {
 box-shadow: 0 8px 16px rgba(90, 30, 65, 0.2);
 transform: scale(1.1);
 position: relative;
 z-index: 1;
}

.property img {
 border-radius: 4px;
 margin-bottom: 20px;
}

.p-title {
 margin-bottom: 10px;
 color: #fff;
}

.p-price {
 color: #000;
 font-weight: 700;
}

.no-result {
 text-align: center;
 font-size: 1.6rem;
 text-shadow: 0 2px 4px rgba(245, 0, 147, 0.185) ;
}
</style>