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
import { getCookie, setCookie } from '@/scripts/functionsCookie'

export default {
  setup () {
    const isLoggedIn = getCookie('isLoggedIn');
    if (isLoggedIn === 'true') {
      window.location.replace('/')
    }
  },
  methods: {
    authorization () {
      const { login, password } = this

      //todo: отправлять запрос на back-end

      const user = {
        login: 'vladislav',
        password: '123'
      }

      if (login === user.login && password === user.password) {
        setCookie('isLoggedIn', 'true', {'max-age': '2592000'})
         this.$router.push('/')
      }
      else {
        console.log('error')
      }
    }
  }
}
</script>
