<template>
  <form
    class="signup-form"
    @submit.prevent="handleSubmitForm"
  >
    <header class="signup-form-header">
      <h1>
        Formulario de registro
      </h1>
    </header>

    <fieldset>
      <input
        type="text"
        placeholder="Nombre"
        name="name"
        class="signup-form-input"
      />

      <input
        type="email"
        placeholder="Correo"
        name="email"
        class="signup-form-input"
      />
    </fieldset>

    <button
      type="submit"
      class="signup-form-button"
    >
      Enviar
    </button>
  </form>
</template>

<script>
  export default {
    name: 'SignupForm',
    computed: {
      debugState() {
        return {
          storeName: this.$store.state._lastRegisteredName,
          isRead: this.$store.state.isReadName,
          getterValue: this.$store.getters.getLastRegisteredName
        }
      }
    },
    methods: {
      handleSubmitForm (event) {
        const formData = new FormData(event.target)

        const nameValue = formData.get('name')
        const emailValue = formData.get('email')

        const anyCustomRegexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (!anyCustomRegexEmail.test(emailValue)) {
          alert('El correo ingresado no es válido')
          return
        }

        this.$store.dispatch('setLastRegisteredName', nameValue)
        this.$store.dispatch('setLastRegisteredEmail', emailValue)
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .signup-form {
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 48px 105px;

    & > fieldset {
      width: 100%;
      border: none;
      padding: 0;
      display: flex;
      gap: 15px;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1080px) {
    .signup-form {
      padding: 48px 20px;
    }
  }

  .signup-form-header {
    color: #EC1D24;
    margin-bottom: 15px;
    text-align: center;
    font-size: 25px;
    font-weight: 700px;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
  }

  .signup-form-input {
    width: 100%;
    height: 48px;
    border: 1px solid #BDC2C7;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 10px;

    &::placeholder {
      opacity: 0.5;
    }
  }

  .signup-form-button {
    font-weight: 700;
    background-color: #EC1D24;
    border: none;
    cursor: pointer;
    color: white;
    padding: 12px 32px;
    border-radius: 50px;
    font-size: 16px;
    text-transform: uppercase;
  }

</style>