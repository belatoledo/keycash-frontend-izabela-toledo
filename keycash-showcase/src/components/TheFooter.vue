<template>
 <footer>
  <ul>
   <a href="https://www.facebook.com/KeyCashOficial">
    <Icon class="fb-icon" icon="akar-icons:facebook-fill" />
   </a>
   <a href="https://www.instagram.com/keycashoficial">
    <Icon class="ig-icon" icon="entypo-social:instagram-with-circle" />
   </a>
   <a href="https://www.linkedin.com/company/keycash-inc">
    <Icon class="in-icon" icon="entypo-social:linkedin-with-circle" />
   </a>
  </ul>
  <div class="separator"></div>
  <p>KeyCash © 2021 - Todos os direitos reservados.</p>
 </footer>
  
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
 name: "TheFooter",
 components: {
  Icon
 }
 
}
</script>

<style scooped>
ul {
 display: flex;
 flex-direction: row;
 justify-content: center;
}

ul a {
margin: 16px 48px;
 padding: 0 48px;
}

.fb-icon {
 width: 28px;
 height: 28px;
 color: #555555;
}

.fb-icon:hover {
 width: 30px;
 color: #f60094;
 background: #FFB300;
 border-radius: 16px;
}

.ig-icon {
 width: 28px;
 height: 28px;
 color: #555555;
}

.ig-icon:hover {
 width: 30px;
 color: #f60094;
 background: #FFB300;
 border-radius: 16px;
}

.in-icon {
 width: 28px;
 height: 28px;
 color: #555555;
}

.in-icon:hover {
 width: 30px;
 color: #f60094;
 background: #FFB300;
 border-radius: 16px;
}

.separator {
 display: block;
 margin: 0 auto;
 margin-bottom: 12px;
 width: 80%;
 height: 1px;
 background: rgba(0, 0, 0, .12);
}

footer {
 position: relative;
 top: 130px;
 color: #000000DE;
 background: #F6F6F6;
 padding: 20px 0;
 text-align: center;
 font-size: 0.8rem;
}
</style>