const SaveTemplate = (context,htmlData,cssData,name,id) => {
  console.log(context);
  const dataModel = { htmlData: htmlData, cssData: cssData, modelName: name, id: id, context: ["id" , "name" , "adress"] };
  if (id != null) { 
    fetch("http://localhost:8080/Template/ModifyTemplateData", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataModel),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors de la modification des données du modèle");
      }
    })
    .then(response => {
      alert("Les données ont été modifiées avec succès");
    })
    .catch(error => {
      console.error("Erreur:", error.message);
    });
  }

  else
  {
    const dataModel = { htmlData: htmlData, cssData: cssData, modelName: name, context: ["id" , "name" , "adress"] };
    console.log(dataModel);
    fetch(`http://localhost:8080/Template/verifyTemplateNameExist/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération du nom du modéle");
      }
      return response.json();
     })
     .then(response => {
      if (response == true) {
        fetch("http://localhost:8080/Template/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataModel),
        })
          .then((response) => {
            if (response.ok) {
              alert("Modèle enregistré avec succès");
            } else {
              throw new Error("Erreur lors de l'enregistrement du modéle");
            }
          })
          .catch((error) => {
            console.error("Erreur :", error);
            alert("Une erreur s'est produite lors de l'enregistrement du modéle");
          });
      }
      else {
        alert("le nom du modéle est utilise");
      }
    })
    .catch(error => {
      console.error("Erreur:", error.message);
    });
  }
};
export default SaveTemplate;