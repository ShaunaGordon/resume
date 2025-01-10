<template>
    <section id="projects">
        <header>
            <h2>Projects</h2>
            <p class="no-print">Due to the nature of my primary work (both technically and legally), I rarely have the luxury of portfolio projects from my paid work. The below are descriptions of significant projects I've done at work, and samples that I've done in my spare time.</p>
            <p class="no-print">At any given point in time, I may have other projects that I can demonstrate on an individual basis, but that aren't yet publicly available. They are available upon request after we've had a discussion or two. I'm also willing to do certain types of interview projects if desired.</p>
        </header>
        <section class="cardholder">
            <WorkCard v-for="(project, i) in projects" class="card" :key="i" :item="project" />
        </section>
    </section>
</template>

<script setup>
import WorkCard from '../support/WorkCard.vue';

const { projects } = defineProps(['projects']);
</script>
