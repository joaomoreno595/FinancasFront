<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#"><b-button v-b-toggle.sidebar-menu  variant="primary" size="lg"><b-icon icon="list" variant="white"></b-icon></b-button></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-button v-b-modal.login-modal variant="primary">Login</b-button>
          <b-modal id="login-modal" title="Login" centered hide-footer hide-header-close>
            <div class="mb-3"><b-form-input v-model="text" type="email" placeholder="Email"></b-form-input></div>
            <div class="mb-3"><b-form-input v-model="text" type="password" placeholder="Senha"></b-form-input></div>
            <b-button variant="danger" style="width:50%;" @click="$bvModal.hide('login-modal')">Fechar</b-button>
            <b-button variant="primary" style="width:50%;" @click="$bvModal.hide('login-modal')">Salvar</b-button>
          </b-modal>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-button v-b-modal.cadastro-modal variant="primary">Cadastro</b-button>
          <b-modal id="cadastro-modal" title="Cadastro" centered hide-footer hide-header-close>
            <div class="mb-3"><b-form-input v-model="text" placeholder="Nome de Usuário"></b-form-input></div>
            <div class="mb-3"><b-form-input v-model="text" type="email" placeholder="Email"></b-form-input></div>
            <div class="mb-3"><b-form-input v-model="text" type="password" placeholder="Senha"></b-form-input></div>
          <b-button variant="danger" style="width:50%;" @click="$bvModal.hide('cadastro-modal')">Fechar</b-button>
          <b-button variant="primary" style="width:50%;" @click="$bvModal.hide('cadastro-modal')">Salvar</b-button>
        </b-modal>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { EventBus } from '../event-bus.js';
export default {
    name: 'Navbar',
    methods: {
      openCadastroModal() {
        EventBus.$emit('openCadastroModal');
    },
    login() {
      axios.post('URL_DO_SEU_ENDPOINT_DE_LOGIN', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        this.$bvModal.hide('login-modal');
        this.$router.push('/');
      })
      .catch(error => {
        console.error('Erro ao fazer login:', error);
      });
  }
}}
</script>

<style scoped>
.nav-item > .nav-link a {
    color: white;
    text-decoration: none;
}
</style>