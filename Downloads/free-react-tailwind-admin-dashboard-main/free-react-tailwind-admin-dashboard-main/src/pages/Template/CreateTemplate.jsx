import React, { createContext, useContext, useState, useEffect } from 'react';
import grapesjs from "grapesjs";
import './CreateTemplate.css';
import "grapesjs/dist/css/grapes.min.css";
import AddButtons from './AddButtons';
import AddTableau from './AddTableau';
import gjsPrestWebpage from "grapesjs-preset-webpage";
import grapesjsPluginForms from "grapesjs-plugin-forms";
import grapesjsPluginCkeditor from "grapesjs-plugin-ckeditor";
import grapesjsTuiImageEditor from "grapesjs-tui-image-editor";
import grapesjsBlocksBasic from "grapesjs-blocks-basic";
import grapesjsComponentCountdown from "grapesjs-component-countdown";
import grapesjsStyleGradient from "grapesjs-style-gradient";
import grapesjsStyleFilter from "grapesjs-style-filter";
import grapesjsStyleBg from "grapesjs-style-bg";
import gjsBlocksFlexbox from "grapesjs-blocks-flexbox";
import grapesjsTooltip from "grapesjs-tooltip";
import grapesjsCustomCode from "grapesjs-custom-code";
import grapesjsIndexeddb from "grapesjs-indexeddb";
import grapesjsTyped from "grapesjs-typed";


export const EditorContext = createContext();


const CreateTemplate = () => {


  const [editor,setEditor] = useState(null);
  const [modelDetails,setModelDetails] = useState({title: '', showPopUp : false});

    useEffect (() => {
       const newEditor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPrestWebpage, grapesjsPluginForms, AddTableau, AddButtons, grapesjsPluginCkeditor, grapesjsTuiImageEditor, 
                gjsBlocksFlexbox, grapesjsCustomCode, grapesjsIndexeddb, grapesjsTyped,grapesjsBlocksBasic, grapesjsComponentCountdown,
                grapesjsStyleGradient, grapesjsStyleFilter, grapesjsStyleBg, grapesjsTooltip]
                ,
      pluginsOpts:{
        "grapesjsBlocksBasic": {
          blocks: ['Text', 'Link', 'Image'],
        }
      },
      });
      setEditor(newEditor);
    }, 
    []);  
    return (
      // Utiliser le Provider du contexte pour envelopper les composants enfants
      <EditorContext.Provider value={{ editor }}>
        <div className='App'>
          <div id='editor'></div>
        </div>
      </EditorContext.Provider>
    );
  }

export default CreateTemplate;