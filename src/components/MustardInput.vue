<template>
  <div :class="{ formInput: true, noInvalid: !invalid }">
    <div class="labelContainer">
      <label v-if="label" for="input" class="label">{{ label }}</label
      ><span v-if="type === InputType.password" class="passwordRules"
        >1 Digit, 1 Uppercase, 1 Special Character</span
      >
    </div>
    <br />
    <div :class="{ inputBorder: true, invalid: invalid }">
      <i :class="getInputIcon()"></i>
      <input
        :type="type"
        :placeholder="placeholder"
        id="input"
        v-model="inputText"
        @blur="validate()" />
    </div>
    <span v-if="invalid" class="error">{{ getErrorText() }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  label?: string;
  type?: string;
  placeholder?: string;
}

const props = defineProps<Props>();

const [inputText, modifiers] = defineModel<string>({
  required: true,
  set(value) {
    if (modifiers.tel) {
      return formatPhoneText(value);
    }
    return value;
  },
});

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

// Validation
const invalid = ref(false);
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,30}$/;
const telRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

function validate(): void {
  switch (props.type) {
    case InputType.email:
      if (!emailRegex.test(inputText.value)) {
        invalid.value = true;
      } else {
        invalid.value = false;
      }
      break;
    case InputType.password:
      if (!passwordRegex.test(inputText.value)) {
        invalid.value = true;
      } else {
        invalid.value = false;
      }
      break;
    case InputType.tel:
      if (!telRegex.test(inputText.value)) {
        invalid.value = true;
      } else {
        invalid.value = false;
      }
      break;
    default:
      break;
  }
}

function getErrorText(): string {
  switch (props.type) {
    case InputType.email:
      return 'Invalid email address';
    case InputType.password:
      return 'Must contain 1 digit, 1 uppercase letter, and 1 special character';
    case InputType.tel:
      return 'Invalid phone number';
    default:
      return '';
  }
}

function formatPhoneText(value: string): string {
  value = value
    .trim()
    .replaceAll('-', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll(' ', '');

  if (value.length > 3 && value.length <= 6)
    value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
  else if (value.length > 6)
    value = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6);

  return value;
}

defineExpose({
  inputText,
  invalid,
  validate,
  getErrorText,
  formatPhoneText,
});
</script>

<style scoped>
.noInvalid {
  margin-bottom: 16px;
}

.invalid {
  border: 3px solid #de3c4b !important;
}

.error {
  color: #de3c4b;
  font-size: 12px;
  font-family: 'Comfortaa', sans-serif;
  margin-top: 2px;
}

.labelContainer {
  display: inline-flex;
  align-items: left;
  justify-content: flex-start;
  text-align: left;
}

.passwordRules {
  margin-left: 10px;
  margin-bottom: 1px;
  font-size: 10px;
  color: #403d39;
  align-self: flex-end;
  font-family: 'Comfortaa', sans-serif;
}

.inputBorder {
  border: 3px solid #003566;
  position: relative;
  line-height: 2;
  height: 40px;
  transition: all 200ms linear;
  border-radius: 20px;
  width: 400px;
  display: inline-flex;
  align-items: left;
  justify-content: left;
  text-align: left;
  cursor: text;
  color: black;
  box-shadow: inset 0px 3px 0px lightgrey;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
}

#input {
  all: unset;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 2;
}

.label {
  font-family: 'Comfortaa', sans-serif;
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
