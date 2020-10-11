<template>
    <section id="publications">
        <header>
            <h2>Publications</h2>
            <p>I like to write about the things I do and share what I know and learn with others. Aside from my own blog, I occassionally have articles in other publications.</p>
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
