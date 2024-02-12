<script setup>
const last = ref(["one", "two", "", "three"]);

const { name, setName } = useFoo();

function handleClick() {
    console.log("button clicked");

    last.value.push(new Date().toString());

    setName(new Date().toString());
}

console.log("mounted - home")
</script>

<template>
    <h1>this is the main page</h1>
    <button @click="handleClick">Click Me!</button>
    <ul>
        <li v-for="n in last">{{ n }}</li>
    </ul>
    <FirstSection />
    <h3>{{ name }}</h3>
</template>
