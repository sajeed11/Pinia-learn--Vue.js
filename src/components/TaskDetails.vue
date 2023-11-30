<template>
    <div class="task">
        <h3>{{ task.name }}</h3>
        <div class="iaons">
            <DeleteIcon/>
            <FavoriteIcon/>
        </div>
    </div>
</template>

<script setup>
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
const props = defineProps({
    task: {
        type: Object,
        required: true
    }
})
</script>