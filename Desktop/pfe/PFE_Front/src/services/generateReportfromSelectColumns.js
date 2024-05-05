const generateReportfromSelectColumns = (reportFormat,DataBaseConnexion,selectedColumns,tableName) => {
    // const html = setEditor.getHtml();
     console.log(html);
    // const cssData = editor.getCss();
    //  const Html = htmlData.replace(/"/g, "'");
    const htmlData = "<body id='ijlw'><table id='iebo'><tbody id='i3r3'><tr id='izf5'><th id='cell-1-1'>id</th><th id='cell-1-2'>name</th><th id='i41ak'>address</th></tr><tr th:each='result : ${results}' id='ipjk'><td id='cell-3-1' th:text='${result.id}'></td><td id='cell-3-2' th:text='${result.name}'></td><td id='iqevz' th:text='${result.address}'></td></tr></tbody></table></body>";
    const cssData = "* {box-sizing: border-box;}body {margin: 0;}#iebo{border-collapse:collapse;width:100%;}#i3r3{padding:10px;}#izf5{border:1px solid #000;}#cell-1-1{border:1px solid #000;background-color:#46259f;}#cell-1-2{border:1px solid #000;background-color:#ae1db3;}#ipjk{border:1px solid #000;}#cell-3-1{border:1px solid #000;height:30px;}#cell-3-2{border:1px solid #000;height:30px;color:black;}#iqevz{border:1px solid #000;height:30px;}#i41ak{border:1px solid #000;background-color:#3aa61e;}#ijlw{background-color:#ffffff;}";
    const modelData = { htmlData: htmlData, cssData: cssData };
    const ReportRequest ={modelData : modelData , data : DataBaseConnexion, selectedColumns : selectedColumns}
   let endpoint = '';
    if (reportFormat === 'pdf') {
        endpoint = 'ExportPDFReport/FromSQLquery';
    } else if (reportFormat === 'html') {
        endpoint = 'ExportHtmlReport/FromSQLquery';
    } else if (reportFormat === 'excel') {
        endpoint = 'ExportExcelReport/FromSQLquery';
    }
    fetch(`http://localhost:8080/${endpoint}/${tableName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ReportRequest)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors de la génération du rapport");
            }
            return response.text();
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error("Erreur:", error.message);
        });
      };
export default generateReportfromSelectColumns;
  