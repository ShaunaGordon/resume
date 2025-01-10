<template>
  <section id="experience">
    <header>
      <h2>Work Experience</h2>
      <p class="no-print">This provides the most recent history. For a full employment history, <a :href="(getProfile('linkedin', basics.profiles)).url" target="_blank">see my LinkedIn profile</a>.</p>
    </header>
    <section class="cardholder">
        <WorkCard v-for="(job, i) in work" :item="job" :key="i" />
    </section>
    <footer>

    </footer>
  </section>
</template>

<script setup>
import WorkCard from '../support/WorkCard.vue';

import { useProfiles } from '../../mixins/profiles';
const { getProfile } = useProfiles();

const { work, basics } = defineProps(['work', 'basics']);
</script>
