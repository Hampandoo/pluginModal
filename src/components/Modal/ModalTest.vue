<template>
  <div class="block">
    <div class="modal">
      <span class="closeBtn" @click="$modalHide('Charts')">Close</span>
      <h2>Charts</h2>
      <div class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores blanditiis sapiente in! Natus laudantium ex tenetur tempora nisi blanditiis vel alias cupiditate, quasi deleniti nobis quod obcaecati, iste consectetur, mollitia eius sed! Veniam, eos, praesentium labore asperiores dolores excepturi quis corporis ipsa nostrum quae et nesciunt alias modi. Excepturi, quibusdam.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Charts'
}
</script>

<style scoped>
.block {
  display: flex;
  justify-content: center;
  padding: 5px 5px;

  background-color: rgb(168, 245, 114);
  position: absolute;
  top: 5px;
  right: 5px;
  transform: translate(-5px, -5px);
  z-index: 100;

  border-radius: 10px;
  max-width: 250px;
  max-height: 300px;

  box-sizing: content-box;
}

.modal {
  color: #000;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.closeBtn {
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  background-color: #001df6c3;
  color: #fff;

  margin-bottom: 20px;
}

.text {
  font-size: 16px;
  overflow-y: auto;
}
</style>