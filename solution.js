let tab = [];
      tab.push("Faire les courses");
      tab.push("Etudier JavaScript");
      tab.push("Appeler un ami");

      // console.log(tab);

      // tab.pop(0);

      // console.log(tab);
      let tache = prompt("entrer une tache");
      function ajoutertache(tache) {
        tab.push(tache);
      }
      function supptache() {
        if (tab.length == 0) console.log("Il n'y a pas de tâche à faire");
        else tab.pop();
      }

      ajoutertache(tache);

      supptache();
      console.log(tab);
      
