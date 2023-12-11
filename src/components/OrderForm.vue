<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import ButtonSecondary from './UI/ButtonSecondary.vue';
import BaseModal from './BaseModal.vue';
import {requestFunction} from "../api/api"

export interface FormData {
  nameInput: string;
  addresInput?: string;
  aboutInput?: string;
  phoneInput: string;
  serviceInput?: string[];
}

const formValues = reactive<FormData>({
  nameInput: "",
  addresInput: "",
  aboutInput: "",
  phoneInput: "",
  serviceInput: []
});

const validName = computed(() => formValues.nameInput.trim().length > 0);

let inputIsInvalid = ref(false);
let isValidPhoneNumber = ref(true);
let isInvalidForm = computed(() => !validName || !isValidPhoneNumber);


const validPhone = () =>  {
  const validationRegex = /^\d{10}$/;
  if (formValues.phoneInput.match(validationRegex) ||  formValues.phoneInput.trim().length <= 0) {
    isValidPhoneNumber.value = false;
  }
}





function submitData () {
  const formResuts = {...formValues};

  const applValues = Object.values(formResuts);

  requestFunction('post', "/services/new-application", formResuts);

  if (
    !applValues.length
  ) {
    inputIsInvalid.value = true;
    return;
  }
}

 function confirmError() {
  inputIsInvalid.value = false;
 }

</script>

<template>
  <!-- <BaseModal :show="inputIsInvalid">
    <template #default>
      <p>Что-то пошло не так</p>
      <p>Проверьте правильность заполненных полей</p>
    </template>
    <template #actions>
      <button @click="confirmError, $emit('close')">ОК</button>
    </template>
  </BaseModal> -->
  <div class="form">
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="name">Ваше имя</label>
        <input placeholder="Как к вам обращаться" id="name" name="name" type="text" v-model="formValues.nameInput" />
      </div>

      <div class="form-control">
        <label> Выберите услугу/услуги</label>
        <div class="checkbox">
          <input class="checkbox-input" type="checkbox" id="walking" value="walking" v-model="formValues.serviceInput" />
          <span>Выгул</span>
        </div>

        <div class="checkbox">
          <input class="checkbox-input" type="checkbox" value="sitting" v-model="formValues.serviceInput" />
          <span>Приходящая няня</span>
        </div>

        <div class="checkbox">
          <input class="checkbox-input" type="checkbox" value="keeping" v-model="formValues.serviceInput">
          <span>Передержка</span>
        </div>
      </div>

      <div class="form-control">
        <label for="addres">Ваш адрес</label>
        <input placeholder="Укажите улицу и дом для удобства подбора няни" v-model="formValues.addresInput" id="addres" name="addres" type="text" ref="addresInput" />
      </div>
      <div class="form-control">
        <label for="phone">Контактный телефон</label>
        <input placeholder="Мы перезвоним Вам по этому номеру" @blur="validPhone" v-model="formValues.phoneInput" id="addres" name="phone" type="text" ref="phoneInput" />
      </div>
      <div class="form-control">
        <label for="about">Подробности</label>
        <textarea placeholder="Напишите о вашем животном или животных подробнее, а также что нам предстоит делать" id="link" rows="3" name="link" type="url"  v-model="formValues.aboutInput"></textarea> 
      </div>
      <div class="button-control">
        <ButtonSecondary type="submit" :disabled="isInvalidForm" style="width: 40%;" class="form-button" @click="$emit('close')" title="Отправить заявку" />
        <ButtonSecondary style="width: 40%; background-color: var(--primary-purple);" class="form-button" @click="submitData, $emit('close')" title="Отмена" />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form {
  display: grid;
  font-size: 18px;
  color: var(--primary-purple);
}

.checkbox {
  display: flex;
}

.checkbox-input {
  width: 20px;
  margin-right: 5px;
  accent-color: var(--secondary-purple);
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
  border-radius: 2px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--secondary-purple);
  background-color: #6d67e420;
}

.form-control {
  margin: 1rem 0;
}

.button-control {
  display: flex;
  justify-content: space-around;
  .form-button {
    justify-self: center;
    margin-top: 10px;
  }
}
</style>