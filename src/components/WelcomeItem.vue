<script setup lang="ts">
// import
import { ref } from 'vue'

// variable
const content = ref<string | null>(null)

// method
const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  const file = event.dataTransfer?.files[0]
  if (file) {
    handleFile(file)
  }
}

const handleFile = (file: File) => {
  const reader = new FileReader()
  reader.onload = () => {
    content.value = reader.result as string
  }
  if (file) {
    reader.readAsDataURL(file)
  }
}

const openFilePicker = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*, video/*'
  input.onchange = () => {
    const file = input.files?.[0]
    if (file) {
      handleFile(file)
    }
  }
  input.click()
}

const clearDropzone = () => {
  content.value = null
}

const isImage = () => {
  return content.value?.startsWith('data:image/')
}

const isVideo = () => {
  return content.value?.startsWith('data:video/')
}
</script>

<template>
  <div class="custom-dropzone" @dragover.prevent @drop="handleDrop">
    <div v-if="!content" class="dropzone-text">
      <p>Drag & drop files here</p>
      <p>or</p>
      <div class="demo-space-x">
        <VBtn color="success" @click="openFilePicker">
          <VIcon>mdi mdi-cloud-upload</VIcon> Upload
        </VBtn>
      </div>
    </div>
    <div v-else>
      <VBtn color="error" variant="tonal" class="float-end" @click="clearDropzone"> Remove </VBtn>
      <div v-if="isImage()" class="preview">
        <img :src="content" alt="Uploaded Image" />
      </div>
      <div v-else-if="isVideo()" class="preview">
        <video :src="content" controls></video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-dropzone {
  border: 2px dashed #cccccc;
  padding: 20px;
  position: relative;
}

.dropzone-text {
  text-align: center;
}

.preview {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.preview img,
.preview video {
  max-width: 100%;
  max-height: 300px;
}

</style>
