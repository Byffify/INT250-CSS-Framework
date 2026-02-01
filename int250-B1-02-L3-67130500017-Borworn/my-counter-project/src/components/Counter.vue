<script setup>
import { ref } from "vue";

const count = ref(0);
const step = ref(1);
const previousNum = ref(null);

const min = 0;
const max = 100;

function checkNum(newValue) {
  previousNum.value = count.value;

  if (newValue > max) {
    count.value = max;
  } else if (newValue < min) {
    count.value = min;
  } else {
    count.value = newValue;
  }
}

function increment() {
  checkNum(count.value + step.value);
}

function decrement() {
  checkNum(count.value - step.value);
}

function reset() {
  checkNum(0);
}

function undo() {
  if (previousNum.value !== null) {
    count.value = previousNum.value;
    previousNum.value = null;
  }
}
</script>

<template>
  <div class="container">
    <h1>Counter App</h1>
    <p>Click buttons to change the number.</p>

    <div class="count">{{ count }}</div>

    <div class="row">
      <button class="btn dec" @click="decrement" :disabled="count === 0">
        - Decrease
      </button>
      <button class="btn inc" @click="increment">+ Increase</button>
    </div>

    <div class="row">
      <button class="btn reset" @click="reset">Reset</button>
      <button class="btn undo" @click="undo" :disabled="previousNum === null">
        Undo
      </button>
    </div>

    <div class="hint">
      Step: <input type="number" min="1" v-model.number="step" />
    </div>
  </div>
</template>

<style scoped>

.container {
  width: 360px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 2rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.3s ease;
  margin: 0 auto;
}

.container h1 {
  text-align: center;
  letter-spacing: -0.9px;
  font-weight: 700;
  margin: 0;
  color: #2d3436;
  text-transform: uppercase;
}

.container p {
  text-align: center;
  color: #636e72;
  font-size: 0.85rem;
  margin: 0 0 10px 0;
}

.count {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-size: 5rem;
  font-weight: 700;
  color: #141d38;
  background: #f8f9fa;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.03);
  border: 1px solid #edf2f7;
  border-radius: 24px;
}

.row {
  display: flex;
  width: 100%;
  gap: 12px;
}

.btn {
  flex: 1;
  height: 55px;
  border-radius: 16px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  font-family: sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.btn:active:not(:disabled) {
  transform: scale(0.95);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
}

.btn.dec {
  background-color: #ffe5e5;
  color: #d63031;
}
.btn.dec:hover:not(:disabled) {
  background-color: #ffcccc;
}

.btn.inc {
  background-color: #e3f9e5;
  color: #00b894;
}
.btn.inc:hover {
  background-color: #cbf7ce;
}

.btn.reset {
  background-color: #f1f2f6;
  color: #636e72;
}
.btn.reset:hover {
  background-color: #dfe4ea;
}

.btn.undo {
  background-color: #fff4e6;
  color: #e17055;
}

.btn.undo:hover:not(:disabled) {
  background-color: #ffe8c9;
}

.btn:disabled {
  background-color: #f5f6fa;
  color: #b2bec3;
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.7;
}

.hint {
  text-align: center;
  font-weight: 500;
  color: #b2bec3;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
}

input {
  padding: 8px 12px;
  border-radius: 12px;
  border: 2px solid #dfe6e9;
  width: 60px;
  text-align: center;
  font-family: sans-serif;
  font-weight: 600;
  color: #2d3436;
  outline: none;
  transition: border-color 0.2s;
  background: #fff;
}

input:focus {
  border-color: #74b9ff;
}
</style>
