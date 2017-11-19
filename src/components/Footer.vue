<template>
  <div id="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <ul>
            <li>About</li>
            <li>Contact Us</li>
            <li>Donations</li>
            <li>Developers</li>

          </ul>

        </div>
        <div class="column">
      <wx-optin id="optinbox"></wx-optin>
      <p id="copyright" class='subtitle is-5'> Copyright 2017 - darkskies.co.uk</p>
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

#optinbox {
  position: absolute;
  bottom: -100px;
}

#copyright {
  position: absolute;
  bottom: -250px;
}

p {
  color: #fff;
}

#footer {
  padding-top: 100px;
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
