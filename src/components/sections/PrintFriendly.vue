<template>
    <h1>{{ resume?.basics?.name }}</h1>
    <ul class="horiz">
        <li>{{ resume?.basics?.email }}</li>
        <li>{{ resume?.basics?.phone }}</li>
        <li>{{ resume?.basics?.location.city }}, {{ resume?.basics?.location.region }}, {{ resume?.basics?.location.countryCode }}</li>
    </ul>
    <ul class="horiz" v-if="resume?.basics?.profiles.length > 0">
        <li v-for="(profile, i) in resume?.basics?.profiles"
            :key="i"
        >
            <i :class="getProfileIcon(profile?.network.toLowerCase())" v-if="networks[profile?.network.toLowerCase()]?.print"></i>
            <span v-if="networks[profile?.network.toLowerCase()]?.print">{{ profile?.url }}</span>
        </li>
    </ul>

    <div v-if="resume?.basics?.summary" v-html="fromMarkdown(resume?.basics?.summary)"></div>

    <!-- <h2>Key Skills</h2>
    <ul>
        <li></li>
    </ul> -->

    <h2>Experience</h2>
    <div v-for="(job, i) in resume?.work" :key="i">
        <h3>{{ job.name }}</h3>
        <p>{{ job.entity }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <time :datetime="job.startDate">{{ toWordMonthFormat(job.startDate) }}</time> - <span v-html="endDate(job.endDate, 'Present')"></span>
            <ul>
                <li v-for="(item, i) in job.highlights" :key="i" v-html="fromInlineMarkdown(item)"></li>
            </ul>
        </p>
    </div>

    <h2>Projects</h2>
    <div v-for="(project, i) in resume?.projects" :key="i">
        <h3>{{ project.name }}</h3>
        <p>{{ project.entity }}</p>
        <p class="dates"><time :datetime="project.startDate">{{ toWordMonthFormat(project.startDate) }}</time> - <span v-html="endDate(project.endDate, 'Ongoing')"></span></p>
        <ul>
            <li v-for="(item, i) in project.highlights" :key="i" v-html="fromInlineMarkdown(item)"></li>
        </ul>
    </div>

    <h2>Education</h2>
    <div v-for="(school, i) in resume?.education" :key="i">
        <h3>{{ school.institution }}</h3>
        <p>{{ school.studyType }}, {{ school.area }}</p>
        <p>Graduated {{ school.honors || null }} <time :datetime="school.endDate">{{ school.endDate }}</time></p>
    </div>
</template>

<script setup>
const props = defineProps(['resume']);
import { useProfiles } from '../../mixins/profiles';
import { useMarkdown } from '../../mixins/markdown';
import { useDateUtils } from '../../mixins/dateUtils';

const { networks, getProfileIcon } = useProfiles();
const { fromMarkdown, fromInlineMarkdown } = useMarkdown();
const { toWordMonthFormat } = useDateUtils();

const endDate = (input, current) => input ? `<time datetime="${ input }">${ toWordMonthFormat(input) }</time>` : current;
</script>

<style scoped>

</style>
