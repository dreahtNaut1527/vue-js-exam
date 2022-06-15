<template>
    <modal
        name="news" 
        :adaptive="true"
        :draggable="true" 
        :reset="true" 
        height="auto" 
    >
        <v-card>
            <v-toolbar color="primary" dark>
                <v-toolbar-title>{{ option ? 'Edit' : 'New' }} Record</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon>mdi-pencil</v-icon>
            </v-toolbar>
            <v-container fluid>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row align="center" dense>
                        <v-col cols="12" md="3" sm="3">
                            <datePicker :dateValue.sync="contentDetails.date" dateLabel="Date" />
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="contentDetails.title"
                                label="Title"
                                :rules="[v => !!v || 'Title is required']"
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-textarea
                                v-model="contentDetails.content"
                                label="Content"
                                :rules="[v => !!v || 'Content is required']"
                                outlined
                                dense
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="clearVariables()" text>Cancel</v-btn>
                <v-btn @click="functionSaveNews()" color="primary" dark>Save</v-btn>
            </v-card-actions>
        </v-card>
    </modal>
</template>

<script>
import datePicker from '@/components/datePicker'

export default {
    props: [ 'funcGetContents', 'content', 'option' ],
    data() {
        return {
            valid: true,
            dialog: false,
            contentDetails: {
                title: null,
                content: null,
                date: this.moment().format('YYYY-MM-DD')
            }
        }
    },
    methods: {
        functionSaveNews() {
            this.funcGetContents(this.contentDetails)
            this.clearVariables()
        },
        clearVariables() {
            this.contentDetails = {
                title: null,
                content: null,
                date: this.moment().format('YYYY-MM-DD')
            }
            this.$refs.form.resetValidation()
            this.$modal.hide('news')
        }
    },
    watch: {
        openDialog() {
            this.dialog = true
        },
        content(val) {
            this.contentDetails = val
        }
    },
    components: {
        datePicker
    }
}
</script>