<template>
  <section>
    <div class="bg-showcase">
    </div>
    <h1 class="bg-title">Conheça nossa <br> vitrine de imóveis</h1>
    <p class="bg-slogan">O match certo com SEU IMÓVEL!</p>
    <p class="bg-info">Acompanhamos você durante toda a <br>jornada de compra  do seu imóvel.</p>

    
    <SearchProperties />
    <PropertiesList />
  </section>
</template>

<script>
import SearchProperties from "@/components/SearchProperties.vue"
import PropertiesList from "@/components/PropertiesList.vue"

export default {
  name: "Home",
  components: {
    SearchProperties,
    PropertiesList
  }
}
</script>

<style scooped>
.bg-showcase {
  background-image: url("../assets/yellow-door.png");
  background-position: 50%;
  background-size: cover;
  height: 650px;
  width: 100%;
}

.bg-title {
  position: relative;
  top: -470px;
  left: 280px;
  width: 440px;
  display: flex;
  padding: 12px 24px ;
  border-radius: 8px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
  color: #fff;
}

.bg-slogan {
  position: relative;
  top: -470px;
  left: 300px;
  width: 400px;
  padding: 8px;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
  background: #f60094ce;
  border-radius: 8px;
}

.bg-info {
  position: relative;
  top: -730px;
  left: 300px;
  width: 400px;
  padding: 8px;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  border-radius: 8px;
}
</style>
