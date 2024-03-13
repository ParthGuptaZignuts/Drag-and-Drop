<script lang="ts" setup>
import { ref } from 'vue'
const dialog = ref(false)
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <VApp>
    <VRow class="d-flex justify-center align-center mb-6">
      <v-col cols="6" md="4">
        <v-card
          class="v-theme--light v-card--density-default v-card--variant-elevated text-high-emphasis text-center"
        >
          <div class="v-card-item__content">
            <div class="v-card-title">Share Images And Videos</div>
          </div>
          <div class="v-card-text">
            <p class="text-base clamp-text">
              Quickly Share your Projects Images and Videos and let the world see the hidden talent
              inside you
            </p>
            <div class="demo-space-x">
              <VBtn color="info" variant="tonal" class="mt-5" elevation="2" @click="dialog = true">
                Show  <span class="pl-1"><VIcon>mdi mdi-eye</VIcon></span>
              </VBtn>
            </div>
          </div>
        </v-card>
      </v-col>
    </VRow>

    <v-dialog v-model="dialog" max-width="900px" max-height="900px" persistent>
      <v-card>
        <WelcomeItem />
        <v-card-actions>
          <div class="demo-space-x">
            <VBtn color="info" @click="dialog = false">
              <VIcon start>mdi mdi-chevron-left</VIcon>
              Back
            </VBtn>
          </div>
        
        </v-card-actions>
      </v-card>
    </v-dialog>
  </VApp>
</template>
