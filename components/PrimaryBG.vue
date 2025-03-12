<template>
  <section class="primary-bg">
    <MainHeader />

    <slot />
  </section>
</template>

<script>
  import MainHeader from "/components/MainHeader";

  export default {
    name: 'PrimaryBG',
    components: {
      MainHeader
    }
  }
</script>

<style>
  .primary-bg {
    background-color: #FF4651;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 170px;
  }

  @media screen and (max-width: 1080px) {
    .primary-bg {
      padding: 0 20px;
    }
  }
</style>