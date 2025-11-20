import { createRouter } from "vue-router";

import { createWebHistory } from "vue-router";
import PokemonView from "./pages/PokemonView.vue";
import HomeView from "./pages/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/pokemon", component: PokemonView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
