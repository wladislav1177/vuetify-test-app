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
      <v-list-item prepend-icon="mdi-logout" title="LogIn" value="logIn" @click="logIn"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// import { getCookie } from '@/scripts/functionsCookie'

export default {
  // data () {
  //   return {
  //     isLoggedIn: this.isLoggedIn,
  //     currentUser: this.currentUser
  //   }
  // },
  setup () {

    // let isLoggedIn = getCookie('isLoggedIn')
    let isLoggedIn = true
    let currentUser = {}

    const userGuest = {
      name: 'Гость',
      avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
      loggedStatus: 'Logged out'
    }

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
    },
    logIn () {
      this.isLoggedIn = true
    }
  }
}
</script>
