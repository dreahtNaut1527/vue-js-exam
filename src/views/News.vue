<template>
    <v-main>
        <v-subheader>Latest News <v-spacer></v-spacer></v-subheader>
        <v-container fluid>
            <v-row align="center">
                <v-col v-for="(item, i) in newsLists" align-self="start" :key="i" cols="12" xl="4" lg="3" md="12">
                    <v-card>
                        <v-container fluid>
                            <v-card-title>{{item.title}}</v-card-title>
                            <v-card-subtitle>{{item.content}}</v-card-subtitle>
                            <v-card-actions>
                                <v-chip>Posted: {{moment(item.date).fromNow()}}</v-chip>
                                <v-btn class="ml-2" @click="functionEditNews(item)" icon><v-icon>mdi-pencil</v-icon></v-btn>
                                <v-btn @click="functionDeleteNews(i - 1)" icon><v-icon>mdi-trash-can</v-icon></v-btn>
                            </v-card-actions>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-fab-transition>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        @click="functionCreateNews()"
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                        fixed
                        bottom
                        right
                        dark
                        fab
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <span>Add new</span>
            </v-tooltip>
        </v-fab-transition>
        <createNews :funcGetContents="functionSaveNews" :content="currentContent" :option="editMode" />
    </v-main>
</template>

<script>
import createNews from '@/components/createNews.vue'

export default {
    data() {
        return {
            dialog: false,
            editMode: false,
            currentContent: {},
            newsLists: [
                {
                    id: 1,
                    title: 'Title Header',
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    date: this.moment().format('YYYY-MM-DD')
                },
                {
                    id: 2,
                    title: 'Title Header',
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    date: this.moment().format('YYYY-MM-DD')
                },
                {
                    id: 3,
                    title: 'Title Header',
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    date: this.moment().format('YYYY-MM-DD')
                },
                {
                    id: 4,
                    title: 'Title Header',
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    date: this.moment().format('YYYY-MM-DD')
                },
                {
                    id: 5,
                    title: 'Title Header',
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    date: this.moment().format('YYYY-MM-DD')
                }
            ],
        }
    },
    methods: {
        functionCreateNews() {
            this.$modal.show('news')
            this.editMode = false
        },
        functionEditNews(val) {
            this.$modal.show('news')
            this.editMode = true
            this.currentContent = val
        },
        functionSaveNews(val) {
            let tempData = {
                id: this.newsLists.length + 1,
                ...val
            }
            this.newsLists.unshift(tempData)
        },
        functionDeleteNews(id) {
            this.newsLists.splice(id, 1)
        }
    },
    components: {
        createNews
    }
}
</script>