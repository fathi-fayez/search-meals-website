import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/SearchMeals",
    name: "SearchMeals",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchMeals.vue"),
  },
  {
    path: "/byLetter/:letter?",
    name: "byLetter",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MealsByLetter.vue"),
  },
  {
    path: "/MealsByIngredients/:ingredient",
    name: "byIngredient",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MealsByIngredients.vue"),
  },
  {
    path: "/ingredients",
    name: "ingredients",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ingredients.vue"),
  },
  {
    path: "/meal/:id",
    name: "mealDetails",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/mealDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
