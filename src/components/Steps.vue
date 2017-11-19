<template>
  <div id="steps">
<div class="container">
<img src="../assets/terrain-fs8.png"/>
<div class="block">

</div>
<div class="block" id="icons">
  <div class="columns">
    <div class="column">
  <i class="material-icons">phone_iphone</i>
     <p class="subtitle is-4">Capture Image</p>
     <p class="subtitle is-5">Using your smartphone and within the Darkskies app, take a picture of the
     chemtrails as they are being sprayed. </p>
      </div>
       <div class="column">
      <i class="material-icons">room</i>
      <p class="subtitle is-4">Drop Marker</p>
      <p class="subtitle is-5">Darkskies will record your location as well as some date/time information and add it to a global chemtrails map</p>
      </div>
       <div class="column">
           <i class="material-icons">people</i>
           <p class="subtitle is-4">Share Worldwide</p>
           <p class="subtitle is-5">Your photo will be visible to the entire world and will be shared with our global community & tweeted to anyone you specify</p>
      </div>
    </div>
    </div>
  </div>



  </div>
</template>
<script>
import Optin from './Optin'
export default {
  components: {
    wxOptin: Optin
  },
  name: 'steps',
  data: () => ({

  })
}
</script>

<style lang="css" scoped>

@import "https://fonts.googleapis.com/icon?family=Material+Icons";

#steps {
  margin-top: -180px;
  margin-bottom: 200px;
  height: 1000px;
}

i {
  font-size: 6rem;
  margin-bottom: 30px;
  opacity: 0.5;
}

#icons {
  margin-top: 50px;
  margin-bottom: 100px;
}

img {
  width: 900px;
}

#optinbox{
  margin-left: 50vw;
  transform: translateX(-50%);
}

</style>
