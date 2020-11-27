<template>
  <div>
    <v-menu >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2 mt-12"
          fab
          elevation="0"
          absolute
          right
          dark
          color="anyColor"
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
          color="grey"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
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
  import { menuItems } from '../db/db.js'

  export default {
    name: 'NavigationBar',
    data: () => ({
      items: menuItems,
      selectedItem: 0,
    }),
  }
</script>

<style lang="sass" scoped>
</style>
