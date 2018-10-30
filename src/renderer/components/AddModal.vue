<template>
  <div class="modal">
    <div class="modal-window">
      <div class="modal-content">
        <div>サービス名</div>
        <input type="text" v-model="serviceName" />
        <div>メールアドレス</div>
        <input type="text" v-model="mail" />
        <div>パスワード</div>
        <input type="text" v-model="password" />
        <div>備考</div>
        <textarea v-model="note" />
        <div class="h-box">
          <button type="button" @click="$emit('closeModal')">キャンセル</button>
          <button type="button" @click="registAccount">登録</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-modal' ,
  data() {
    return {
      serviceName: '' ,
      mail: '' ,
      password: '' ,
      note: ''
    }
  } ,
  methods: {
    registAccount() {
      let newId = this.$db.accounts.count()
      let saveData = {id: newId, serviceName: this.serviceName, mail: this.mail, password: this.password, note: this.note}
      this.$db.accounts.insert(saveData)
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0,0,0,0.5);
  z-index: 30;
}

.modal-window {
  background: #ffffff;
  border: groove 3px #31a191;
  border-radius: 5px;
}

.modal-content {
  padding: 10px 20px;
}
</style>
