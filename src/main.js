import DefaultLayout from '~/layouts/Default.vue'

// import "~/assets/scss/reset.scss";
import "~/assets/styles/scss/style.scss";
import "~/assets/styles/scss/_normalize.scss";
import "~/assets/js/main.js";

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
}
