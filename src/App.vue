<template>
    <main>
        <!--heading-->
        <header>
            <img src="./assets/pinia-logo.svg" alt="pinia logo" />
            <h1>Pinia Mini Project</h1>
        </header>

        <!--task form-->

        <div class="new-task-form">
            <TaskForm />
        </div>

        <!--Filter-->

        <nav class="filter">
            <button @click="filter = 'all'">All tasks</button>
            <button @click="filter = 'favs'">Favorites tasks</button>
        </nav>

        <!--task form-->
        <div class="task-list" v-if="filter === 'all'">
            <p>All tasks you have {{ taskStore.allCount }}</p>
            <div v-for="task in taskStore.tasks">
                <TaskDetails :task="task"/>
            </div>
        </div>
        <div class="task-list"  v-if="filter === 'favs'">
            <p>Favorite tasks you have {{ taskStore.favCount }}</p>
            <div v-for="task in taskStore.favs">
                <TaskDetails :task="task"/>
            </div>
        </div>
    </main>
</template>

<script>
import {ref} from 'vue'
import TaskDetails from './components/TaskDetails.vue'
import {useTaskStore} from './stores/TaskStore'
import TaskForm from './components/TaskForm.vue'
export default {
    components: {
    TaskDetails,
    TaskForm
},
    setup() {
        const taskStore = useTaskStore()

        const filter = ref('all')

            return {
                taskStore,
                filter
            }
    }
}
</script>
