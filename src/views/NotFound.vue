<template>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8 mt-10">
        <div style="background: radial-gradient(50% 109137.91% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%);"
            class="text-center">
            <span class="text-pink-500 font-bold text-8xl inline-block px-3">404</span>
        </div>
        <div class="mt-8 mb-5 font-bold text-6xl text-900 text-center">Page Not Found</div>
        <p class="text-700 text-3xl mt-0 mb-6 text-center">Sorry, we couldn't find the page.</p>
        <div class="text-center">
            <Button class="p-button-text mr-2" label="Go Back" icon="pi pi-arrow-left" @click="goBack" />
            <router-link :to="{ name: 'home' }">
                <Button label="Go to Home" icon="pi pi-home" />
            </router-link>
        </div>
    </div>
</template>

<script>
import Button from "primevue/button";

export default {
    name: "NotFound",
    components: {
        Button,
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style lang="scss" scoped></style>