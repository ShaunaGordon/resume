<template>
    <section id="publications">
        <header>
            <h2>Talks &amp; Publications</h2>
            <p>I like to write about the things I do and share what I know and learn with others. Aside from my own blog, I occassionally have articles in other publications.</p>
            <p>Very occassionally, I also do a little public speaking. The slide decks are linked here, unless a video is available.</p>
        </header>
        <section class="cardholder">
            <article v-for="(pub, i) in publications" class="card" :key="i">
                <header>
                    <h3>{{ pub.title }}</h3>
                    <a :href="pub.link" target="_blank"><h4>{{ pub.publication }}</h4></a>
                </header>
                <section>
                    <ul class="tech">
                        <li v-for="(t, i) in pub.tech" :key="i"><i :class="getTechClass(i)"></i> {{ t }}</li>
                    </ul>
                </section>
                <section v-html="pub.info">
                </section>
            </article>
        </section>
    </section>
</template>

<script>
import icons from '../../mixins/icons';

export default {
    mixins: [icons],
    data() {
        return {
            publications: [
                {
                    title: 'A Docker-Compose PHP Environment From Scratch',
                    publication: 'X-Team Blog',
                    tech: {
                        php: 'PHP',
                        docker: 'Docker',
                        linux: 'Linux',
                        mysql: 'MariaDB',
                        nginx: 'Nginx'
                    },
                    link: 'https://x-team.com/blog/docker-compose-php-environment-from-scratch/',
                    info: `<p>In this tutorial, I go through the process of setting up a Docker cluster-based environment for PHP development using Docker-Compose. The cluster includes nodes for Nginx, php-fpm, and MariaDB.</p>
                    `
                },
                {
                    title: 'Effective Communication While Freelancing',
                    publication: 'Gun.io Blog',
                    link: 'https://www.gun.io/blog/effective-communication-while-freelancing',
                    info: '<p>In this article, I discuss establishing and maintaining an effective line of communication with clients.</p>'
                },
                {
                    title: 'From Git To Github - An Introduction to Version-Controlled and Collaborative Development',
                    publication: 'Women In Analytics, Feb 2021',
                    link: 'https://talks.shaunagordon.com/git-to-github',
                    info: '<p>This talk and live tutorial provided attendees a crash course in enough Git and Github to get them up and running in open source contribution.</p>'
                }
            ]
        }
    },
    methods: {

    }
}
</script>

<style scoped>
a span {
    border-bottom: 1px dotted;
}
</style>
