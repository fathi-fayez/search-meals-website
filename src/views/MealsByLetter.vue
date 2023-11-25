<!-- eslint-disable -->
<template>
  <div>
    <h1 class="text-center">Meals By Letter</h1>
    <div class="text-center m-4">
      <router-link
        class="p-2 text-white text-decoration-none bg-primary rounded-pill m-1"
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
        v-for="letter of letters"
        >{{ letter }}</router-link
      >
    </div>

    <div class="row justify-content-center align-items-center">
      <div
        class="container text-center col-sm-6 col-md-2 bg-white shadow p-3 m-4 rounded"
        v-for="meal of meals"
        :key="meal.idMeal"
      >
        <img class="img-fluid" :src="meal.strMealThumb" :alt="meal.strMeal" />
        <h3>{{ meal.strMeal }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          deleniti laudantium at vel quia saepe beatae maxime.
        </p>
        <div class="d-flex justify-content-between">
          <a :href="meal.strYoutube" target="_blank">YouTube</a>
          <router-link
            :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
            >View</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import store from "../store";
export default {
  data() {
    return {
      letters: "ABCDEFGHIJKLMNOPQRSTIVWXYZ".split(""),
    };
  },
  computed: {
    meals: () => store.state.mealsByLetter,
  },

  mounted() {
    store.dispatch("searchMealsByLetter", this.$route.params.letter);
  },
  watch: {
    $route: function () {
      store.dispatch("searchMealsByLetter", this.$route.params.letter);
    },
  },
};
</script>
