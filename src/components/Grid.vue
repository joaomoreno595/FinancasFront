<template>
  <div>
    <registros/>
    <div class="d-flex justify-content-center">
    <div class="col-11 text-center p-3" style="background-color: #38B6FF; color: white; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25); box-shadow: 0 1px 5px 0 rgba(0,0,0,0.24), 0 1px 1px 0 rgba(0,0,0,0.19);">
      Todas as Transações
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
      <template #cell(categoria)="{ value }">
        <b-badge :variant="getCategoryVariant(value)" style="color: black; font-size: medium">
          {{ value }}
        </b-badge>
      </template>
      <!-- Template para os botões de ação -->
      <template #cell(actions)="{ item }">
        <b-icon icon="pencil-square" variant="success" @click="openEditModal(item)" style="cursor: pointer"/>
        <b-icon icon="trash-fill" variant="danger" @click="deleteItem(item)" style="cursor: pointer"/>
      </template>
    </b-table>
    <b-modal id="edit-transaction-modal" v-model="editModalVisible" title="Editar Transação" centered hide-footer hide-header-close>
      <form @submit.prevent="editedTransaction">
        <b-form-group label="Nome:" label-for="input-name">
          <b-form-input id="input-name" v-model="editedTransaction.descricao" required></b-form-input>
        </b-form-group>
        <b-form-group label="Data:" label-for="input-date">
          <b-form-input id="input-date" v-model="editedTransaction.data" type="date" required></b-form-input>
        </b-form-group>
        <b-form-group label="Valor:" label-for="input-valor">
          <b-form-input id="input-valor" v-model="editedTransaction.valor" type="number" required></b-form-input>
        </b-form-group>
        <b-form-group label="Categoria:" label-for="input-categoria">
          <b-form-select id="input-categoria" v-model="editedTransaction.categoryId" :options="categories" required></b-form-select>
        </b-form-group>
        <b-form-radio-group
          v-model="selected"
          :options="options"
          class="mb-1"
          value-field="item"
          text-field="name"
          @change="updateTotals"
    >   </b-form-radio-group>
      <b-button variant="danger" style="width:50%;" @click="$bvModal.hide('edit-transaction-modal')">Fechar</b-button>
      <b-button type="submit" variant="primary" style="width:50%;" @click="updateTransaction">Salvar</b-button>
      </form>
    </b-modal>
    </div>
    <div class="d-flex justify-content-center">
      <div class="col-11 text-right">
        <b-button :to="{ name: 'Graficos' }" style="width: 50%; background-color: orange; border-color: orange; box-shadow: 0 1px 5px 0 rgba(0,0,0,0.24), 0 1px 1px 0 rgba(0,0,0,0.19); text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);">Mostrar Gráficos</b-button>
        <b-button v-b-modal.add-transaction-modal class="mt-0" variant="primary" style="width: 50%; box-shadow: 0 1px 5px 0 rgba(0,0,0,0.24), 0 1px 1px 0 rgba(0,0,0,0.19); text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);">Adicionar Transação</b-button>
      </div>
      </div>
        <b-modal id="add-transaction-modal" title="Adicionar Nova Transação" @ok="addTransaction" centered hide-footer hide-header-close>
        <form @submit.prevent="addTransaction">
        <b-form-group label="Nome:" label-for="input-name">
          <b-form-input id="input-name" v-model="newTransaction.descricao" required></b-form-input>
        </b-form-group>
        <b-form-group label="Data:" label-for="input-date">
          <b-form-input id="input-date" v-model="newTransaction.data" type="date" required></b-form-input>
        </b-form-group>
        <b-form-group label="Valor:" label-for="input-valor">
          <b-form-input id="input-valor" v-model="newTransaction.valor" type="number" required></b-form-input>
        </b-form-group>
        <b-form-group label="Categoria:" label-for="input-categoria">
          <b-form-select id="input-categoria" v-model="newTransaction.categoryId" :options="categories" required></b-form-select>
        </b-form-group>
        <b-form-radio-group
          v-model="selected"
          :options="options"
          class="mb-1"
          value-field="item"
          text-field="name"
          @change="updateTotals"
    >   </b-form-radio-group>
    <div class="mb-3">Selecionado: <strong>{{ selected }}</strong></div>
      </form>
      <b-button variant="danger" style="width:50%;" @click="$bvModal.hide('add-transaction-modal')">Fechar</b-button>
      <b-button type="submit" variant="primary" style="width:50%;" @click="addTransaction">Salvar</b-button>
    </b-modal>
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
      editModalVisible: false,
      editedTransaction: {
        categoryId: '',
        descricao: '',
        data: '',
        valor: '',
      },

      selected: 'A',
      options: [
        { item: 'Entrada', name: 'Entrada'},
        { item: 'Saída', name: 'Saída'}
      ],

      newTransaction: {
        descricao: '',
        data: '',
        valor: '',
        categoryId: '' 
      },
      fields: [
        { key: 'descricao', label: 'Nome' },
        { key: 'data', label: 'Data' },
        { key: 'valor', label: 'Valor' },
        { key: 'categoryId', label: 'Categoria' },
        { key: 'actions', label: 'Ações' }
      ],
      categories: [
          { value: 1, text: 'Salário' },
          { value: 2, text: 'Casa' },
          { value: 3, text: 'Carro' },
          { value: 4, text: 'Diversos' }
        ],

      newTransaction: this.initNewTransaction(),

      items: []
    };
  },
mounted() {
  axios.get('http://localhost:5214/api/Transactions')
    .then(response => {
      console.log(response.data);
      this.items = response.data;
    })
    .catch(error => {
      console.error(error);
    });
},
  methods: {
    openEditModal(item) {
      this.editedTransaction = { ...item };
      this.editModalVisible = true;
    },
    initNewTransaction() {
      return { nome: '', data: '', valor: null, categoria: '' };
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR');
    },
    getCategoryVariant(categoria) {
      const variants = {
        'Salário': 'success',
        'Casa': 'warning',
        'Carro': 'danger',
        'Diversos': 'info',
        'Histórico': 'secondary'
      };
      return variants[categoria] || 'primary';
    },
    addTransaction() {
      axios.post('http://localhost:5214/api/Transactions', this.newTransaction)
        .then(function (response) {
           location.reload
         })
        .catch(function (error) {
          console.error(error);
        });
    },
    deleteItem(item) {
      const index = this.items.findIndex(i => i.id === item.id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
  updateTotals() {
  if (this.selected === 'Entrada') {
    this.total += this.newTransaction.valor;
    this.totalEntradas += this.newTransaction.valor;
  } else if (this.selected === 'Saída') {
    this.total -= this.newTransaction.valor;
    this.totalSaidas += this.newTransaction.valor;
  }

  this.$emit('update:total', this.total);
  this.$emit('update:totalEntradas', this.totalEntradas);
  this.$emit('update:totalSaidas', this.totalSaidas);
},
 openEditModal(item) {
      this.editedTransaction = { ...item };
      this.editModalVisible = true;
    },
     updateTransaction() {
    axios.put(`http://localhost:5214/api/Transactions/${this.editedTransaction. id}`, this.editedTransaction)
    .then(response => {
      console.log('Transação atualizada com sucesso:', response.data);
      location.reload();
    })
    .catch(error => {
      console.error('Erro ao atualizar a transação:', error);
    });
}
}}
</script>

<style scoped>

</style>