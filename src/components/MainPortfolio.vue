<template>
  <div
    :id="id"
    v-intersect="onIntersect"
    class="full-height"
  >
    <h2>Portfolio</h2>
    <h4 class="pt-3 highlight">
      WEB DEVELOPMENT
    </h4>

    <v-carousel
      cycle
      interval="4000"
      class="carousel-width"
    >
      <div
        v-for="(item, i) in items"
        :key="i"
      >
        <v-carousel-item
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-sheet
            color="rgb(0,0,0,0)"
            height="100%"
            tile
            @click="openLink(item.link)"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-col
                cols="8"
                align="center"
              >
                <h2 class="shadow">
                  {{ item.title }}
                </h2>
                <p class="description shadow">
                  {{ item.description }}
                </p>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </div>
    </v-carousel>
  </div>
</template>

<script>
import { portfolioSection } from "../db/db.js";

export default {
  name: "PortfolioSection",
  components: {},
  props: { id: { type: String, required: false, default: "portfolio" } },
  data: () => ({
    isIntersecting: false,
    items: portfolioSection
  }),
  methods: {
    onIntersect(entries) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting;
      if (this.isIntersecting) {
        this.$emit("changeMenu", `#${this.id}`);
      }
    },
    openLink(link) {
      window.open(link);
    }
  }
};
</script>


