<template>
    <div>
        <div class="w-full h-16 flex justify-between items-center bg-black bg-opacity-20 transition-opacity">
            <div class="ml-4 text-white text-lg font-bold">
                <RouterLink :to="{ name: 'home' }" class="text-white hover:underline">
                    <TypedLine text="Giovanni Innamorato" :start_trigger="lines_done[2]"
                        @done_typing="lines_done[3] = true" />
                </RouterLink>
            </div>
            <div class="mr-4 flex">
                <RouterLink :to="{ name: 'about' }" class="text-white ml-4 hover:underline">
                    <TypedLine text="Über mich" :start_trigger="true" @done_typing="lines_done[0] = true" />
                </RouterLink>
                <RouterLink :to="{ name: 'projects' }" class="text-white ml-4 hover:underline">
                    <TypedLine text="Projekte" :start_trigger="lines_done[0]" @done_typing="lines_done[1] = true" />
                </RouterLink>
                <RouterLink :to="{ name: 'contact' }" class="text-white ml-4 hover:underline">
                    <TypedLine text="Kontakt" :start_trigger="lines_done[1]" @done_typing="lines_done[2] = true" />
                </RouterLink>
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