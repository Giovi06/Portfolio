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
          <h2 class="text-xl sm:text-xl md:text-5xl font-semibold text-center text-gray-800 my-6">{{
            section.name
            }}</h2>
          <div v-html="section.content" class="text-md text-gray-700  dark:text-gray-400 space-y-4 mt-8">
          </div>
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
        { id: '0', name: 'NodeJS API', content: this.getHeroSection() },
        { id: 'aufgabenstellung', name: 'Aufgabenstellung', content: this.getAufgabenstellungContent() },
        { id: 'ziele', name: 'Ziele', content: this.getZieleContent() },
        { id: 'produkt', name: 'Produkt', content: this.getProduktContent() },
        { id: 'reflexion', name: 'Reflexion', content: this.getReflexionContent() },
        { id: 'verifizierung', name: 'Verifizierung', content: this.getVerifizierungContent() },
      ],
      activeSection: '',
      navVisible: true,
    };
  },
  methods: {
    isActive(sectionId) {
      // Check if the current section is the active section
      return this.activeSection === sectionId;
    },
    onScroll() {

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
            <a href="https://github.com/Giovi06/1305_NodeJs_API" class="flex items-center space-x-4 p-4 hover:bg-gray-950 hover:bg-opacity-15 rounded z-20">
              <i class="pi pi-github text-4xl"></i>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">GitHub</h3>
                <p class="text-gray-600 dark:text-gray-400">Das gesamte Projekt im Repository.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="w-screen absolute inset-0 bg-gradient-to-r from-transparent to-blue-50 dark:to-gray-800 opacity-50 z-0"></div>
    </div>
  `;
    },
    getAufgabenstellungContent() {
      return `
        <p><strong>Ausgangslage</strong></p>
        <p>In diesem Auftrag sollen folgende Module vertieft werden:</p>
        <ul>
          <li>306 Kleinprojekte im eigenen Berufsumfeld abwickeln</li>
          <li>165 NoSQL-Datenbanken einsetzen</li>
          <li>254 Geschäftsprozesse im eigenen Berufsumfeld beschreiben</li>
        </ul>
      `;
    },
    getZieleContent() {
      return `
        <p><strong>Meine Ziele sind folgende:</strong></p>
        <ul>
          <li><strong>Zeitmanagement:</strong> Lerne, deine Zeit besser einzuteilen.</li>
          <li><strong>Git-Workflow:</strong> Verstehe den Git-Workflow besser und benutze Git so, wie es in einem professionellen Umfeld verwendet wird.</li>
          <li><strong>JavaScript vertiefen:</strong> Erweitere dein Wissen in JavaScript.</li>
          <li><strong>Node.js als Runtime verwenden:</strong> Nutze Node.js als Laufzeitumgebung.</li>
          <li><strong>Authentifizierung:</strong> Erlerne mehr über serverseitige Authentifizierung.</li>
        </ul>
        <p>Ich habe mich für diese persönlichen Ziele entschieden, basierend auf meinen Erfahrungen aus vorherigen Projekten und meinen aktuellen Zielen.</p>
      `;
    },
    getProduktContent() {
      return `
        <p><strong>Produkt</strong></p>
        <p>Ein Server soll erstellt werden, der CRUD-Operationen mittels HTTP-Anfragen bearbeitet. Die Daten sollen idealerweise in einer Datenbank gespeichert werden. Der Server soll ein Registrierungsverfahren haben, das ihn vor unbefugtem Zugriff schützt.</p>
        <p>Der Server kann Arbeiter speichern, aktualisieren, löschen und als Liste oder einzeln zurückgeben.</p>
        <p><strong>Technologien:</strong></p>
        <ul>
          <li>JavaScript</li>
          <li>Node.js und Express</li>
          <li>JSON Web Token (JWT)</li>
          <li>Cookies und Access Token</li>
          <li>Git</li>
        </ul>
        <p><strong>Datenbank:</strong> MongoDB</p>
      `;
    },
    getReflexionContent() {
      return `
        <p><strong>Verlauf des Projekts</strong></p>
        <p>Ich hatte schon lange vor, mich genauer mit JavaScript auseinanderzusetzen. Da wir in der Schule unsere APIs mit C# programmiert haben, wollte ich zur Abwechslung eine API mit JavaScript programmieren. Meine Erfahrungen mit JavaScript waren begrenzt, aber ich hatte eine leichte Vorstellung davon, wie man das Projekt aufbauen könnte und welche Tools dafür nötig wären, da ich bereits früher auf Node.js und Express gestossen war. Das gesamte Projekt basiert auf Tutorials. Ich muss zugeben, es ist ziemlich schwer, ohne Vorkenntnisse und nur mit der Dokumentation von Node.js und Express eine API zu erstellen, insbesondere eine API mit Token-Validierung. Daher habe ich mich langsam an das Projekt herangetastet. In den verschiedenen Branches auf GitHub kann man sehen, wie ich Schritt für Schritt neue Funktionen kennengelernt und implementiert habe.</p>
      `;
    },
    getVerifizierungContent() {
      return `
        <p><strong>Ziele Verifizierung</strong></p>
        <p><strong>Zeitmanagement</strong></p>
        <p>Während des gesamten Projekts war Home-Office angesagt. Das machte es einerseits schwieriger, da man sich selbst gut zum Arbeiten motivieren musste. Ich habe das Gefühl, dass ich meine Zeit besser einteilen konnte als in anderen Projekten, sodass ich dieses Ziel erreicht habe. Trotzdem hatte ich während des Projekts gelegentlich Probleme, weil ich kurzzeitig nicht wusste, was als Nächstes zu tun war. Die gegebene Unterrichtszeit reichte auch nicht aus, weshalb ich oft stundenlang in meiner Freizeit arbeiten musste.</p>
        <p><strong>Git-Workflow</strong></p>
        <p>Bereits zu Beginn des Projekts hatte ich gute Kenntnisse im Umgang mit Git, da ich in früheren Projekten viele Fehler gemacht hatte und daraus gelernt habe. Zudem war es deutlich einfacher, da ich alleine an diesem Projekt gearbeitet habe und somit keine Konflikte im Repository zu erwarten hatte. Trotzdem habe ich versucht, meinen Workflow so zu gestalten, als würde ich in einem Team arbeiten. Das ist mir auch recht gut gelungen, weshalb ich sagen würde, dass dieses Ziel ebenfalls erreicht wurde.</p>
        <p><strong>JavaScript vertiefen</strong></p>
        <p>Während dieses Projekts habe ich viele neue Konzepte und Techniken gelernt, die meine Fähigkeiten in JavaScript erheblich verbessert haben. Ich habe nicht nur die Grundlagen gefestigt, sondern auch fortgeschrittene Themen wie asynchrone Programmierung und die Nutzung von Promises und async/await verstanden. Durch die Implementierung verschiedener Funktionen und das Lösen komplexer Probleme im Code konnte ich mein Verständnis vertiefen und praktische Erfahrungen sammeln. Insgesamt habe ich das Gefühl, dass ich dieses Ziel erfolgreich erreicht habe.</p>
        <p><strong>Node.js als Runtime verwenden</strong></p>
        <p>Während der Entwicklung habe ich gelernt, wie man einen Server mit Node.js und Express erstellt, Routen definiert und Middleware einsetzt. Ich habe auch verstanden, wie man mit dem Dateisystem arbeitet, Module importiert und Umgebungsvariablen verwendet. Die praktische Anwendung dieser Konzepte hat mir geholfen, mich sicherer in der Nutzung von Node.js zu fühlen. Dieses Ziel wurde ebenfalls erreicht.</p>
        <p><strong>Authentifizierung</strong></p>
        <p>Ich habe gelernt, wie man JSON Web Tokens (JWT) zur Authentifizierung verwendet und wie man Token-Validierung implementiert, um geschützte Routen abzusichern. Durch Tutorials und Dokumentationen habe ich verstanden, wie man sichere Registrierungs- und Login-Verfahren erstellt, sowie wie man Cookies und Access Tokens handhabt. Die praktische Umsetzung dieser Sicherheitsmechanismen hat mein Verständnis für serverseitige Authentifizierung stark erweitert. Auch dieses Ziel habe ich erfolgreich erreicht.</p>
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