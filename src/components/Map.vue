<template>
  <div id="Map">
    <gmap-map
        :center= "{lat: 40, lng: 13.3}"
        :zoom="3"
        :options="options"
        :scaleControl="false"
        style="width: 100%; height: 65vh; z-index: -1; top: -55px;">
      <!--  <gmap-info-window
         :options="infoOptions"
         :position="infoWindowPos"
         :opened="infoWinOpen"
         @closeclick="infoWinOpen=false"> <img :src="infoPic" class="thumb"/><div><strong>{{ infoContent }}</strong></div>
       </gmap-info-window> -->
      <!--  <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.location"
          :clickable="true"
          :draggable="false"
          @mouseover="statusText = 'Trails seen by ' + m.sender + ' @ ' + m.dateTime + ' in ' + m.town + ' ' + m.country"
          @mouseout="statusText = null"
          @click="toggleInfoWindow(m,index)">
        </gmap-marker> -->

      </gmap-map>
  </div>
</template>
<script>
import Vue from 'vue'
import MapStyle from '../helpers/mapstyle.js'
export default {
  name: 'Map',
  data: () => ({
    options: {
      disableDefaultUI: true,
      scrollwheel: false,
      styles: MapStyle('')
    }
  }),
  components: {

  },
  methods: {
    setTheme: function (e) {
      this.theme = e
      Vue.$gmapDefaultResizeBus.$emit('resize')
    }
  }
}
</script>
<style lang="css" scoped>

</style>
