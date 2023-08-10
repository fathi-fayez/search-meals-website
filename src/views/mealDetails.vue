<!-- eslint-disable -->
<template>
  <div class="text-center">
    <h1 class="m-4">{{ meal.strMeal }}</h1>
    <img class="img-fluid" :src="meal.strMealThumb" :alt="meal.strMeal" />
    <ul
      class="h5 d-flex justify-content-around bg-primary mt-3 w-50 m-auto list-unstyled"
    >
      <li>Category: {{ meal.strCategory }}</li>
      <li>Country: {{ meal.strArea }}</li>
      <li>Tags: {{ meal.strTags }}</li>
    </ul>
    <h4 class="text-center">Instructions:</h4>
    <p class="container h3">{{ meal.strInstructions }}</p>
  </div>
</template>
<!-- eslint-disable -->
<script>
import axiosClient from "@/axiosClient";
export default {
  data() {
    return {
      meal: "",
    };
  },
  mounted() {
    axiosClient
      .get(`/lookup.php?i=${this.$route.params.id}`)
      .then(({ data }) => {
        this.meal = data.meals[0];
      });
  },
};
</script>
