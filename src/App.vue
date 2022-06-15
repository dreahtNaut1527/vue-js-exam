<template>
    <v-app id="inspire">
        <navHeader />
        <router-view />
    </v-app>
</template>

<script>
import navHeader from '@/components/navHeader'

export default {
    components: {
        navHeader
    }
}
</script>