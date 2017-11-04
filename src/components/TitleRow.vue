<template>
  <div id="title">
<!--<div class="headline">
It's time to Put Chemtrails on the Map
</div> -->
     <div id="overlay">

     </div>


<!-- Opt in form card sextion

  <div class="card" id="opt-in" >
  <div class="card-content">
    <p class="title" style="text-align: center">
SEND ME THE FREE APP DOWNLOAD AT LAUNCH
    </p>
    <div class="field">
   <label class="label">Name</label>
   <div class="control">
     <input class="input" type="text" placeholder="e.g Alex Smith">
   </div>
 </div>

 <div class="field">
   <label class="label">Email</label>
   <div class="control">
     <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
   </div>
 </div>
 <div class="field">
     <label class="label">Country</label>
  <p class="control has-icons-left">
    <span class="select">

      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fa fa-globe"></i>
    </span>
  </p>
</div>
<div class="control">
  <button class="button is-primary">Submit</button>
</div>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div> -->

<!-- Mobile phone App display Card section -->
<div id="section">
<div class="flex-content">
  <div  id="left">
    <div class="fixed-box">
      <div class="card" id="app-screen" >
        <figure class="image">
              <img id="phone" src="../assets/iphone6screenshot.png" alt="Placeholder image">
            </figure>
      </div>
      <div class="card" id="app-screen2" >
      <figure class="image">
            <img id="sml-phone" src="../assets/SignUpScreen.png" alt="Placeholder image">
          </figure>
      </div>
    </div>

  </div>
  <div id="right">
    <img id="banner-image" src="../assets/logoTransWhite.png"/>
    <h3 id="appdesc">The Darkskies App turns your Mobile device into a chemtrail tracker. Enabling you to help a <span style="font-weight: bold">global community of activists</span>, to gather the data needed to get full disclosure</h3>
    <h4 id="title2">Coming early 2018, Sign Up to Be Part Of the Beta</h4>

  <div v-if="!signUpStatus" class="box"  id="email" style="width: 600px;">

      <div class="field has-addons">
        <p class="control">
          <input v-if="!duplicateAddress" class="input" style="width: 480px;" type="text" placeholder="Your email" v-model="emailAddress">
          <a v-if="duplicateAddress" @click="reset()" class="button is-danger">Ooops! We already have that email, click here to try another one</a>
        </p>
        <p class="control">
          <a v-if="emailAddress === '' || isValid" class="button is-success" @click="subscribe">
            Subscribe
          </a>
          <a v-if="!isValid && emailAddress !== ''" class="button is-success" @click="subscribe" disabled>
            Subscribe
          </a>
        </p>
    </div>

</div>
<div v-if="signUpStatus" class="box"  id="email" style="width: 600px;">
<p v-if="signUpStatus"> Thanks for signing up, We will email you once the app is ready.</p>
</div>
  <h2 id="tagline">Together, we can put chemtrails on the map, discover how..</h2>

    <span  id="downicon" class="icon o">
    <i class="fa fa-3x fa-chevron-down"></i>
   </span>
  </div>
</div>
</div>


  </div>
</template>
<script>
var emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  name: 'title',
  data () {
    return {
      emailAddress: ''
    }
  },
  computed: {
    signUpStatus () {
      return this.$store.getters.signUpStatus
    },
    duplicateAddress () {
      return this.$store.getters.duplicateAddress
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
      this.$store.dispatch('PostSignUpData', this.emailAddress)
      this.emailAddress = ' '
    },
    reset () {
      this.emailAddress = ' '
      this.$store.commit('setDuplicateAddress', false)
    }
  },
  created () {
    console.log('duplicate ? ' + this.duplicateAddress)
  }
}

</script>
<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');

#section {
  position: absolute;
top: 25vh;
}
.flex-content {
justify-content: space-around; 
  display: flex;
  display: -webkit-flex;

}

.headline {
    position: relative;
    margin-bottom: -80px;
    top: -550px;
    font-size: 1vw;
    color: #fff;
    z-index: 100;
    opacity: 0.6;
    font-family: 'roboto' sans-serif;
}

#left {
flex: 1;
height: 700px;
}

#right {
flex: 1;
text-align: left;
color: #fff;
       padding-left: 50px;
}

.fixed-box {
 max-width: 590px;
height: 30vw;
  padding-left: 10px;
border: solid 1px blue;
text-align: right;
}


#phone {
  width: 100%;
  border-radius: 10px;
  z-index: 10;
}

#sml-phone {
  width: 100%;
  border-radius: 10px;
  zindex: 9;
}

#app-screen {
  position: relative;
  background-color: #ffffff;
margin-left: 230px;
  width: 20vw;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, .4);
  border-radius: 10px;
  z-index: 10;
}

#app-screen2 {
  background-color: #ffffff;
  width: 17vw;
  position: relative;
top: -32vw;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, .4);
  border-radius: 10px;
  z-index: 9;
left: 50px;
}

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

#tagline {
  font-size: 2.5vw;
  font-weight: bold;
  font-family: 'roboto' sans-serif;
  width: 70%;
  line-height: 3vw;
  color: #777;
/*  text-shadow: 4px 4px 10px rgba(0, 0, 0, .4); */
}

#banner-image {

  width: 450px;
  z-index: 10;
  margin-bottom: 20px;
  margin-left: -23px;
}

#banner-text {
  position: relative;
  top: 80px;
  z-index: 1000;
}

#title2 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 21px;
}

#downicon {
  color: #ccc;
  z-index:1000;
  margin-top: 20px;
  margin-left: 25%;
}

#appdesc {

  width: 72%;
  font-size: 21px;
  line-height: 30px;
  opacity: 0.9;
  margin-bottom: 30px;
}



#overlay {
  text-align: left;
  position: absolute;
  top: 0px;
  /* height:632px; */
  height: 65vh;
  width: 100vw;
  color: #fff;
  opacity: 0.8;
  /* IE10+ */
  background-image: -ms-linear-gradient(top, #7559FF 0%, #1F9EFF 100%);
  /* Mozilla Firefox */
  background-image: -moz-linear-gradient(top, #7559FF 0%, #1F9EFF 100%);
  /* Opera */
  background-image: -o-linear-gradient(top, #7559FF 0%, #1F9EFF 100%);
  /* Webkit (Safari/Chrome 10) */
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #7559FF), color-stop(100, #1F9EFF));
  /* Webkit (Chrome 11+) */
  background-image: -webkit-linear-gradient(top, #7559FF 0%, #1F9EFF 100%);
  /* W3C Markup */
  background-image: linear-gradient(to bottom, #7559FF 0%, #1F9EFF 100%);
}

.box {
  width: 70%;
 /* transform: translateX(-250px); */
}


@media screen and (min-width: 500px) {
  .flex-content {
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
  }
}

@media screen and (min-width: 1156px) {
  .fixed-box {
    float: right;
  }


}

@media screen and (max-width: 1150px) {
  .fixed-box {
    margin-left: 50%;
    margin-right: 50%;
    transform: translateX(-275px);
  }

  #banner-image {
    position: absolute;
    top: -150px;
    margin-left: 5px;
  }

  .right {
    text-align: center;
  }

  #opt-in {
    background-color: #blue;
    width: 80vw;
    text-align: left;
  }

  #email {
    margin-top: -400px;
    width: 80vw;
    padding: 10px;
    background-color: #3DA4FF;
  }

  #appdesc {

    width: 80vw;
    color: #555;
  }

  #tagline {

    width: 80vw;
  /*  text-shadow: 4px 4px 10px rgba(0, 0, 0, .4); */
  }

}

@media screen and (max-width: 534px) {

    .fixed-box {
      width: 100vw;
      border: solid 1px blue;
      justify-content: center;
    }

    #app-screen {
      position: relative;
      left: 180px;
      background-color: #ffffff;
      width: 70vw;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, .4);
      border-radius: 10px;
      z-index: 10;
    }

    #app-screen2 {
      background-color: #ffffff;
      width: 60vw;
      position: relaive;
      top: -430px;
      left: 100px;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, .4);
      border-radius: 10px;
      z-index: 9;
    }

    .field {
      width: 100px;
    }

    p.control {
      width: 60vw;
    }



    .flex-content {
      position:relative;
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;

      top: -200px;
    }

    .left {
      justify-content: center;
    }

    .right {
      justify-content: center;
    }

    #banner-image {
      position: absolute;
      top: -100px;
    }
}
</style>
