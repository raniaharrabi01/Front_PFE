import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import React, { useState } from 'react';
import { MdUploadFile, MdFileDownloadDone } from "react-icons/md";
import './CSVFile.css'
import FormatDuRapport from './FormatDuRapport';

const CSVFile = () => {

    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [FormatReport, setFormatReport] = useState('');

    const handleFileUpload = (e) => {
        const uploadedFile = e.target.files[0];
        setFileName(uploadedFile.name);
        setFile(uploadedFile);
    }

    const SendFileCsv = (selectedFormat) => {
        if (!file) {
            console.error("Veuillez sélectionner un fichier.");
            return;
        }
        const formData = new FormData();
        formData.append('file', file);

        // Determine the endpoint URL based on the selected format
        let endpoint = '';
        if (selectedFormat === 'pdf') {
            endpoint = 'http://localhost:8080/upload/pdf';
        } else if (selectedFormat === 'html') {
            endpoint = 'http://localhost:8080/upload/html';
        } else if (selectedFormat === 'excel') {
            endpoint = 'http://localhost:8080/upload/excel';
        }

        fetch(endpoint, {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur lors de l'envoi du fichier");
                }
                return response.json();
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error("Erreur:", error.message);
                console.log(error.message);
            });
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
                <FormatDuRapport setShowModal={setShowModal} />
    ) : null}
        </DefaultLayout>
    )
}

export default CSVFile;
