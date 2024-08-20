<template>
    <div class="w-full h-screen relative bg-gray-800 text-white">
        <StarBackground class="z-0 fixed w-full  h-max " />
        <div class="content z-10 relative flex flex-col items-center justify-center h-auto p-8">
            <img src="../assets/ProfilBild-Mahara.jpeg" alt="Profile Image of Giovanni Innamoratos"
                class=" rounded-full border-4 border-gray-500  mb-5">


            <div class="surface-section px-4 py-4 md:px-6 lg:px-8 text-center">
                <div class="mb-3 font-bold text-3xl">
                    <span class=" text-white ">Giovanni Innamorato </span>
                    <span class=" text-blue-600"> </span>
                </div>
                <div class="text-700 mb-6 md:text-lg  text-center">
                    <p>Mein Name ist Giovanni Innamorato. Derzeit besuche ich die IMS an der Alten Kantonsschule Aarau
                        und an der Berufsbildung Baden. Mit Kenntnissen in modernen Webtechnologien und einer Vorliebe
                        für Elektrotechnik bin ich bereit, innovative Lösungen zu schaffen. Nebenbei betreibe ich
                        regelmässig Kraftsport. Ich freue mich darauf, meine Fähigkeiten in spannenden Projekten
                        einzubringen.</p>
                </div>
                <div class="grid">
                    <div class="col-12 md:col-4 mb-4 px-5 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl ">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-lightbulb text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Offen für Neues</div>
                        <span class="text-700 line-height-3">Ich bin immer bereit, mich in neue Technologien
                            einzuarbeiten und finde es spannend, innovative Lösungen auszuprobieren.</span>
                    </div>
                    <div class="col-12 md:col-4 mb-4 px-5 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-bolt text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Schnelles Auffassungsvermögen</div>
                        <span class="text-700 line-height-3">Ich verstehe komplexe Systeme ziemlich schnell und kann sie
                            zügig umsetzen.</span>
                    </div>
                    <div class="col-12 md:col-4 mb-4 px-5 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-shield text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Vertrauenswürdig</div>
                        <span class="text-700 line-height-3">Man kann sich darauf verlassen, dass ich meine Aufgaben
                            gewissenhaft und zuverlässig erledige.</span>
                    </div>
                    <div class="col-12 md:col-4 mb-4 px-5 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-calendar text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Diszipliniert</div>
                        <span class="text-700 line-height-3">Ich arbeite strukturiert und halte Deadlines sowie
                            Qualitätsstandards konsequent ein.</span>
                    </div>
                    <div class="col-12 md:col-4 mb-4 px-5 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-plus text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Logisches Denken</div>
                        <span class="text-700 line-height-3">Analytisches Denken liegt mir im Blut – Probleme sehe ich
                            eher als Herausforderungen, die es zu lösen gilt.</span>
                    </div>
                    <div class="col-12 md:col-4 md:mb-4 mb-0 px-3 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-wrench text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Problemlöser</div>
                        <span class="text-700 line-height-3">Wenn es technische Probleme gibt, finde ich schnell eine
                            Lösung, um alles wieder reibungslos zum Laufen zu bringen.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarBackground from './StarBackground.vue';

export default {
    name: 'About',
    components: {
        StarBackground,
    }
}
</script>

<style lang="scss" scoped></style>