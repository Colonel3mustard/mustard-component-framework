<template>
  <button class="btn">
    <slot v-if="!loading"></slot>
    <div v-else class="dot-elastic"></div>
  </button>
</template>

<script setup lang="ts">
interface Props {
  loading?: boolean;
}
defineProps<Props>();
</script>

<style scoped>
.btn {
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
}

.btn:hover,
.btn:focus {
  background-color: #b3d3ea;
  color: #2c5777;
}

.btn:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
}

.btn:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}

.dot-elastic {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #39739d;
  color: #39739d;
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
  background-color: #39739d;
  color: #39739d;
  animation: dot-elastic-before 1s infinite linear;
}

.dot-elastic::after {
  left: 15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #39739d;
  color: #39739d;
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
