import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import constants from '../constant'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        accessToken: null,
        constants: constants
      },
      getters: {
        CONSTANTS: state => {
          return state.constants
        }
      },
      mutations: {
        LOGIN (state, accessToken) {
          console.log(`mutations accessToken ${accessToken}`)
          state.accessToken = accessToken
          localStorage.accessToken = accessToken
          console.log(`localStorage accessToken ${localStorage.accessToken}`)
        },
        LOGOUT (state) {
          state.accessToken = null
        }
      },
      actions: {
        LOGIN ({commit}, {code}) {
            //const url = resourceHost + '/oauth/token';
            const url = `${this.state.constants.authHost}/oauth/token`;
            const user = `${this.state.constants.clientId}`;
            const pass = `${this.state.constants.clientSecret}`;
            const redirectUri = `${this.state.constants.redirectUri}`
            const basicAuth = 'Basic ' + new Buffer(`${user}:${pass}`).toString('Base64')
    
            const data = new URLSearchParams();
    
            data.append('grant_type', 'authorization_code')
            data.append('code', code)
            data.append('client_id', user)
            data.append('scope', 'read')
            data.append('client_secret', pass)
            data.append('redirect_uri', redirectUri)
            
            const headers = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': basicAuth
                }
            };
            
            return axios.post(url, data, headers)
            .then((result) => {
                commit('LOGIN', result.data.access_token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.access_token}`;
            })
        },
        LOGOUT ({commit}) {
          commit('LOGOUT')
        }
      }
})

const enhanceAccessToeken = () => {
    const accessToken = localStorage.accessToken
    if (!accessToken) return
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
enhanceAccessToeken()

export default store
