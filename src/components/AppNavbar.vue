<template>
  <div>
    <v-app-bar color="blue accent-2" dense dark flat>
      <v-toolbar-title>Chris Bistline - Developer</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu right bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-app-bar-nav-icon />
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
</style>