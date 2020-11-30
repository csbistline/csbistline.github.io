<template>
  <div id="about">
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2 mt-12"
          fab
          elevation="0"
          fixed
          right
          dark
          color="#5BB7DE"
          v-bind="attrs"
          v-on="on"
        >
          <v-app-bar-nav-icon />
        </v-btn>
      </template>

      <v-list
        dense
        rounded
      >
        <v-list-item-group
          v-model="selectedItem"
          color="black"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="scroll(item.anchor, options)"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { menuItems } from "../db/db.js";

export default {
  name: "NavigationBar",
  data: () => ({
    selectedItem: 0,
    items: menuItems,
    duration: 1000,
    offset: 48,
    easing: "easeInOutCubic"
  }),
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  },
  methods: {
    scroll(anchor, options) {
      this.$vuetify.goTo(anchor, options);
    }
  }
};
</script>

