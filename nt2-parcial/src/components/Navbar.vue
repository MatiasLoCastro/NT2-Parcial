<template>
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <router-link to="/">
        <a class="navbar-brand" href="#">Menu - Notas</a>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- Ruta al componente Formulario Notas -->
           <li class="nav-item">
            <router-link to="/Formulario-notas">
            <a class="nav-link" href="#">Formulario Notas</a>
            </router-link>
          </li>

          <!-- Ruta al componente Multiple Choice -->
           <li class="nav-item">
            <router-link to="/Multiple-choice">
            <a class="nav-link" href="#">Multiple Choice</a>
            </router-link>
          </li>


        </ul>
      </div>
    </nav>
  </section>
</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
</style>
