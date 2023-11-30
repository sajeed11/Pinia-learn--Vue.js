<template>
    <main>
        <!--heading-->
        <header>
            <img src="./assets/pinia-logo.svg" alt="pinia logo" />
            <h1>Pinia Mini Project</h1>
        </header>

        <!--task form-->
        <div class="task-list">
            <div v-for="task in taskStore.tasks">
                <TasckDetails :task="task"/>
            </div>
        </div>
    </main>
</template>

<script>
import TasckDetails from './components/TaskDetails.vue'
import {useTaskStore} from './stores/TaskStore'
export default {
    components: {
        TasckDetails
    },
    setup() {
            const taskStore = useTaskStore()

            return {
                taskStore
            }
        }
    }
</script>
