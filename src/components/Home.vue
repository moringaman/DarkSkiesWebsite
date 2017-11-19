<template>
  <div class="Home">
<wx-map></wx-map>
<wx-titlerow></wx-titlerow>
<wx-chem-pics></wx-chem-pics>
<wx-steps></wx-steps>
<wx-footer></wx-footer>

  </div>
</template>

<script>
import Map from './Map'
import TitleRow from './TitleRow.vue'
import Steps from './Steps.vue'
import ChemPics from './ChemPhotos'
import Footer from './Footer'
export default {
  components: {
    wxMap: Map,
    wxTitlerow: TitleRow,
    wxSteps: Steps,
    wxChemPics: ChemPics,
    wxFooter: Footer
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
