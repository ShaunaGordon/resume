<template>
    <article :class="classes(isCurrent(item.endDate))">
        <header>
            <h3>{{ item.name }}</h3>
            <h4 v-if="item.entity">{{ item.entity }}</h4>
            <h4 v-if="item.startDate">
                <time :datetime="item.startDate">{{ item.startDate }}</time> - <span v-html="endDate"></span>
            </h4>
            <a v-if="item.source" :href="item.source" target="_blank"><i :class="getTechClass('git')"></i> <span>Source Code</span></a>
            <div v-if="item.volunteer" class="volunteer">Volunteering!</div>
        </header>
        <WorkCardBody v-if="isCurrent(item.endDate)" :item="item" />
        <details v-else>
            <summary>View Experience</summary>
            <WorkCardBody :item="item" />
        </details>
    </article>
</template>

<script setup>
import WorkCardBody from './WorkCardBody.vue';

import { useDateUtils } from '../../mixins/dateUtils';
const { isCurrent } = useDateUtils();

import { useIcons } from '../../mixins/icons';
const { getTechClass } = useIcons();

const { item } = defineProps(['item']);

const classes = (current) => `card ${current ? '' : 'old'}`;

const endDate = item.endDate ? `<time datetime="${ item.endDate }">${ item.endDate }</time>` : "Current"

</script>
