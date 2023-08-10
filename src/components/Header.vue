<!-- eslint-disable -->
<template>
  <nav class="navbar navbar-expand-lg p-3">
    <div class="container-fluid">
      <router-link to="/">
        <img
          src="../assets/svg-formatter-beautifier.png"
          height="60"
          alt="Logo"
          loading="lazy"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link class="nav-link" aria-current="page" to="/"
            >Home</router-link
          >
          <router-link class="nav-link" to="/SearchMeals"
            >SearchMeals</router-link
          >
          <router-link class="nav-link" to="/byLetter"
            >Meals By Letter</router-link
          >
          <router-link class="nav-link" to="/ingredients"
            >Meals By Ingredients</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: "navbar",
};
</script>
<!-- eslint-disable -->
<style>
nav {
  background-color: rgb(247, 55, 2);
}
nav .nav-link:hover {
  background-color: rgb(131, 131, 191);
  cursor: pointer;
}
</style>
