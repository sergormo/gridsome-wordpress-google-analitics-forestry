<template>
  <div>
    <h2 v-html="post.title" />
    <img
      v-if="post.featuredMedia"
      :src="post.featuredMedia.sourceUrl"
      :width="post.featuredMedia.mediaDetails.width"
      :alt="post.featuredMedia.altText"
    />
    <div v-html="post.excerpt" />
    <g-link :to="post.path">
      Read More
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
