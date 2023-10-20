import React from 'react';
import ProjectDetails from '../ProjectDetails';
import styles from '../ProjectDetails.module.css';

function Chare() {
  return (
    <>
      <ProjectDetails 
          title ="Chare"
          dateText = 'Våren 2022'
          fieldText = 'Design & implementation'
          header_images = {['pictures/Chare/Start.png','pictures/Chare/SkapaResaFordon.png','pictures/Chare/OmResa.png']}
          header_color = '3'
      >
        <div>
          <p>
          Chare är en samåkningsapplikation där du kan lägga upp en resa som du ska köra för att se om det finns 
          någon som vill åka med. Som resenär kan man enkelt söka på resor och ansöka om att få åka med, en liten bit eller hela vägen! 
          </p>
        </div>
        <div>
          <h3>Vad var uppgiften?</h3>
          <p>
          På kursen Produktuveckling för mobila applikationer  var uppgiften att i en grupp arbeta med  hela designprocessen från konceptidé till
          implementation för en idé. Idéen till applikationen fick vi som grupp komma på tillsammans. Vi var 5 personer i en grupp.  
          </p>
        </div>
        <div>
          <h3>Vår idé</h3>
          <p>
            Vår idé var Chare, samåkningsappen där användare kan söka bland och skapa
            resor för att underlätta samåkning och minska mängden människor som färdas själva i
            sina bilar.  Man kan söka efter resor, filtrera bland sökresultaten,
            klicka in sig och läsa mer om en resa samt be om att få åka med. Vi ville göra det
            möjligt för förarna att acceptera sina passagerare då alla inte är bekväma med att åka
            med alla.
            <br/><br/> 
            Man kan även skapa och publicera egna resor. Där får du fylla
            i mellan vilka orter du ska köra, vilken rutt du tänkt ta, vilket datum och avresetid
            resan har, kostnad för resan samt dina resepreferenser. Andra funktioner i applikationen inkluderar utvärderingar 
            av resor och förare, chatt-funktionalitet samt en profilsida. 
            <br/><br/>
            Chare är appen som ska hjälpa dig att hjälpa miljön, samtidigt som den hjälper din plånbok!
          </p>
        </div>
        <div>
          <h3>Utvecklingsprocessen</h3>
          <p>
            Eftersom att detta projekt innebar att arbeta med en idé från start till mål började vi i idéfasen. 
            Grunden till idéen kom från tidigare arbete kring marknaden runt kollektivtrafik och samåkning. Efter detta kom 
            designfasen, vilket alla i gruppen började med sina egna LoFi-versioner i Figma som vi sedan gemensamt arbetade 
            ihop till en HiFi. 
            <br/><br/>
            Sedan var det dags att börja implementera. Då delade vi till en början upp gruppen i två delar, en som arbetade 
            med backend och en med frontend. Back-end:en utvecklades som ett  webb-API med Microsofts ramverk för webbapplikationer 
            ASP.NET vilket är del av .NET Core. Utöver det så användes även Entity Framework, vilket är ett ramverk som hjälper till 
            och automatiserar mycket av kodskrivandet. MySQL Server användes som databas.
            <br/><br/>
            Front-end:en för vår mobilapplikation skrevs med Android-systemets inbyggda API
            för att bygga appar, i programspråket Kotlin och i utvecklingsmiljön Android studio. Designmönstret MVVM,  Model-View-ViewModel användes för att strukturera koden. 
            <br/><br/>
            GitHub användes under hela utvecklingsprocessen. 
          </p>
          <div className={styles.icons}>
            <img src='icons/Figma.svg' alt='Figma'/>
            <img src='icons/aspnet.svg' alt='ASP.NET'/>
            <img src='icons/MySQL.svg' alt='MySQL'/>
            <img src='icons/Kotlin.svg' alt='Kotlin'/>
            <img src='icons/AndroidStudio.svg' alt='Android studio'/>
            <a target="_blank" href="https://github.com/Savalige/Chare" rel="noreferrer">
                <img src='icons/Github.svg' alt='githubIcon'/>
            </a>
          </div>
        </div>
      </ProjectDetails>
  </>
  )
}
export default Chare