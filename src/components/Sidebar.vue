<template>
    <div>
    <b-sidebar id="sidebar-menu" bg-variant="white" aria-labelledby="sidebar-menu-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
            <b-icon icon="x" variant="danger" block @click="hide"/>
          <h4 id="sidebar-sidebar-menu-title">Categorias</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item class="sla"><router-link to="/salario"><b-icon icon="currency-dollar" variant="success"/> Salário</router-link></b-nav-item>
              <b-nav-item class="csa"><router-link to="/casa"><b-icon icon="house-fill" variant="warning"/> Casa</router-link></b-nav-item>
              <b-nav-item class="crr"><router-link to="/carro"><b-icon icon="vinyl-fill" variant="danger"/> Carro</router-link></b-nav-item>
              <b-nav-item class="dvrs"><router-link to="/diversos"><b-icon icon="stack" variant="primary"/> Diversos</router-link></b-nav-item>
              <b-nav-item class="hist"><router-link to="/historico"><b-icon icon="clock-history" color="purple"/> Historico</router-link></b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sla > .nav-link a {
    color: black;
    text-decoration: none;
}
.sla:hover {
    color: rgb(133, 133, 130);
    box-shadow: inset 4px 0px 0px 0px rgb(40, 167, 69);
}
.csa > .nav-link a {
    color: black;
    text-decoration: none;
}
.csa:hover {
    color: rgb(133, 133, 130);
    box-shadow: inset 4px 0px 0px 0px rgb(255, 193, 7);
} 
.crr > .nav-link a {
    color: black;
    text-decoration: none;
}
.crr:hover {
    color: rgb(133, 133, 130);
    box-shadow: inset 4px 0px 0px 0px rgb(220, 53, 69);
} 
.dvrs > .nav-link a {
    color: black;
    text-decoration: none;
}
.dvrs:hover {
    color: rgb(133, 133, 130);
    box-shadow: inset 4px 0px 0px 0px rgb(0, 123, 255);
} 
.hist > .nav-link a {
    color: black;
    text-decoration: none;
}
.hist:hover {
    color: rgb(133, 133, 130);
    box-shadow: inset 4px 0px 0px 0px rgb(111, 66, 193);
} 
</style>