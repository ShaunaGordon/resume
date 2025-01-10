<template>
  <section id="top">
      <header>
          <img class="avatar no-print" :src="basics?.image" />
          <h1 :title="basics?.pronouns.join('/')"><span class="no-print">I'm </span>{{  basics?.name }}</h1>
          <h2 class="no-print">{{ basics?.label }}</h2>
      </header>
      <nav>
          <ul class="print-only">
            <li>{{ basics?.email }}</li>
            <li>{{ basics?.phone }}</li>
            <li>{{ basics?.location?.city }}, {{ basics?.location?.region }}, {{ basics?.location?.countryCode }}</li>
          </ul>
          <ul>
              <li v-for="(item, i) in basics?.profiles" :key="i" :class="networks[item.network.toLowerCase()].print ? '' : 'no-print'">
                  <a :href="item.url" target="_blank">
                      <i :class="iconClass(item.network.toLowerCase())"></i> <span class="no-print">{{ item.network }}</span>
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
        icon: 'pencil-alt',
        print: true
    },
    github: {
        icon: 'github-alt',
        brand: true,
        print: true
    },
    gitlab: {
        icon: 'gitlab',
        brand: true,
        print: false
    },
    // {
    //     link: 'https://goo.gl/PXLSWi',
    //     icon: 'file-alt',
    //     text: 'Resume'
    // },
    linkedin: {
        icon: 'linkedin',
        brand: true,
        print: true
    },
    "slide decks": {
        icon: 'chalkboard-teacher',
        brand: false,
        print: false
    }
}

const iconClass = (network) => {
    const icon = networks[network].brand ? getFaBrandClass(networks[network].icon) : getFaClass(networks[network].icon)

    return `${icon} no-print`;
}
</script>
