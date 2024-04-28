import React from "react";
import { useState } from "react";
import FormatDuRapport from './FormatDuRapport';

const RequêteSQL = () => {

  const [Valide,setValide] = useState(false);
  const [SQLRequete,setSQLRequete] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const handleChange = (e) => {
    const sqlQuery = e.target.value;
    setSQLRequete(sqlQuery);
  };

  
  const validerSQLRequete = () => {
    const sqlQuery = SQLRequete.trim();
    const sqlRegex = /^SELECT.*FROM.*$/i;
    // Vérifier si la requête SQL correspond au motif
    const isValidSql = sqlRegex.test(sqlQuery);
    if (isValidSql) {
        alert('Requête SQL valide');
        setValide(true);
    } else {
        alert('Requête SQL invalide');
    }
  };
    

  return (
    <form className="ml-auto max-w-lg">
      <h3 className="font-medium text-[#4169E1] dark:text-[#4169E1]" style={{ fontWeight: '600',marginLeft:'-23px' }}>Intégrer données par une requête SQL :</h3>
      <div className="flex flex-col gap-5.5 p-6.5">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-3">
          <div className="flex flex-col gap-9">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" style={{width: '500px', marginLeft: '-50px'}}>
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <div className="form-group">
                  <label htmlFor="requeteSQL" className='mb-3 block text-sm font-medium text-black dark:text-white'>Écrire une requête SQL :</label>
                  <input type="text" className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white" style={{ alignItems: 'start' }} onChange={handleChange}/>
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex justify-center">
                    <button type="button" className="inline-flex items-center justify-center rounded-full bg-primary py-3 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mt-4 mr-2" onClick={() => validerSQLRequete()}>Valider</button>
                    {Valide && (
                      <div className="flex justify-center">
                      <button type="button" className="inline-flex items-center justify-center rounded-full bg-black py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4 mt-4" onClick={() => setShowModal(true)}>
                          Choisir le format du rapport
                      </button>
                      {showModal ? (
                          <FormatDuRapport setShowModal={setShowModal} />
                      ) : null}
                  </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default RequêteSQL;
