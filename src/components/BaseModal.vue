
<script setup lang="ts">
defineProps<{
  show: Boolean
}>()
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 40vw;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  max-height: 90vh;
  overflow: scroll;
  overflow-x: hidden;  

  &::-webkit-scrollbar-track
  {
    background-color: #fff;
  }

  &::-webkit-scrollbar
  {
    width: 10px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 2px;
    background-color: #1f1f1f5c
  }
}

.modal-header {
  margin-bottom: 0;
  margin-top: 20px;
  color: var(--blue);
}

.modal-body {
  margin-bottom: 20px;
}

.modal-footer {
  padding: 10px 0;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>