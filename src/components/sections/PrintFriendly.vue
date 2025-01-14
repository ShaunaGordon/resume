<template>
    <h1>{{ resume?.basics?.name }}</h1>
    <ul class="horiz">
        <li>{{ resume?.basics?.email }}</li>
        <li>{{ resume?.basics?.phone }}</li>
        <li>{{ resume?.basics?.location.city }}, {{ resume?.basics?.location.region }}, {{ resume?.basics?.location.countryCode }}</li>
    </ul>

    <ul class="links horiz" v-if="resume?.basics?.profiles.length > 0">
        <li v-for="(profile, i) in resume?.basics?.profiles"
            :key="i"
        >
            <i :class="getProfileIcon(profile?.network.toLowerCase())" v-if="networks[profile?.network.toLowerCase()]?.print"></i>
            <span v-if="networks[profile?.network.toLowerCase()]?.print">{{ profile?.url }}</span>
        </li>
    </ul>

    <div v-if="resume?.basics?.summary" v-html="fromMarkdown(resume?.basics?.summary)" class="summary"></div>

    <h2 class="section-title">Skills</h2>
    <ul>
        <li></li>
    </ul>

    <h2 class="section-title">Experience</h2>
    <div v-for="(job, i) in resume?.work" :key="i" class="job-entry">
        <h3 class="job-title">{{ job.name }}</h3>
        <div class="company-line">
            <span class="company">{{ job.entity }}</span>
            <span class="date">{{ toWordMonthFormat(job.startDate) }} - {{ toWordMonthFormat(job.endDate) || 'Present' }}</span>
        </div>
        <ul>
            <li v-for="(item, i) in job.highlights"
                :key="i"
                v-html="fromInlineMarkdown(item)">
            </li>
        </ul>
    </div>

    <h2 class="section-title">Projects</h2>
    <div v-for="(project, i) in resume?.projects" :key="i" class="project-entry">
        <h3>{{ project.name }}</h3>
        <div class="company-line">
            <span class="company">{{ project.entity }}</span>
            <span class="date">{{ toWordMonthFormat(project.startDate) }} - {{ toWordMonthFormat(project.endDate) || 'Ongoing' }}</span>
        </div>
        <ul>
            <li v-for="(item, i) in project.highlights" :key="i" v-html="fromInlineMarkdown(item)"></li>
        </ul>
    </div>

    <h2 class="section-title">Education</h2>
    <div v-for="(school, i) in resume?.education" :key="i" class="education-entry">
        <h3 class="school">{{ school.institution }}</h3>
        <p>{{ school.studyType }}, {{ school.area }}</p>
        <p>Graduated {{ school.honors ? `with ${school.honors} ` : '' }}{{ school.endDate }}</p>
    </div>

</template>

<script setup>
const props = defineProps(['resume']);
import { useProfiles } from '../../utils/profiles';
import { useMarkdown } from '../../utils/markdown';
import { useDateUtils } from '../../utils/dateUtils';

const { networks, getProfileIcon } = useProfiles();
const { fromMarkdown, fromInlineMarkdown } = useMarkdown();
const { toWordMonthFormat } = useDateUtils();
</script>

<style scoped>

</style>
