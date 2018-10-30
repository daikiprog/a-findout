<template>
  <div class="account-curd-container">
    <div class="h-box bottom-line">
      <div v-if="editFlg"><input type="text" v-model="account.serviceName"/></div>
      <div v-else class="title-bar">{{account.serviceName}}</div>

      <div class="option-container">
        <div v-if="editFlg"><div class="done icon" @click="doneEdit"></div></div>
        <div v-else><div class="edit icon" @click="startEdit"></div></div>
        <div class="close icon" @click="deleteAccount"></div>
      </div>
    </div>

    <div class="h-box">
      <div v-if="editFlg"><input type="text" v-model="account.mail"/></div>
      <div v-else>{{account.mail}}</div>
      <div class="copy icon" @click="copyMail"></div>
    </div>

    <div class="h-box">
      <div v-if="editFlg"><input type="text" v-model="account.password"/></div>
      <div v-else>{{account.password}}</div>
      <div class="copy icon" @click="copyPassword"></div>
    </div>

    <div class="h-box">
      <div v-if="editFlg"><textarea v-model="account.note" /></div>
      <div v-else>{{account.note}}</div>
    </div>
  </div>
</template>

<script>
import { clipboard } from 'electron'

export default {
  name: 'account-curd' ,
  props: ['account'] ,
  data() {
    return {
      editFlg: false
    }
  } ,
  methods: {
    copyMail() {
      clipboard.writeText(this.account.mail)
    } ,
    copyPassword() {
      clipboard.writeText(this.account.password)
    } ,
    startEdit() {
      this.editFlg = true
    } ,
    doneEdit() {
      this.$db.accounts.update({id: this.account.id}, {serviceName: this.account.serviceName, mail: this.account.mail, password: this.account.password})
      this.editFlg = false
    } ,
    deleteAccount() {
      this.$db.accounts.delete({id: this.account.id})
    }
  }
}
</script>

<style scoped>
.account-curd-container {
  display: flex;
  flex-direction: column;
  border: 1px solid #313131;
  padding: 5px;
  margin: 8px;
}

.option-container {
  display: flex;
  align-items: center;
}

.title-bar {
  font-size: 110%;
  font-weight: bold;
}

.h-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
}

.bottom-line {
  border-bottom: 1px solid #313131;
  margin-bottom: 5px;
}

.close.icon {
  cursor: pointer;
  color: #000;
  position: relative;
  margin-top: 0;
  margin-left: 8px;
  width: 21px;
  height: 21px;
}

.close.icon:before {
  content: '';
  position: absolute;
  top: 10px;
  width: 21px;
  height: 2px;
  background-color: currentColor;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.close.icon:after {
  content: '';
  position: absolute;
  top: 10px;
  width: 21px;
  height: 2px;
  background-color: currentColor;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.close.icon:hover {
  opacity: 0.4;
}

.edit.icon {
  color: #000;
  position: relative;
  margin-left: 4px;
  margin-top: 5px;
  width: 11px;
  height: 5px;
  border: solid 2px currentColor;
  border-radius: 1px;
  cursor: pointer;
  padding: 1px;
}

.edit.icon:before {
  content: '';
  position: absolute;
  top: -8px;
  left: 2px;
  width: 2px;
  height: 10px;
  background-color: currentColor;
  border-left: solid 3px white;
  border-right: solid 3px white;
}

.edit.icon:hover {
  opacity: 0.4;
}

.done.icon {
  color: #000;
  position: relative;
  margin-left: 4px;
  margin-top: 5px;
  width: 2px;
  height: 2px;
  border-bottom: solid 2px currentColor;
  /* border-radius: 1px; */
  cursor: pointer;
  margin-right: 10px;
}

.done.icon:before {
  content: '';
  position: absolute;
  top: -10px;
  left: 1px;
  width: 2px;
  height: 10px;
  background-color: currentColor;
  border-left: solid 3px white;
  border-right: solid 3px white;
  margin-left: -4px;
}

.done.icon:hover {
  opacity: 0.4;
}

.copy.icon {
  cursor: pointer;
  border: 2px solid #313131;
  position: relative;
  border-radius: 2px;
  width: 8px;
  height: 16px;
  left: -5px;
}

.copy.icon:before {
  content: '';
  border: 2px solid #313131;
  background-color: #ffffff;
  position: absolute;
  border-radius: 2px;
  width: 8px;
  height: 16px;
  top: 1px;
  left: 1px;
}

.copy.icon:hover {
  opacity: 0.4;
}
</style>
