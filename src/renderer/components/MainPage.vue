<template>
  <div class="main-page-container">
    <add-modal v-if="modalFlg" @closeModal="closeModal" />
    
    <div class="search-container">
      <input type="text" v-model="searchWord" />
      <div class="plus icon" @click="openModal"></div>
    </div>

    <div class="result-container">
      <div v-for="(account, index) in searchResults" :key="index">
        <account-curd :account="account" />
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.main-page-container {
  width: 100%;
  height: 100%;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.plus.icon {
  color: #000000;
  position: relative;
  margin-left: 10px;
  margin-top: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.plus.icon:before {
  content: '';
  position: absolute;
  width: 16px;
  height: 2px;
  background-color: currentColor;
}

.plus.icon:after {
  content: '';
  position: absolute;
  width: 16px;
  height: 2px;
  background-color: currentColor;
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.result-container {
  overflow: auto;
  height: 95vh;
  width: 100%;
}
</style>

<script>
import AccountCurd from './AccountCurd'
import AddModal from './AddModal'

export default {
  name: 'main-page' ,
  components: { AccountCurd , AddModal } ,
  data() {
    return {
      accounts: '',
      searchWord: '' ,
      modalFlg: false
    }
  } ,
  created() {
    this.accounts = this.$db.accounts.findAll()
  } ,
  computed: {
    searchResults() {
      let re = new RegExp(this.searchWord)

      let tmp = []
      for( var acc in this.accounts ) {
        if( this.accounts[acc].serviceName.toLowerCase().indexOf(this.searchWord.toLowerCase()) === 0 ) {
          tmp.push( this.accounts[acc] )
        }
      }

      return tmp
    }
  } ,
  methods: {
    openModal() {
      this.modalFlg = true
    } ,
    closeModal() {
      this.modalFlg = false
    }
  }
}
</script>
