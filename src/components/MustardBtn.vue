<template>
  <button :class="loading ? 'btn loading' : 'btn'">
    <div :class="{ isHidden: loading }"><slot></slot></div>
    <div v-show="loading" class="dot-elastic"></div>
  </button>
</template>

<script setup lang="ts">
interface Props {
  loading?: boolean;
}
defineProps<Props>();
</script>

<style scoped>
.isHidden {
  opacity: 0;
}

.btn {
  border: 3px solid #003566;
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 2;
  height: 50px;
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
  box-shadow: 0px 3px 0px lightgrey;
  margin: 5px;
  padding-left: 20px;
  padding-right: 20px;
}

.btn:hover {
  background-color: #e0bc09;
}

.dot-elastic {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #003566;
  color: #003566;
  animation: dot-elastic 1s infinite linear;
}

.dot-elastic::before,
.dot-elastic::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}

.dot-elastic::before {
  left: -15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #003566;
  color: #003566;
  animation: dot-elastic-before 1s infinite linear;
}

.dot-elastic::after {
  left: 15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #003566;
  color: #003566;
  animation: dot-elastic-after 1s infinite linear;
}

@keyframes dot-elastic-before {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1.5);
  }
  50% {
    transform: scale(1, 0.67);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}

@keyframes dot-elastic {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 1.5);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}

@keyframes dot-elastic-after {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 0.67);
  }
  75% {
    transform: scale(1, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
