<template>
  <div>
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/blog">Blog</g-link>
      <g-link class="nav__link" to="/contact">Contact</g-link>
    </nav>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped></style>
