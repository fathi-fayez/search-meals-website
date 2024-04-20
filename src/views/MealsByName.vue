<!-- eslint-disable -->
<template>
  <div class="page">
    <h1 class="text-center">Search Meals</h1>
    <div class="d-flex justify-content-center">
      <input
        v-model="keyword"
        class="w-50"
        type="text"
        placeholder="Search For Meals"
        @keyup.enter="searchMeals"
      />
      <button class="rounded ms-2" @click="searchMeals">Search</button>
    </div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="2"
          lg="3"
          xl="3"
          xxl="3"
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
        </v-col>
      </v-row>
    </v-container>

    <!-- <div
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
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          >View</router-link
        >
      </div>
    </div> -->
  </div>
</template>
<!-- eslint-disable -->
<script>
import router from "@/router";
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
  mounted() {
    this.keyword = this.$route.params.name;
    if (this.keyword) {
      searchMeals();
    }
  },
};
</script>
<!-- eslint-disable -->
<style>
.page {
  background-image: url("/src/assets/pexels-ella-olsson-1640773.jpg");
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vb - 76px);
}
h1 {
  padding: 20px;
}
button {
  padding: 10px;
  background-color: yellow;
}
</style>
