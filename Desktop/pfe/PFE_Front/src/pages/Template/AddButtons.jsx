const AddButtons = ({ editor }) => {

    editor.Panels.addPanel({
        buttons: [
          {
            id: 'return-button',
            className: 'btn btn-return',
            label: 'Retour',
            command() {
              window.location.href = '/modéles';       
            },
          },
          {
            id: 'button save-button',
            className: 'btn btn-save',
            label: 'Enregistrer le modéle',
            command(editor) {
              const event = new CustomEvent("addTemplate", { 
                bubbles: false,   
                detail: {
                editor: editor,
              }});
              document.dispatchEvent(event);
           },
          },
          {
            id: 'specifie-button',
            className: 'btn btn-specifie',
            label: 'Générer rapport',
            command(editor) {
              const default_Html = "<body id='ij2x'></body>";
             // const RegulierExp = /\${[A-Za-z][a-z0-9_]+}/g;
              // Expression régulière pour rechercher "${une_chaine_au_milieu}"
              // Vérifier si le contenu de editor.getHtml() contient l'expression régulière
              //if (editor.getHtml() === default_Html || !editor.getHtml().match(RegulierExp)) {
                  alert("Vous devez remplir les champs par les noms spécifiques.");
             // } else {
                const event = new CustomEvent("passEditor", { 
                  bubbles: false,   
                  detail: {
                  editor: editor,
                }});
                document.dispatchEvent(event);
                window.location.href = '/DataSource/ExternalDataBase';       
            //  }
          }
          },
          {
            id: 'Prepare_Contexte',
            className: 'btn btn-Contexte',
            label: 'Préparer le contexte',
            command(editor) {
              const event = new CustomEvent("addContext", { 
                bubbles: false,   
                detail: {
                editor: editor,
              }});
              document.dispatchEvent(event);
           },
          },
        ],
      }); 
    }

export default AddButtons;