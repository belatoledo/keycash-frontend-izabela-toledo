<template>
  <ul v-if="totalPages > 1">
   <li v-for="page in pages" :key="page">
    <router-link :to="{query: query(page)}">{{page}}</router-link>
   </li>  
  </ul>
</template>

<script>
export default {
 props: {
  propertiesPages: {
   type: Number,
   default: 1
  },
  propertiesTotal: {
   type: Number,
   default: 1
  }
 },
 methods: {
  query(page) {
   return {
    ...this.$route.query,
    _page: page 
   };
  }
 },
 computed: {
  pages() {
   const currentPage = Number(this.$route.query._page);
   const range = 5;
   const rangeOffset = Math.ceil(range / 2)
   const total = this.totalPages;
   const pagesArray = [];

   for(let i = 1; i <= total; i++ ) {
    pagesArray.push(i)
   }

   pagesArray.splice(0, currentPage - rangeOffset);
   //pagesArray.splice(0, range - total);
   return pagesArray;
  },
  totalPages() {
   const total = this.propertiesTotal / this.propertiesPages
   return total !== Infinity ? Math.ceil(total) : 0;
  }
 }
};
</script>

<style scoped>
ul {
 display: flex;
 justify-content: flex-end;
 grid-column: 1 / -1;
}

li {
 display: inline-block;
}

li a {
 margin: 4px;
 padding: 2px 8px;
 border-radius: 4px;
}

li a.router-link-exact-active,
li a:hover {
 background: #F60094;
 color: #fff;
 font-weight: 600;
}

@media screen and (max-width: 425px) {
ul {
 display: flex;
 justify-content: center;
 grid-column: 1 / -1;
}
}
</style>