<template>
  <v-app>
    <v-card>
      <v-layout>
        <the-navigation-drawer />
        <the-header />

        <v-main class="main">
          <v-container class="fill-height align-start">
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
import TheNavigationDrawer from "@/components/theNavigationDrawer"
import TheFooter from "@/components/theFooter"
</script>

<style scoped>
  .main {
    height: 90vh;
  }
</style>
