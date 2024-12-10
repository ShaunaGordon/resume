<template>
  <section id="experience">
    <header>
      <h2>Experience</h2>
      <p>This provides the most recent history. For a full employment history, <a :href="(getProfile('linkedin', basics.profiles)).url" target="_blank">see my LinkedIn profile</a>.</p>
    </header>
    <section class="cardholder">
      <article v-for="(job, i) in work" class="card" :key="i">
        <header>
          <h3>{{ job.position }}</h3>
          <h4>{{ job.name }}</h4>
          <h4>{{ job.startDate }} - {{ job.endDate || 'Current' }}</h4>
        </header>
        <section v-if="job.tech">
          <ul class="tech">
            <li v-for="(t, i) in job.tech" :key="i"><i :class="getTechClass(i)"></i> {{ t }}</li>
          </ul>
        </section>
        <section class="info" v-if="isCurrent(job.endDate)" v-html="job.summary">
        </section>
        <section class="highlights" v-if="job.highlights && isCurrent(job.endDate)">
            <ul>
                <li v-for="(item, i) in job.highlights" :key="i">{{ item }}</li>
            </ul>
        </section>
      </article>
    </section>
    <footer>

    </footer>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import { useIcons } from '../../mixins/icons';
import { useProfiles } from '../../mixins/profiles';

const { work, basics } = defineProps(['work', 'basics']);
const { getTechClass } = useIcons();
const { getProfile } = useProfiles();

const isCurrent = (date) => !date || Date.parse(date) >= Date.parse((new Date()).getFullYear() - 5);
</script>
