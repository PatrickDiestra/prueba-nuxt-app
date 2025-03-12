<template>
  <section class="container">
    <PrimaryBG>
      <main class="main-container">
        <SignupForm />
      </main>
    </PrimaryBG>

    <Footer />
  </section>
</template>

<script>
  import PrimaryBG from "/components/PrimaryBG";
  import Footer from "/components/Footer";
  import SignupForm from "/components/SignupForm";

  export default {
    components: {
      PrimaryBG,
      Footer,
      SignupForm
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100svh;
  }

  .main-container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>