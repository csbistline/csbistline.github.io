<template>
  <v-row>
    <v-col
      cols="12"
      sm="8"
    > 
      <h3> {{ title }} </h3>
      <h4 class="highlight">
        {{ company }}
      </h4>
      <p class="lead">
        {{ description }}
      </p>
    </v-col>
    <v-col
      cols="12"
      sm="4"
    >
      <p class="accent-2">
        {{ dates }}
        <br>
        {{ city }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ExperienceModule",
  props: {
    title: { type: String, default: "" },
    company: { type: String, default: "" },
    city: { type: String, default: "" },
    dates: { type: String, default: "" },
    description: { type: String, default: "" }
  },
  data: () => ({}),
  computed: {}
};
</script>
