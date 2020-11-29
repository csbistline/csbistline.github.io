<template>
  <div
    :id="id"
    v-intersect="onIntersect"
    class="full-height"
  >
    <h2>EDUCATION</h2>
    <div
      v-for="(item, index) in items" 
      :key="index"
    >
      <ModuleExperience 
        :title="item.title"
        :company="item.company"
        :city="item.city"
        :dates="item.dates"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script>
import ModuleExperience from "./ModuleExperience";
import { educationSection } from "../db/db.js";

export default {
  name: "EducationSection",
  components: {
    ModuleExperience
  },
  props: { id: { type: String, required: false, default: "education" } },
  data: () => ({
    isIntersecting: false,
    items: educationSection
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


