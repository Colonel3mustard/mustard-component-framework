<template>
  <div class="secCenter">
    <input class="dropdown" type="checkbox" id="dropdown" name="dropdown" />
    <label class="forDropdown" for="dropdown">{{ title }}<i class="fa-solid fa-plus"></i></label>
    <div class="sectionDropdown">
      <a :href="item.link" v-for="(item, index) in items" :key="index">{{ item.name }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Item {
  name: string;
  link: string;
}
interface Props {
  items: Item[];
  title: string;
}
defineProps<Props>();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.secCenter {
  position: relative;
  max-width: 100%;
  text-align: center;
  z-index: 200;
  margin: 5px;
}

[type='checkbox']:checked,
[type='checkbox']:not(:checked) {
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}

.dropdown:checked + label,
.dropdown:not(:checked) + label {
  border: 3px solid #003566;
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 2;
  height: 44px;
  transition: all 200ms linear;
  border-radius: 20px;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffd60a;
  cursor: pointer;
  color: #003566;
  box-shadow: 0px 3px 0px lightgray;
  padding-left: 20px;
  padding-right: 20px;
}

.dropdown:checked:hover + label,
.dropdown:not(:checked):hover + label {
  background-color: #e0bc09;
}

.secCenter .forDropdown {
  background-color: #003566;
  color: #ffd60a;
  box-shadow: 0px 3px 0px lightgray;
}

.dropdown:checked + label:before,
.dropdown:not(:checked) + label:before {
  position: fixed;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  z-index: -1;
  cursor: auto;
  pointer-events: none;
}

.dropdown:checked + label:before {
  pointer-events: auto;
}

.dropdown:not(:checked) + label .fa-solid {
  font-size: 20px;
  margin-left: 10px;
  transition: transform 200ms linear;
}

.dropdown:checked + label .fa-solid {
  transform: rotate(135deg);
  font-size: 20px;
  margin-left: 10px;
  transition: transform 200ms linear;
}

.sectionDropdown {
  position: absolute;
  padding: 5px;
  background-color: #111;
  top: 70px;
  left: 0;
  width: 100%;
  border-radius: 10px;
  display: block;
  box-shadow: 0px 3px 0px lightgray;
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
  transition: all 200ms linear;
}

.secCenter .sectionDropdown {
  background-color: #fff;
  box-shadow: 2px 3px 5px lightgray;
}

.dropdown:checked ~ .sectionDropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.sectionDropdown:before {
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 20px;
  content: '';
  display: block;
  z-index: 1;
}

.sectionDropdown:after {
  position: absolute;
  top: -7px;
  left: 30px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #111;
  content: '';
  display: block;
  z-index: 2;
  transition: all 200ms linear;
}

.secCenter .sectionDropdown:after {
  border-bottom: 8px solid #fff;
}

a {
  position: relative;
  color: #fff;
  transition: all 200ms linear;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;
  border-radius: 2px;
  padding: 5px 0;
  padding-left: 20px;
  padding-right: 15px;
  margin: 2px 0;
  text-align: left;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.secCenter .sectionDropdown a {
  color: #003566;
}

a:hover {
  color: #003566;
  background-color: #ffd60a;
}

.secCenter .sectionDropdown a:hover {
  color: #ffd60a;
  background-color: #003566;
}

a .fa-solid {
  font-size: 22px;
}
</style>
