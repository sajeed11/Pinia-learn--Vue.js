<template>
    <div class="task">
        <h3>{{ task.name }}</h3>
        <div class="icons">
            <i class="material-icons" @click="handleDelete">delete</i>
            <i class="material-icons" :class="{active: task.isfav}" @click="handleToggleFav">favorite</i>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore'
const props = defineProps({
    task: {
        type: Object,
        required: true
    }
})
const taskStore = useTaskStore()

const handleDelete = () => {
    taskStore.removeTask(props.task.id)
}

const handleToggleFav = () => {
    taskStore.toggleFav(props.task.id)
}
</script>