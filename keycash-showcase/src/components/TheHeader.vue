<template>
  <header>
   <nav>
    <router-link to="/" class="logo">
     <img src="@/assets/keycash_logo_header.svg" alt="Keycash" width="300px">
    </router-link>
    <ul class="nav-options">
     <a href="https://keycash.io/">Página Inicial</a> 
     <a href="/">Imóveis</a>
     <a href="https://blog.keycash.io/">Blog</a>
     <a href="https://keycash.io/seja-parceiro">Seja parceiro</a>
     <a href="https://keycash.io/credito-garantia-imobiliaria/perguntas-frequentes">Ajuda</a>
     </ul>
   </nav>
  </header>
</template>

<script>
export default {
 name: "TheHeader"
}
</script>

<style scoped>
nav {
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 12px 24px;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 z-index: 999;
}

.nav-options {
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-right: 355px;
}

.nav-options a {
 padding: 0;
 margin: 0 16px;
 white-space: nowrap;
}

.nav-options a:hover {
 color: #FF0094;
 font-weight: 700;
}

.logo {
 margin-left: 355px;
 margin-right: 150px;
 padding: 0;
}

.logo img {
 width: 110px;
 height: 60px;
}
</style>