import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/database'
import './css/pure.css'
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),

    created: function() {

        var config = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
        }

        firebase.initializeApp(config)

    }

}).$mount('#app')