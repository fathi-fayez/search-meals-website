import { createStore } from "vuex";
import axiosClient from "@/axiosClient";

export default createStore({
  state: {
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
    // names: [
    //   { name: "mohamed", age: "28", salary: 6000 },
    //   { name: "fathi", age: "22", salary: 4000 },
    //   { name: "kmal", age: "2", salary: 5000 },
    // ],
  },

  getters: {
    // editName: (state) => {
    //   let infoPerson = state.names.map((x) => {
    //     return {
    //       name: `"name:" ${x.name}`,
    //       age: `age: ${x.age}`,
    //       salary: `salary: ${x.salary}`,
    //       // age: `age: ${x.age}`,
    //       // salary: `salary: ${x.salary}`,
    //     };
    //   });
    //   return infoPerson;
    // },
  },
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
    // increaseSalary: (state) => {
    //   return state.names.forEach((x) => {
    //     x.salary += 200;
    //   });
    // },
  },
  actions: {
    searchMeals({ commit }, keyword) {
      axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        commit("setSearchedMeals", data.meals);
      });
    },
    searchMealsByLetter({ commit }, letter) {
      axiosClient.get(`search.php?s=${letter}`).then(({ data }) => {
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
