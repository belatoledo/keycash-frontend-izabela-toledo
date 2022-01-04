import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import LoadingPage from "@/components/LoadingPage.vue"

Vue.config.productionTip = false

Vue.component("LoadingPage", LoadingPage)

Vue.filter("filterPrice", valor => {
 valor = Number(valor);
 if(!isNaN(valor)) {
   return valor.toLocaleString("pt-BR", {
     style: "currency",
     currency: "BRL"
   });
 }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
