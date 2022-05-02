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
                    sql: 12,
                    html: 15,
                    css: 15,
                    js: 12
                },
                paradigms: {
                    oop: 12,
                    functional: 1,
                    mvc: 12
                },
                devops: {
                    linux: 14,
                    macos: 8,
                    ansible: 4,
                    docker: 5,
                    vagrant: 4
                },
                php: {
                    php7: 4,
                    php5: 8,
                    laravel: 5
                },
                javascript: {
                    vue: 3,
                    react: 2,
                    node: 3,
                    es6: 5,
                    jest: 5,
                    webpack: 5
                },
                css: {
                    vanilla: 15,
                    sass: 7,
                    less: 4
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
