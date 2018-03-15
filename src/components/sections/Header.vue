<template>
  <section id="top">
      <header>
          <img class="avatar" src="img/bitmoji.png" />
          <h1>Shauna Gordon</h1>
      </header>
      <nav>
          <ul>
              <li v-for="(item, i) in nav" :key="i">
                  <a :href="item.link" target="_blank">
                      <i :class="item.brand ? getFaBrandClass(item.icon) : getFaClass(item.icon)"></i> {{ item.text }}
                  </a>
              </li>
          </ul>
      </nav>
  </section>
</template>

<script>
import icons from '../../mixins/icons';

export default {
    mixins: [icons],
    data() {
        return {
            nav: [
                {
                    link: 'http://shaunagordon.com/',
                    icon: 'pencil-alt',
                    text: 'Writings'
                },
                {
                    link: 'https://github.com/ShaunaGordon',
                    icon: 'github-alt',
                    text: 'GitHub',
                    brand: true
                },
                {
                    link: 'https://goo.gl/PXLSWi',
                    icon: 'file-alt',
                    text: 'Resume'
                },
                {
                    link: 'https://www.linkedin.com/in/gordondev/',
                    icon: 'linkedin',
                    text: 'LinkedIn',
                    brand: true
                }
            ]
        }
    }
}
</script>

<style lang="less">
    header {
        font-family: 'Forum', Helvetica, Arial, sans-serif;
    }

    h1 {
        font-size: 6rem;
        margin-top: 1rem;
    }

    .avatar {
        max-width: 300px;
    }

    nav {
        padding-bottom: 2rem;

        ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, 15rem);
            justify-content: space-between;

            li {
                list-style-type: none;
                padding: 10px 0px 10px 0px;
                text-align: center;
            }
        }
    }
</style>
