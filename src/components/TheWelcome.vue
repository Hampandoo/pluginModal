<script setup>
</script>

<template>
  <div class="block">
    <div>
      <button @click="$modalShow('ShowMessage')">Modal Welcome</button>
    </div>
    <div>
      <button @click="$modalShow('Charts')">Charts</button>
    </div>
  </div>
</template>

<style>
.block {
 display: flex;
 justify-content: space-around;
}
button {
  background-color: #5ef7c4;
  padding: 10px 20px;
  border: none;
  font-weight: 600;
  color: black;
  border-radius: 10px;
  cursor: pointer;
}
</style>