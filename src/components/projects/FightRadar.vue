<template>
  <div class="w-screen h-lvh overflow-x-hidden" v-on:scroll="this.onScroll()">
    <!-- </div>Navigation Sidebar -->
    <div :class="[
      'z-10 min-w-44 w-1/6 max-w-72 h-full mr-2 fixed bg-gray-950 bg-opacity-65 sm:mt-7  transition-all duration-500 transform',
      navVisible ? 'translate-x-0' : '-translate-x-full',
      'md:translate-x-0'
    ]">
      <nav class="mt-6">
        <ul class="list-none flex flex-col justify-start items-center">
          <li v-for="section in sections" :key="section.id" class="my-2">
            <a :class="isActive(section.id) ? ' font-bold text-lg' : 'text-white'"
              class="transition-colors duration-300 hover:font-bold">
              <button @click="scrollToSection(section.id)">
                {{ section.name }}
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>


    <!-- Main Content Area -->
    <MovingFlowFieldBackground class="z-0 fixed h-full" />
    <div class="z-10 relative md:ml-48 w-auto h-[100vh] container p-8 space-y-20 items-center flex flex-col">
      <!-- Sections -->
      <section v-for="section in sections" :id="section.id" :key="section.id" class=" h-auto">
        <div class="p-24 bg-gray-950 bg-opacity-60">
          <h2 class="text-xl sm:text-xl md:text-5xl font-semibold text-center text-gray-800 my-6">{{ section.name
            }}</h2>
          <div v-html="section.content" class="text-md text-gray-700  dark:text-gray-400 space-y-4 mt-8"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MovingFlowFieldBackground from '../MovingFlowFieldBackground.vue';

export default {
  data() {
    return {
      sections: [
        { id: '0', name: 'FightRadar', content: this.getSection() },
      ],
      activeSection: '',
      navVisible: true,
    };
  },
  methods: {
    isActive(sectionId) {
      console.log('active section:', this.activeSection);
      // Check if the current section is the active section
      return this.activeSection === sectionId;
    },
    onScroll() {

      console.log('scrolling');
      // Get the scroll position, adjust it to the center of the viewport
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      // Loop through sections to find the currently visible section

      this.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          // If the element is in view, set it as the active section
          if (elementTop <= scrollPosition && elementBottom > scrollPosition) {
            this.activeSection = section.id;
            console.log('active section:', this.activeSection);
          }
        }
      });
    },
    handleResize() {
      this.navVisible = window.innerWidth >= 768;
    },
    scrollToSection(sectionId) {
      // Scroll to the selected section smoothly
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    getSection() {
      return `
    <div class="relative">
      <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
        <div class="space-y-6 sm:order-2">
          <p class="text-2xl text-gray-600 dark:text-gray-400">
            Ein ERP für Unternehmen, entwickelt für die Buchhaltung und viele andere Aufgaben.
          </p>
          <div class="space-y-4">
            <a href="https://github.com/Giovi06/Babacus" class="flex items-center space-x-4 p-4 hover:bg-gray-950 hover:bg-opacity-15 rounded z-20">
              <i class="pi pi-github text-4xl"></i>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">GitHub</h3>
                <p class="text-gray-600 dark:text-gray-400">Das gesamte Projekt im Repository.</p>
              </div>
            </a>
            <a href="javascript:void(0);" class="flex items-center space-x-4 p-4 hover:bg-gray-950 hover:bg-opacity-15 rounded z-20" onclick="document.getElementById('verifizierung').scrollIntoView({ behavior: 'smooth' });">
              <i class="pi pi-video text-4xl text-blue-600"></i>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Projekt Video</h3>
                <p class="text-gray-600 dark:text-gray-400">Ein Überblick über unser Projekt.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="w-screen absolute inset-0 bg-gradient-to-r from-transparent to-blue-50 dark:to-gray-800 opacity-50 z-0"></div>
    </div>
  `;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.onScroll();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>