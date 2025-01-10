<template>
  <section id="top">
      <header>
          <img class="avatar" :src="basics?.image" />
          <h1 :title="basics?.pronouns.join('/')"><span">I'm </span>{{  basics?.name }}</h1>
          <h2>{{ basics?.label }}</h2>
      </header>
      <nav>
          <ul>
              <li v-for="(item, i) in basics?.profiles" :key="i" :class="networks[item.network.toLowerCase()].print ? '' : 'no-print'">
                  <a :href="item.url" target="_blank">
                      <i :class="iconClass(item.network.toLowerCase())"></i>{{ item.network }}
                  </a>
              </li>
          </ul>
      </nav>
  </section>
</template>

<script setup>
import { useIcons } from '../../mixins/icons';

const { getFaBrandClass, getFaClass } = useIcons();

const { basics } = defineProps(['basics']);

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

const iconClass = (network) => {
    const icon = networks[network].brand ? getFaBrandClass(networks[network].icon) : getFaClass(networks[network].icon)

    return `${icon} no-print`;
}
</script>
