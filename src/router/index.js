import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MealsByName",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MealsByName.vue"),
  },
  {
    path: "/byLetter/:letter?",
    name: "byLetter",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MealsByLetter.vue"),
  },
  {
    path: "/MealsByIngredients/:ingredient?",
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
