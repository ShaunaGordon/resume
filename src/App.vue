<template>
    <header-section v-if="resume.basics" :basics="resume.basics"></header-section>
    <intro-section v-if="resume.basics" :data="resume.basics"></intro-section>

    <work-section v-if="resume.work" :work="resume.work" :basics="resume.basics"></work-section>

    <projects-section v-if="resume.projects" :projects="resume.projects"></projects-section>

    <publications-section v-if="resume.publications" :publications="resume.publications"></publications-section>

    <hire-me v-if="resume.basics" :basics="resume.basics"></hire-me>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import HeaderSection from './components/sections/Header.vue';
import HireMe from './components/sections/HireMe.vue';
import IntroSection from './components/sections/Intro.vue';
import ProjectsSection from './components/sections/Projects.vue';
import PublicationsSection from './components/sections/Publications.vue';
import WorkSection from './components/sections/Experience.vue';

import { resumes, getResume } from './loadResume.js';

const resume = ref({});

onBeforeMount(() => {
    getResume(resumes.engineering).then(result => resume.value = result);
});

</script>
