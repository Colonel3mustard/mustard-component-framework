<template>
  <div class="formInput">
    <label for="input" class="label">{{ label }}</label
    ><br />
    <div class="inputBorder">
      <i :class="getInputIcon()"></i>
      <input :type="type" id="input" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  type?: string;
}

const props = defineProps<Props>();

enum InputType {
  email = 'email',
  password = 'password',
  text = 'text',
  button = 'button',
  checkbox = 'checkbox',
  date = 'date',
  file = 'file',
  number = 'number',
  radio = 'radio',
  tel = 'tel',
  time = 'time',
}

function getInputIcon(): string {
  switch (props.type) {
    case InputType.email:
      return 'fa-solid fa-at';
    case InputType.password:
      return 'fa-solid fa-key-skeleton';
    case InputType.file:
      return 'fa-solid fa-file';
    case InputType.tel:
      return 'fa-solid fa-phone';
    case InputType.time:
      return 'fa-solid fa-clock';
    default:
      return '';
  }
}
</script>

<style scoped>
.inputBorder {
  border: 3px solid #003566;
  position: relative;
  line-height: 2;
  height: 40px;
  transition: all 200ms linear;
  border-radius: 20px;
  width: 220px;
  display: inline-flex;
  align-items: left;
  justify-content: left;
  text-align: left;
  cursor: text;
  color: black;
  box-shadow: inset 0px 3px 0px lightgrey;
  padding-left: 10px;
  padding-right: 10px;
}

#input {
  all: unset;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 2;
}

.label {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  display: inline-flex;
  align-self: left;
  justify-content: left;
  text-align: left;
  color: #003566;
}

.formInput {
  display: inline-grid;
}

.fa-solid {
  font-size: 18px;
  align-self: center;
  color: #003566;
}
</style>
