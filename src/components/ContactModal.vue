<template>
  <div class="contact">
    <form class="contact-form" @submit.prevent="saveContact">
      <SvgIcon class="close-icon" name="cross-icon" @click="closeContact" />
      <div class="form-group">
        <label for="fio" class="form-label"> ФИО: </label>
        <input v-model="v$.name.$model" id="fio" class="form-input" type="text" />
        <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="form-group">
        <label for="phone" class="form-label"> Телефон: </label>
        <input v-model="v$.phone.$model" id="phone" class="form-input" type="text" />
        <div class="input-errors" v-for="error of v$.phone.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="form-group">
        <label for="email" class="form-label"> Email: </label>
        <input v-model="v$.email.$model" id="email" class="form-input" type="email" />
        <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="form-group">
        <AddTag v-model:tags="stateForm.tags" />
      </div>
      <div class="form-btns">
        <Button @click="closeContact" label="Отмена" color="second" />
        <Button type="submit" label="Сохранить" :disabled="!isFormValid" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Base/Button/Button.vue'
import SvgIcon from '@/components/Base/SvgIcon.vue'
import AddTag from '@/components/AddTag.vue'
import { useContactsStore } from '@/stores/contacts'
import type { IContact } from '@/types/contact'
import { v4 as uuid4 } from 'uuid'
import useValidationForm from '@/composables/useValidateForm'

const contactsStore = useContactsStore()
const stateForm = ref<IContact>(
  (contactsStore.isEditingContact && contactsStore.getContactById) || {
    id: uuid4(),
    name: '',
    email: '',
    phone: '',
    tags: []
  }
)

const { v$, isFormValid } = useValidationForm(stateForm.value)
const resetForm = () => {
  stateForm.value = { id: stateForm.value.id, name: '', email: '', phone: '', tags: [] }
}
const saveContact = () => {
  if (contactsStore.isEditingContact) {
    contactsStore.updateContact(stateForm.value)
  } else {
    contactsStore.setContact(stateForm.value)
  }

  closeContact()
}

const closeContact = () => {
  contactsStore.toggleContactModal()
  resetForm()
  contactsStore.setEditingContact(false)
}
</script>

<style lang="less" scoped>
.contact {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  z-index: 1;

  &-form {
    position: relative;
    box-sizing: border-box;
    padding: 56px;
    max-width: 700px;
    width: 100%;
    background-color: var(--brend);
    color: #fff;
    box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

.form {
  &-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
  }

  &-label {
    font-size: 12px;
    margin-bottom: 6px;
  }

  &-input {
    width: 100%;
    color: var(--blue);
    border-radius: 4px;
    padding: 12px 10px;
    border: none;
  }
}

.close-icon {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
