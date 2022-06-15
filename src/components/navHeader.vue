<template>
    <div>
        <v-navigation-drawer
            permanent
            clipped
            app
        >
            <v-list dense shaped>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in mainCategory" :key="i" link>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-divider class="mx-3"></v-divider>
            <v-subheader>Categories</v-subheader>
            <v-divider class="mx-3"></v-divider>
            <v-list dense shaped>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in categories" :key="i" link>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar color="primary" clipped-left dark app>
            <v-toolbar-title>News</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mainCategory: [
                {text: 'Top stories', icon: 'mdi-web'},
                {text: 'For you', icon: 'mdi-rhombus-outline'},
                {text: 'Following', icon: 'mdi-star-outline'},
                {text: 'Saved searches', icon: 'mdi-magnify'},
            ],
            categories: [
                {text: 'Business', icon: 'mdi-domain'},
                {text: 'Cars', icon: 'mdi-car'},
                {text: 'Entertainment', icon: 'mdi-movie-open'},
                {text: 'Family', icon: 'mdi-human-male-female-child'},
                {text: 'Health', icon: 'mdi-dumbbell'},
                {text: 'Politics', icon: 'mdi-bank'},
                {text: 'Religion', icon: 'mdi-church'},
                {text: 'Science', icon: 'mdi-flask'},
                {text: 'Sports', icon: 'mdi-bike'},
                {text: 'Technology', icon: 'mdi-laptop'},
                {text: 'Travel', icon: 'mdi-map-search-outline'},
                {text: 'World', icon: 'mdi-earth'}
            ]
        }
    }
}
</script>