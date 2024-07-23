<template>
    <div class="w-full min-h-screen relative bg-gray-800 text-white">
        <MovingFlowFieldBackground class="z-0 fixed w-full h-full" />
        <div class="z-10 relative py-12 px-4 sm:px-6 lg:px-8">
            <div class="text-center text-white text-5xl font-bold mb-5">Just Released</div>
            <div class="w-full h-auto max-w-8xl">
                <div class="grid grid-cols-2 gap-6 justify-center py-10">
                    <RouterLink v-for="(card, index) in cards" :key="index"
                        :to="{ name: 'projectDetail', params: { id: index } }">
                        <CardComponent :category="card.category" :readTime="card.readTime"
                            :description="card.description" :tags="card.tags" :image="card.image"
                            class="hover:shadow-lg transition-shadow duration-300" />
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MovingFlowFieldBackground from './MovingFlowFieldBackground.vue';
import CardComponent from '../components/Card.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'MainComponent',
    components: {
        MovingFlowFieldBackground,
        CardComponent,
    },
    data() {
        return {
            cards: [
                {
                    category: 'Article',
                    readTime: 12,
                    description: '',
                    tags: [
                        { text: 'Environment', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
                        { text: 'Climate', bgColor: 'bg-teal-100', textColor: 'text-teal-600' },
                    ],
                    image: '/src/assets/ProfilBild-Mahara.jpeg',
                },
                {
                    category: 'Article',
                    readTime: 9,
                    description: 'New sustainable energy alternatives and how we can utilize them efficiently.',
                    tags: [
                        { text: 'Environment', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
                        { text: 'Energy', bgColor: 'bg-green-100', textColor: 'text-green-600' },
                    ],
                    image: '',
                },
                {
                    category: 'Article',
                    readTime: 5,
                    description: 'Upcoming technology is what we\'ve been waiting for to shape our future.',
                    tags: [
                        { text: 'Tech', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
                        { text: 'Opinion', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600' },
                    ],
                    image: '',
                },
                {
                    category: 'Article',
                    readTime: 5,
                    description: 'Upcoming technology is what we\'ve been waiting for to shape our future.',
                    tags: [
                        { text: 'Tech', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
                        { text: 'Opinion', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600' },
                    ],
                    image: '',
                },
                {
                    category: 'Article',
                    readTime: 5,
                    description: 'Upcoming technology is what we\'ve been waiting for to shape our future.',
                    tags: [
                        { text: 'Tech', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
                        { text: 'Opinion', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600' },
                    ],
                    image: '',
                },
                {
                    category: 'Article',
                    readTime: 5,
                    description: 'Upcoming technology is what we\'ve been waiting for to shape our future.',
                    tags: [
                        { text: 'Tech', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
                        { text: 'Opinion', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600' },
                    ],
                    image: '',
                },
                {
                    category: 'Article',
                    readTime: 5,
                    description: 'Upcoming technology is what we\'ve been waiting for to shape our future.',
                    tags: [
                        { text: 'Tech', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
                        { text: 'Opinion', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600' },
                    ],
                    image: '',
                },
                // Add more card data as needed
            ],
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>