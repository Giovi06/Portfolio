<template>
    <div>
        <div class="w-full h-16 flex justify-between items-center">
            <div class="ml-4 text-white text-lg font-bold"><a href="#" class="text-white">
                    <TypedLine text="Giovanni Innamorato" :start_trigger="lines_done[2]"
                        @done_typing="lines_done[3] = true" />
                </a></div>
            <div class="mr-4 flex">

                <a href="#" class="text-white ml-4">
                    <TypedLine text="Über mich" :start_trigger="true" @done_typing="lines_done[0] = true" />
                </a>
                <a href="#" class="text-white ml-4">
                    <TypedLine text="Projekte" :start_trigger="lines_done[0]" @done_typing="lines_done[1] = true" />
                </a>
                <a href="#" class="text-white ml-4">
                    <TypedLine text="Kontakt" :start_trigger="lines_done[1]" @done_typing="lines_done[2] = true" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import TypedLine from "./TypedLine.vue"

export default {
    name: 'Navbar',
    components: {
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