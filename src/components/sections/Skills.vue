<template>
  <section id="skills">
      <header>
          <h2>Skills</h2>
      </header>
      <article class="donuts">
          <donut v-for="(value, key) in skills" :name="key" :items="value" :key="key"></donut>
      </article>
  </section>
</template>

<script>
import Donut from '../support/Donut.vue';

export default {
    components: {
        Donut
    },
    data() {
        return {
            skills: {
                general: {
                    php: 10,
                    ruby: 1,
                    python: 2,
                    sql: 10,
                    html: 12,
                    css: 12,
                    js: 10
                },
                paradigms: {
                    oop: 12,
                    functional: 1,
                    mvc: 12
                },
                devops: {
                    linux: 10,
                    macos: 6,
                    ansible: 4,
                    docker: 3,
                    forge: 1,
                    vagrant: 4
                },
                php: {
                    php7: 4,
                    php5: 8,
                    laravel: 5
                },
                javascript: {
                    vue: 3,
                    react: 1,
                    node: 1,
                    es6: 3,
                    jest: 3,
                    webpack: 3
                },
                css: {
                    vanilla: 12,
                    sass: 6,
                    less: 3
                }
            }
        }
    }
}
</script>

<style scoped>
    .donuts {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 330px));
        align-items: center;
        justify-content: space-around;
    }
</style>
