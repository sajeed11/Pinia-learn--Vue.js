import { defineStore } from 'pinia'

// The url is just for the example, you would use a service for that
const URL = 'http://localhost:3000/tasks'

export const useTaskStore =  defineStore('task', {
    state: () => ({
        tasks: [],
        loading: false
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isfav);
        },
        allCount() {
            return this.tasks.length;
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isfav ? p + 1 : p;
            }, 0);
        }
    },
    actions: {
        async getTasks() {
            this.loading = true

            const res = await fetch(URL)
            const data = await res.json();

            this.tasks = data;
            this.loading = false
        },
        async addTask(task) {
            this.tasks.push(task);

            const res = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            });

            if (res.error) {
                console.log(res.error);
            }
        },
        async removeTask(id) {
            this.tasks = this.tasks.filter(t => t.id !== id);

            const res = await fetch(URL + id, {
                method: "DELETE"
            });

            if (res.error) {
                console.log(res.error);
            }
        },
        async toggleFav(id) {
            const task = this.tasks.find(t => t.id === id);
            task.isfav = !task.isfav;

            const res = await fetch(URL + id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ isfav: task.isfav })
            });

            if (res.error) {
                console.log(res.error);
            }
        }
    }
})