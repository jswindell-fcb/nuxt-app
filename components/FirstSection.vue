<template>
    <div class="first-section">
        <span>this is the testing label</span>
        <div class="first-child-section">
            <button>This does nothing!</button>
        </div>
    </div>
</template>

<style scoped>
.first-section {
    border-color: red;
    border-style: solid;

    div {
        border-color: blue;
        border-style: solid;

        button {
            background: green;
        }
    }
}
</style>