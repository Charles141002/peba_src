import './App.css';
import React, { useState, useRef } from 'react';
import jsonData from './App_fichiers/fichier_csv';
import BarreRecherche from './App_fichiers/barre_de_recherche';
import { jsxOpeningElement } from '@babel/types';
import Menu2 from './App_fichiers/menu_deroulant';
import CreerListe from './App_fichiers/creer_liste';
import { Liste_reseaux, Liste_entreprises, Liste_clients_agences } from './App_fichiers/liste';
import BarreRechercheEntreprises from './App_fichiers/barre_recherche_entreprises';
import BarreRechercheClients from './App_fichiers/barre_recherche_client';
import Reseau from './App_fichiers/reseau';
import VoirClientsReseau from './App_fichiers/voir_clients_reseau';
import BarreRechercheClientsReseau from './App_fichiers/barre_recherche_clients_reseau';
import { Retrouver_ligne_clients } from './App_fichiers/liste';
import { AjoutClient }  from './App_fichiers/ajout_client';
import ExportEnVCF from './App_fichiers/bouton_exporter_en_vcf';
import ReactDOM from 'react-dom';
import EviterBugAjout from './App_fichiers/eviter_bug_ajout';

function App() {

//AjoutClient();



  const showFenetreGaucheRef = useRef(true);

  const [activePage, setActivePage] = useState('');

  const handleClick = (page) => {
    setActivePage(page);
  };

  const renderActivePage = () => {
    showFenetreGaucheRef.current = false;
    switch (activePage) {
      case 'afficherBarreRecherche':
        return <BarreRecherche donnees={jsonData}/>
        case 'afficherAjoutlient':
          return<AjoutClient />
      default:
        return null;
    }
  };



  return (

    <div className="container">
    <div id="menu">
      <button onClick={() => handleClick('afficherBarreRecherche')}>Afficher Barre de Recherche</button>
      <button onClick={() => {const element = <EviterBugAjout />; ReactDOM.render(element, document.getElementById('root'));}}> Ajout Client</button>

      <Menu2 datas={jsonData}/>
      
    </div>
    <div id="content">
      {renderActivePage()}
    </div>
  </div>
  );
}

export default App;
