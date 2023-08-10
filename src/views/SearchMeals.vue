<!-- eslint-disable -->
<template>
  <div>
    <h1 class="text-center m-4">Search Meals</h1>
    <div class="d-flex justify-content-center">
      <input
        v-model="keyword"
        class="w-50"
        type="text"
        name=""
        id=""
        placeholder="Search For Meals"
        @keyup.enter="searchMeals"
      />
      <button class="rounded ms-2" @click="searchMeals">Search</button>
    </div>
    <div>
      <div class="row justify-content-center align-items-center">
        <div
          class="container text-center col-sm-6 col-md-2 bg-white shadow p-3 m-4 rounded hover:scale-105 transition-all"
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
  </div>
</template>
<!-- eslint-disable -->
<script>
// import Store from "vuex";
import store from "../store";
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchMeals() {
      if (this.keyword) {
        store.dispatch("searchMeals", this.keyword);
      } else {
        store.commit("setSearchedMeals", []);
      }
    },
  },
  computed: {
    meals: () => store.state.searchedMeals,
  },
};
</script>
