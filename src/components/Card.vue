<template>
    <div
        class="p-3 shadow-2 rounded-lg bg-black bg-opacity-70 text-gray-800 h-auto max-w-md flex flex-col hover:opacity-60">
        <h1 class="text-2xl font-bold">{{ title }}</h1>
        <div class="flex justify-between text-gray-500 pt-1">
            <h2 class=" text-base font-light">{{ category }}</h2>
            <span class="flex items-center">
                <i class="pi pi-clock mr-2"></i>
                <p>{{ readTime }} min</p>
            </span>
        </div>
        <p class="line-height-3 mt-3 mb-7 text-gray-900 font-medium text-lg ">{{ description }}</p>
        <div class="mb-5 flex justify-center items-center">
            <span v-for="tag in tags" :key="tag.svg" :class="`w-2 mx-3`">
                <SvgLoader :name="tag.svg" class="w-full h-auto inline-block" />
            </span>
        </div>
        <img :src="image" alt="Image" class="block w-full mt-auto rounded-lg" />
    </div>

</template>

<script>
import SvgLoader from "./SvgLoader.vue";

export default {
    name: 'Card',
    props: {
        title: String,
        category: String,
        readTime: Number,
        description: String,
        tags: Array,
        image: String,
    },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>