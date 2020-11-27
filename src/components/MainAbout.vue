<template>
  <div class="d-flex flex-wrap">
    <div class="name mr-3">
      {{ firstName }}
    </div>
    <div class="name highlight ">
      {{ lastName }}
    </div>
  </div>
</template>

<script>
  import { aboutSection } from '../db/db.js'

  export default {
    name: 'AboutSection',
    data: () => ({
      firstName: aboutSection.firstName,
      lastName: aboutSection.lastName,
      address: aboutSection.address,
      phone: aboutSection.phone,
      email: aboutSection.email,
    }),
  }
</script>

<style lang="scss" scoped>
.name {
  text-transform: uppercase;
  font-family: "Saira Extra Condensed";
  color: black;
  font-size: 7rem;
  font-weight: 700;
  line-height: 6rem;
}
.highlight {
  color: lightslategray;
}
.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.5rem;
}
</style>
