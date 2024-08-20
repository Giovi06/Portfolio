<template>
    <div class="w-full h-screen relative bg-gray-800 text-white flex flex-col items-center">
        <MovingFlowFieldBackground class="z-0 fixed w-full h-auto" />
        <div class="relative flex flex-col justify-center items-center z-1 w-full h-screen text-center text-white">
            <TypedLine class="z-1 relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                text="Kontaktiere Mich" :start_trigger="true" @done_typing="lines_done[0] = true" />

            <ul class="list-none p-0 m-0 mt-6 text-white">
                <li class="flex items-center mb-3 justify-center md:justify-start">
                    <i class="pi pi-linkedin mr-2"></i>
                    <a href="https://www.linkedin.com/in/giovanni-innamorato/">
                        <TypedLine class="text-lg" text="Giovanni Innamorato" :start_trigger="lines_done[0]"
                            @done_typing="lines_done[1] = true" />
                    </a>
                </li>
                <li class="flex items-center justify-center md:justify-start">
                    <i class="pi pi-inbox mr-2"></i>
                    <a href="mailto:gi@innamorato.ch?subject=Kontaktaufnahme über die Webseite">
                        <TypedLine class="text-lg" text="gi@innamorato.ch" :start_trigger="lines_done[1]"
                            @done_typing="lines_done[2]" />
                    </a>
                </li>
            </ul>
        </div>
        <!-- Maybe embed here From to contact me with Google Sheets -->
    </div>
</template>

<script>
import MovingFlowFieldBackground from '../components/MovingFlowFieldBackground.vue';
import TypedLine from '../components/TypedLine.vue';

export default {
    name: 'ContactView',
    components: {
        MovingFlowFieldBackground,
        TypedLine
    },
    data() {
        return {
            lines_done: {},
        }
    },
}
</script>