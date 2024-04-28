import React from "react";


const PopupTemplateName =()=>{

    const [showModal, setShowModal] = React.useState(false);

return(
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
                        <MdOutlineClose />
                </button>
                <div className="flex items-start justify-between p-3 pt-0 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-bold text-center">
                     le nom du modéle 
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 pb-2 flex-auto">
                <div>
                <h3 className="font-medium text-[#4169E1]">Choisissez le format souhaité :</h3>
                <div className="mt-4">
                  <div className="input-group mb-3 mt-2">
                    <label htmlFor="excel" className="font-medium text-black">donner le nom du template</label>
                    <input className="form-check-input mr-2" type="text" name="name" value="template_name"/>
                  </div>
                </div>
                </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-3">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Enregistrer le modéle
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-30 backdropFilter" style={{ backdropFilter: 'blur(2px)' }}></div>
        </>
      </div>

    )
}
export default PopupTemplateName;