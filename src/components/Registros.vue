<template>
    <b-container>
    <b-row>
      <b-col cols="12" md="6" lg="4" sm="4">
        <div class="entradas">
          Entradas:
          <p>R$ {{ totalEntradas }}</p>
        </div>
      </b-col>
      <b-col cols="12" md="6" lg="4" sm="4">
        <div class="saidas">
          Saídas:
          <p>R$ {{ totalSaidas }}</p>
        </div>
      </b-col>
      <b-col cols="12" md="6" lg="4" sm="4">
        <div class="total">
          Total:
          <p>R$ {{ total }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
export default {
props: {
    totalEntradas: {
      type: Number,
      required: true
    },
    totalSaidas: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
mounted() {
  this.loadEntradas,
  this.loadSaidas,
  this.loadTotal
},
methods: {
  loadEntradas() {
      axios.get('http://localhost:5214/api/Transactions')
      .then(response => {
      console.log(response.data);
      this.items = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  },
    loadSaidas() {
      axios.get('http://localhost:5214/api/Transactions')
      .then(response => {
      console.log(response.data);
      this.items = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  },
    loadTotal() {
      axios.get('http://localhost:5214/api/transactions/total/categoryId')
      .then(response => {
      console.log(response.data);
      this.items = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  },
}
}
</script>

<style>
.entradas {
  background-color:  rgb(40, 167, 69);
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: -10px;
  text-align: left;
  height: 150px;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.24), 0 1px 1px 0 rgba(0,0,0,0.19);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
}
.entradas p {
  font-size: xx-large;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
}
.saidas {
  background-color:  rgb(220, 53, 69);
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: -10px;
  text-align: left;
  height: 150px;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.24), 0 1px 1px 0 rgba(0,0,0,0.19);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
}
.saidas p {
  font-size: xx-large;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
}
.total {
  background-color:  rgb(53, 167, 220);
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: -10px;
  text-align: left;
  height: 150px;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.24), 0 1px 1px 0 rgba(0,0,0,0.19);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
}
.total p {
  font-size: xx-large;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
}
</style>z