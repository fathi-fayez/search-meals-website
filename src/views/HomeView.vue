<template>
  <div class="home">
    <div class="landing rounded-pill">
      <h1>wlcome to your refrence of food</h1>
      <p>
        here you can search about any kind of food and get all information about
        it
      </p>
      <button class="rounded-pill ms-3">
        <router-link class="btn main-btn" to="/SearchMeals"
          >Go To Search About Meals</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style>
.home {
  height: calc(100vh - 72px);
  background-image: url("/src/assets/pexels-ella-olsson-1640773.jpg");
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
}
.landing {
  position: absolute;
  padding: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  background-color: #a52a2a8f;
}
button {
  background-color: yellow;
  padding: 10px;
}
</style>
