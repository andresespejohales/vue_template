const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

const app = createApp({
  data() {
    return {
      showRespuesta: true,
      showQueTeOcurre: true,
      queTeOcurreValue: 'test'
    };
  },
  methods: {
    queTeOcurreEnter() {
      this.showRespuesta = true;
      this.showQueTeOcurre = false;
      console.log('Enter key pressed');
    }
  }
});

app.config.compilerOptions.delimiters = ['[[', ']]'];

app.use(vuetify).mount('#app');
