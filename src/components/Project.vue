<template>
    <div class="w-full h-full">
        <div :class="[
            'min-w-36 max-w-44 h-full mr-2 fixed bg-gray-950 transition-all duration-500 transform',
            navVisible ? 'translate-x-0' : '-translate-x-full',
            'md:translate-x-0'  // Ensure it stays visible on larger screens
        ]">
            <nav class="mt-6">
                <ul class="list-none flex flex-col justify-start items-center">
                    <li v-for="section in sections" :key="section.id" class="my-2">
                        <a :href="`#${section.id}`"
                            :class="isActive(section.id) ? 'text-blue-500 font-bold text-lg' : 'text-white'"
                            class="transition-colors duration-300">
                            {{ section.name }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="md:ml-44 mt-16 w-auto p-4 md:py-6">
            <section v-for="section in sections" :id="section.id" :key="section.id" class="h-screen">
                <h2 class="text-4xl">{{ section.name }}</h2>
                <p class="mt-4">Content for {{ section.name }} section.</p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sections: [
                { id: 'section1', name: 'Section 1' },
                { id: 'section2', name: 'Section 2' },
                { id: 'section3', name: 'Section 3' },
            ],
            activeSection: '',
            navVisible: true, // Default to true for larger screens
        };
    },
    methods: {
        isActive(sectionId) {
            return this.activeSection === sectionId;
        },
        onScroll() {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            this.sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    this.activeSection = section.id;
                }
            });
        },
        handleResize() {
            if (window.innerWidth < 769) {
                this.navVisible = false; // Hide the nav on small screens
            } else {
                this.navVisible = true; // Show the nav on larger screens
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.handleResize);
        this.handleResize(); // Check initial screen size
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.handleResize);
    }
};
</script>