<template>
  <header class="main-header">
    <img src="@/assets/imgs/PicnicLogo.svg" alt="picnic-logo">

    <nav class="header-content">
      <menu>
        <li v-for="item in navItems" :key="item.label" class="nav-item">
          <nuxt-link :to="item.to">{{ item.label }}</nuxt-link>
        </li>
      </menu>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'MainHeader',
    data () {
      const navItems = [
        { label: 'Home', to: '/' },
        { label: 'Registrarme', to: '/signup' },
      ]

      return { navItems }
    }
  }
</script>

<style>
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 14px;

    & > menu {
      display: flex;
      gap: 20px;
    }

    .nav-item {
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>