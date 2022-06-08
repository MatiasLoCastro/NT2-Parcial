<template>
  <section class="src-componentes-formulario-av">
    <div class="div jumbotron">
      <h2>Formulario Notas</h2>
      <hr />
      <hr />
      <br />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- Campo Nombre -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          />
          <!-- Mensajes de validacion -->
          <field-messages name="nombre" show="$dirty">
            <div
              v-if="formState.$dirty"
              slot="required"
              class="alert alert-danger mt-1"
            >
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere minimo {{ nombreMinLength }} caracteres
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>

        <br />

        <!-- Campo Apellido -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.apellido"
            required
          />
          <!-- Mensajes de validacion -->
          <field-messages name="apellido" show="$dirty">
            <div
              v-if="formState.$dirty"
              slot="required"
              class="alert alert-danger mt-1"
            >
              Campo requerido
            </div>
          </field-messages>
        </validate>

        <br />

        <!-- Campo Nota -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nota">Nota</label>
          <input
            type="number"
            id="nota"
            name="nota"
            class="form-control"
            autocomplete="off"
            v-model.number="formData.nota"
            required
            :min="notaMin"
            :max="notaMax"
          />
          <!-- Mensajes de validacion -->
          <field-messages name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La nota minima permitida es de {{ notaMin }} puntos.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La nota maxima permitida es de {{ notaMax }} puntos.
            </div>
          </field-messages>
        </validate>

        <br />
        <button class="btn btn-success my-4" :disabled="formState.$invalid">
          Enviar
        </button>
      </vue-form>

      <hr />
      <br />

      <div class="div jumbotron">
        <div
          class="media alert alert-info"
          v-for="(notas, index) in notas"
          :key="index"
        >
          <div class="media-body ml-3">
            <h5 class="mt-0">
              <u>Alumno {{ index + 1 }}</u>
            </h5>
            <br />
            <p>Nombre: {{ this.alumnos.nombre }} {{ this.alumnos.apellido }}</p>
            <p>
              Nota: <i> {{ this.alumnos.nota }} </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-formulario-notas",
  props: [],
  mounted() {},
  data() {
    return {
      formState: {},
      formData: this.getInitialData(),
      nombreMinLength: 3,
      nombreMaxLength: 15,
      notaMin: 0,
      notaMax: 10,
      notas: [],
      alumnos: [],
    };
  },
  methods: {
    getInitialData() {
      return {
        nombre: "",
        apellido: "",
        nota: "",
      };
    },
    enviar() {
      console.log({ ...this.formData });
      this.formData = this.getInitialData();
      this.formState._reset();
      this.alumnos.push({
        ...this.formData,
    });
      return this.alumnos;
    },
  },
  computed: {
    calcularPromedioNotas(){
      return{
        
      }
    }
  },
};
</script>

<style scoped lang="css">
.src-components-formulario-notas {
}
.jumbotron {
  background-color: rgb(94, 93, 103);
  color: white;
}

hr {
  background-color: #bbb;
}
</style>
