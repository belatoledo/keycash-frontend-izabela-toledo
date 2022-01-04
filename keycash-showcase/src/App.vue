<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <router-view/>
      <!--<Home />-->
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
//import Home from "@/views/Home.vue"
import TheFooter from "@/components/TheFooter.vue"

export default {
  components: {
    TheHeader,
    //Home,
    TheFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;900&family=Roboto:wght@300;400;500;700;900&display=swap');

* {
 box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
 margin: 0;
 padding: 0;
}

ul {
 list-style: none;
}

body {
 font-family: 'Nunito Sans', sans-serif;
 background: #fff;
}

a {
 color: #4C4C4C;
 text-decoration: none;
}

img {
 max-width: 100%;
 display: block;
}

#app  {
 min-height: 100vh;
 display: flex;
 flex-direction: column;
}

#main {
  flex: 1;
}

.btn {
 display: block;
 padding: 10px 30px;
 color: #fff;
 background: #FF0094;
 border: none;
 border-radius: 8px;
 text-align: center;
 font-family: 'Nunito Sans', sans-serif;
 font-size: 1rem;
 box-shadow: 0 4px 8px rgba(90, 30, 65, 0.2);
 cursor: pointer;
 transition: 0.3s;
}

.btn:hover {
 background: #ff0095de;
}

input, 
textarea {
 margin-bottom: 15px;
 padding: 20px;
 border-radius: 8px;
 font-family: 'Nunito-Sans', sans-serif;
 font-size: 1.6rem;
 color: #4C4C4C;
 transition: all 0.3s;
 outline: none;
 width: 100%;
}

.v-enter,
.v-leave-to {
 opacity: 0;
}
.v-enter:active,
.v-leave-to:active {
 transition: all 0.3s;
}

.v-enter {
 transform: translate3d(0, -20px, 0);
}

.v-leave-to {
 transform: translate3d(0, -20px, 0);
}
</style>
