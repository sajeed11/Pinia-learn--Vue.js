<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="I need to..." v-model="newTask">
        <button>Add Task</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore'
    export default {
    setup() {
            const newTask = ref('')
            const taskStore = useTaskStore()

            const handleSubmit = () => {
                if (newTask.value.length > 0) {
                    taskStore.addTask({
                        name: newTask.value,
                        isFav: false,
                        id: Math.floor(Math.random() * 100000)
                    })
                    newTask.value = ''
                }
            }

            return {
                newTask,
                handleSubmit
            }
        }
    }
</script>