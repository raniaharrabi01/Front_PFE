const getListTablesAndCulumns = (DataBaseConnexion,setTablesAndColumns,setConnectionEstablished,setShowInput) => {
    console.log(DataBaseConnexion);
      fetch('http://localhost:8080/tablesAndColumns', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(DataBaseConnexion),
      })
      .then(response => {
          if (!response.ok) {
              throw new Error("Erreur lors de la récupération des noms de tableaux et colonnes");
          }
          return response.json();
      })
      .then(data => {
          setTablesAndColumns(data);
          setShowInput(false);
          setConnectionEstablished(true);
      })
      .catch(error => {
          console.error("Erreur lors de la récupération des noms de tableaux et colonnes:", error.message);
      });
  };
export default getListTablesAndCulumns;