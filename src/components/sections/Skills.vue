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
import Donut from '../graphics/Donut.vue';

export default {
    components: {
        Donut
    },
    data() {
        return {
            skills: {
                general: {
                    php: 8,
                    ruby: 1,
                    sql: 10,
                    html: 10,
                    css: 10
                },
                paradigms: {
                    oop: 10,
                    functional: 1,
                    mvc: 10
                },
                devops: {
                    linux: 8,
                    macos: 4,
                    mysql: 8,
                    ansible: 3,
                    docker: 1,
                    forge: 1,
                    vagrant: 4
                },
                php: {
                    php7: 2,
                    php5: 8,
                    laravel: 4,
                    codeigniter: 3
                },
                javascript: {
                    vue: 1,
                    jquery: 5,
                    es6: 1
                },
                css: {
                    vanilla: 10,
                    sass: 4,
                    less: 2
                },
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
