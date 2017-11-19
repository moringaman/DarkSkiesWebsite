<template>
  <div id="Optin">
    <div v-if="!signUpStatus" class="box"  id="email" style="width: 600px;">

        <div class="field has-addons">
          <p class="control">
            <input v-if="!duplicateAddress" class="input" style="width: 480px;" type="text" placeholder="Your email" v-model="emailAddress">
            <a v-if="duplicateAddress" @click="reset()" class="button is-danger">Ooops! We already have that email, click here to try another one</a>
          </p>
          <p class="control">
            <a v-if="emailAddress === '' || isValid" class="button is-success" v-bind:class="classObject" @click="subscribe">
              Subscribe
            </a>
            <a  v-if="!isValid && emailAddress !== ''" class="button is-success"  @click="subscribe" disabled>
              Subscribe
            </a>
          </p>
      </div>

  </div>
  <div v-if="signUpStatus" class="box"  id="email" style="width: 600px;">
  <p v-if="signUpStatus"> Thanks for signing up, We will email you once the app is ready.</p>
  </div>
  </div>
</template>
<script>
var emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
import moment from 'moment'
export default {
  name: 'Optin',
  data () {
    return {
      emailAddress: '',
      classObject: {
        'is-loading': this.loading
      }
    }
  },
  computed: {
    signUpStatus () {
      return this.$store.getters.signUpStatus
    },
    duplicateAddress () {
      return this.$store.getters.duplicateAddress
    },
    loading () {
      return this.$store.getters.loading
    },
    validation: function () {
      return {
        email: emailRE.test(this.emailAddress)
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  methods: {
    subscribe () {
      this.$store.dispatch('PostSignUpData', {
        email: this.emailAddress,
        signUpDate: moment().format()
      })
      this.emailAddress = ' '
    },
    reset () {
      this.emailAddress = ' '
      this.$store.commit('setDuplicateAddress', false)
      this.$store.commit('setLoading', false)
    }
  },
  created () {
    console.log('duplicate ? ' + this.duplicateAddress)
  }
}
</script>
<style lang="css" scoped>

#opt-in {
  background-color: #ffffff;
  width: 80%;
  text-align: left;
}

#email {
  margin-top: 10px;
  margin-bottom: 70px;
  width: 50vw;
  padding: 10px;
}

</style>
