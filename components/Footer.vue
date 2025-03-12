<template>
  <footer class="footer">
    <div class="footer-content">
      <img src="@/assets/imgs/FooterLogo.png" alt="footer-logo">

      &#169; 2020 PICNIC - Todos los derechos reservados
    </div>
  </footer>
</template>

<style>
  .footer {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 273px;
    background-color: black;
    color: white;
    font-size: 14px;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
  }
</style>