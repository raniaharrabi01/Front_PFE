 const  generateReportfromCSVFile  = (reportFormat , file, editor) => {
    if (!file) {
        console.error("Veuillez sélectionner un fichier.");
        return;
    }
    console.log(editor);
    //const html = editor.getHtml();
    //console.log(html);
    // const cssData = editor.getCss();
    //  const Html = htmlData.replace(/"/g, "'");
    const htmlData = "<body id='ijlw'><table id='iebo'><tbody id='i3r3'><tr id='izf5'><th id='cell-1-1'>phrase</th><th id='cell-1-2'>name</th><th id='i41ak'>surname</th></tr><tr th:each='result : ${results}' id='ipjk'><td id='cell-3-1' th:text='${result.phrase}'></td><td id='cell-3-2' th:text='${result.name}'></td><td id='iqevz' th:text='${result.surname}'></td></tr></tbody></table></body>";
    const cssData = "* {box-sizing: border-box;}body {margin: 0;}#iebo{border-collapse:collapse;width:100%;}#i3r3{padding:10px;}#izf5{border:1px solid #000;}#cell-1-1{border:1px solid #000;background-color:#46259f;}#cell-1-2{border:1px solid #000;background-color:#ae1db3;}#ipjk{border:1px solid #000;}#cell-3-1{border:1px solid #000;height:30px;}#cell-3-2{border:1px solid #000;height:30px;color:black;}#iqevz{border:1px solid #000;height:30px;}#i41ak{border:1px solid #000;background-color:#3aa61e;}#ijlw{background-color:#ffffff;}";
    const modelData = { htmlData: htmlData, cssData: cssData };
    const formData = new FormData();
    formData.append('file', file);
    formData.append('modelData', JSON.stringify(modelData));
    // const fileData  = {formData: formData, modelData: modelData}
    console.log(formData);
    // Determine the endpoint URL based on the selected format
    let endpoint = '';
    if (reportFormat === 'pdf') {
        endpoint = 'ExportPDFReport/FromCSVFile';
    } else if (reportFormat === 'html') {
        endpoint = 'ExportHtmlReport/FromCSVFile';
    } else if (reportFormat === 'excel') {
        endpoint = 'ExportExcelReport/FromCSVFile';
    }
    fetch(`http://localhost:8080/${endpoint}`, {
        method: 'POST',
        body: formData,
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
            console.log(error.message);
        });
};
export default generateReportfromCSVFile;