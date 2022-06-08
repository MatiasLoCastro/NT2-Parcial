<template>
  <section class="src-components-multiplechoice">
    <h1>Multiplechoice</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Numero de pregunta</th>
          <th scope="col">Respuesta</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ preguntas[0].numero }}</th>
          <td>{{ preguntas[0].respuestas }}</td>
        </tr>
        <tr>
          <th scope="row">{{ preguntas[1].numero }}</th>
          <td>{{ preguntas[1].respuestas }}</td>
        </tr>
        <tr>
          <th scope="row">{{ preguntas[2].numero }}</th>
          <td>{{ preguntas[2].respuestas }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "src-components-multiplechoice",
  props: [],
  mounted() {},
  data() {
    return {
      preguntas: [
        { numero: 1, respuestas: ['c',] },
        { numero: 2, respuestas: ['c'] },
        { numero: 3, respuestas: ['b'] },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-multiplechoice {
}
</style>
