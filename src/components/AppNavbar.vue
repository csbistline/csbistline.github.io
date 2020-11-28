<template>
  <div>
    <v-app-bar
      color="blue-grey lighten-1"
      dark
    >
      <v-avatar
        size="36"
        class="mr-2"
      >
        <v-img
          src="../assets/img/chris-profile.jpg"
          alt="Chris Bistline"
        />
      </v-avatar>

      <v-spacer />
      <v-menu
        right
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-app-bar-nav-icon />
          </v-btn>
        </template>

        <v-list
          rounded
          dense
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
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
  import { menuItems } from '../db/db.js'

  export default {
    name: 'NavigationBar',
    data: () => ({
      items: menuItems,
    }),
  }
</script>

