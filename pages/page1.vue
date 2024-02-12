<script setup>
console.log("mounted - page 1");

const { name } = useFoo();
</script>

<template>
    <h1>this is page 1</h1>
    <span>{{ name }}</span>
</template>