import Vue from "vue";
import VueRouter from "vue-router";


import FormularioNotas from "./components/FormularioNotas.vue";
import Multiplechoice from "./components/Multiplechoice.vue";


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: 'Formulario-notas' },
        { path: '/Multiple-choice', component: Multiplechoice },
        { path: '/Formulario-notas', component: FormularioNotas },
    ]
})