<template>
    <div class="task">
        <h3>{{ task.name }}</h3>
        <div class="icons">
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    task: {
        type: Object,
        required: true
    }
})
</script>