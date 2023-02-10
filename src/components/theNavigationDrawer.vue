<template>
  <v-navigation-drawer permanent location="left">
    <template v-slot:prepend>
      <v-list-item
        lines="two"
        :prepend-avatar="currentUser.avatar"
        :title="currentUser.name"
        :subtitle="currentUser.loggedStatus"
      ></v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list density="compact" nav v-if="isLoggedIn">
      <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
      <v-list-item prepend-icon="mdi-logout" title="LogOut" value="logOut" @click="logOut"></v-list-item>
    </v-list>
    <v-list density="compact" nav v-else>
      <v-list-item prepend-icon="mdi-logout" title="LogIn" value="logIn">
        <router-link to="/auth" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { getCookie } from '@/scripts/functionsCookie'

export default {
  setup () {
    const isLoggedInCookie = getCookie('isLoggedIn');
    let isLoggedIn = false
    if (isLoggedInCookie === 'true') {
       isLoggedIn = true
    }

    let currentUser = {}
    const userGuest = {
      name: 'Гость',
      avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
      loggedStatus: 'Logged out'
    }

    //todo: запрос на получение информации о пользователе на back-end
    if (isLoggedIn) {
      currentUser =  {
        name: 'Владислав',
        avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
        loggedStatus: 'Logged in'
      }
    }
    else {
      currentUser = userGuest
    }

    return {isLoggedIn, currentUser, userGuest}
  },
  methods: {
    logOut () {
      this.isLoggedIn = false
      this.currentUser = this.userGuest
    }
  }
}
</script>
