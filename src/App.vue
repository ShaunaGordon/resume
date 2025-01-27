<template>
    <div class="screen">
        <header-section v-if="resume.basics" :basics="resume.basics"></header-section>
        <intro-section v-if="resume.basics" :data="resume.basics"></intro-section>

        <work-section v-if="resume.work" :work="resume.work" :basics="resume.basics"></work-section>

        <projects-section v-if="resume.projects" :projects="resume.projects"></projects-section>

        <publications-section v-if="resume.publications" :publications="resume.publications"></publications-section>

        <education-section v-if="resume.education" :schools="resume.education"></education-section>

        <hire-me v-if="resume.basics" :basics="resume.basics"></hire-me>
    </div>
    <div class="print">
        <print-friendly :resume="resume"></print-friendly>
    </div>
</template>

<script setup>
/*
  Having the different sections as separate components is mostly a stylistic
  decision, though it does also make maintenance a bit easier. By having each
  section in its own component, we're able to add or remove components as needed
  or desired. It also made it easier to update the page one section at a time
  when switching from Vue 2 to Vue 3.

  "Section" is tacked onto the name of most of them, because Vue now requires
  components to be two words to avoid colliding with HTML tag names, but the
  components were created a while ago, and I don't actually like having to tack on
  a repetitive word like that, so we just alias it here, and leave the file names alone.
*/
import { onBeforeMount, ref } from 'vue';
import EducationSection from './components/sections/Education.vue';
import HeaderSection from './components/sections/Header.vue';
import HireMe from './components/sections/HireMe.vue';
import IntroSection from './components/sections/Intro.vue';
import PrintFriendly from './components/sections/PrintFriendly.vue';
import ProjectsSection from './components/sections/Projects.vue';
import PublicationsSection from './components/sections/Publications.vue';
import WorkSection from './components/sections/Experience.vue';

import { resumes, getResume } from './utils/loadResume.js';

const resume = ref({});

onBeforeMount(() => {
  /*
    We load the resume data before mount, because of the asynchronous nature of
    the loading method. This gives us the earliest possible loading point for the
    initial data, minimizing the amount of time the page doesn't show anything.
    Since it's all text, this should make this loading process invisible to all
    but the slowest connections, or nearly so.
  */
  getResume(resumes.engineering).then(result => resume.value = result);
});

</script>
