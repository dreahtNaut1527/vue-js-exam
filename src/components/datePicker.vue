<template>
     <v-menu
          ref="menu"
          v-model="menuDialog"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
     >
          <template v-slot:activator="{ on, attrs }">
               <v-text-field
                    v-model="date"
                    :label="label"
                    @click="menuDialog = true"
                    @click:append="menuDialog = true"
                    append-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    readonly
                    outlined
                    dense
               ></v-text-field>
          </template>
          <v-date-picker
               v-model="date"
               no-title
               scrollable
               @change="$refs.menu.save(date)"
          >
          </v-date-picker>
     </v-menu>
</template>

<script>
export default {
    props: [
        'menu',
        'dateValue',
        'dateLabel'
    ],
    data() {
        return {
            menuDialog: false,
            date: this.dateValue,
            label: this.dateLabel
        }
    },
    watch: {
        menu() {
            this.menuDialog = true
        },
        dateValue(val) {
            this.date = val
        },
        date(val) {
            this.$emit('update:dateValue', val)
            this.menuDialog = false
        }
    }
}
</script>