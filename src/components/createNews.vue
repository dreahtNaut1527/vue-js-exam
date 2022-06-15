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
                    <v-row align="center" no-gutters dense>
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
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="contentDetails.link"
                                label="Link"
                                :rules="[v => !!v || 'Link is required']"
                                outlined
                                dense
                            ></v-text-field>
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
                date: this.moment().format('YYYY-MM-DD'),
                link: null,
                liked: false
            },
            config: {
                position: 'bottom-right',
                timeout: 3000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                icon: true
            },
        }
    },
    methods: {
        functionSaveNews() {
            if (this.$refs.form.validate()) {
                this.Swal.fire({
                    title: 'Are you sure',
                    text: 'Save changes? ',
                    icon: 'question',
                    showCancelButton: true,
                    showDenyButton: false,
                    confirmButtonColor: '#1976d2',
                    confirmButtonText: 'Save',
                }).then(result => {
                    if(result.isConfirmed) {
                        this.funcGetContents(this.contentDetails)
                        this.clearVariables()
                        this.$toast.success('Save successfuly', this.config)
                    }
                })
            }
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