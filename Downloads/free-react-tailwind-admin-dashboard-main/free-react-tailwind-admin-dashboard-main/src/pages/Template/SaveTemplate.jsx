const SaveTemplate = (editor) => {
    const htmlData = editor.getHtml();
    const cssData = editor.getCss();
    const Html = htmlData.replace(/"/g, "'");
    const default_Html = "<body id='ij2x'></body>";
    const dataModel = { htmlData: Html, cssData: cssData };
    console.log(dataModel);
    // Envoyer la requête POST au backend pour enregistrer le modèle
    if (Html === default_Html) {
      alert("Préparez votre modèle");
    } else {
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
            throw new Error("Erreur lors de l'enregistrement du modèle");
          }
        })
        .catch((error) => {
          console.error("Erreur :", error);
          alert("Une erreur s'est produite lors de l'enregistrement du modèle");
        });
    }
  };
  
  export default SaveTemplate;