<template>
  <div id="title">
    <img id="banner-image" src="../assets/logoTransWhite.png"/>
    <span  id="downicon" class="icon o">
    <i class="fa fa-3x fa-chevron-down"></i>
   </span>
     <div id="overlay">
       <content id="banner-text">
       <h2 id="tagline">Take part in the evolution of environmental activism.. </h2>


       <h3 id="appdesc">The Darkskies App turns your Mobile device into a chemtrail tracker. Help a <span style="font-weight: bold">global community of activists</span>, gather the data and expose the deception.</h3>
       <h4 id="title2">Coming early 2018, Sign Up to Be Part Of the Beta</h4>
     </content>
     </div>
    <div class="box"  id="email" style="width: 600px;">

        <div class="field has-addons">
          <p class="control">
            <input class="input" style="width: 480px;" type="text" placeholder="Your email">
          </p>
          <p class="control">
            <a class="button is-success">
              Subscribe
            </a>
          </p>

      </div>
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
<div class="card" id="app-screen" >

  <figure class="image">
        <img id="phone" src="../assets/iphone6screenshot.png" alt="Placeholder image">
      </figure>

</div>
  </div>
</template>
<script>
export default {
  name: 'title',
  data: () => ({

  })
}
</script>
<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');

#phone {
  width: 370px;
  border-radius: 10px;
}

#opt-in {
  background-color: #ffffff;
  width: 600px;
  position: absolute;
  left: 50%;
  /* transform: translateX(-400px); */
  top: 400px;
  text-align: left;
}

#email {
  top: 530px;
  width: 200px;
  padding: 10px;
}

#tagline {
  font-size: 42px;
  font-weight: bold;
  font-family: 'roboto' sans-serif;
  position: absolute;
  left: 45%;
  top: 700px;
  width: 800px;
  line-height: 55px;
  color: #555;
/*  text-shadow: 4px 4px 10px rgba(0, 0, 0, .4); */
}

#banner-image {
  position: absolute;
  left: 44%;
  top: 265px;
  width: 450px;
  z-index: 10;
}

#banner-text {
  z-index: 1000;
}

#title2 {
  position: absolute;
  left: 45%;
  top: 485px;
  width: 800px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 21px;
}

#downicon {
  position: absolute;
  left: 58%;
  top: 850px;
  color: #ccc;
  z-index:1000;
}

#appdesc {
  position: absolute;
  left: 45%;
  top: 370px;
  width: 600px;
  font-size: 21px;
  line-height: 30px;
  opacity: 0.9;
}

#app-screen {
  background-color: #ffffff;
  width: 370px;
  position: absolute;
  left: 20%;
  /* transform: translateX(-400px); */
  top: 250px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, .4);
  border-radius: 10px;
}

#overlay {
  text-align: left;
  position: absolute;
  top: 0px;
  height:632px;
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
  width: 400px;
  position: absolute;
  left: 45%;
  top: 300px;
  padding: opx;

 /* transform: translateX(-250px); */
}
</style>
