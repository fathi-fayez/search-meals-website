<!-- eslint-disable -->
<template>
  <div>
    <h1 class="text-center m-5">MealsByIngredients</h1>
    <div class="row d-f justify-content-center">
      <router-link
        :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        class="container text-center col-sm-3 col-md-4 col-lg-3 bg-white shadow p-3 m-4 rounded"
        v-for="meal of meals"
        :key="meal.idMeal"
      >
        <h3>{{ meal.strMeal }}</h3>
        <img class="img-fluid" :src="meal.strMealThumb" alt="meal.strMeal" />
      </router-link>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
// import axiosClient from "@/axiosClient";
import store from "../store";
export default {
  computed: {
    meals: () => store.state.mealsByIngredients,
  },
  mounted() {
    store.dispatch("searchMealsByIngredients", this.$route.params.ingredient);
  },
};
</script>
