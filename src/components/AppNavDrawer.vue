<template>
  <div class="Aligner">
    <div class="Aligner-item">
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

          <div class="text-center name">
            CHRIS
            BISTLINE
          </div>
          <div class="light-name">
            WEB DEVELOPER
          </div>

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
    </div>
  </div>
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

.name {
  margin-top: 1rem;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.75rem;
}

.light-name {
  margin-bottom: 0.5rem;
  color: rgb(26, 218, 20);
  font-weight: 600;
}

.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aligner-item {
  max-width: 50%;
}

.Aligner-item--top {
  align-self: flex-start;
}

.Aligner-item--bottom {
  align-self: flex-end;
}
</style>
