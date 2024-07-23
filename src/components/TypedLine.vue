<template>
    <div class="flex ">
        {{ text_shown }}
        <div v-if="show_blinker" class="bg-gray-900 px-1 ml-1"></div>
    </div>
</template>

<script>
export default {
    name: 'TypedLine',
    props: {
        text: {
            type: String,
            required: true
        },
        start_trigger: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            min_typing_delay: 35,
            max_typing_delay: 45,
            text_shown: "",

            blinking_duration: 400,
            show_blinker: false
        }
    },
    methods: {
        startBlinker() {
            this.show_blinker = !this.show_blinker;
            if (this.text.length > this.text_shown.length) {
                setTimeout(() => {
                    this.startBlinker();
                }, this.blinking_duration);
            } else {
                this.show_blinker = false;

                this.$emit('done_typing');
            }
        },
        async startTypingText() {
            let text = this.text;
            let text_shown = "";

            while (!this.start_trigger) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }

            this.startBlinker();
            this.typeText(text, text_shown);
        },
        typeText(text, text_shown) {
            if (text.length > text_shown.length) {
                text_shown += text.charAt(text_shown.length);
                this.text_shown = text_shown;
                setTimeout(() => {
                    this.typeText(text, text_shown);
                }, Math.floor(Math.random() * (this.max_typing_delay - this.min_typing_delay + 1) + this.min_typing_delay));
            }
        }
    },
    mounted() {
        this.startTypingText();
    }
}
</script>

<style lang="scss" scoped></style>