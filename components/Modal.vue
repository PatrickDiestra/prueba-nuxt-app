<template>
  <dialog ref="internModalRef" :class="`modal-container ${modalClass ?? ''}`">
    <section :class="`modal-content ${modalContentClass ?? ''}`">
      <button class="close-button-modal" @click="closeModal">
        X
      </button>

      <slot />
    </section>
  </dialog>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      closeModal () {
        console.log({ internModalRef: this.$refs.internModalRef })
        this.$refs.internModalRef.close()
      }
    },
    props: {
      modalClass: String,
      modalContentClass: String
    }
  }
</script>

<style>
  .modal-container {
    margin: auto;
    border: none;
    padding: 40px 0px;
    background-color: transparent;

    &::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .modal-content {
    position: relative;
  }

  .close-button-modal {
    position: absolute;
    border: none;
    background-color: transparent;
    font-size: 32px;
    padding: 0px;
    margin: 0px;
    color: white;
    outline: none;
    cursor: pointer;
    top: -40px;
    right: 0px;
  }
</style>