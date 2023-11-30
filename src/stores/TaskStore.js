import { defineStore } from 'pinia'

export const useTaskStore =  defineStore('task', {
    state: () => ({
        tasks: [
            { id: 1, name: 'play Minecraft', isfav: true },
            { id: 2, name: 'play Valorant', isfav: false },
        ],
    })
})