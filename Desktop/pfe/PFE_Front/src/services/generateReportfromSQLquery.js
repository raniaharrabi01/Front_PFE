const generateReportfromSQLquery = (reportFormat,DataBaseConnexion,SQLRequete) => {
    // const html = editor.getHtml();
    // const cssData = editor.getCss();
    // const Html = htmlData.replace(/"/g, "'");
    const htmlData = "<body th:fragement='code' id='ijlw'><h3 th:text='${name}'></h3><table id='i16l'><tbody id='i405'><tr id='iv46'><th id='cell-1-1'>ID Transaction</th><th id='cell-1-2'>Nom Client</th><th id='iu7dc'>Nom Agence</th></tr><tr th:each='result : ${results}'><td id='cell-3-1' th:text='${result.id}'></td><td th:text='${result.name}' id='cell-3-2'></td><td id='i15cr' th:text='${result.agence_name}'></td></tr></tbody></table></body>"
    const cssData = "* {box-sizing: border-box;}body {margin: 0;}#i16l{border-collapse:collapse;width:100%;}#i405{padding:10px;}#iv46{border:1px solid #000;}#cell-1-1{border:1px solid #000;background-color:#8ebcdf;}#cell-1-2{border:1px solid #000;background-color:#4ee8a7;}#igcy{border:1px solid #000;}#cell-3-1{border:1px solid #000;height:30px;}#cell-3-2{border:1px solid #000;height:30px;}#iu7dc{border:1px solid #000;background-color:#e84e4e;}#i15cr{border:1px solid #000;height:30px;}"
    const modelData = { htmlData: htmlData, cssData: cssData };
    const ReportRequest ={modelData : modelData , data : DataBaseConnexion}
   let endpoint = '';
    if (reportFormat === 'pdf') {
        endpoint = 'ExportPDFReport/FromSQLquery';
    } else if (reportFormat === 'html') {
        endpoint = 'ExportHtmlReport/FromSQLquery';
    } else if (reportFormat === 'excel') {
        endpoint = 'ExportExcelReport/FromSQLquery';
    }
    fetch(`http://localhost:8080/${endpoint}/${SQLRequete}`, {
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
export default generateReportfromSQLquery;
  