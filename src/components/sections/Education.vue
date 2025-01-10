<template>
    <section id="education">
        <header>
            <h2>Education</h2>
        </header>
        <section class="cardholder">
            <article class="card" v-for="(school, i) in schools" :key="i">
                <header>
                    <h3>{{ school.institution }}</h3>
                    <p>{{ school.studyType }}, {{ school.area }}</p>
                    <p>Graduated <span v-if="school.honors">{{ school.honors }}</span> {{ school.endDate }}</p>
                </header>
            </article>
        </section>
    </section>
</template>

<script setup>
const { schools } = defineProps(['schools']);
</script>

<style scoped>

</style>
