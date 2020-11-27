<template>
  <v-navigation-drawer
    class="pa-3 pt-12"
    app
    permanent
    color="blue-grey lighten-1"
  >
    <div class="nav-drawer">
      <v-avatar
        size="164"
      >
        <v-img
          src="../assets/img/chris-profile.jpg"
          alt="Chris Bistline"
        />
      </v-avatar>

      <v-list
        rounded
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="rgb(255,255,255)"
          dark
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
    </div>
  </v-navigation-drawer>
</template>

<script>
  import { menuItems } from '../db/db.js'

  export default {
    name: 'NavigationDrawer',
    data: () => ({
      selectedItem: 0,
      items: menuItems,
    }),
  }
</script>

<style lang="scss" scoped>
.nav-drawer {
  text-align: center;
}
</style>
