<template>
  <v-sheet width="500" class="mx-auto">
    <v-form fast-fail>
      <v-text-field
        v-model="login"
        label="Логин"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Пароль"
      ></v-text-field>

      <v-btn block class="bg-indigo-lighten-1 mt-2" @click="authorization">Войти</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
// import { getCookie } from '@/scripts/getCookie'

export default {
  methods: {
    authorization () {
      const { login, password } = this

      console.log(login)
      console.log(password)
    }
  }
}
</script>
