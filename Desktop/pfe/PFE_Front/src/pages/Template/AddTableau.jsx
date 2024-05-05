const AddTableau = (editor) => {
  editor.Components.addType('table', {
    isComponent: el => el.tagName === 'TABLE',
    model: {
      defaults: {
        traits: [
          {
            type: 'input',
            name: 'id',
          },
          {
            type: 'input',
            name: 'variable',
          },
        ],
      },
    },
  });


  editor.Blocks.add('table-block', {
    label: `
     <div>
     <img src="src/images/icon/icon_table.jpg" alt="Image" style="width: 50px; height: 70px; margin-left: 14px; margin-bottom: 12px; filter: brightness(0) invert(1);">
     <span style="margin-top: 50px;">Tableau</span>
    </div>
  `,
 content: `
      <table  style="border-collapse: collapse; width: 100%;">
      <tbody  style="padding: 10px;">
        <tr style="border: 1px solid #000;">
          <th id="cell-1-1" style="border: 1px solid #000;" >colonne 1</th>
          <th id="cell-1-2" style="border: 1px solid #000;">colonne 2</th>
        </tr>
        <tr style="border: 1px solid #000;" th:each="data">
          <td id="cell-3-1" style="border: 1px solid #000; height: 30px;"></td>
          <td id="cell-3-2" style="border: 1px solid #000; height: 30px;"></td>
        </tr>
      </tbody>
      </table>
    `, 
  });

  editor.on('component:selected', () => {
    console.log("Component selected");
    const selectedComponent = editor.getSelected();
    if (selectedComponent && selectedComponent.getEl()) {
      console.log("Selected component element:", selectedComponent.getEl());
      const table = selectedComponent.getEl().querySelector('table');
      if (table) {
        console.log("Table element found:", table);
        table.querySelectorAll('th').forEach((cell) => {
          cell.addEventListener('click', () => {
            console.log("Cell clicked:", cell);
            cell.setAttribute('contenteditable', true);
          });
        });
      }
    }
  });

  editor.on('component:selected', () => {
    const selectedComponent = editor.getSelected();
    const variableTrait = selectedComponent.getTrait('variable');
    const selectedValue = variableTrait.props().value;
    console.log("Selected value:", selectedValue);  
    if (selectedComponent && selectedComponent.getEl()) {
      const table = selectedComponent.getEl().querySelector('table');
    if (table) {
      const tr = table.querySelector('tr[th:each="data"]');
      console.log(tr);
      if (tr) {
        variableTrait.on('change', () => {
          console.log("Variable trait changed to:", variableTrait.getTargetValue());
          tr.setAttribute('th:each', `data: ${variableTrait.getTargetValue()}`);
        });
       }    
      }
     }
   });
};

export default AddTableau;
