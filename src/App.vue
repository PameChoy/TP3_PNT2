<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <header>
          <h2>TP3</h2>
        </header>
      </div>

      <div class="card-body">
        <main>
          <NavBar />
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
  /* componente de simple archivo (template, script y style) */
  import NavBar from './components/NavBar.vue';
  
  export default {
    name: 'App',
    components: {
      NavBar
    }
  }

</script>

<style scoped>
.card-header {
  background-color: rgb(224, 188, 214);
  color: rgb(100, 15, 15);
}
</style>
