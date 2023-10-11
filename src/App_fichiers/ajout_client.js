import React, { useState, useRef } from 'react';

import jsonData from './fichier_csv';
import App from '../App';
import ReactDOM from 'react-dom';
import BarreRecherche from './barre_de_recherche';
import { fichier_csv } from './fichier_csv';
import InformationAjout from './information_ajout';
import Menu2 from './menu_deroulant';
import EviterBugAjout from './eviter_bug_ajout';

// Chemin du fichier CSV
const filePath = fichier_csv;


console.log(jsonData)


const fs = require('fs');

export function AjoutClient(){

  function modifierFichierCSV() {

    // Lecture du fichier CSV existant
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const lastIndex = jsonData.length - 1; // L'indice de la dernière ligne
      const lastID = jsonData[lastIndex].ID; // L'ID de la dernière ligne

      const putID = String(parseInt(lastID)+1)

     
      const newData = 
      putID + ";" +
      document.getElementById("Societe")?.value + ";" +
      document.getElementById('Reseau')?.value + ";" +
      document.getElementById('Genre')?.value + ";" +
      document.getElementById('Nom')?.value + ";" +
      document.getElementById('Prenom')?.value + ";" +
      (document.getElementById('Adresse e-mail')?.value  ? document.getElementById('Adresse e-mail')?.value : putID) + ";" +
      document.getElementById('Intitule du poste')?.value + ";" +
      document.getElementById('Telephone professionnel')?.value + ";" +
      document.getElementById('Telephone mobile')?.value + ";" +
      document.getElementById('Catalogue')?.value + ";" +
      document.getElementById('Adresse')?.value + ";" +
      document.getElementById('Adresse 2')?.value + ";" +
      document.getElementById('Ville')?.value + ";" +
      document.getElementById('Code postal')?.value + ";" +
      document.getElementById('Pays/région')?.value + ";" +
      document.getElementById('Page Web')?.value + ";" +
      document.getElementById('Notes')?.value + ";" +
      document.getElementById('Pieces jointes')?.value + ";" +
      document.getElementById('Retrait Mailing')?.value + ";" +
      document.getElementById('Taux')?.value

    

      // Ajout de la nouvelle ligne au contenu existant
      const nouveauContenu = data + '\n' + newData;

      // Écriture du nouveau contenu dans le fichier CSV
      fs.writeFile(filePath, nouveauContenu, 'utf8', (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('La ligne a été ajoutée avec succès.');
      });
    });

  }





// AFFICHAGE FICHE



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
      default:
        return null;
    }
  };


  return (
    <div className="container">
    
    <div id="menu">
      <button onClick={() => handleClick('afficherBarreRecherche')}>Afficher Barre de Recherche</button>
      <button onClick={() => {const element = <EviterBugAjout />; ReactDOM.render(element, document.getElementById('root'));}}> Ajout Client  </button>


      <Menu2 datas={jsonData}/>
      
    </div>

    <div id="content">
    <div id="fiche-ajout">
    {renderActivePage()}
    <div className="fiche">
    <h1>AJOUT CLIENT </h1>
      <form className="fiche-modifiable" >
        <div className='ligne'>
        {Object.entries(jsonData[0]).slice(0,3).map(([key, value]) => (

        (key !== "ID" && key !== "Catalogue" && key !== "Page Web" && key !== "Pieces jointes") && (
          <InformationAjout key={key} name={key} value={""} line={jsonData[0].__rowNum__} />
        )
          
        ))}
        </div>
        <div className='ligne'>
        {Object.entries(jsonData[0]).slice(3,6).map(([key, value]) => (

        (key !== "ID" && key !== "Catalogue" && key !== "Page Web" && key !== "Pieces jointes") && (
          <InformationAjout key={key} name={key} value={""} line={jsonData[0].__rowNum__} />
        )
          
        ))}
        </div>
        <div className='ligne'>
        {Object.entries(jsonData[0]).slice(6,9).map(([key, value]) => (

        (key !== "ID" && key !== "Catalogue" && key !== "Page Web" && key !== "Pieces jointes") && (
          <InformationAjout key={key} name={key} value={""} line={jsonData[0].__rowNum__} />
        )
          
        ))}
        </div>
        <div className='ligne'>
        {Object.entries(jsonData[0]).slice(9,12).map(([key, value]) => (

        (key !== "ID" && key !== "Catalogue" && key !== "Page Web" && key !== "Pieces jointes") && (
          <InformationAjout key={key} name={key} value={""} line={jsonData[0].__rowNum__} />
        )
          
        ))}
        </div>
        <div className='ligne'>
        {Object.entries(jsonData[0]).slice(12,15).map(([key, value]) => (

        (key !== "ID" && key !== "Catalogue" && key !== "Page Web" && key !== "Pieces jointes") && (
          <InformationAjout key={key} name={key} value={""} line={jsonData[0].__rowNum__} />
        )
          
        ))}
        </div>
        <div className='ligne'>
        {Object.entries(jsonData[0]).slice(15,18).map(([key, value]) => (

        (key !== "ID" && key !== "Catalogue" && key !== "Page Web" && key !== "Pieces jointes") && (
          <InformationAjout key={key} name={key} value={""} line={jsonData[0].__rowNum__} />
        )
          
        ))}
        </div>
        <div className='ligne'>
        {Object.entries(jsonData[0]).slice(19,22).map(([key, value]) => (

        (key !== "ID" && key !== "Catalogue" && key !== "Page Web" && key !== "Pieces jointes") && (
          <InformationAjout key={key} name={key} value={""} line={jsonData[0].__rowNum__} />
        )
          
        ))}
        </div>
        <input type="submit" value="Recharger l'application pour voir les modifications" />
      </form>
      <p className="newline"></p>
      <button className="rounded-button" onClick={() => modifierFichierCSV()}>
        Ajouter le client
      </button>
      <p className="newline"></p>
      <button className="rounded-button" onClick={() => ReactDOM.render(<App />, document.getElementById('root'))}>
        Retour au menu
      </button>
      <p className="newline"></p>
      
      

    </div>
    </div>
    </div>
    </div>

  );
}


export function SupprimerClient(props){

  const ligne = props.ligne;

  function modifierFichierCSV(lineNumberToDelete) {



// Lecture du fichier CSV existant
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Conversion du contenu en tableau de lignes
  const lines = data.split('\n');

  // Vérification du numéro de ligne à supprimer
  if (lineNumberToDelete > 0 && lineNumberToDelete <= lines.length) {
    // Suppression de la ligne spécifiée
    lines.splice(lineNumberToDelete , 1);

    // Réassemblage des lignes en une seule chaîne de caractères
    const updatedContent = lines.join('\n');

    // Écriture du contenu mis à jour dans le fichier CSV
    fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('La ligne a été supprimée avec succès.');
    });
  } else {
    console.error('Numéro de ligne invalide.');
  }
});

  }

  return (

    <div>
      <button className="rounded-button" onClick={() => modifierFichierCSV(ligne)} >Supprimer le client</button>
    </div>


  );


}