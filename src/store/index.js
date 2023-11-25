import { createStore } from "vuex";
import axiosClient from "@/axiosClient";

export default createStore({
  state: {
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
  },

  getters: {},
  mutations: {
    setSearchedMeals(state, meals) {
      state.searchedMeals = meals;
    },
    setMealsByLetter(state, meals) {
      state.mealsByLetter = meals;
    },
    setMealsByIngredients(state, meals) {
      state.mealsByIngredients = meals;
    },
  },
  actions: {
    searchMeals({ commit }, keyword) {
      axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        commit("setSearchedMeals", data.meals);
      });
    },
    searchMealsByLetter({ commit }, letter) {
      axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        commit("setMealsByLetter", data.meals);
      });
    },
    searchMealsByIngredients({ commit }, ing) {
      axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
        commit("setMealsByIngredients", data.meals);
      });
    },
  },
  modules: {},
});
