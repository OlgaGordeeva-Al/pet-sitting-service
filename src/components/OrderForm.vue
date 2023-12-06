<template>
  <!-- <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Что-то пошло не так</p>
      <p>Проверьте правильность заполненных полей</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">ОК</base-button>
    </template>
  </base-dialog> -->
  <div class="form">
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="name">Ваше имя</label>
        <input id="name" name="name" type="text" ref="nameInput" />
      </div>

      <div class="form-control">
        <label> Выберите услугу/услуги</label>
        <div class="checkbox">
          <input class="checkbox-input" type="checkbox" id="walking" value="walking" ref="serviceInput" />
          <span>Выгул</span>
        </div>

        <div class="checkbox">
          <input class="checkbox-input" type="checkbox" value="sitting" ref="serviceInput" />
          <span>Приходящая няня</span>
        </div>

        <div class="checkbox">
          <input class="checkbox-input" type="checkbox" value="keeping" ref="serviceInput">
          <span>Передержка</span>
        </div>
      </div>

      <div class="form-control">
        <label for="addres">Ваш адрес</label>
        <input id="addres" name="addres" type="text" ref="addresInput" />
      </div>
      <div class="form-control">
        <label for="addres">Контактный телефон</label>
        <input id="addres" name="phone" type="text" ref="phoneInput" />
      </div>
      <div class="form-control">
        <label for="about">Подробности</label>
        <textarea placeholder="Напишите о вашем животном или животных подробнее, а также что нам предстоит делать" id="link" rows="3" name="link" type="url" ref="aboutInput"></textarea> 
      </div>
      <div class="button-control">
        <ButtonSecondary type="submit" style="width: 40%;" class="form-button" @click="$emit('close')" title="Отправить заявку" />
        <ButtonSecondary style="width: 40%; background-color: var(--primary-purple);" class="form-button" @click="$emit('close'), submitData" title="Отмена" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonSecondary from './UI/ButtonSecondary.vue';

const nameInput = ref(null);

// export default {
//   data() {
//     return {
//       inputIsInvalid: false,
//     };
//   },
//   methods: {
//     submitData() {
//       const enteredTitle = this.$refs.titleInput.value;
//       const enteredDescription = this.$refs.descInput.value;
//       const enteredUrl = this.$refs.linkInput.value;

//       if (
//         enteredTitle.trim() === '' ||
//         enteredDescription.trim() === '' ||
//         enteredUrl.trim() === ''
//       ) {
//         this.inputIsInvalid = true;
//         return;
//       }

//       this.addResource(enteredTitle, enteredDescription, enteredUrl);
//     },
//     confirmError() {
//       this.inputIsInvalid = false;
//     }
//   },
// };
</script>

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