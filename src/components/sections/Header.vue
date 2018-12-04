<template>
  <section id="top">
      <header>
          <img class="avatar" src="img/avatar.png" />
          <h1>I'm Shauna Gordon</h1>
          <h2>And I Make Things</h2>
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
                    text: 'Blog'
                },
                {
                    link: 'https://github.com/ShaunaGordon',
                    icon: 'github-alt',
                    text: 'GitHub',
                    brand: true
                },
                {
                    link: 'https://gitlab.com/shauna',
                    icon: 'gitlab',
                    text: 'GitLab',
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
        margin-bottom: .5rem;
    }

    .avatar {
        max-width: 300px;
    }

    nav {
        padding-bottom: 1.25rem;

        ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, 15rem);
            justify-content: space-between;

            li {
                list-style-type: none;
                text-align: center;
            }
        }
    }
</style>
