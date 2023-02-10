<template>
  <v-app>
    <v-card>
      <v-layout>
        <the-header />

        <v-main class="main">
          <v-container class="fill-height d-flex justify-center">
            <router-view />
          </v-container>
        </v-main>

        <the-footer />
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup>
import TheHeader from "@/components/theHeader"
import TheFooter from "@/components/theFooter"
</script>

<style scoped>
.main {
  height: 90vh;
}
</style>
