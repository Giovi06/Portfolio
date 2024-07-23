<template>
    <div>
        <!-- Dynamically render the component stored in `project.component` -->
        <component :is="project.component" />
    </div>
</template>

<script>
import ERP from "../components/projects/ERP.vue";

export default {
    name: 'ProjectDetailView',
    components: {
        ERP,
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            project: {},
        };
    },
    created() {
        // Define projects array within created hook
        const projects = [
            {
                title: 'ERP',
                description: 'Enterprise Resource Planning',
                image: '',
                component: ERP, // Directly reference the imported component
            },
            {
                title: 'ERP',
                description: 'Enterprise Resource Planning',
                image: '',
                component: ERP, // Directly reference the imported component
            },
            {
                title: 'ERP',
                description: 'Enterprise Resource Planning',
                image: '',
                component: ERP, // Directly reference the imported component
            },
            // Add other project objects as needed
        ];

        // Check if id is within the bounds of the projects array
        if (this.id >= 0 && this.id < projects.length) {
            this.project = projects[this.id];
        } else {
            console.error('Index out of bounds for projects array' + this.id);
        }
    },
}
</script>

<style lang="scss" scoped>
/* Add your scoped styles here */
</style>
