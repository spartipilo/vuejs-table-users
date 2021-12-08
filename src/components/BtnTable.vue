<template>
  <div>
    <v-btn rounded color="warning" @click="editDialog = true">Modifica</v-btn>
    <v-dialog v-model="editDialog" persistent>
      <v-card shaped width="500">
        <v-container>
          <v-card-title
            >Stai modificando la scheda di {{ item.nome }}</v-card-title
          >
          <v-text-field v-model="modelField.nome" outlined shaped />
          <v-text-field v-model="modelField.cognome" outlined shaped />
          <v-text-field v-model="modelField.eta" outlined shaped />
          <v-card-actions style="display: flex; justify-content: space-between">
            <v-btn rounded text color="error" @click="editDialog = false"
              >Annulla</v-btn
            >
            <v-btn rounded text color="primary" @click="saveData()"
              >Salva</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },

  data() {
    return {
      editDialog: false,
      modelField: {
        nome: this.item.nome,
        cognome: this.item.cognome,
        eta: this.item.eta,
        id: this.item.id,
      },
    };
  },
  methods: {
    saveData() {
      this.$store.commit("setDataEdited", this.modelField);
      this.$emit("changeData", this.modelField);
      this.editDialog = false;
    },
  },
};
</script>

<style></style>
