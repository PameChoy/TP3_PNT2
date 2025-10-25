<template>
    <section class="card">
        <div class="card-header">
            <header>
                <h2>Formulario</h2>
            </header>
        </div>

        <div class="card-body">
            <form novalidate @submit.prevent="enviar()">
                <!-- campo nombre -->
                <div class="form-group">
                    <label for="nombre">Nombre Completo:</label>
                    <input
                        id="nombre"
                        type="text"
                        class="form-control"
                        v-model.trim="formData.nombre"
                        @input="formDirty.nombre=true"
                    >
                    <!-- cartel de validación -->
                    <div v-if="errorNombre.mostrar" class="alert alert-danger my-1">
                        {{ errorNombre.mensaje }}
                    </div>
                </div>

                <!-- campo edad -->
                <div class="form-group">
                    <label for="edad">Edad:</label>
                    <input
                        id="edad"
                        type="number"
                        class="form-control"
                        v-model.number="formData.edad"
                        @input="formDirty.edad=true"
                    >
                <!-- cartel de validación -->
                    <div v-if="errorEdad.mostrar" class="alert alert-danger my-1">
                        {{ errorEdad.mensaje }}
                    </div>                
                </div>

                <!-- campo email -->
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        class="form-control"
                        v-model.trim="formData.email"  
                        @input="formDirty.email=true"
                    >
                   <!-- cartel de validación -->
                   <div v-if="errorEmail.mostrar" class="alert alert-danger my-1">
                        {{ errorEmail.mensaje }}
                    </div>          
                </div>
           
            <!-- botón de envío -->
                <button id="boton" class="btn btn-success my-3" :disabled="botonEnvioDeshabilitado()">Enviar</button>
            </form>

            <!--<hr>
            <p><u>formData</u></p>
            <pre>{{ formData }}</pre>
            <hr>
            <p><u>formDirty</u></p>
            <pre>{{ formDirty }}</pre>-->
        </div>
    </section>

    <section class="card">
        <div class="card-header">
            <header>
                <h2>Datos Ingresados</h2>
            </header>
        </div>

        <div v-if="personas.length" class="table-responsive">
            <table class="table table-striped table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(persona, index) in personas" :key="index">
                        <td>{{ persona.nombre }}</td>
                        <td>{{ persona.edad }}</td>
                        <td>{{ persona.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else class="alert alert-info">
            Aún no hay datos cargados.
        </div>
    </section>    
</template>


<script>
    export default {
        name: 'Formulario',
        // props: {},
        // emits: [],
        data() {
            return {
            formData: this.getInicialData(),
            formDirty: this.getInicialData(),
            personas: []
            };
        },

        computed: {
            errorNombre() {
                let mensaje = ''
                if(!this.formData.nombre) mensaje = 'Campo requerido'
                else if(this.formData.nombre.length < 5) mensaje = 'Este campo debe poseer al menos 5 caracteres'
                else if(this.formData.nombre.length > 15) mensaje = 'Este campo debe poseer como máximo 15 caracteres'
                return {
                    mensaje: mensaje,
                    mostrar: mensaje != '' && this.formDirty.nombre,
                    ok: mensaje == ''
                }
            },

            errorEdad() {
                let mensaje = ''
                if(!this.formData.edad) mensaje = 'Campo requerido'
                else if(this.formData.edad < 18) mensaje = 'Debe ingresar una edad mayor a 18'
                else if(this.formData.edad > 120) mensaje = 'La edad máxima permitida es 120'
                return {
                    mensaje: mensaje,
                    mostrar: mensaje != '' && this.formDirty.edad,
                    ok: mensaje == ''
                }
            },

            errorEmail() {
                let mensaje = ''
                if(!this.formData.email) mensaje = 'Campo requerido'
                return {
                    mensaje: mensaje,
                    mostrar: mensaje != '' && this.formDirty.email,
                    ok: mensaje == ''
                }
            }      
        },

        watch: {
            // observadores
        },

        methods: {
            getInicialData() {
                return {
                    nombre: null,
                    edad: null,
                    email: null
                }
            },

            botonEnvioDeshabilitado() {
                return !this.errorNombre.ok || !this.errorEdad.ok || !this.errorEmail.ok
            },

            enviar() {
                const nuevaPersona = {
                    nombre: this.formData.nombre,
                    edad: this.formData.edad,
                    email: this.formData.email
                };
                this.personas.push(nuevaPersona);
                this.formData = this.getInicialData();
                this.formDirty = this.getInicialData();        
            }
        },
    };
</script>


<style scoped>
#boton {
  background-color: rgb(224, 188, 214);
  color: rgb(100, 15, 15);
  border-color: rgb(100, 15, 15);
  font-weight: bold;
}

.card-header{
 color: rgb(100, 15, 15);
 background-color: rgb(224, 188, 214);
}
</style> 