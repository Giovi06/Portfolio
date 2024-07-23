<template>
    <div class="p-3 shadow-2 rounded-lg bg-black text-gray-800 h-auto max-w-md flex flex-col    ">
        <div class="flex justify-between text-gray-500">
            <span>{{ category }}</span>
            <span class="flex items-center">
                <i class="pi pi-clock mr-2"></i>
                <span>{{ readTime }} min</span>
            </span>
        </div>
        <p class="line-height-3 mt-3 mb-7 text-gray-900 font-medium text-xl ">{{ description }}</p>
        <div class="mb-5">
            <span v-for="tag in tags" :key="tag.text"
                :class="`${tag.bgColor} ${tag.textColor} font-medium py-1 px-3 mr-2`">
                {{ tag.text }}
            </span>
        </div>
        <img :src="image" alt="Image" class="block w-full mt-auto rounded-lg" />
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
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