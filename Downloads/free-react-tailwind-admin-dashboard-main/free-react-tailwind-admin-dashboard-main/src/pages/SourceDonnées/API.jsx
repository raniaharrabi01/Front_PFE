import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../layout/DefaultLayout";


const API = () => {
  const [clicked, setClicked] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [customerHeaders,setCustomerHeaders]=useState([{
    key:'',
    value:'',
}]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerHeaders(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (value.trim() !== "") {
      setCustomerHeaders(prevState => ({
         ...prevState,
         [name]: value
       }));
     }

  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Source de données : API" />
      <h3 className="mb-2 font-bold" style={{ color: 'rgb(65, 105, 225)' }}>HTTP méthode</h3>
      <select className="form-select" aria-label="Default select example" style={{ width: '500px',height:'30px' }}>
        <option defaultValue>GET</option>
        <option value="1">POST</option>
        <option value="2">PUT</option>
        <option value="3">PATCH</option>
      </select>
      <h3 className="mb-2 mt-4 font-bold" style={{ color: 'rgb(65, 105, 225)' }}>URL</h3>
      <div className="input-group mb-3" style={{ width: '500px' }}>
        <input type="text" className="" placeholder="https://github.com/" style={{ width: '500px',height:'30px'}} />
      </div>
      <h3 className="mb-2 mt-4 font-bold" style={{ color: 'rgb(65, 105, 225)' }}>Body</h3>
      <div className="input-group" style={{ width: '500px' }}>
        <textarea className="form-control" aria-label="With textarea" style={{ width: '500px' }}></textarea>
      </div>
      <h3 className="mb-2 mt-4 font-bold" style={{ color: 'rgb(65, 105, 225)' }}>Custom headers</h3>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setClicked(true) }}>
        Add
      </button>
      {clicked && (
        <div>
          <div className="input-group mb-3 mt-3" style={{ width: '500px' }}>
            <input type="text" className="form-control mr-2" placeholder="Key" aria-describedby="basic-addon1" name="key" value={customerHeaders.key} onChange={handleChange} />
            <input type="text" className="form-control mr-2" placeholder="Value" aria-describedby="basic-addon1" name="value" value={customerHeaders.value} onChange={handleChange} />
            <button className="ml-2 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={() => { setClicked(false) }}>Remove</button>
          </div>
        </div>
      )}
      <div className="mt-4">
        <div className="input-group mb-3 mt-2">
          <input className="form-check-input mr-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
          <label className="font-medium text-black dark:text-white">JSON Content-Type</label>
        </div>
        <div className="input-group mb-3 mt-2">
          <input className="form-check-input mr-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
          <label className="font-medium text-black dark:text-white">Accept self-signed certs</label>
        </div>
        <div className="input-group mb-3 mt-2">
          <input className="form-check-input mr-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
          <label className="font-medium text-black dark:text-white">Verbose</label>
        </div>
        {customerHeaders.keys && customerHeaders.value && (
                <div className="input-group mb-3 mt-2">
                  <input className="form-check-input mr-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                  <label className="font-medium text-black dark:text-white">{customerHeaders.key} {customerHeaders.value}</label>
                </div>
        )}
        </div>
      <div className="d-flex pl-30 pt-6">
        <button className="inline-flex items-center justify-center rounded-full bg-black py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4 mt-3 mb-4" style={{marginLeft : '35px'}} onClick={() => { setButtonClicked(true); SendListeDataName(); }}>Générer un rapport</button>
      </div>
      {buttonClicked && (
        <div>
        <h3 className="font-medium text-[#4169E1] dark:text-[#4169E1] pb-2" style={{paddingLeft: '28px', fontWeight: '600'}}>Les formats des rapports qui sont disponibles :</h3>
          <div className='sousbutton'>
          <button className="inline-flex items-center justify-center rounded-md border border-black py-0.5 px-0.5 mr-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-2 xl:px-3">Format PDF</button>
          <button className='inline-flex items-center justify-center rounded-md border border-black py-0.5 px-0.5 mr-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-2 xl:px-3'>Format HTML</button>
          <button className='inline-flex items-center justify-center rounded-md border border-black py-0.5 px-0.5 text-center font-medium text-black hover:bg-opacity-90 lg:px-2 xl:px-3'>Format Excel</button>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default API;
