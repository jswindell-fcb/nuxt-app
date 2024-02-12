<script>
console.log("here we go!")
</script>

<template>
  <header>
    <div>LOGO</div>
  </header>
  <main>
    <NuxtPage />
  </main>
  <footer>
    <NuxtLink to="/page1">Page 1</NuxtLink>
  </footer>
</template>

<style scoped>
header,
footer {
  padding: 2rem;
}
</style>