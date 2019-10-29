<template>
  <Layout>
    <section class="info__blurb">
      <div v-html="data.description"></div>
      <div v-html="data.cta"></div>
      <ul>
        <li>
          <p>
            <a :href="`mailto:${data.contact.email}`">
              Email: {{ data.contact.email }}
            </a>
          </p>
        </li>
        <li>
          <p>
            <a :href="`https://twitter.com/${data.contact.twitter_handle}`">
              Twitter: @{{ data.contact.twitter_handle }}
            </a>
          </p>
        </li>
        <li>
          <p>
            <a :href="`https://github.com/${data.contact.github_handle}`">
              Github: {{ data.contact.github_handle }}
            </a>
          </p>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
  export default {
    metaInfo() {
      return {
        title: "Info",
      };
    },
    computed: {
      data: function() {
        return this.$page.metaData.infoData;
      }
    }
  };
</script>

<page-query>
  query getInfoPageData {
    metaData {
      infoData {
        description
        cta
        contact {
          email
          twitter_handle
          github_handle
        }
        background_color
        text_color
      }
    }
  }
</page-query>

<style lang="scss">
  .is-info {
    .theme--light.v-tabs > .v-tabs-bar {
      background-color: transparent;
      .v-tab {
        color: white !important;
      }
    }
    .v-icon.v-icon.v-icon--link {
      color: white !important;
    }
  }
  .info__blurb {
    max-width: 600px;

    padding: 1.5rem 1.25rem;
    border: none;
    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    .info__blurb {
      border: 1px solid white;
      margin: 100px auto 0 auto;
      padding: 2rem;
    }
  }

  @media (min-width: 1440px) {
    .info__blurb {
      padding: 3rem;
    }
  }
</style>
