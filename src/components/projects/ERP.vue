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
        { id: 'babacus', name: 'Babacus', content: this.getHeroSection() },
        { id: 'aufgabenstellung', name: 'Aufgabenstellung', content: this.getAufgabenstellungSection() },
        { id: 'ziele', name: 'Ziele', content: this.getZieleSection() },
        { id: 'project', name: 'Produkt', content: this.getBabacusSection() },
        { id: 'reflexion', name: 'Reflexion', content: this.getReflexionSection() },
        { id: 'verifizierung', name: 'Verifizierung', content: this.getVerifizierungSection() },
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
    getHeroSection() {
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


    getAufgabenstellungSection() {
      return `
          <div>
            <p>Verlangt wurde, dass wir unsere Kenntnisse aus den Modulen 114, 210 und 426 vertiefen.</p>
            <p>Wir haben uns entschieden, die Theorie aus dem Modul 426 "Software mit agilen Methoden entwickeln" anzuwenden.</p>
            <p>Somit haben sich Giuliano Martullo, Mirhan Özden, Lukas Heiniger und ich in einem Team zusammengeschlossen und Babacus als Projekt bestimmt.</p>
            <p>Unser Team teilte sich in zwei Gruppen auf, um die Effizienz zu steigern:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="p-4 rounded-lg shadow-md">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">Frontend</h3>
                <ul class="list-disc pl-6 text-gray-700 dark:text-gray-400">
                  <li>Mirhan Özden</li>
                  <li>Lukas Heiniger</li>
                </ul>
              </div>
              <div class="p-4 rounded-lg shadow-md">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">Backend</h3>
                <ul class="list-disc pl-6 text-gray-700 dark:text-gray-400">
                  <li>Giuliano Martullo</li>
                  <li>Giovanni Innamorato (ich)</li>
                </ul>
              </div>
            </div>
          </div>
        `;
    },
    getZieleSection() {
      return `
          <div>
            <p>Für das Projekt waren meine persönlichen Ziele:</p>
            <ul class="list-disc pl-6">
              <li>SCRUM kennenlernen in der Praxis</li>
              <li>Zusammenarbeit und Aufgabenteilung zu fördern</li>
            </ul>
          </div>
        `;
    },
    getBabacusSection() {
      return `
          <div>
            <p>Ein ERP (Enterprise Resource Planning) ist eine Software für Unternehmen, die für die Buchhaltung und viele andere Aufgaben gedacht ist.</p>
            <p>Wir haben uns entschieden, uns nur auf die Eintragung von verkauften und eingekauften Produkten zu konzentrieren, um den Rahmen möglichst klein zu halten.</p>
            <p>Als imaginären Kunden haben wir einen Kiosk bestimmt. Dieser möchte eine Software, in der er seine Verkäufe eintragen kann, inklusive Preis, Menge und Art der Bezahlung.</p>
            <p>Die User-Stories und das gesamte Projekt findet Ihr auf GitHub <a href="https://github.com/dein-repository-link" class="text-blue-600 dark:text-blue-400 underline">hier</a>.</p>
            <p>Für die Entwicklung von Babacus haben sich folgende Technologien als optimal gezeigt:</p>
            <ul class="list-disc pl-2 sm:pl-4 md:pl-6 pt-4">
              <li class="py-2">Postman: Perfekt für die API-Calls und zum Testen der API.</li>
              <li class="py-2">Vite: Ein Tool zum schnellen Aufbau von Frontend-Projekten.</li>
              <li class="py-2">React JS: Ein Framework für das Frontend.</li>
              <li class="py-2">C#: Die verwendete Sprache für die API.</li>
              <li class="py-2">MSSQL: Die Datenbank für die App.</li>
              <li class="py-2">GitHub: Optimal für die Nutzung von Git und den Austausch von Code.</li>
            </ul>
          </div>
        `;
    },
    getReflexionSection() {
      return `
          <div>
            <p>Wir haben anfangs zusammen den groben Ablauf des Projekts besprochen und die Aufgaben gut untereinander aufgeteilt.</p>
            <p>Anfangs habe ich dem Team Postman vorgestellt und beschlossen, dass meine Gruppe eine API-Call-Library in Postman erstellen würde.</p>
            <p>Im Verlauf des Projekts wurde uns ein Fehler bei dieser Herangehensweise bewusst, den wir zukünftig vermeiden wollen.</p>
            <p>Ansonsten lief die Implementierung ziemlich reibungslos.</p>
          </div>
        `;
    },
    getVerifizierungSection() {
      return `
                <div>
                    <p>Auf GitHub kann man die verschiedenen Sprints sehen. Trotz einiger Herausforderungen haben wir erfolgreich einen ersten Sprint durchgeführt.</p>
                    <p>Das ist uns gut gelungen, und wir konnten Scrum in der Praxis kennenlernen und wertvolle Lektionen lernen.</p>
                    </div>
                    <div class="relative pt-[56.25%] overflow-hidden">
                    <iframe class=" absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/xvZuYSPd4uY?si=nKRY9fOAT7jUxtEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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