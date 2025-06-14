import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore(
  "notes",
  () => {
    const API_URL = "https://ca6e42326f328a290c7a.free.beeceptor.com/api/notes/";
    const notes = ref([]);
    const loading = ref(false);
    const error = ref(false);

    const getNotes = async () => {
      try {
        loading.value = true;
        const response = await fetch(API_URL);
        const data = await response.json();
        notes.value = data.reverse();
        loading.value = false;
        error.value = false;
      } catch (e) {      
        loading.value = false;
        error.value = true;
      }
    };
    const createId = () => {
      return Date.now().toString(36) + Math.random().toString(36).slice(2);
    };

    const addNote = async (title) => {
      const newNote = {
        id: createId(),
        title,
        marked: false
      }

      try {
        await fetch (API_URL, {
          method: "POST",
          headers: {
    "Content-Type": "application/json"
  },
          body: JSON.stringify(newNote)
})

getNotes();
      }
      catch (e) {
error.value = true;
      }
      // notes.value.unshift({
      //   id: createId(),
      //   title,
      //   marked: false,
      // });
    };

     const removeNote = async (note) => {
    try {
      await fetch(`${API_URL}${note.id}`, {
        method: "DELETE",
      });

      // Actualizar la lista de notas después de eliminar
      notes.value = notes.value.filter(n => n.id !== note.id);
    } catch (e) {
      error.value = true;
    }
  };

    return {
      notes,
      loading,
      error,
      getNotes,
      addNote,
      removeNote,  // Asegúrate de retornar el método removeNote para utilizarlo en tus componentes
    };
  }
  // {
  //   persist: true,
  // }

  // habría que quitar lo de persist una vez que instalemos la appi
);
