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
        { id: '0', name: 'FightRadar', content: this.getHeroSection() },
        { id: '1', name: "Aufgabenstellung", content: this.getAufgabenstellungSection() },
        { id: '6', name: "Informieren", content: this.getInformierenSection() },
        { id: '7', name: "Planen", content: this.getPlanenSection() },
        { id: '8', name: "Entscheiden", content: this.getEntscheidenSection() },
        { id: '9', name: "Realisieren", content: this.getRealisierenSection() },
        { id: '11', name: "Auswertung", content: this.getAuswertungSection() },
        { id: 'video', name: 'Projekt Video', content: this.getVideoSection() },



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
          <p class="text-2xl text-950 dark:text-gray-400">
            Ein ERP für Unternehmen, entwickelt für die Buchhaltung und viele andere Aufgaben.
          </p>
          <div class="space-y-4">
            <a href="https://github.com/Giovi06/FightRadar" class="flex items-center space-x-4 p-4 hover:bg-gray-950 hover:bg-opacity-15 rounded z-20">
              <i class="pi pi-github text-4xl"></i>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">GitHub</h3>
                <p class="text-gray-600 dark:text-gray-400">Das gesamte Projekt im Repository.</p>
              </div>
            </a>
            <a href="javascript:void(0);" class="flex items-center space-x-4 p-4 hover:bg-gray-950 hover:bg-opacity-15 rounded z-20" onclick="document.getElementById('video').scrollIntoView({ behavior: 'smooth' });">
              <i class="pi pi-video text-4xl text-blue-900"></i>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Projekt Video</h3>
                <p class="text-gray-600 dark:text-gray-400">Ein Überblick über unser Projekt.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
    },
    getAufgabenstellungSection() {
      return `
      <div>
        <h3 class="py-1 text-md sm:text-sm md:text-lg font-semibold text-center">Zielsetzung</h3>
        <ul>
          <li class="py-1">Benutzerregistrierung und -anmeldung</li>
          <li class="py-1">Benutzerprofile mit Bearbeitungsfunktion</li>
          <li class="py-1">Verwaltung und Anzeige von Matches</li>
          <li class="py-1">UI für Benutzer, die nach Auseinandersetzungen suchen</li>
          <li class="pt-1 pb-3">Matchmaking-Funktion mit Speicherung</li>
        </ul>
        <h3 class="py-1 text-md sm:text-sm md:text-lg font-semibold text-center" >Rahmenbedingungen</h3>
        <ul>
          <li class="py-1">Verwendung moderner Web-Technologien (HTML, CSS, JavaScript, C#)</li>
          <li class="py-1">Datenbank: MongoDB</li>
          <lic lass="py-1">Sicherheitsvorkehrungen</lic>
          <li class="py-1">Dokumentation und IPERKA-Projektmanagement</li>
        </ul>
      </div>`;
    },
    getProjektorganisationSection() {
      return `
      <div>
      <ul>
        <li class="py-2 >Projektleiter: Giovanni Innamorato </li>
        <li class="py-2 >Projektmitarbeiter: </li>
        <li class="pt-2 pb-1 >Projektstart: 01.09.2021</li>
        <li class="pb-2 >Projektende: 15.12.2021</li>
      </ul>
    </div>`;
    },
    getInformierenSection() {
      return `
      <div>
      <p>Bevor wir mit der Entwicklung der Webanwendung beginnen, ist es wichtig, eine solide Wissensgrundlage über die verwendeten Technologien zu schaffen. Für die Frontend-Entwicklung mit React.js werden wir uns auf eine Kombination aus Dokumentation und Lehrvideos stützen.</p>

      <h4>Dokumentation und Tutorial</h4>
        <ul>
        <li>Die offizielle React-Dokumentation auf <a href="https://react.dev/">react.dev</a> wird unser Hauptanlaufpunkt für fundierte Informationen und Best Practices sein.</li>
        <li>Die Erstellung und Verwaltung von NoSQL-Datenbanken sowie die API-Entwicklung sind entscheidend für die Datenverarbeitung unserer Anwendung. Hierzu werden wir folgende Ressourcen nutzen</li>
        <li class="relative pt-[56.25%] overflow-hidden my-4"><iframe class=" absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/jJK9alBkzU0?si=vvsItKAYyDvaE4Rn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
        <li class="relative pt-[56.25%] overflow-hidden my-4"><iframe class=" absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/WRuQ-BOoy5c?si=WYcw4kWnk8I0DiHK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
      </ul>
    </div>`;
    },
    getPlanenSection() {
      return `
      <div>
      <h1 class="text-lg font-bold mb-4">Systemgrenzen</h1>
        <p class="mb-4">
            Die Systemgrenzen definieren, welche Teile des Systems innerhalb des Projekts liegen und welche ausserhalb. Für das Projekt der Entwicklung einer "Tinder-ähnlichen" Web-Anwendung zum gemeinsamen Problemlösen, können die Systemgrenzen wie folgt beschrieben werden:
        </p>
        <h2 class="text-md font-semibold mb-2">Innerhalb des Systems:</h2>
        <ul class="list-disc list-inside mb-4">
            <li>Benutzerregistrierung und -anmeldung</li>
            <li>Verwaltung und Bearbeitung von Benutzerprofilen</li>
            <li>Anzeige und Verwaltung von bisherigen und zukünftigen Auseinandersetzungen</li>
            <li>Matchmaking-Funktionalität</li>
            <li>Speicherung und Verwaltung der Matches</li>
            <li>Datenbankmanagement (MongoDB)</li>
            <li>Benutzeroberfläche (UI) und Benutzererfahrung (UX)</li>
            <li>Sicherheit und Datenschutzmassnahmen</li>
        </ul>
        <h2 class="text-md font-semibold mb-2">Ausserhalb des Systems:</h2>
        <ul class="list-disc list-inside mb-4">
            <li>Externe Benutzer, die die Anwendung verwenden</li>
            <li>Drittanbieter-Dienste (falls verwendet, z.B. für E-Mail-Verifikation)</li>
            <li>Infrastruktur und Hosting (z.B. Web-Server, Cloud-Dienste)</li>
            <li>Support und Wartung (nach Projektabschluss)</li>
        </ul>
        <h1 class="text-lg font-bold mb-4">Schnittstellen zur Aussenwelt</h1>
        <p class="mb-4">
            Schnittstellen beschreiben, wie das System mit externen Systemen oder Komponenten interagiert. Für dieses Projekt sind folgende Schnittstellen relevant:
        </p>
        <h2 class="text-md font-semibold mb-2">Benutzerschnittstelle:</h2>
        <ul class="list-disc list-inside mb-4">
            <li>Frontend (React.js): Die Schnittstelle, über die Benutzer mit der Anwendung interagieren.</li>
            <li>Benutzerprofile: Anzeige und Bearbeitung persönlicher Informationen.</li>
        </ul>
        <h2 class="text-md font-semibold mb-2">API-Schnittstelle:</h2>
        <ul class="list-disc list-inside mb-4">
            <li>Backend (C#): Kommunikationsschnittstelle zwischen Frontend und Backend.</li>
            <li>Authentifizierungs-API: Registrierung, Anmeldung und Sitzungsmanagement.</li>
            <li>Daten-API: Verwaltung von Benutzerprofilen, Auseinandersetzungen und Matches.</li>
        </ul>
        <h2 class="text-md font-semibold mb-2">Datenbank-Schnittstelle:</h2>
        <ul class="list-disc list-inside mb-4">
            <li>MongoDB: Schnittstelle zur Speicherung und Abfrage von Daten.</li>
            <li>BSON: Format für die effiziente Datenübertragung zwischen Backend und Datenbank.</li>
        </ul>
    </div>`;
    },
    getEntscheidenSection() {
      return `
    <div class="w-auto">
      <h2 class="text-lg sm:text-xl font-semibold mb-4 text-center">
        Vergleich mehrerer Varianten durch Nutzwertanalyse
      </h2>

      <!-- Criteria Section -->
      <div class="mb-6">
        <h3 class="text-md sm:text-lg font-semibold mb-2">Festlegung der Kriterien</h3>
        <p class="mb-4 text-sm sm:text-base">
          Zuerst müssen wir die relevanten Kriterien definieren, anhand derer wir die beiden Alternativen bewerten wollen:
        </p>
        <ul class="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>Performance: Wie schnell und effizient ist die Lösung?</li>
          <li>Entwicklungszeit: Wie lange dauert die Implementierung?</li>
          <li>Wartbarkeit: Wie einfach ist es, den Code zu pflegen und zu aktualisieren?</li>
          <li>Benutzerfreundlichkeit: Wie intuitiv ist die Lösung für den Endbenutzer?</li>
          <li>Flexibilität: Wie gut kann die Lösung an zukünftige Anforderungen angepasst werden?</li>
          <li>Sicherheit: Wie sicher ist die Lösung gegen Angriffe und Datenlecks?</li>
        </ul>
      </div>

      <!-- Weighting Criteria Section inside Surface Card -->
      <div class="surface-card shadow-2 border-round p-4 mb-6">
        <div class="flex justify-content-between align-items-center mb-5">
          <span class="text-xl text-900 font-medium">Gewichtung der Kriterien</span>
          <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu2.toggle($event)"></Button>
            <Menu ref="menu2" :popup="true" :model="items"></Menu>
          </div>
        </div>
        <div class="overflow-x-auto w-full">
          <table class="min-w-full text-left border-collapse text-sm sm:text-base">
            <thead>
              <tr>
                <th class="border-b p-2">Kriterium</th>
                <th class="border-b p-2">Gewichtung</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2 border-b">Performance</td><td class="p-2 border-b">3</td></tr>
              <tr><td class="p-2 border-b">Entwicklungszeit</td><td class="p-2 border-b">2</td></tr>
              <tr><td class="p-2 border-b">Wartbarkeit</td><td class="p-2 border-b">2</td></tr>
              <tr><td class="p-2 border-b">Benutzerfreundlichkeit</td><td class="p-2 border-b">1</td></tr>
              <tr><td class="p-2 border-b">Flexibilität</td><td class="p-2 border-b">1</td></tr>
              <tr><td class="p-2 border-b">Sicherheit</td><td class="p-2 border-b">1</td></tr>
              <tr><td class="p-2 font-bold">Summe</td><td class="p-2 font-bold">10</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ReactJS Section -->
      <div class="surface-card shadow-2 border-round p-4 mb-6">
        <div class="flex align-items-center justify-content-between mb-4">
          <span class="text-xl font-medium text-900">React JS</span>
        </div>
        <ul class="mt-4 list-none p-0 mx-0">
          <li class="flex align-items-center pb-3">
            <span style="width:1rem;height:1rem" class="border-round bg-indigo-500 mr-3 flex-shrink-0"></span>
            <span class="text-xl font-medium text-90">Performance</span>
            <span class="text-600 text-xl font-medium ml-auto">24</span>
          </li>
          <li class="flex align-items-center py-3">
            <span style="width:1rem;height:1rem" class="border-round bg-blue-500 mr-3 flex-shrink-0"></span>
            <span class="text-xl font-medium text-90">Entwicklungszeit</span>
            <span class="text-600 text-xl font-medium ml-auto">14</span>
          </li>
          <!-- Continue with other criteria here -->
        </ul>
      </div>

      <!-- JS/HTML Section -->
      <div class="surface-card shadow-2 border-round p-4 mb-6">
        <div class="flex align-items-center justify-content-between mb-4">
          <span class="text-xl font-medium text-900">JS/HTML</span>
        </div>
        <ul class="mt-4 list-none p-0 mx-0">
          <li class="flex align-items-center pb-3">
            <span style="width:1rem;height:1rem" class="border-round bg-indigo-500 mr-3 flex-shrink-0"></span>
            <span class="text-xl font-medium text-90">Performance</span>
            <span class="text-600 text-xl font-medium ml-auto">21</span>
          </li>
          <li class="flex align-items-center py-3">
            <span style="width:1rem;height:1rem" class="border-round bg-blue-500 mr-3 flex-shrink-0"></span>
            <span class="text-xl font-medium text-90">Entwicklungszeit</span>
            <span class="text-600 text-xl font-medium ml-auto">12</span>
          </li>
          <!-- Continue with other criteria here -->
        </ul>
      </div>

      <!-- Decision Section -->
      <div class="mb-6">
        <h3 class="text-md sm:text-lg font-semibold mb-2">Entscheidung</h3>
        <p class="mb-4 text-sm sm:text-base">
          Auf Grundlage der Punkte, die sich aus der Gewichtung und den Bewertungen ergeben, hat React mit 78 Punkten besser abgeschnitten als JS/HTML mit 65 Punkten.
        </p>
      </div>

      <!-- Justification Section -->
      <div class="mb-6">
        <h3 class="text-md sm:text-lg font-semibold mb-2">Begründung der Entscheidung</h3>
        <p class="text-sm sm:text-base">
          Basierend auf der Nutzwertanalyse ist React die sinnvollere Wahl für unser Projekt. Es bietet eine bessere Performance, ist wartbarer, flexibler und benutzerfreundlicher im Vergleich zu JS/HTML. Auch wenn die Entwicklungszeit möglicherweise etwas höher ist, überwiegen die langfristigen Vorteile wie bessere Wartbarkeit und Flexibilität. Daher haben wir uns entschieden, React anstelle von JS/HTML zu verwenden.
        </p>
      </div>
    </div>
  `;
    },
    getRealisierenSection() {
      return `
      <div>
      <h1 class="text-xl font-bold mb-6">2.4.1 Grundgerüst der Datenbank</h1>
      <p class="mb-4">
        Hier werde ich erklären, wie ich die Verbindung zur MongoDB erstellt habe.
      </p>

      <pre class="bg-gray-100 p-4 rounded mb-6 text-sm">
        {
      {
        "FightRadarDatabase": {
          "ConnectionString": "mongodb://localhost:27017",
            "DatabaseName": "FightRadar",
              "CollectionName": "Fighters"
        },
        "Logging": {
          "LogLevel": {
            "Default": "Information",
              "Microsoft.AspNetCore": "Warning"
          }
        },
        "AllowedHosts": "*"
      }
      }
      </pre>

      <h2 class="text-lg font-semibold mb-4">Erläuterungen:</h2>

      <div class="mb-6">
        <h3 class="text-md font-semibold mb-2">ConnectionString:</h3>
        <p class="mb-2">
          Die Verbindungszeichenfolge zu MongoDB, die angibt, wo sich die Datenbank
          befindet = «mongodb://localhost:27017», was bedeutet, dass MongoDB auf dem
          lokalen Computer auf Port 27017 läuft.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-md font-semibold mb-2">DatabaseName:</h3>
        <p class="mb-2">Der Name der Datenbank, die verwendet wird. Hier ist es FightRadar.</p>
      </div>

      <div class="mb-6">
        <h3 class="text-md font-semibold mb-2">CollectionName:</h3>
        <p class="mb-2">
          Der Name der Sammlung (Collection) innerhalb der Datenbank, die verwendet wird.
          Hier ist es Fighters.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-md font-semibold mb-2">Logging:</h3>
        <p class="mb-2">
          LogLevel: Legt die Protokollierungsstufen für verschiedene Teile der Anwendung
          fest. Zum Beispiel wird für Default das Protokollierungsniveau auf Information
          gesetzt und für Microsoft.AspNetCore auf Warning. Das bedeutet, dass allgemeine
          Informationen protokolliert werden, aber für die ASP.NET Core-Komponenten nur
          Warnungen und schwerwiegendere Meldungen protokolliert werden.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-md font-semibold mb-2">AllowedHosts:</h3>
        <p class="mb-2">
          Dies gibt an, welche Hosts die Anwendung annehmen darf. Der Wert * bedeutet, dass
          alle Hosts erlaubt sind.
        </p>
      </div>

      <h2 class="text-lg font-semibold mb-4">Program.cs Implementierung:</h2>

      <p class="mb-6">
        Im Program.cs habe ich das implementiert. Das WebApplication-Objekt wird erstellt
        und konfiguriert.
      </p>

      <pre class="bg-gray-100 p-4 rounded mb-6 text-sm">
        {
      using System.Text;
    using FightRadarAPI.Models;
    using FightRadarAPI.Services;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.IdentityModel.Tokens;
    using Microsoft.OpenApi.Models;

    var builder = WebApplication.CreateBuilder(args);

    // Add services to the container.
    builder.Services.Configure < FightRadarDatabaseSettings > (
      builder.Configuration.GetSection("FightRadarDatabase"));

    builder.Services.AddSingleton < UserService > ();

    builder.Services.AddCors(options => {
      options.AddPolicy("AllowAllOrigins",
        builder => {
          builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
        });
    });

    builder.Services.AddControllers()
      .AddJsonOptions(
        options => options.JsonSerializerOptions.PropertyNamingPolicy = null);

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if(app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("AllowAllOrigins");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
}
      </pre>

      <p class="mb-6">
        Die Konfigurationseinstellungen für die Datenbank (FightRadarDatabaseSettings) werden
        aus der appsettings.json-Datei gelesen und zur Verfügung gestellt. Ein Singleton-Dienst
        für die UserService-Klasse wird hinzugefügt, damit diese Klasse später im Code verwendet
        werden kann. CORS (Cross-Origin Resource Sharing) wird konfiguriert, um alle Ursprünge,
        Methoden und Header zu erlauben. Das ermöglicht es, dass die API von verschiedenen Domänen
        aus angesprochen werden kann. Die Controller der Anwendung werden hinzugefügt und JSON-Optionen
        werden so konfiguriert, dass die ursprüngliche Namensgebung beibehalten wird.
      </p>

      <h2 class="text-lg font-semibold mb-4">Modelle:</h2>

      <p class="mb-4">
        Das sind die wichtigsten Modelle, worin Variablen definiert werden, damit sie in der
        Datenbank gespeichert werden: <strong>Fight.cs</strong>, <strong>FightRadarDatabase.cs</strong> und
        <strong> User.cs</strong>.
      </p>

      <div class="mb-6">
        <h3 class="text-md font-semibold mb-2">Fight.cs:</h3>
        <p class="mb-2">
          In der "Fight.cs" definieren wir die Struktur eines Kampfes und eines Matches in unserer
          Anwendung. <br />
          <strong>Opponent</strong> = Informationen über den Gegner, wie z. B. Username und Id. <br />
          <strong>Result</strong> = Das Ergebnis des Kampfes. <br />
          <strong>Date</strong> = Das Datum, an dem der Kampf stattgefunden hat.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-md font-semibold mb-2">FightRadarDatabaseSettings.cs:</h3>
        <p class="mb-2">
          Die Klasse "FightRadarDatabaseSettings.cs" ist eine Konfigurationsklasse, die verwendet wird, um
          die Verbindungsinformationen zur MongoDB-Datenbank zu halten. Diese Informationen werden aus der
          appsettings.json-Datei geladen und enthalten typischerweise:
          <br />
          <strong>ConnectionString</strong> = Die URL zur MongoDB-Datenbank, einschließlich Hostname und
          Portnummer. <br />
          <strong>DatabaseName</strong> = Der Name der MongoDB-Datenbank, in der die Daten gespeichert werden. <br />
          <strong>CollectionName</strong> = Der Name der MongoDB-Sammlung (Collection), in der bestimmte Dokumente
          (z. B. Benutzer) gespeichert werden.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="text-md font-semibold mb-2">User.cs:</h3>
        <p class="mb-2">
          In der "User.cs" definieren wir die Struktur eines Benutzerobjekts für unsere Anwendung. Es werden die
          Eigenschaften eines Benutzers festgelegt, die in der MongoDB-Datenbank gespeichert werden sollen.
          <br />
          <strong>Id</strong> = für die eindeutige Kennung des Benutzers. <br />
          <strong>Username</strong> = Der Benutzername des Benutzers. <br />
          <strong>Password</strong> = Das Passwort des Benutzers (in der Regel verschlüsselt gespeichert). <br />
          <strong>Email</strong> = Die E-Mail-Adresse des Benutzers. <br />
          <strong>Matches</strong> = Eine Liste von Kämpfen oder Matches, die der Benutzer gespeichert hat. <br />
          Weitere Eigenschaften wie Gewicht, Erfahrungen, Kampfstil und Gewichtsklasse könnten ebenfalls Teil des Benutzerprofils sein.
        </p>
      </div>
    </div>`;
    },
    getAuswertungSection() {
      return `
      <div>
      <h1 class="text-xl font-bold mb-6">Reflexion über die Arbeit</h1>
      <p class="mb-6">
        Als Team haben wir hervorragend zusammengearbeitet und konnten größtenteils dem Plan folgen.
        Dennoch stellte sich das Produkt als sehr herausfordernd heraus, und die zur Verfügung stehende Zeit reichte 
        nicht aus, um es vollständig zu implementieren. Trotz dieser Herausforderungen konnten wir jedoch die fehlenden
        Elemente in der Dokumentation erfolgreich vervollständigen. Dies zeigt unsere Fähigkeit, uns flexibel auf die
        Gegebenheiten einzustellen und wichtige Aufgaben effektiv abzuschließen.
      </p>

      <h1 class="text-xl font-bold mb-6">Schlusswort</h1>
      <p class="mb-6">
        Zum Schluss möchten wir ein paar Worte zu unserem Projekt sagen. Die Arbeit an unserem "FightRadar"
        hat uns persönlich viel Freude bereitet und war eine herausfordernde, aber lohnenswerte Erfahrung.
        Als Team haben wir gut zusammengearbeitet und unsere unterschiedlichen Fähigkeiten und Perspektiven
        eingebracht, um das Projekt erfolgreich zu gestalten. Wir freuen uns darauf, unsere Arbeit und die Ergebnisse
        des "FightRadar" gemeinsam zu präsentieren und zu diskutieren.
      </p>
    </div>`;
    },
    getVideoSection() {
      return `
                <div>
                    <p>Man kann ein Konto erstellen und sich anschliessend damit einloggen. Nach erfolgreichem Login sieht man direkt auf der Startseite ein neues Match, das man nach Belieben annehmen oder ablehnen kann. Bei jeder Annahme wird das Match für beide Benutzer auf der Matches-Seite angezeigt. Dort besteht auch die Möglichkeit, Matches zu löschen. Die Matches werden mit einem zufälligen zukünftigen Datum versehen.</p>
                    </div>
                    <div class="relative pt-[56.25%] overflow-hidden">
                    <iframe class=" absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/AvYb3qMwCOA?si=5pB0yLwfnaFbIPiv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

<style lang="scss"></style>