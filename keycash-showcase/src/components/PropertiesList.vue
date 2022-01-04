<template>
 <section class="properties-container">
  <transition mode="out-in">
   <div v-if="properties && properties.length > 0" class="properties" key="properties">
    <div class="property" v-for="(property, index) in properties" v-show="property.publish === true" :key="index">
     <router-link :to="{name: 'property', params: {id: property.id}}">
      <Icon class="heart" icon="ci:heart-outline" color="#f60094" width="26" height="26" />
      <img :src="property.images[0]" :alt="property.images[0].titulo">
      <p class="p-price">{{property.price | filterPrice}}</p>
      <h3 class="p-title">{{property.address.formattedAddress}}</h3>
      <p class="p-bathroom">Banheiros: {{property.bathrooms}}</p>
      <p class="p-bedroom">Quartos: {{property.bedrooms}}</p>
      <p class="p-park">Vagas: {{property.parkingSpaces}}</p>
      <p class="p-area">Área Útil: {{property.usableArea}}m²</p>
     </router-link>
    </div>
    <PropertiesPagination :propertiesTotal="propertiesTotal" :propertiesPages="propertiesPages"/>
   </div>
   <div v-else-if="properties && properties.length === 0" key="no-result">
    <p class="no-result">Oops! 😢 <br> Essa busca não retornou resultados. Tente outro termo! </p>
   </div>
   <div v-else key="loading">
    <LoadingPage />
   </div>
  </transition>
 </section>
</template>

<script>
import PropertiesPagination from "@/components/PropertiesPagination.vue";
import { api } from "@/services.js";
import { sequency } from "@/generals.js";
import { Icon } from '@iconify/vue2';


export default {
 name: "PropertiesList",
 components: {
  PropertiesPagination,
  Icon
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
 top: -250px;
 max-width: 1400px;
 margin: 0 auto;
 padding-top: 20px;
}

.properties {
 margin: 0 auto;
 display: grid;
 grid-template-columns: repeat(5, 1fr);
 gap: 30px;
}

.property {
 max-width: 380px;
 padding: 20px;
 background: #FFC107;
 border-radius: 8px;
 box-shadow: 0 4px 8px rgba(90, 30, 65, 0.1);
 transition: all 0.2s;
}

.property:hover {
 box-shadow: 0 8px 16px rgba(90, 30, 65, 0.2);
 transform: scale(1.1);
 position: relative;
 z-index: 1;
}

.heart {
float: right;
margin-bottom: 10px;
}

.property img {
 max-width: 250px;
 height: 170px;
 border: 1px solid #fff;
 border-radius: 4px;
 margin: 0 auto 10px auto;
}

.p-title {
 margin-top: 5px;
 margin-bottom: 10px;
 font-size: 1.2rem ;
 color: #FFF;
}

.p-price {
 color: #000;
 font-size: 1.5rem;
 font-weight: 700;
}

.p-bathroom,
.p-bedroom,
.p-park,
.p-area {
 font-weight: 600;
 color: #F60094;
}

.no-result {
 text-align: center;
 font-size: 1.6rem;
 text-shadow: 0 2px 4px rgba(245, 0, 147, 0.185) ;
}

@media screen and (max-width: 425px) {
 .properties {
 width: 100%;
 margin: 0 auto;
 grid-template-columns: repeat(1, 1fr);
 gap: 10px;
}

.property {
 max-width: 100%;
 margin: 0 30px;
 padding: 20px;
 background: #FFC107;
 border-radius: 8px;
 box-shadow: 0 4px 8px rgba(90, 30, 65, 0.1);
 transition: all 0.2s;
}
}
</style>