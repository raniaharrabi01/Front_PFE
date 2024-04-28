import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'; // Ajout de Navigate pour la redirection
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import Modéle from './pages/Modéle';
import CreateTemplate from './pages/Template/CreateTemplate';
import DataBase from './pages/SourceDonnées/DataBase';
import CSVFile from './pages/SourceDonnées/CSVFile';
import ListColumns from './pages/SourceDonnées/ListColumns';
import API from './pages/SourceDonnées/API';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/Source_de_données/DataBase"
          element={
            <>
              <PageTitle title="La source est une base de données" />
              <DataBase />
            </>
          }
        />
        <Route
          path="/Source_de_données/DataBase/:table"
          element={
            <>
              <PageTitle title="La source est une base de données" />
              <ListColumns />
            </>
          }
        />
        <Route
          path="/Source_de_données/CSVFile"
          element={
            <>
              <PageTitle title="La source est un fichier CSV" />
              <CSVFile />
            </>
          }
        />
        <Route
          path="/Source_de_données/API"
          element={
            <>
              <PageTitle title="La source est un API" />
              <API />
            </>
          }
        />
        <Route
          path="/CreateTemplate"
          element={
            <>
              <PageTitle title="CreateTemplate" />
              <CreateTemplate />
            </>
          }
        />
        <Route
          path="/modéles"
          element={
            <>
              <PageTitle title="Modéles" />
              <Modéle />
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
        <Route path="/" element={<Navigate to="/auth/signin" />} />
      </Routes>
    </>
  );
}

export default App;
