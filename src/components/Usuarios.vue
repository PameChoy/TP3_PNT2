<template>
    <div class="container mt-4">
    <div class="card shadow-sm">
      <div class="card-header bg-success text-white">
        <h2 class="mb-0">Listado de Usuarios</h2>
      </div>
      <div class="card-body">
        <!-- Tabla de datos -->
        <div v-if="usuarios.length" class="table-responsive">
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Número de Teléfono</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.email }}</td>
                <td>{{ usuario.num_telefono}}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mensaje sin datos -->
        <div v-else class="alert alert-info" role="alert">
          No se encontraron usuarios.
        </div>
      </div>
    </div>
  </div>
</template>
    

<script>
  import ServicioUsuarios from '@/servicios/usuarios';
  export default {
    name: 'Usuarios',

    data(){
      return {
        servicioUsuarios: new ServicioUsuarios(),
        usuarios: []
      }
    },

    methods: {
      async obtener(){
        this.usuarios = await this.servicioUsuarios.getAll()
        //console.log(usuarios)
        return this.usuarios
      }
    },

    computed: {

    },

    mounted() {
      this.obtener()
    }
  }
</script>

<style scoped>

</style>