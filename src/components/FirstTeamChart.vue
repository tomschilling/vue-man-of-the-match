<template>
  <div class="container">
    <canvas id="FistTeamChart" style="position:relative; height:120px"></canvas>
  </div>
</template>

<script>
import Chart from 'vue-chartjs'
import { Bar, mixins } from 'vue-chartjs'
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],

  props: {
    // the object containing the chart data
    FistTeamChart: {
      type: Object
    },
  },

  mounted() {

    var results = this.getChartData()
    
    this.drawChart(results)

  },
  methods: {
    getChartData() {

        var results = {}
        var ref = firebase.app().database().ref()
        var resultList = []
        var labelList = []

        var homeTeamRef = ref.child('HomeTeam')
        homeTeamRef.once('value')
        .then(function (results) {  

          for (var key in results.val()) {
            if (results.val()[key] > 0) {
              resultList.push(results.val()[key])
              labelList.push(key.replace(/\D/g, ''))
            }
          }

        //.catch(function (err) {
          //console.log('one of these requests failed', err);
        //})
        });

        results.labelList = labelList

        results.resultList = resultList

        return results
    },
    drawChart (results) {
      setTimeout(() => {

        // Chart.defaults.global.defaultFontFamily = 'Helvetica';
        // Chart.defaults.global.defaultFontSize = 20;

        const canvas = this.$el.getElementsByTagName("canvas")[0]
        const ctx = canvas.getContext("2d")

        this.chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',
            responsive: true,
            // The data for our dataset
            data: {
              labels: results.labelList,
              datasets: [{
                backgroundColor: '#a2dffb',
                data: results.resultList,
                borderWidth: 1
              }]
            },
            // Configuration options go here
            options: {
               tooltips: {
                xPadding: 15,	
                fontSize: 30, fontFamily: "'Avenir', Helvetica, Arial, sans-serif", fontColor: '#2c3e50', fontStyle: '500',
                titleFontSize: 30,
                bodyFontSize: 50
              },
              maintainAspectRatio: false,
              responsive: true,
              layout: {
                padding: {
                  left: 0,
                  right: 50,
                  top: 50,
                  bottom: 100
                }
              },
              legend: { display: false },
              scales: {
              xAxes: [{
                  gridLines: {
                    display: false
                  },
                  ticks: {
                      beginAtZero: true, fontSize: 20, fontFamily: "'Avenir', Helvetica, Arial, sans-serif", fontColor: '#2c3e50', fontStyle: '500'
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'player',
                    fontSize: 30, fontFamily: "'Avenir', Helvetica, Arial, sans-serif", fontColor: '#2c3e50', fontStyle: '500'
                  },
              }],
              yAxes: [{
                type: 'linear',
                gridLines: {
                    display: false
                },
                ticks: {maxTicksLimit: 15, stepSize: 10, beginAtZero: true, fontSize: 20, fontFamily: "'Avenir', Helvetica, Arial, sans-serif", fontColor: '#2c3e50', fontStyle: '500'},
                scaleLabel: {
                  display: true,
                  labelString: 'votes',
                  fontSize: 30, fontFamily: "'Avenir', Helvetica, Arial, sans-serif", fontColor: '#2c3e50', fontStyle: '500'
                  },
              }],
            }
          }       
        });
      }, 2000);
    }
  }
}

</script>

<style>
.container {
  position: relative;
  margin: auto;
  height: 100vh;
  width: 100vw;
}
</style>