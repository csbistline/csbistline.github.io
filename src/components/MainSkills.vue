<template>
  <div
    :id="id"
    v-intersect="onIntersect"
    class="full-height"
  >
    <h2>SKILLS</h2>
    <h4 class="highlight">
      PROGRAMMING LANGUAGES & TOOLS
    </h4>
    <p class="lead accent-2">
      Hover over icons for more information
    </p>
    <div class="half">
      <BtnSkillIcon
        v-for="(item, index) in items"
        :key="index"
        :icon="item.icon"
        :text="item.altText"
      />
    </div>
  </div>
</template>

<script>
import { skillsSection } from "../db/db.js";
import BtnSkillIcon from "./BtnSkillIcon";

export default {
  name: "SkillsSection",
  components: {
    BtnSkillIcon
  },
  props: { id: { type: String, required: false, default: "skills" } },
  data: () => ({
    isIntersecting: false,
    items: skillsSection
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
<style>
.half {
  max-width: 450px;
}
</style>



