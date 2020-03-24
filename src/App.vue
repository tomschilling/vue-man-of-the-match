<template>
  <main id="app">
    <!-- <div class="banner"><img src="./assets/banner.jpg" alt="Banner"></div> -->
    <!-- <img src="./assets/logo.png"> -->

    <div class="result">
      <div class="result-vs header"><h1>vs</h1></div>
      <div class="result-item"><img src="./assets/hrk.png" alt=""></div>
      <div class="result-item"><img src="./assets/rgh.png" alt=""></div>
      <!-- <div class="result-item"><h1>30</h1></div>
      <div class="result-item"><h1>24</h1></div> -->
    </div>
    
    
    <div class="header">
    <h1 class="title">vote the man of the match</h1>    
    <p>Vote deinen persönlichen Man of the Match. Beachte du kannst nur einmal und nur für einen Spieler voten! Klicke einfach auf deinen Man of the Match um Ihn auszuwählen und klicke dann auf "vote now".</p>
    </div>

    <section ref="VotePage">
      <VotePage/>
    </section>

    <section ref="dependingTimeMessage">
      <div class="timeMessage header">
        <h1 class="title">{{ currentTimeMessage }}</h1>
      </div>
    </section>

    <section>
      
      <div class="pure-g" ref="charts" style="display: none;">
        <div class="header"><h1 class="title">Thanks for Your Vote!</h1></div>
        <div class="pure-u-1"><img src="./assets/hrk.png" style="height:10rem;"></div>
        <div class="pure-u-sm-1-2" ref="HomeTeamChart"><FirstTeamChart chart-data=""></FirstTeamChart></div>
        <div class="pure-u-1"><img src="./assets/rgh.png" style="height:10rem;"></div>
        <div class="pure-u-sm-1-2" ref="GuestTeamChart"><SecondTeamChart chart-data=""></SecondTeamChart></div>
        <!-- <home-bar-chart :chart-data="chartData" :options="chartOptions"></home-bar-chart> -->
      </div>
      <div ref="thanks" style="display: none;"></div>
    </section>
    <section style="text-align: right; margin-bottom: 90px;">
    <button style="margin: 1rem;" id="show-modal" class="button-xsmall pure-button" type="submit" v-on:click="showImpressumModal">Impressum</button>
        <!-- use the modal component, pass in the prop -->
    <modal height="auto" :scrollable="true" name="impressum">
       <div>
          <button @click="$modal.hide('impressum')">
           Close
          </button>
      </div>
      <div style="padding-left: 3rem; padding-right: 3rem; margin-bottom: 1rem;">
        <h1>Impressum</h1>
        <h3>Angaben gemäß § 5 TMG:</h3>
        <h3>Kontakt:</h3>
        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
        <h3>Design:</h3>
        <h3>Rechtliche Hinweise:</h3>
          <p style="font-style: italic;">1. Haftung für eigene Inhalte</p>
          <div>Alle Inhalte unseres Internetauftritts wurden mit Sorgfalt und nach bestem Gewissen erstellt. Eine Gewähr für die Aktualität, Vollständigkeit und Richtigkeit sämtlicher Seiten kann jedoch nicht übernommen werden.</div>
          <p style="font-style: italic;">2. Urheberrecht</p>
          <div>Die auf dieser Webseite veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede Art der Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers bzw. Autors.</div>
          <p style="font-style: italic;">3. Datenschutz</p>
          <div>Durch den Besuch unseres Internetauftritts können Informationen über den Zugriff (Datum, Uhrzeit, aufgerufene Seite) als Cookie gespeichert werden. Dies stellt keine Auswertung personenbezogener Daten (z.B. Name, Anschrift oder E-Mail Adresse) dar.</div>
      </div>
    </modal>
    </section>
    <CookieLaw>
      <!-- <div slot="message">
        Here is my message for more info <router-link to="legal-notes">Click here</router-link>
      </div> -->
    </CookieLaw>
  </main>
</template>

<script>
//import firebase,{ database } from 'firebase'
import VotePage from './components/VotePage.vue'
import FirstTeamChart from './components/FirstTeamChart.vue'
import SecondTeamChart from './components/SecondTeamChart.vue'
//import ImpressumModal from './components/ImpressumModal.vue'
//import HomeBarChart from './js/HomeBarChart.js'
import CookieLaw from './components/Cookie.vue'


export default {
  name: 'app',
  components: {
    VotePage,
    FirstTeamChart,
    SecondTeamChart,
    //HomeBarChart,
    CookieLaw
   // ImpressumModal
  },
  data () {
    return {
    showModal: false,
    currentTimeMessage: 'string'
    }
  },
  mounted() {

    this.checkKickOffTime()

    var timeCookie = this.getCookie("voteBestPlayer");

    if (timeCookie != null) {
     this.$refs.VotePage.style.display = 'none'
     this.$refs.charts.style.display = 'block';
     this.$refs.thanks.style.display = 'block';
    }

  },
  methods: {
    showImpressumModal: function () {
    this.$modal.show('impressum')
    },
    getCookie: function(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }  
    return decodeURI(dc.substring(begin + prefix.length, end));
    },
    checkKickOffTime: function() {
      var d = new Date();
      if(d.getHours() >= 17 && d.getHours() <= 19 ){
        this.$refs.VotePage.style.display = 'block'
        this.$refs.dependingTimeMessage.style.display = 'none'; 
      }
      else if (d.getHours() >= 7 && d.getHours() <= 16 && d.getMinutes() <= 59) {  
        this.currentTimeMessage = 'Das Voting geht zum Ankick los!'
        this.$refs.VotePage.style.display = 'none'
        this.$refs.dependingTimeMessage.style.display = 'block'; 
        
      } else {
        this.currentTimeMessage = 'Das Voting ist beendet!'
        this.$refs.VotePage.style.display = 'none'
        this.$refs.dependingTimeMessage.style.display = 'block'; 
      }
    }
  }
}
</script>

<style>
section {
  position: relative;
  float: left;
  width: 100%;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
}
.banner {
  width: 100%;
  float: left;
  position: relative;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
}

.result {
  width: 100%;
  float: left;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
}

.result .result-vs {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
}

.result .result-item {
  width: 50%;
  position: relative;
  float: left;
  box-sizing: border-box;
  padding: 20px;
}

.result .result-item img {
  min-height: 100%;
  max-height: 150px;
  max-width: 100%;
  margin: 0 auto;
}

.header {
  position: relative;
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  padding: 20px 50px;
}
.header h1 {
  text-transform: uppercase;
  margin: 20px 0;
  font-size: calc(1rem + 2vw);
  float: left;
  text-align: center;
  width: 100%;
}
.header p {
  float: left;
}
.banner img {
  width: 100%;
  top: 0;
  left: 0;
  position: relative;
}
.timeMessage {
  padding-top:0.5rem;
  padding-bottom:0.5rem;
  
}

</style>
