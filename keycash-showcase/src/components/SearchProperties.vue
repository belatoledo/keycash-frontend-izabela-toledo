<template>
<form>
 <p class="info">Você diz o que procura, e o resto é com a gente 😉</p>
 <div class="search-bar"> 
  <input name="search" id="search" type="text" placeholder="Buscar imóvel..." v-model="search">
  <input type="submit" id="searchButton" value="Buscar" @click.prevent="searchProperties">
 </div>
</form>
 
</template>

<script>
export default {
 name: "SearchProperties",
 data() {
  return {
   search: ""
  };
 },
 methods: {
  searchProperties()  {
   this.$router.push({ query: {q: this.search} })
  }
 },
}
</script>

<style scoped>
 form {
  position: relative;
  bottom: 230px;
 }
 .info {
  position: relative;
  top: -35px;
  margin-bottom: 10px;
  width: 100%;
  padding: 20px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  background: #f60094CE;
  color: #fbff00;
 }

 .search-bar {
  max-width: 600px;
  position: relative;
  margin: -20px auto 60px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
 }

 #search {
  margin: 10px;
  width: 100%;
  border: 3px solid #F60094;
  box-shadow: 0 4px 8px rgba(90, 30, 65, 0.1);
 }

#search:focus {
 border: 3px solid transparent;
 outline: 2px solid #FFC107;
 box-shadow: 0 8px 16px  rgba(65, 30, 49, 0.2);
}

#searchButton {
 position: absolute;
 top: 16px;
 right: 10px;
 width: 62px;
 height: 62px;
 background: url("../assets/search_button.svg") no-repeat center center;
 text-indent: -150px;
 border: none;
 cursor: pointer;
}

</style>