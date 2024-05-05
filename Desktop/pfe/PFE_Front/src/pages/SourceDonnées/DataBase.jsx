import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import React, { useState, useEffect } from "react";
import RequéteSQL from './RequéteSQL';
import ListeDesTables from './ListeDesTables';
import getListTablesAndCulumns from '../../services/getListTablesAndColumns';
import PopupListeModéles from './PopupListeModéles';


const DataBase = () =>{


  const [showModal, setShowModal] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [templateName, setTemplateName] = useState('');
  const [tablesAndColumns, setTablesAndColumns] = useState({});
  const [ConnectionEstablished, setConnectionEstablished] = useState(false);
  const [DataBaseConnexion, setDataBaseConnexion] = useState({
           username:"",
           base_name:"",
           password:"",
           host:"",
           port:"",
    });

    const handleButtonClick = () => {
      setShowInput(true);
    };

  const handleChangeDataBase = (event) => {
     const { name, value } = event.target;
     setDataBaseConnexion(prevState => ({
       ...prevState,
       [name]: value
     }));
     if (value.trim() !== "") {
        setDataBaseConnexion(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
   };

  const handleSubmit = (event) => {
  event.preventDefault();
  getListTablesAndCulumns(DataBaseConnexion,setTablesAndColumns,setConnectionEstablished,setShowInput)
  };
  
  useEffect(() => {
  console.log(tablesAndColumns);
  }, [tablesAndColumns]);

   
    return(
    <DefaultLayout>
        <Breadcrumb pageName="Source de données : Base de données" />
        <div>
        {ConnectionEstablished && (
          <div>
         <h3 className="font-bold text-[#4169E1] dark:text-[#4169E1] mb-4 ml-4">Selectionner un modéle : </h3>
         <div className="flex items-center">
          <button type="button" className="ml-4 inline-flex items-center justify-center bg-black py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4" onClick={() => setShowModal(true)}>
            Select
          </button>
          {showModal ? (
            <PopupListeModéles setShowModal={setShowModal} setNameTemplate={setTemplateName}/>
           ) : null}
          <div>
          <input
            name='base_name'
            value={templateName}
            //onChange={handleNameChnage}
            type="text"
            id="base_name"
            placeholder="Nom du modèle"
            className="flex-1 border-[1.5px] border-stroke bg-white px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
           />
          </div>
          </div>
         </div>
            )}

        <h1 className="ml-4 mt-6" style={{ marginBottom: '-21px' }}> Les types de Bases de données disponibles :</h1>
            <div>
            <p className="text-lg m-6 group relative w-max mt-10">
              <span className="px-1 relative z-10 group-hover:text-blue-600 dark:text-white" style={{color: 'black', fontWeight:'500'}} onClick={handleButtonClick}>MySQL</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-blue-500 z-0 group-hover:h-full"></span>
            </p>
          {showInput && (
         <form onSubmit={handleSubmit}>
         <div className="flex justify-center">
         <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" style={{width: '800px'}}>
       <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
       <h3 className="font-bold text-[#4169E1] dark:text-[#4169E1]" style={{display: 'flex', justifyContent: 'center'}}>Connection base de données</h3>
       </div>
       <div className="flex flex-col gap-5.5 p-6.5">
         <div>
           <label htmlFor="base_name" className="mb-3 ml-2 block text-sm font-medium text-black dark:text-white">
             Donner le nom de la base de données :
           </label>
           <input
              name='base_name'
             value={DataBaseConnexion.base_name} onChange={handleChangeDataBase}
             type="text"
             id="base_name"
             placeholder="Nom de la base de données"
             className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
           />
         </div>

         <div>
           <label htmlFor="username" className="mb-3 ml-2 block text-sm font-medium text-black dark:text-white">
             Donner le nom d'utilisateur de la base de données :
           </label>
           <input
             name="username"
             value={DataBaseConnexion.username} onChange={handleChangeDataBase}
             type="text"
             id="username"
             placeholder="Nom d'utilisateur de la base de données"
             className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"
           />
         </div>

         <div>
           <label htmlFor="password" className="mb-3 ml-2 block text-sm font-medium text-black dark:text-white">
             Donner le mot de passe de la base de données :
           </label>
           <input
             name="password"
             value={DataBaseConnexion.password} onChange={handleChangeDataBase}
             type="password"
             id="password"
             placeholder="Mot de passe de la base de données"
             className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
           />
         </div>

         <div>
           <label htmlFor="host" className="mb-3 ml-2 block text-sm font-medium text-black dark:text-white">
             Donner le host de la base de données :
           </label>
           <input
             name="host"
             value={DataBaseConnexion.host} onChange={handleChangeDataBase}
             type="text"
             id="host"
             placeholder="Host de la base de données"
             className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
           />
         </div>

         <div>
           <label htmlFor="port" className="mb-3 ml-2 block text-sm font-medium text-black dark:text-white">
             Donner le Port de la base de données :
           </label>
           <input
             name="port"
             value={DataBaseConnexion.port} onChange={handleChangeDataBase}
             type="text"
             id="port"
             placeholder="Port de la base de données"
             className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"
           />
         </div>
         <div className="flex justify-center">
            <button type="submit" className="inline-block rounded-full bg-black py-3 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-9 xl:px-4 mt-2">Connecter</button>
        </div>
       </div>
        </div>
       </div>
        </div>
        </form>
        )}
        {ConnectionEstablished && (
          <div className="flex justify-between">
              <ListeDesTables DataBaseConnexion={DataBaseConnexion} ListeTablesAndColumns={tablesAndColumns}/>
              <div className="absolute top-0 bottom-0 left-1/2 bg-black w-px mb-8" style={{marginTop: '370px', marginLeft:'-40px'}}></div>
              <RequéteSQL DataBaseConnexion={DataBaseConnexion}/>
             </div>
       )}
      </div>
       </div>
    </DefaultLayout>  
);
};
export default DataBase;