<template>
  <div class="Home">
<wx-map></wx-map>
<wx-titlerow></wx-titlerow>
  </div>
</template>

<script>
import Map from './Map'
import TitleRow from './TitleRow.vue'
export default {
  components: {
    wxMap: Map,
    wxTitlerow: TitleRow
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >



</style>
