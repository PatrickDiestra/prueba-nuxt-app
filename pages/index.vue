<template>
  <section class="container">
    <PrimaryBG>
      <main class="main-container">
        <span v-if="lastRegisteredName" class="welcome-message">
          Bienvenido {{ lastRegisteredName }}, te registraste con el correo {{ lastRegisteredEmail }}
        </span>

        <header>
          <h1>Nuestro portafolio</h1>
        </header>

        <section class="main-content">
          <Card
            v-for="project in projects"
            :key="project.title + project.description"
            :imgSrc="project.imgSrc"
            :title="project.title"
            :description="project.description"
          />
        </section>
      </main>
    </PrimaryBG>
    
    <Footer />
  </section>
</template>

<script>
import PrimaryBG from "/components/PrimaryBG";
import Footer from "/components/Footer";
import Card from "/components/Card";

import maestroWebsiteImgSrc from "@/assets/imgs/projects/img-project-1.png";
import falabellaImgSrc from "@/assets/imgs/projects/img-project-2.png";
import datumImgSrc from "@/assets/imgs/projects/img-project-3.png";
import unacemImgSrc from "@/assets/imgs/projects/img-project-4.png";
import toulouseImgSrc from "@/assets/imgs/projects/img-project-5.png";
import arcadeImgSrc from "@/assets/imgs/projects/img-project-6.png";

export default {
  data () {
    const projects = [
      { imgSrc: maestroWebsiteImgSrc, title: 'Maestro', description: 'Website' },
      { imgSrc: falabellaImgSrc, title: 'Banco Falabella', description: 'Cuenta Sueldo' },
      { imgSrc: datumImgSrc, title: 'Datum', description: 'Datum Perú' },
      { imgSrc: unacemImgSrc, title: 'Unacem', description: 'Señal de vida' },
      { imgSrc: toulouseImgSrc, title: 'Toulouse Lautrec', description: 'Escuela VR' },
      { imgSrc: arcadeImgSrc, title: 'Toulouse Lautrec', description: 'Arcade Music' },
    ]

    const lastRegisteredName = this.$store.getters.getLastRegisteredName
    const lastRegisteredEmail = this.$store.getters.getLastRegisteredEmail

    return { projects, lastRegisteredName, lastRegisteredEmail }
  },

  components: {
    PrimaryBG,
    Footer,
    Card
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100svh;
  }

  .welcome-message {
    color: #FED141;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
  }

  .main-container {

    display: flex;
    flex-direction: column;
    margin-top: 160px;
    margin-bottom: 80px;
    gap: 40px;
    & > header {
      color: white;
      font-size: 25px
    }
  }

  @media screen and (max-width: 1080px) {
    .main-container {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }

  .main-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }
</style>
