<template>
  <div>
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card>
        <v-card-title>Aggiungi</v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field
              v-for="(user, index) in newUser"
              :key="index"
              v-model="user.vModel"
              :type="user.type"
              :label="user.placeholder"
              outlined
              shaped
            ></v-text-field>
            <div class="button__container">
              <v-btn
                :disabled="isButtonDisabled()"
                color="primary"
                @click="addData()"
                >Aggiungi</v-btn
              >
              <v-btn color="error" @click="closeDialog()">Chiudi</v-btn>
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    dialog: Boolean,
    complete: Function,
  },
  data() {
    return {
      closeDialogBool: false,
      btnDisabled: true,
      newUser: [
        {
          placeholder: "Nome...",
          vModel: "",
          type: "text",
        },
        {
          placeholder: "Cognome...",
          vModel: "",
          type: "text",
        },
        {
          placeholder: "Età...",
          vModel: "",
          type: "number",
        },
      ],
    };
  },

  computed: {
    ...mapMutations(["setData"]),
  },
  methods: {
    isButtonDisabled() {
      let result = this.newUser.filter((el) => el.vModel === "");
      if (result.length === 0) {
        return (this.btnDisabled = false);
      } else {
        return (this.btnDisabled = true);
      }
    },
    closeDialog() {
      return this.$emit("closeDialog", this.closeDialogBool);
    },
    addData() {
      let result = this.newUser.filter((el) => el.vModel === "");
      if (result.length === 0) {
        let data = {
          nome: this.newUser[0].vModel,
          cognome: this.newUser[1].vModel,
          eta: this.newUser[2].vModel,
          id: this.$store.state.indexUsersNow++,
        };
        this.$store.commit("setData", data);
        this.complete();
        this.newUser.map((el) => (el.vModel = ""));
        this.closeDialog();
      }
    },
  },
};
</script>

<style>
.button__container {
  display: flex;
  justify-content: space-between;
}
</style>
