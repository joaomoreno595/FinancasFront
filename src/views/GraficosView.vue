<template>
  <div class="grid-container">
    <div class="card card-small">
      <h2>Gráfico de Barra</h2>
      <div class="chart-container">
        <Bar :data="chartData1" :width="400" :height="150" />
      </div>
    </div>
    <div class="card card-small">
      <h2>Gráfico de Linha</h2>
      <div class="chart-container">
        <LineChartGenerator :data="LineChartGenerator" :width="400" :height="150" />
      </div>
    </div>
    <div class="card card-small">
      <h2>Gráfico Borda</h2>
      <div class="chart-container">
        <Doughnut :data="chartData3" :width="400" :height="150" />
      </div>
    </div>
    <div class="card card-small">
      <h2>Gráfico 4</h2>
      <div class="chart-container">
        <Radar :data="chartData4" :width="400" :height="150" />
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Line as LineChartGenerator } from 'vue-chartjs'
import { Doughnut } from 'vue-chartjs'
import { Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, ArcElement, RadialLinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, PointElement, ArcElement, RadialLinearScale)

export default {
  name: 'Dashboard',
  components: { Bar, LineChartGenerator, Doughnut, Radar },
  data() {
    return {
      chartData1: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
        datasets: [
          {
            label: 'Geral',
            backgroundColor: ['#F77878'],
            data: [40, 20, 12, 50, 70, 62, 40, 32, 31, 45]
          },
          {
            label: 'Vendedor',
            backgroundColor: ['#787CF7'],
            data: [20, 10, 6, 25, 35, 31, 20, 16, 15, 22]
          }
        ]
      },
      LineChartGenerator: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
        datasets: [
          {
            label: 'Geral',
            backgroundColor: '#F77878',
            borderColor: '#F77878',
            pointBackgroundColor: '#F77878',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
          },
          {
            label: 'Vendedor',
            backgroundColor: '#787CF7',
            borderColor: '#787CF7',
            pointBackgroundColor: '#787CF7',
            data: [10, 3, 15, 80, 69, 20, 80, 60, 50, 80]
          }
        ],
      },
      chartData3: {
        labels: ['Geral', 'Vendedor'],
        datasets: [
          {
            label: 'Geral',
            backgroundColor: ['#F77878'],
            data: [40, 20, 12, 50]
          },
          {
            label: 'Vendedor',
            backgroundColor: ['#787CF7'],
            data: [20, 10, 55, 22]
          }
        ]
      },
      chartData4: {
        labels: ['a', 'b', 'c', 'd', 'e'],
        datasets: [
          {
            label: 'Geral',
            backgroundColor: '#F77878',
            borderColor: '#F77878',
            pointBackgroundColor: '#F77878',
            data: [40, 20, 12, 50, 70]
          },
          {
            label: 'Vendedor',
            backgroundColor: '#787CF7',
            borderColor: '#787CF7',
            pointBackgroundColor: '#787CF7',
            data: [10, 3, 15, 80, 69]
          }
        ]
      },
    }
  }
}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dois cards de largura */
  grid-template-rows: auto auto; /* Dois cards de altura */
  gap: 20px; /* Espaçamento entre os cards */
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
}

.card-large {
  grid-column: span 2; /* Expande o card para ocupar duas colunas */
}

.card-small {
  grid-row: span 2; /* Expande o card para ocupar duas linhas */
}

.chart-container {
  margin-top: 20px;
}
</style>
