<template>
  <div id="footer">
    <div class="container">
      <div class="columns">
        <div class="column">

          <ul class="is-medium">
            <li>About</li>
            <li>Contact Us</li>
            <li>Donations</li>
            <li>Developers</li>

          </ul>
<img id="banner-image" src="../assets/logoTransWhite.png"/>
  <p id="copyright" class='subtitle is-6'> Copyright 2017 - darkskies.co.uk</p>
        </div>
        <div class="column">
<h4 id="title2">Coming early 2018, Sign Up to Be Part Of the Beta</h4>
      <wx-optin id="optinbox"></wx-optin>

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
  name: 'footer',
  data: () => ({

  })
}
</script>
<style lang="css" scoped>

ul {
  margin-top: 70px;
}

#optinbox {
  position: absolute;
  bottom: -35px;
}

#copyright {
  position: absolute;

}

#banner-image {
  margin-left: -33px;
}

#title2 {
  position: relative;
  bottom: -190px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 21px;
  opacity:0.6;
}

p {
  color: #fff;
}

#footer {
  text-align: left;
  /* height:632px; */
  height: 370px;
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

#opt-in {
  background-color: #ffffff;
  width: 80%;
  text-align: left;
  z-index: 99;
}

#email {

  margin-top: 10px;
  width: 50vw;
  padding: 10px;
}
</style>
