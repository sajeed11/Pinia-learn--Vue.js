import { defineStore } from 'pinia'

export const useTaskStore =  defineStore('task', {
    state: () => ({
        tasks: [
            { id: 1, name: 'play Minecraft', isfav: true },
            { id: 2, name: 'play Valorant', isfav: false },
        ],
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
    }
})