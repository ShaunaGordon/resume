<template>
  <section id="top">
      <header>
          <img class="avatar" :src="data?.image" />
          <h1>I'm {{  data?.name }}</h1>
          <h2>{{ data?.label }}</h2>
      </header>
      <nav>
          <ul>
              <li v-for="(item, i) in data?.profiles" :key="i">
                  <a :href="item.url" target="_blank">
                      <i :class="networks[item.network.toLowerCase()].brand ? getFaBrandClass(networks[item.network.toLowerCase()].icon) : getFaClass(networks[item.network.toLowerCase()].icon)"></i> {{ item.network }}
                  </a>
              </li>
          </ul>
      </nav>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import { useIcons } from '../../mixins/icons';

const {getFaBrandClass, getFaClass} = useIcons();

const props = defineProps(['data']);

const networks = {
    blog: {
        brand: false,
        icon: 'pencil-alt'
    },
    github: {
        icon: 'github-alt',
        brand: true
    },
    gitlab: {
        icon: 'gitlab',
        brand: true
    },
    // {
    //     link: 'https://goo.gl/PXLSWi',
    //     icon: 'file-alt',
    //     text: 'Resume'
    // },
    linkedin: {
        icon: 'linkedin',
        brand: true
    },
    "slide decks": {
        icon: 'chalkboard-teacher',
        brand: false
    }
}
</script>

<style>
    header {
        font-family: 'Forum', Helvetica, Arial, sans-serif;
    }

    h1 {
        font-size: 6rem;
        margin-top: 1rem;
        margin-bottom: .5rem;
    }

    .avatar {
        max-width: 300px;
    }

    nav {
        padding-bottom: 1.25rem;

        ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, 10rem);
            justify-content: space-between;

            li {
                list-style-type: none;
                text-align: center;
            }
        }
    }
</style>
