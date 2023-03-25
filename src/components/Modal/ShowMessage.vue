<template>
  <div class="block" @click="$modalHide('ShowMessage')">
    <div class="modal">
      <h2>Welcome guest!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowMessage'
}
</script>

<style scoped>
.block {
  /* display: flex; */
  justify-content: center;
  padding: 5px 5px;

  background-color: rgb(168, 245, 114);
  position: fixed;
  top: 10%;
  right: 50%;
  transform: translate(0%, -50%);
  z-index: 100;

  border-radius: 10px;

  box-sizing: content-box;
}

.modal {
  color: #000;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>