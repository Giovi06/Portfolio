<template>
    <div>
        <component :is="svg" />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    name: 'SvgLoader',
    props: {
        name: {
            type: String,
            required: true
        },
    },
    beforeMount() {
        this.svg = defineAsyncComponent(() => import(`../assets/svg/${this.name}.svg`));
    },
}
</script>