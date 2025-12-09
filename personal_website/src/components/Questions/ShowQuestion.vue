<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: Object,
})

// dropdown open/close
const open = ref(false)

// track selected option
const selected = ref(null)

function selectOption(option) {
  selected.value = option
  open.value = false // close after choosing
}
</script>

<template>
  <div class="question-container">
    <h1 class="question-title">{{ props.data.question }}</h1>
    <!-- RADIO -->
    <div v-if="props.data.type === 'radio'" class="options">
      <div class="option" v-for="(element, index) in props.data.options" :key="index">
        <input type="radio" :id="element" :name="props.data.id" :value="element" />
        <label :for="element">{{ element }}</label>
      </div>
    </div>

    <!-- CHECKBOX -->
    <div v-if="props.data.type === 'checkbox'" class="options">
      <div class="option" v-for="(element, index) in props.data.options" :key="index">
        <input type="checkbox" :id="element" :name="props.data.id" :value="element" />
        <label :for="element">{{ element }}</label>
      </div>
    </div>

    <!-- DROPDOWN -->
    <div v-if="props.data.type === 'dropdown'" class="dropdown">
      <!-- the clickable dropdown header -->
      <div class="dropdown-header" @click="open = !open">
        {{ selected ? selected : 'Select an answer...' }}
        <span class="arrow" :class="{ open: open }">▾</span>
      </div>

      <!-- dropdown list -->
      <div v-if="open" class="dropdown-list">
        <div
          v-for="(option, index) in props.data.options"
          :key="index"
          class="dropdown-option"
          @click="selectOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: normal;
  font-size: 1.2rem;
}
.question-container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 0 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* RADIO + CHECKBOX */
.options {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
}

.option {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* DROPDOWN */
.dropdown {
  width: 100%;
  max-width: 260px;
  position: relative;
  margin-top: 1rem;
}

.dropdown-header {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-list {
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 4px;
  z-index: 20;
}

.dropdown-option {
  padding: 10px;
  cursor: pointer;
}

.dropdown-option:hover {
  background: #f0f0f0;
}

.arrow {
  transition: 0.2s;
}

.arrow.open {
  transform: rotate(180deg);
}

</style>
