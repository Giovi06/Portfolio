<template>
    <div class="w-full min-h-screen relative bg-gray-800 text-white">
        <MovingFlowFieldBackground class="z-0 fixed w-full h-full" />
        <div class="z-10 relative py-12 px-4 sm:px-6 lg:px-8">
            <div class="text-center text-white text-5xl font-bold my-5">Meine Projekte</div>
            <div class="w-full h-auto max-w-8xl">
                <div class="grid grid-cols-2 gap-6 justify-center py-10">
                    <RouterLink v-for="(card, index) in cards" :key="index"
                        :to="{ name: 'projectDetail', params: { id: index } }">
                        <CardComponent :title="card.title" :category="card.category" :readTime="card.readTime"
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
                    title: 'ERP Prototyp',
                    category: 'Web-App ',
                    readTime: 5,
                    description: 'Ein ERP Prototyp für ein Kleinunternehmen, welcher die Verwaltung von Produkten und Bestellungen ermöglicht.',
                    tags: [
                        { svg: "Scrum" },
                        { svg: "DotNet" },
                        { svg: "ReactJS" },
                        { svg: "MSSQL" },
                        { svg: "Vite" },
                    ],
                    image: '',
                },
                {
                    title: 'FightRadar ',
                    category: 'Web-App | API',
                    readTime: 10,
                    description: 'Eine Web-App, die wie Tinder funktioniert, aber zur Verabredung für gemeinsames Problemlösen dient. Benutzer können sich registrieren, Profile erstellen, Matches finden und verwalten',
                    tags: [
                        { svg: "ReactJS" },
                        { svg: "DotNet" },
                        { svg: "Git" },
                        { svg: "MongoDB" },
                    ],
                    image: '',
                },
                {
                    title: 'NodeJS API ',
                    category: 'RESTful API',
                    readTime: 10,
                    description: 'Eine RESTful API, die die Verwaltung von Benutzern und deren Profilen ermöglicht. Die API ist in NodeJS geschrieben und verwendet MongoDB als Datenbank.',
                    tags: [
                        { svg: "NodeJS" },
                        { svg: "Scrum" },
                        { svg: "Git" },
                        { svg: "MongoDB" },
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