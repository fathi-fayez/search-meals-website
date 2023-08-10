<!-- eslint-disable -->
<template>
  <div>
    <h1 class="text-center">MealsByIngredients</h1>
    <div class="p-5">
      <router-link
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient of ingredients"
        :key="ingredient.idIngredient"
        class="d-block bg-white rounded p-3 mb-3 shadow"
      >
        <h3>{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import axiosClient from "@/axiosClient";
export default {
  data() {
    return {
      ingredients: "",
    };
  },
  mounted() {
    axiosClient.get("list.php?i=list").then(({ data }) => {
      this.ingredients = data.meals;
    });
  },
};
</script>
