const getDataTemplateSelected = (name,setTemplateData) => {
  fetch(`http://localhost:8080/Template/getDataTemplate/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des modèles");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setTemplateData({
        id: data.id,
        htmlData: data.htmlData,
        cssData: data.cssData
      })
    })
    .catch(error => {
      console.error("Erreur:", error.message);
    });
  }
export default getDataTemplateSelected;
