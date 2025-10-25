import { createRouter, createWebHistory } from "vue-router";

//importar los componentes que quiero usar como paginas/vistas
import Formulario from "./components/Formulario.vue";
import Usuarios from "./components/Usuarios.vue";

//defno el array de rutas
const routes = [
    {path: '/', redirect: '/formulario'},
    {path: '/formulario', component: Formulario},
    {path: '/usuarios', component: Usuarios},

    { path: '/:pathmatch(.*)*', redirect: '/formulario' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router