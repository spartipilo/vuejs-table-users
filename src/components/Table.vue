<template>
  <v-container>
    <v-data-table
      :items="data"
      :headers="headers"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:[`item.actions`]="{ item }">
        <BtnTable :item="item" @changeData="dataEdited()" />
      </template>
    </v-data-table>
    <Dialog
      :dialog="dialog"
      @closeDialog="dialog = $event"
      :complete="completeData"
    />

    <div>
      <v-btn style="margin-top: 20px" color="primary" @click="dialog = true"
        >Crea</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import { users } from "../dataUser";
import Dialog from "./Dialog.vue";
import BtnTable from "./BtnTable.vue";
import "../../style/table.css";
export default {
  created() {
    for (let i = 0; i < users.length; i++) {
      this.data.push(users[i]);
    }
    this.$store.state.indexUsersNow = this.data.length;
  },

  data() {
    return {
      dialog: false,
      data: [],
      headers: [
        { text: "Nome", value: "nome" },
        { text: "Cognome", value: "cognome" },
        { text: "Età", value: "eta" },
        { text: "", value: "actions" },
      ],
    };
  },
  components: {
    Dialog,
    BtnTable,
  },
  methods: {
    completeData() {
      this.data.push(this.$store.getters.getData);
    },

    dataEdited() {
      let x = this.$store.getters.getDataEdited;
      let index = this.data.findIndex((el) => el.id === x.id);
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[index].id === index) {
          this.data[index].id = index;
          this.data[index].nome = x.nome;
          this.data[index].cognome = x.cognome;
          this.data[index].eta = x.eta;
        }
      }
    },
  },
};
</script>

<style></style>
