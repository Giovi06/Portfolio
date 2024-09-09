<template>
    <div class="flex justify-center items-center py-2">
        <!-- Image to click -->
        <img @click="showModal = true" :src="src" :alt="alt"
            class=" cursor-pointer object-contain rounded-lg shadow-lg" />

        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            @click="showModal = false">
            <div class="bg-black
             p-1 rounded-lg max-w-screen-md max-h-fit h-auto w-full">
                <button @click="showModal = false"
                    class="absolute pi pi-cross text-3xl left-0 bottom-5 align-middle w-full text-gray-500">
                    &times;
                </button>
                <img @click="showModal = false" :src="src" :alt="alt" :class="[imgClass, '!important']"
                    class="rounded-lg object-contain w-full h-auto" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        imgClass: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            showModal: false
        };
    }
};
</script>

<style>
/* Optional: You can add more styles here if needed */
</style>