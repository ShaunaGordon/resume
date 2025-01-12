<template>
    <h1>{{ resume?.basics?.name }}</h1>
    <ul>
        <li>{{ resume?.basics?.email }}</li>
        <li>{{ resume?.basics?.phone }}</li>
        <li>{{ resume?.basics?.location.city }}, {{ resume?.basics?.location.region }}, {{ resume?.basics?.location.countryCode }}</li>
    </ul>
    <ul v-if="resume?.basics?.profiles.length > 0">
        <li v-for="(profile, i) in resume?.basics?.profiles" :key="i" v-if="networks[profile?.network.toLowerCase()]?.print">
            <i :class="getProfileIcon(profile?.network.toLowerCase())"></i>
            {{ profile?.url }}
        </li>
    </ul>
    <div v-if="resume?.basics?.summary" v-html="fromMarkdown(resume?.basics?.summary)"></div>
    <h2>Experience</h2>
    <div v-for="(job, i) in resume?.work" :key="i">
        <h3>{{ job.name }}</h3>
        <p>{{ job.entity }}</p>
        <p>{{ toWordMonthFormat(job.startDate) }} - {{ toWordMonthFormat(job.endDate) || 'Current' }}</p>
        <ul>
            <li v-for="(item, i) in job.highlights" :key="i" v-html="fromInlineMarkdown(item)"></li>
        </ul>
    </div>
    <h2>Projects</h2>
    <div v-for="(project, i) in resume?.projects" :key="i">
        <h3>{{ project.name }}</h3>
        <p>{{ project.entity }}</p>
        <p>{{ project.startDate }} - {{ project.endDate || 'Ongoing' }}</p>
        <ul>
            <li v-for="(item, i) in project.highlights" :key="i" v-html="fromInlineMarkdown(item)"></li>
        </ul>
    </div>
    <h2>Education</h2>
    <div v-for="(school, i) in resume?.education" :key="i">
        <h3>{{ school.institution }}</h3>
        <p>{{ school.studyType }}, {{ school.area }}</p>
        <p>Graduated {{ school.honors || null }} {{ school.endDate }}</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
const props = defineProps(['resume']);
import { useProfiles } from '../../mixins/profiles';
import { useMarkdown } from '../../mixins/markdown';
import { useDateUtils } from '../../mixins/dateUtils';

const { networks, getProfileIcon } = useProfiles();
const { fromMarkdown, fromInlineMarkdown } = useMarkdown();
const { toWordMonthFormat } = useDateUtils();

onMounted(() => {
    console.log(props.resume)
})
</script>

<style scoped>

</style>
