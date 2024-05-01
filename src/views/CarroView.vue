<template>
  <div>
    <registros/>
    <div class="d-flex justify-content-center">
    <div class="col-11 text-center p-3" style="background-color: #38B6FF; color: white; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25); box-shadow: 0 1px 5px 0 rgba(0,0,0,0.24), 0 1px 1px 0 rgba(0,0,0,0.19);">
      Todas as Transações da Categoria Carro
    </div>
    </div>
    <div class="d-flex justify-content-center">
      <b-table :items="items" :fields="fields" responsive bordered class="col-11" style="box-shadow: 0 1px 5px 0 rgba(0,0,0,0.24), 0 1px 1px 0 rgba(0,0,0,0.19);">
      <template #cell(data)="{ value }">
        {{ formatDate(value) }}
      </template>
      <template #cell(valor)="{ value }">
        R$ {{ value.toFixed(2) }}
      </template>
      <!-- Template para os botões de ação -->
      <template #cell(actions)="{ item }">
        <b-icon icon="pencil-square" variant="success" @click="openEditModal(item)" style="cursor: pointer"/>
        <b-icon icon="trash-fill" variant="danger" @click="deleteItem(item)" style="cursor: pointer"/>
      </template>
    </b-table>
    </div>
  </div>
</template>

<script>
import { BTable, BBadge, BButton, BModal, BFormGroup, BFormInput, BFormSelect } from 'bootstrap-vue';
import Registros from '@/components/Registros.vue'
import axios from 'axios'
export default {
  components: {
    BTable,
    BBadge,
    BButton,
    BModal,
    BFormGroup,
    BFormInput,
    BFormSelect,
    Registros
  },
  data() {
      return {
        items: [],
        fields: [
        { key: 'descricao', label: 'Nome' },
        { key: 'data', label: 'Data' },
        { key: 'valor', label: 'Valor' },
        { key: 'actions', label: 'Ações' }
      ],
      categories: [
          { value: 4, text: 'Diversos' }
        ],
      }
  },
  mounted() {
    const categoryId = 3
  axios.get(`http://localhost:5214/api/Categories/${categoryId}/transactions`)
    .then(response => {
      console.log(response.data);
      this.items = response.data;
    })
    .catch(error => {
      console.error(error);
    });
},
methods: {
  formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
  },
}
}
</script>

<style>

</style>