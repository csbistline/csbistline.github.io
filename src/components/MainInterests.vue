<template>
  <div
    :id="id"
    v-intersect="onIntersect"
    class="full-height"
  >
    <h2>Interests</h2>
    <p class="lead">
      {{ items.description }}
    </p>
  </div>
</template>

<script>
import { interestSection } from "../db/db.js";

export default {
  name: "InterestSection",
  components: {},
  props: { id: { type: String, required: false, default: "interests" } },
  data: () => ({
    isIntersecting: false,
    items: interestSection
  }),
  methods: {
    onIntersect(entries) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting;
      if (this.isIntersecting) {
        this.$emit("changeMenu", `#${this.id}`);
      }
    }
  }
};
</script>


