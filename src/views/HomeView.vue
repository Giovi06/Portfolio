<template>
    <div class="w-full h-screen relative bg-gray-900 overflow-hidden">
        <Background class="z-0 absolute w-full h-screen top-0 left-0" />
        <div class="relative flex flex-col justify-center items-center z-1 w-full h-screen text-center text-white">
            <TypedLine class="z-1 relative text-6xl md:text-9xl font-bold mb-4" text="Willkommen" :start_trigger="true"
                @done_typing="lines_done[0] = true" />
            <TypedLine class="z-1 relative text-3xl md:text-5xl mb-4" text="Mein Name ist Giovanni Innamorato"
                :start_trigger="lines_done[0]" @done_typing="lines_done[1] = true" />
            <TypedLine class="z-1 relative text-lg md:text-3xl italic"
                text="Wenn du mehr über mich erfahren möchtest, dann bist du hier genau richtig."
                :start_trigger="lines_done[1]" @done_typing="lines_done[2] = true" />
        </div>
    </div>
</template>

<script>
import Background from "../components/StaticFlowFieldBackground.vue"
import TypedLine from "../components/TypedLine.vue"
export default {
    name: 'HomeView',
    components: {
        Background,
        TypedLine
    },
    data() {
        return {
            lines_done: {},
        }
    },
}
</script>

<style lang="scss" scoped></style>