<template>
    <v-main>
        <v-toolbar flat>
            <v-subheader>Latest News <v-spacer></v-spacer></v-subheader>
            <v-spacer></v-spacer>
            <v-text-field
                class="shrink"
                v-model="searchInfo"
                label="Search"
                append-icon="mdi-magnify"
                hide-details
                clearable
                outlined
                dense
            ></v-text-field>
        </v-toolbar>
        <v-container fluid>
            <v-row align="center">
                <v-col v-for="(item, i) in filterNews" align-self="start" :key="i" cols="12" xl="12" lg="4" md="12">
                    <v-card outlined>
                        <v-container fluid>
                            <v-card-title class="font-weight-bold ma-n2">
                                {{item.title}}
                                <v-spacer></v-spacer>
                                <v-btn @click="item.liked = !item.liked" text icon>
                                    <v-icon :color="item.liked ? 'warning' : ''">
                                        {{ item.liked ? 'mdi-star' : 'mdi-star-outline'}}
                                    </v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-subtitle class="text-justify text--secondary">{{item.content}} <a :href="item.link" target="_blank">Read More</a> </v-card-subtitle>
                            <v-card-actions>
                                <v-chip>Posted: {{moment(item.date).fromNow()}}</v-chip>
                                <v-btn class="ml-2" @click="functionEditNews(item)" icon><v-icon color="info">mdi-pencil</v-icon></v-btn>
                                <v-btn @click="functionDeleteNews(i)" icon><v-icon color="error">mdi-trash-can</v-icon></v-btn>
                                <v-spacer></v-spacer>
                                <v-btn icon><v-icon color="primary">mdi-facebook</v-icon></v-btn>
                                <v-btn icon><v-icon color="info">mdi-twitter</v-icon></v-btn>
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
            searchInfo: null,
            currentContent: {},
            config: {
                position: 'bottom-right',
                timeout: 3000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                icon: true
            },
            newsLists: [
                {
                    id: 1,
                    title: 'Norway eyes offshore wind farms in PH',
                    content: `MANILA, Philippines — Norway on Wednesday assured the Philippines it would expand its renewable energy investments in the country particularly in offshore wind power, according to Norwegian Ambassador Bjorn Jahnsen. “Norway has made investments in the Philippines in renewable energy, and more companies and more investments will come in the coming years — offshore wind, floating solar, and also hydro,” Jahnsen said at a press briefing after his meeting with President-elect Ferdinand Marcos Jr. in Mandaluyong City.`,
                    date: this.moment().format('YYYY-MM-DD'),
                    link: 'https://newsinfo.inquirer.net/1611495/norway-eyes-offshore-wind-farms-in-ph#ixzz7WKCV5YDE',
                    liked: false
                },
                {
                    id: 2,
                    title: `The Best LEGO Sets for Adults - Father's Day Gift Ideas`,
                    content: `Father’s Day is June 19 this year, which means you’re running out of time to purchase a gift for the dad in your life. If said dad or father figure enjoys building things, a new LEGO set for adults might be in order. In recent years, LEGO has been putting out quite a few sets with an 18+ age recommendation. These are typically sets based on things adults might be into, and they usually come with a placard and/or stand so you can display them as decorations on a shelf or desk. Let’s take a look at some of the best LEGO sets for dads.`,
                    date: this.moment().format('YYYY-MM-DD'),
                    link: 'https://www.ign.com/articles/best-lego-sets-for-adults',
                    liked: false
                },
                {
                    id: 3,
                    title: 'A NASA rover just found trash on Mars',
                    content: `While looking for hints of past microbial Martian life, NASA's Perseverance rover recently spotted landing debris caught in a jagged rock. It's thermal material the space agency used to protect the Perseverance spacecraft from extreme temperatures as it journeyed to Mars and plummeted through the Martian atmosphere.`,
                    date: this.moment().format('YYYY-MM-DD'),
                    link: 'https://mashable.com/article/nasa-mars-rover-finds-debris-trash',
                    liked: false
                }
            ],
        }
    },
    computed: {
        filterNews() {
            return this.newsLists.filter(news => {
                return (
                    news.title.toLowerCase().includes(this.searchInfo || '') ||
                    news.content.toLowerCase().includes(this.searchInfo || '')
                )
            })
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
            if (!this.editMode) this.newsLists.unshift(tempData)
            this.currentContent = {}
        },
        functionDeleteNews(id) {
            this.Swal.fire({
                title: 'Are you sure',
                text: 'Do you want to delete? ',
                icon: 'question',
                showCancelButton: true,
                showDenyButton: false,
                confirmButtonColor: '#1976d2',
                confirmButtonText: 'Delete',
            }).then(result => {
                if(result.isConfirmed) {
                    this.newsLists.splice(id, 1)
                    this.$toast.success('Success', this.config)
                }
            })
        }
    },
    components: {
        createNews
    }
}
</script>