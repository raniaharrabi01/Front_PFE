import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import React, { useState,useEffect } from 'react';
import { MdUploadFile, MdFileDownloadDone } from "react-icons/md";
import './CSVFile.css'
import FormatDuRapport from './FormatDuRapport';
import generateReportfromCSVFile from '../../services/generateReportfromCSVFile';

const CSVFile = () => {

    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [reportFormat, setSelectedFormat] = useState(false);
    const [editor, setEditor] = useState('');

    useEffect(() => {
        document.addEventListener(
          "passEditor",
          (e) => {
            setEditor(e.detail.editor);
          },
          false,
        );
      }, []);

    const handleFileUpload = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        setFileName(uploadedFile.name);
    }

    const handleGenerateReport = () => {
        console.log(editor);
        generateReportfromCSVFile(reportFormat, file, editor);
    };

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Source de données : Fichier CSV" />
            <div>
                <div className='select_box'>
                    <h1 className='font-medium text-black dark:text-white ml-9'>importer votre fichier ici : </h1>
                    <div className='file-container flex items-center justify-center'>
                        <input type="file" accept=".csv" onChange={handleFileUpload} id="fileInput" />
                        <div className="content ml-8">
                            <label htmlFor="fileInput" className="fileLabel">
                                <div className='icons'>
                                    {fileName ? <MdFileDownloadDone /> : <MdUploadFile />}
                                </div>
                                <span className='labeler'>Charger un fichier</span>
                                <span id="fileName">{fileName ? `Nom du fichier : ${fileName}` : 'Aucun fichier sélectionné !'}</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button className="inline-flex items-center justify-center rounded-full bg-black py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4" onClick={() => setShowModal(true)}>
                        Choisir la forme du rapport
                    </button>
                </div>
            </div>
            {showModal ? (
                <FormatDuRapport setShowModal={setShowModal} setSelectedFormat={setSelectedFormat} générerRapport={handleGenerateReport}/>
    ) : null}
        </DefaultLayout>
    )
}

export default CSVFile;
