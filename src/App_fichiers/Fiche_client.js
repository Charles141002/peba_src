import React, { useState, useRef } from 'react';
import Information from './Information';
import jsonData from './fichier_csv';
import App from '../App';
import ReactDOM from 'react-dom';
import { Retrouver_ligne_clients } from './liste';
import BarreRecherche from './barre_de_recherche';
import Menu2 from './menu_deroulant';
import { SupprimerClient } from './ajout_client';
import { AjoutClient } from './ajout_client';
import ExportEnVCF from './bouton_exporter_en_vcf';
import { fichier_csv } from './fichier_csv';
import EviterBugAjout from './eviter_bug_ajout';


function Fiche(props) {


// MODIFICATION FICHE

const fs = require('fs');

// Chemin du fichier CSV à modifier
const filePath = fichier_csv;

// Ligne spécifique que vous souhaitez modifier
const ligneAmodifier = Retrouver_ligne_clients(props.entite["Adresse e-mail"]); // Retrouver_ligne_clients(props.entite["Adresse e-mail"])

// Fonction pour modifier le fichier CSV
function modifierFichierCSV() {

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Une erreur s\'est produite lors de la lecture du fichier CSV :', err);
      return;
    }

    // Remplacer "Promodis" par "Promododo" dans la colonne "Réseau"
    const lignes = data.split('\n');
    const entetes = lignes[0].split(';');

    const idIndex = entetes.indexOf("ID");
    const nomIndex = entetes.indexOf('Nom');
    const prenomIndex = entetes.indexOf('Prenom');
    const villeIndex = entetes.indexOf('Ville');
    const codepostalIndex = entetes.indexOf('Code postal');
    const adressemailIndex = entetes.indexOf('Adresse e-mail');
    const societeIndex = entetes.indexOf("Societe");
    const paysIndex = entetes.indexOf('Pays/région')
    const reseauIndex = entetes.indexOf('Reseau');
    const genreIndex = entetes.indexOf('Genre');
    const tauxIndex = entetes.indexOf('Taux');
    const notesIndex = entetes.indexOf('Notes');
    const intposteIndex = entetes.indexOf('Intitule du poste');
    const telproIndex = entetes.indexOf('Telephone professionnel');
    const telmobIndex = entetes.indexOf('Telephone mobile');
    const catalogueIndex = entetes.indexOf('Catalogue');
    const adresseIndex = entetes.indexOf('Adresse');
    const adresse2Index = entetes.indexOf('Adresse 2');
    const pagewebIndex = entetes.indexOf('Page Web');
    const piecesIndex = entetes.indexOf('Pieces jointes');
    const retraitIndex = entetes.indexOf('Retrait Mailing');



console.log(tauxIndex);
console.log(document.getElementById('Taux'));







            // Ajouter les nouvelles données à la feuille de calcul
            const newData = [
              [
                document.getElementById("ID")?.value,
                document.getElementById("Societe")?.value,
                document.getElementById('Reseau')?.value,
                document.getElementById('Genre')?.value,
                document.getElementById('Nom')?.value,
                document.getElementById('Prenom')?.value,
                document.getElementById('Adresse e-mail')?.value,
                document.getElementById('Intitule du poste')?.value,
                document.getElementById('Telephone professionnel')?.value,
                document.getElementById('Telephone mobile')?.value,
                document.getElementById('Catalogue')?.value,
                document.getElementById('Adresse')?.value,
                document.getElementById('Adresse 2')?.value,
                document.getElementById('Ville')?.value,
                document.getElementById('Code postal')?.value,
                document.getElementById('Pays/région')?.value,
                document.getElementById('Page Web')?.value,
                document.getElementById('Notes')?.value,
                document.getElementById('Pieces jointes')?.value,
                document.getElementById('Retrait Mailing')?.value,
                document.getElementById('Taux')?.value

                //document.getElementById('Nom').value, //
                //document.getElementById('Prénom').value, //
                //document.getElementById('Ville').value, //
                //document.getElementById('Code postal').value, //
                //document.getElementById('Adresse e-mail').value, //
                //document.getElementById("﻿Société").value, //
                //document.getElementById('Pays/région').value, //
                //document.getElementById('Réseau').value, //
                //document.getElementById('Genre').value, //
                //document.getElementById('Taux').value,
                //document.getElementById('Informations quelconques').value,
            ]
            ];
    
    
    
      const colonnes = lignes[ligneAmodifier].split(';');

        colonnes[idIndex] =newData[0][0];
        colonnes[societeIndex]= newData[0][1];
        colonnes[reseauIndex]= newData[0][2];
        colonnes[genreIndex]= newData[0][3];
        colonnes[nomIndex] =newData[0][4];
        colonnes[prenomIndex] = newData[0][5];
        colonnes[adressemailIndex]= newData[0][6];
        colonnes[intposteIndex]= newData[0][7];
        colonnes[telproIndex]= newData[0][8];
        colonnes[telmobIndex]= newData[0][9];
        colonnes[catalogueIndex]= newData[0][10];
        colonnes[adresseIndex]= newData[0][11];
        colonnes[adresse2Index]= newData[0][12];
        colonnes[villeIndex] = newData[0][13];
        colonnes[codepostalIndex] = newData[0][14];
        colonnes[paysIndex]= newData[0][15];
        colonnes[pagewebIndex]= newData[0][16];
        colonnes[notesIndex]= newData[0][17];
        colonnes[piecesIndex]= newData[0][18];
        colonnes[retraitIndex]= newData[0][19];
        colonnes[tauxIndex]= newData[0][20];

      
      lignes[ligneAmodifier] = colonnes.join(';');

      console.log(lignes[ligneAmodifier]);
  

    const fichierModifie = lignes.join('\n');

    // Écrire les données modifiées dans le fichier CSV
    fs.writeFile(filePath, fichierModifie, 'utf8', (err) => {
      if (err) {
        console.error('Une erreur s\'est produite lors de l\'écriture du fichier CSV :', err);
        return;
      }
      console.log('Le fichier CSV a été modifié avec succès.');
    });
  });
  // CHANGER L HEURE DE CONSULTATION DE LA FICHE

  var currentDate = new Date();
  var dateString = currentDate.toDateString(); // Convertir la date en une représentation de chaîne de caractères


  fs.readFile(filePath, 'utf8', (err, data) => {
   if (err) {
      console.error('Une erreur s\'est produite lors de la lecture du fichier CSV :', err);
      return;
    }

    const lignes = data.split('\n');
    const entetes = lignes[0].split(';');

    const modifIndex = entetes.indexOf('Derniere Modif\r');

            // Ajouter les nouvelles données à la feuille de calcul
           const newData = [
              [
                dateString
            ]
            ];

      console.log(newData[0][0])
 
      const colonnes = lignes[ligneAmodifier].split(';');

      colonnes[modifIndex] =newData[0][0];

      lignes[ligneAmodifier] = colonnes.join(';');
      console.log(colonnes)
      console.log(colonnes[modifIndex])
      console.log(modifIndex)

    const fichierModifie = lignes.join('\n');



     //Écrire les données modifiées dans le fichier CSV
   fs.writeFile(filePath, fichierModifie, 'utf8', (err) => {
      if (err) {
        console.error('Une erreur s\'est produite lors de l\'écriture du fichier CSV :', err);
       return;
      }
      console.log('Le fichier CSV a été modifié avec succès.');
    });
  });

}

// Appel de la fonction pour modifier le fichier CSV




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
        case 'afficherAjoutlient':
          return <AjoutClient />
      default:
        return null;
    }
  };



  const listeDonnee = Object.entries(props.entite);




    return (

    

    <div className="container">
    <div id="menu">
      <button onClick={() => handleClick('afficherBarreRecherche')}>Afficher Barre de Recherche</button>
      <button onClick={() => {const element = <EviterBugAjout />; ReactDOM.render(element, document.getElementById('root'));}}> Ajout Client  </button>

      <Menu2 datas={jsonData}/>
      
    </div>

    <div id="content">

    {renderActivePage()}
    <div className="fiche">
      <h1>FICHE CLIENT </h1>
      <form className="fiche-modifiable" >
         <div className='ligne'>
          {listeDonnee.slice(1,3).map(([key, value]) => (
          <Information key={key} name={key} value={value} line={props.entite.__rowNum__} />))}  
        </div>
        <div className='ligne'>
          {listeDonnee.slice(3,6).map(([key, value]) => (
          <Information key={key} name={key} value={value} line={props.entite.__rowNum__} />))}
        </div>
       
        <div className='below'>
            <div className='left'>
            <div className='ligne'>
          {listeDonnee.slice(6,9).map(([key, value]) => (
          <Information key={key} name={key} value={value} line={props.entite.__rowNum__} />))}
        </div>
       
              <div className='ligne'>
              {listeDonnee.slice(9,10).map(([key, value]) => (
          <Information key={key} name={key} value={value} line={props.entite.__rowNum__} />))}
          {listeDonnee.slice(11,12).map(([key, value]) => (
          <Information key={key} name={key} value={value} line={props.entite.__rowNum__} />))}
              </div>
              <div className='ligne'>
          {listeDonnee.slice(12,15).map(([key, value]) => (
          <Information key={key} name={key} value={value} line={props.entite.__rowNum__} />))}
        </div>
        <div className='ligne'>
          {listeDonnee.slice(15,16).map(([key, value]) => (
          <Information key={key} name={key} value={value} line={props.entite.__rowNum__} />))}
          {listeDonnee.slice(17,18).map(([key, value]) => (
          <Information key={key} name={key} value={value} line={props.entite.__rowNum__} />))}
        </div>
        <div className='ligne'>
          {listeDonnee.slice(19,22).map(([key, value]) => (
          <Information key={key} name={key} value={value} line={props.entite.__rowNum__} />))}
        </div>
       
       
              
            
            </div>

        </div>
        <input id="save" type="submit" value="Recharger l'application pour voir les modifications" />
      </form>
      <p className="newline"></p>



      <button className="rounded-button" onClick={() => ReactDOM.render(<App />, document.getElementById('root'))}>
        Retour au menu
      </button>
      <p className="newline"></p>

      <button className="rounded-button" onClick={() => modifierFichierCSV()}>
Enregistrer les modifications     </button>



<p className="newline"></p>
<SupprimerClient ligne={ligneAmodifier}/>


    </div>
    </div>
    </div>

  );

}

export default Fiche;
