<template>
  <div>
    <Modal ref="modalRef">
      <img :src="imgSrc" alt="card-image" class="card-image-modal" />
    </Modal>

    <div
      class="card-container"
      @click="showModal"
    >
      <img :src="imgSrc" alt="card-image" class="card-image" />

      <footer
        class="card-footer"
      >
        <dl>
          <dt>{{ title }}</dt>
          <dd>{{ description }}</dd>
        </dl>
      </footer>
    </div>
  </div>
</template>

<script>
  import Modal from "/components/Modal";

  export default {
    name: 'Card',
    components: {
      Modal
    },
    methods: {
      showModal () {
        console.log({ modalRef: this.$refs.modalRef })
        this.$refs.modalRef.$el.showModal()
      }
    },
    props: {
      imgSrc: String,
      title: String,
      description: String
    }
  }
</script>

<style>
  .card-container {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: min(340px, 100%);
    height: 340px;

    &:hover {
      & > .card-footer {
        height: 100%;

        & > dl {
          font-size: 24px;
          line-height: 27px;
        }
      }
    }
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-image-modal {
    width: 80svw;
    height: 70svh;
    object-fit: cover;
  }

  .card-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 62px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px 20px;
    background-color: black;
    transition: height 0.2s ease-out;

    & > dl {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      line-height: 15px;
      font-weight: 500;
      text-transform: uppercase;

      & > dt {
        color: white;
      }

      & > dd {
        color: #FED141
      }
    }
  }
</style>