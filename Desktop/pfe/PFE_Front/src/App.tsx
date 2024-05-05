import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import Modéle from './pages/Modéle';
import CreateTemplate from './pages/Template/CreateTemplate';
import DataBase from './pages/SourceDonnées/DataBase';
import CSVFile from './pages/SourceDonnées/CSVFile';
import saveTemplate from './services/saveTemplate';
import PopupTemplateName from "./pages/Template/PopupTemplateName.jsx";
import PopupContext from "./pages/Template/PopupContext.jsx";
import getDataTemplateSelected from "./services/getDataTemplateSelected";


function App() {

  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const [editor, setEditor] = useState(null);
  const [showModal, setShowModal] = useState('');
  const [ShowModalAddContext, setShowModalAddContext] = useState(false);
  const [context, setContext] = useState({});
  const [templateData, setTemplateData] = useState({
    cssData: '',
    htmlData: '',
    id: null
  });


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  useEffect(() => {
    document.addEventListener(
      "addTemplate",
      (e) => {
        setEditor(e.detail.editor);
        setShowModal(true);
      },
      false,
    );
    setTimeout(() => setLoading(false), 1000);
  }, []);


  useEffect(() => {
    document.addEventListener(
      "addContext",
      (e) => {
        setEditor(e.detail.editor);
        setShowModalAddContext(true);
      },
      false,
    );
  }, []);


 const addTemplateActionHandler = (template_name) => {
    const htmlData = editor.getHtml().replace(/"/g, "'");
    const cssData = editor.getCss();
    const default_Html = "<body></body>";
    if (htmlData === default_Html) {
      alert("Préparez votre modèle");
    } else {
    saveTemplate(context,htmlData,cssData,template_name,templateData.id)
  }
 }


 const addContextActionHandler = (context) => {
  console.log(context);
  setContext(context);
 }


 const navigate = useNavigate();


 useEffect(() => {
  document.addEventListener(
    "modifieTemplateData",
    (e) => {
      getDataTemplateSelected(e.detail.name,setTemplateData);
      navigate("/CreateTemplate");
      },
    false,
  );
 }, []);


  return loading ? (
    <Loader />
  ) : (
    <>
      <PopupTemplateName showModal={showModal} setShowModal={setShowModal} action={addTemplateActionHandler} />
      <PopupContext showModal={ShowModalAddContext} setShowModal={setShowModalAddContext} action={addContextActionHandler} />
      <Routes>
        <Route
          path="/DataSource/ExternalDataBase"
          element={
            <>
              <PageTitle title="La source est une base de données" />
              <DataBase editor={editor}/>
            </>
          }
        />
        <Route
          path="/DataSource/CSVFile"
          element={
            <>
              <PageTitle title="La source est un fichier CSV" />
              <CSVFile editor={editor}/>
            </>
          }
        />
        <Route
          path="/CreateTemplate"
          element={
            <>
              <PageTitle title="CreateTemplate" />
              <CreateTemplate html={templateData.htmlData} css={templateData.cssData} project/>
            </>
          }
        />
        <Route
          path="/modéles"
          element={
            <>
              <PageTitle title="Modéles" />
              <Modéle setTemplateData={setTemplateData} />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />
        {/* Redirection vers /auth/signin pour le chemin racine */}
        <Route path="/" element={<Navigate to="Modéles" />} />
      </Routes>
    </>
  );
 }

 export default App;
