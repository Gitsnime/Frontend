<template>
    <NavBar />
    <main>
        <router-view></router-view>
    </main>
</template>

<script lang="ts">
import NavBar from '../components/layout/Navbar.vue'

export default {
    name: 'DefaultLayout',
    components: { NavBar }
}
</script>