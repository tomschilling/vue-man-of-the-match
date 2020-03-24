<template>

<div class="">
  <form>
    <div class="pure-g">
         <div class="pure-u-logo"><img src="../assets/hrk.png"></div>
      <div class="team1" ref="HomeTeam">
        <!--<div class="pure-u-1">
          <div class="pure-u-1-3"><h3>Nr.</h3></div>
          <div class="pure-u-1-3"><h3>Name</h3></div>
          <div class="pure-u-1-3"><h3>Vote</h3></div>
        </div>  -->   
        <div class="pure-u-1">
          <label for="HomePlayer1" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber1">1</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayeNamer1">Spieler1</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer1"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer2" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber2">2</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayeNamer2">Spieler2</div></div>
          <div class="pure-u-1-3"><div><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer2"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer3" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber3">3</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayeNamer3">Spieler3</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer3"></div></div>
          </label>
        </div>
        <div class="pure-u-1"> 
          <label for="HomePlayer4" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber4">4</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayeNamer4">Spieler4</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer4"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer5" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber5">5</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayeNamer5">Spieler5</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer5"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer6" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber6">6</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayeNamer6">Spieler6</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer6"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer7" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber7">7</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayeNamer7">Spieler7</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer7"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer8" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber8">8</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayeNamer8">Spieler8</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer8"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer9" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber9">9</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayeNamer9">Spieler9</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer9"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer10" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber10">10</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName10">Spieler10</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer10"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer11" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber11">11</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName11">Spieler11</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer11"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer12" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber12">12</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName12">Spieler12</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer12"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer13" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber13">13</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName13">Spieler13</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer13"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer14" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber14">14</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName14">Spieler14</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer14"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer15" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber15">15</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName15">Spieler15</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer15"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer16" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber16">16</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName16">Spieler16</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer16"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer17" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber17">17</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName17">Spieler17</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer17"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer18" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber18">18</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName18">Spieler18</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer18"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer19" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber19">19</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName19">Spieler19</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer19"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer20" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber20">20</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName20">Spieler20</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer20"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer21" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber21">21</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName21">Spieler21</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer21"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer22" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber22">22</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName22">Spieler22</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer22"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="HomePlayer23" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler.svg" alt="Spieler"></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerNumber23">23</div></div>
          <div class="pure-u-1-3"><div class="player" id="HomePlayerName23">Spieler23</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="HomePlayer23"></div></div>
          </label>
        </div>
      </div>
    </div>
    <div class="pure-g">
        <div class="pure-u-logo"><img src="../assets/rgh.png"></div>
      <div class="team2" ref="GuestTeam">
        <!-- <div class="pure-u-1">
          <div class="pure-u-1-3"><h3>Nr.</h3></div>
          <div class="pure-u-1-3"><h3>Name</h3></div>
          <div class="pure-u-1-3"><h3>Vote</h3></div>
        </div> -->
        <div class="pure-u-1">
          <label for="GuestPlayer1" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber1">1</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayeNamer1">Spieler1</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer1"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer2" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber2">2</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayeNamer2">Spieler2</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer2"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer3" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber3">3</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayeNamer3">Spieler3</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer3"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer4" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber4">4</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayeNamer4">Spieler4</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer4"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer5" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber5">5</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayeNamer5">Spieler5</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer5"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer6" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber6">6</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayeNamer6">Spieler6</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer6"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer7" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber7">7</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayeNamer7">Spieler7</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer7"></div></div>
          </label>
        </div>
        <div class="pure-u-1" v-on:click="showVoteButton">
          <label for="GuestPlayer8">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber8">8</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayeNamer8">Spieler8</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer8"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer9" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber9">9</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayeNamer9">Spieler9</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer9"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer10" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber10">10</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerName10">Spieler10</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer10"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer11" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber11">11</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerName11">Spieler11</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer11"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer12" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber12">12</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerName12">Spieler12</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer12"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer13" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber13">13</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerName13">Spieler13</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer13"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer14" v-on:click="showVoteButton">
            <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber14">14</div></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerName14">Spieler14</div></div>
            <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer14"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer15" v-on:click="showVoteButton">
            <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber15">15</div></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerName15">Spieler15</div></div>
            <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer15"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer16" v-on:click="showVoteButton">
            <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber16">16</div></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerName16">Spieler16</div></div>
            <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer16"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer17" v-on:click="showVoteButton">
          <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber17">17</div></div>
          <div class="pure-u-1-3"><div class="player" id="GuestPlayerName17">Spieler17</div></div>
          <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer17"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer18" v-on:click="showVoteButton">
            <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber18">18</div></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerName18">Spieler18</div></div>
            <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer18"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer19" v-on:click="showVoteButton">
            <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber19">19</div></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerName19">Spieler19</div></div>
            <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer19"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer20" v-on:click="showVoteButton">
            <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber20">20</div></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerName20">Spieler20</div></div>
            <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer20"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer21" v-on:click="showVoteButton">
            <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber21">21</div></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerName21">Spieler21</div></div>
            <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer21"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer22" v-on:click="showVoteButton">
            <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber22">22</div></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerName22">Spieler22</div></div>
            <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer22"></div></div>
          </label>
        </div>
        <div class="pure-u-1">
          <label for="GuestPlayer23" v-on:click="showVoteButton">
            <div class="pure-u-1-2"><img src="../assets/spieler-2.svg" alt="Spieler-2"></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerNumber23">23</div></div>
            <div class="pure-u-1-3"><div class="player" id="GuestPlayerName23">Spieler23</div></div>
            <div class="pure-u-1-3"><div class="player"><input name="TeamRadio" class="pure-radio" type="radio" id="GuestPlayer23"></div></div>
          </label>
        </div> 
      </div>   
    </div>
  </form>  
  <button class="button-large pure-button pure-button-primary button-vote" id="button-vote" ref="buttonVote" type="submit" v-on:click="submitVote">vote now</button>
</div>
</template>

<script>
import firebase from 'firebase'


export default {
  id: 'Page',
  props: {
  },


  mounted() {},

  methods: {

    showVoteButton: function () {
        document.getElementById('button-vote').style.display = 'block';
    },

    submitVote: function () {

      // Database referenz
      var ref = firebase.app().database().ref();

      // Check for true radio boxes in home team
      var homeTeamVote = ''

      for (var i = 1; i<24; i++) {
        var radioId1 = 'HomePlayer' + i
        if (document.getElementById(radioId1).checked != false) {
          homeTeamVote = radioId1
        }
      }
      
      // Check for true radio boxes in guest team
      var guestTeamVote = ''

      for (var y = 1; y<24; y++) {
        var radioId2 = 'GuestPlayer' + y
        if (document.getElementById(radioId2).checked != false) {
          guestTeamVote = radioId2
        }
      }


      if (homeTeamVote) {

      // Set new home player count 
      var homeTeamRef = ref.child('HomeTeam');

      var oldHomePlayerCount = homeTeamRef.child(homeTeamVote)
      oldHomePlayerCount.once('value') 
        .then(function (old) {  

          homeTeamVote = '/' + homeTeamVote
      
          console.log(homeTeamVote)

          homeTeamRef.update({
            [homeTeamVote]: old.val() + 1
          })

          .catch(function (err) {
            console.log('one of these updates failed', err);
          });
      });

        //hide vote view
      this.$refs.HomeTeam.style.display = 'none';
      this.$refs.GuestTeam.style.display = 'none';
      this.$refs.buttonVote.style.display = 'none';

      this.setCookie('voteBestPlayer', 'RK03-DM-Finale', 3)

      this.reload()

      } else if (guestTeamVote) {

      var guestTeamRef = ref.child('GuestTeam');

      var oldGuestPlayerCount = guestTeamRef.child(guestTeamVote)
      oldGuestPlayerCount.once('value') 
        .then(function (old) {  

          guestTeamVote = '/' + guestTeamVote

          console.log(guestTeamVote)
          console.log(old.val())
  
          guestTeamRef.update({
            [guestTeamVote]: old.val() + 1
          })

          .catch(function (err) {
            console.log('one of these updates failed', err);
          });
      }); 

        //hide vote view
      this.$refs.HomeTeam.style.display = 'none';
      this.$refs.GuestTeam.style.display = 'none';
      this.$refs.buttonVote.style.display = 'none';

      this.setCookie('voteBestPlayer', 'RK03-DM-Finale', 1)

      this.reload()

      } else {
        alert('Bitte einen Spieler auswählen')
      }
     
    },
    setCookie: function(name, value, hours) {

    var expires 
    if (hours)
    {
        var date = new Date();
        date.setTime(date.getTime()+(hours*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    else
    {
        expires = "";
    }

    document.cookie = name+"="+value+expires+"; path=/";
    
    },
    reload: function() {
    console.log('ho')
    setTimeout(() => {
      location.reload();
      console.log('hey')
      firebase.database().goOffline()
    }, 1000);
  }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.team1 {
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  padding: 20px;
}

.team2 {
  margin-top: 1rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
  padding-bottom: 1.5rem;
}

.pure-u-logo {
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 20px;
}
.pure-u-logo img {
  height: 150px;
  margin: 0 auto;
}

.pure-u-1 {
  width: 50%;
  height: 190px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 20px;
}

.pure-u-1 label {
  cursor: pointer;
  width: 100%;
  float: left;
  border-radius: 10px;
  border: 1px solid darkgray;
  overflow: hidden;
}

.pure-u-1 .pure-u-1-2 {
  width: 100%;
  position: relative;
  height: 100px;
  float: left;
  padding: 20px 0;
  box-sizing: border-box;
}

.pure-u-1 .pure-u-1-2 img {
  height: 100%;
  margin: 0 auto;
}

.pure-u-1 .pure-u-1-3 {
  width: 100%;
  position: relative;
  height: 30px;
  float: left;
}

.pure-u-1 .pure-u-1-3 .player {
  box-sizing: border-box;
  padding: 5px;
}

.team1 .pure-u-1 .pure-u-1-3 {
  background-color:#a2dffb;
}

.team2 .pure-u-1 .pure-u-1-3 {
  background-color: #fbc197;
}

.player {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 0.5rem;
  font-weight: bolder;
  font-size: 1em;
}

.button-vote {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 75px;
  display: none;
  z-index: 99;
}
</style>
