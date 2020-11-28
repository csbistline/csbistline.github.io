<template>
  <div>
    <!-- NAME LINE -->
    <div class="d-flex flex-wrap">
      <div class="name mr-3">
        {{ firstName }}
      </div>
      <div class="name highlight">
        {{ lastName }}
      </div>
    </div>

    <!-- CONTACT INFO LINE  -->
    <div class="d-flex flex-wrap">
      <div class="subheading mr-4">
        {{ address }}
      </div>
      <div class="subheading  mr-4">
        <a
          :href="`mailto:${email}`"
          class="accent-2 no-decoration"
        >
          {{ email }}
        </a>
      </div>
      <div class="subheading mb-5">
        {{ phone }}
      </div>

    <!-- INTRO INFO LINE  -->
    </div>
    <p class="lead mb-5">
      {{ about }}
    </p>

    <!-- SOCIAL ICONS -->
    <BtnSocialIcon
      icon="mdi-linkedin"
      :link="linkedin"
    />
    <BtnSocialIcon
      icon="mdi-github"
      :link="github"
    />
    <BtnSocialIcon
      icon="mdi-facebook"
      :link="facebook"
    />
  </div>
</template>

<script>
  import { aboutSection } from '../db/db.js'
  import BtnSocialIcon from './BtnSocialIcon'

  export default {
    name: 'AboutSection',
    components: {
      BtnSocialIcon,
    },
    data: () => ({
      firstName: aboutSection.firstName,
      lastName: aboutSection.lastName,
      address: aboutSection.address,
      phone: aboutSection.phone,
      email: aboutSection.email,
      about: aboutSection.about,
      facebook: aboutSection.facebook,
      linkedin: aboutSection.linkedin,
      github: aboutSection.github,
    }),
    methods: {},
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
  color: #78909C;
}
.accent-2 {
  color: #00B8D4;
}
.no-decoration {
  text-decoration: none;
}
.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.5rem;
}
.lead {
  font-size: 1rem;
  font-weight: 400;
  color: black

}
</style>
