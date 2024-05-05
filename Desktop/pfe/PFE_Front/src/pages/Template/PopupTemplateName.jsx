import React from "react";
import { useState } from "react";

const PopupTemplateName =(props)=>{

  const showModal = props.showModal;

  const setShowModal = props.setShowModal;

  const action = props.action;

  const [template_name,setTemplate_name] = useState('');

  
const handleChange = (e) => {
  setTemplate_name(e.target.value);
}

return(
  
    showModal == true ? (
      <div>
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <button
                   className="ml-auto p-1"
                   onClick={() => setShowModal(false)}>
                </button>
                <div className="flex justify-center p-3 pt-0 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-bold text-center">
                     Enregistrer le modéle 
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 pb-2 flex-auto">
                <div>
                <h3 className="font-medium text-[#4169E1]">donner le nom du modéle  :</h3>
                <div className="mt-4">
                  <div className="input-group mb-3 mt-2">
                    <input
                      name="template_name"
                      value={template_name} onChange={handleChange}
                      type="text"
                      id="template_name"
                      placeholder="Nom du modéle"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"
                     />             
                   </div>
                </div>
                </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-3">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      action(template_name);
                    }}>
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-30 backdropFilter" style={{ backdropFilter: 'blur(2px)' }}></div>
        </>
      </div>
    ) :
    <></>
  


   
    )
}
export default PopupTemplateName;