import Footer from "../Elements/Footer";
import Nav from "../Nav";
import Cookies from "js-cookie";

function Privacy() {
  const locale = Cookies.get("locale") || "nl";

  if (locale === "nl")
    return (
      <div>
        <Nav />
        <div style={{ width: "80%", marginLeft: "10%" }}>
        <div className="main_infos">
            <div className="text">
              <div className="paragraph_title">
                <h2> Privacybeleid van de BelStreet-website | Dutch</h2>
              </div>
              <p>
                <b>Naam:</b> BelStreet
              </p>
              <p>
                <b>Uitgever:</b> Alejandro Rubio
              </p>
              <p>
                <b>E-mail:</b> info@belstreet.com
              </p>
              <p></p>
              <br />
              <h4> Artikel 1: Doel van het privacybeleid</h4>
              <p>
                Dit privacybeleid is opgesteld om gebruikers van de
                BelStreet-website, eigendom van en beheerd door Alejandro Rubio,
                te informeren over de volgende zaken:
                <br />
                <br />
                - De persoonlijke gegevens verzameld via de website.
                <br />
                - Het gebruik van deze gegevens.
                <br />
                - De toegang tot deze gegevens.
                <br />
                - De rechten van gebruikers van de site.
                <br />
                - Het beleid met betrekking tot het gebruik van cookies.
                <br />
                <br />
                Dit privacybeleid werkt parallel aan de algemene voorwaarden van
                de BelStreet-website.
              </p>
              <h4> Artikel 2: Toepasselijke wetten</h4>
              <p>
                Overeenkomstig de Algemene Verordening Gegevensbescherming (AVG)
                is dit privacybeleid onderworpen aan de volgende regels:
                <br />
                <br />
                Persoonlijke gegevens worden:
                <br />
                <br />
                - rechtmatig en transparant verwerkt;
                <br />
                - voor welbepaalde, uitdrukkelijk omschreven en gerechtvaardigde
                doeleinden verzameld, en mogen vervolgens niet verder worden
                verwerkt op een manier die onverenigbaar is met die doeleinden.
                Overeenkomstig artikel 89, lid 1 van de AVG wordt de opslag en
                verwerking van deze gegevens voor archiveringsdoeleinden van
                algemeen belang, wetenschappelijk of historisch onderzoek of
                statistische doeleinden niet beschouwd als onverenigbaar met de
                oorspronkelijke doeleinden;
                <br />
                - toereikend, ter zake dienend en beperkt tot wat noodzakelijk
                is voor de doeleinden waarvoor ze worden verwerkt;
                <br />
                - nauwkeurig en zo nodig actueel gehouden. Alle redelijke
                maatregelen worden genomen om onjuiste gegevens in verband met
                de doeleinden waarvoor ze worden verwerkt, te corrigeren;
                <br />
                - bewaard in een vorm die identificatie van de betrokken
                personen mogelijk maakt gedurende de tijd die nodig is voor de
                verwerking ervan;
                <br />
                - verwerkt op een wijze die een passende beveiliging van de
                persoonsgegevens garandeert, waaronder bescherming tegen
                ongeoorloofde of onwettige verwerking en tegen onopzettelijk
                verlies, vernietiging of beschadiging van die gegevens, door
                passende technische of organisatorische maatregelen.
                <br />
                <br />
                De verwerking van de verzamelde gegevens is alleen rechtmatig
                als ten minste een van de volgende voorwaarden is vervuld:
                <br />
                <br />
                - De betrokken persoon heeft ingestemd met de verwerking van
                zijn of haar gegevens voor een of meer specifieke doeleinden.
                <br />
                - De verwerking van de gegevens is noodzakelijk voor de
                uitvoering van een overeenkomst waarbij de betrokkene partij is,
                of voor de uitvoering van precontractuele maatregelen die op
                verzoek van de betrokkene zijn genomen.
                <br />
                - De verwerking is noodzakelijk om te voldoen aan een wettelijke
                verplichting waaraan de verwerkingsverantwoordelijke, BelStreet,
                is onderworpen.
                <br />
                - De verwerking is noodzakelijk om de vitale belangen van een
                natuurlijke persoon te beschermen.
                <br />
                - De verwerking is noodzakelijk voor de vervulling van een taak
                van algemeen belang die aan BelStreet is opgedragen.
                <br />- De verwerking is noodzakelijk voor de behartiging van de
                gerechtvaardigde belangen van de verwerkingsverantwoordelijke of
                van een derde, tenzij de belangen of grondrechten en vrijheden
                van de betrokkene die tot bescherming van persoonsgegevens
                nopen, zwaarder wegen.
              </p>
              <h4> Artikel 3: Toestemming</h4>
              <p>
                Door de BelStreet-website te gebruiken, stemmen gebruikers in
                met:
                <br />
                <br />
                - Alle voorwaarden in dit privacybeleid;
                <br />- Het verzamelen, gebruiken en opslaan van de gegevens
                zoals vermeld in dit privacybeleid.
              </p>
              <h4> Artikel 4: Verzamelde persoonlijke gegevens </h4>
              <p>
                Tijdens het gebruik van de BelStreet-website worden
                verschillende persoonlijke gegevens van gebruikers verzameld.
                <br />
                <br />
                De volgende gegevens worden automatisch verzameld:
                <br />
                <br />
                - Geen gegevens worden automatisch verzameld.
                <br />
                <br />
                De volgende gegevens worden handmatig verzameld:
                <br />
                <br />
                - Fysiek adres van de gebruiker. - IP-adres van de gebruiker. -
                E-mailadres van de gebruiker. - Alias en opmerkingen over een
                straat. - E-mailuitwisselingen via het contactformulier.
                <br />
                <br />
                Deze gegevens worden verzameld wanneer een beoordelingsformulier
                wordt ingediend (fysiek adres van de gebruiker, IP-adres van de
                gebruiker, alias en opmerkingen over een straat) en wanneer een
                contactformulier wordt ingediend (e-mailad adressen mail van de
                gebruiker en e-mailuitwisselingen).
                <br />
                Geen aanvullende gegevens worden verzameld zonder uw
                voorafgaande kennisgeving.
              </p>
              <h4> Artikel 5: Verwerking van deze gegevens </h4>
              <p>
                Persoonlijke gegevens die op de BelStreet-website worden
                verzameld, worden alleen verzameld en verwerkt voor de
                doeleinden zoals beschreven in dit privacybeleid en/of op de
                relevante pagina's van de website. De persoonlijke gegevens die
                we verzamelen, worden niet voor andere doeleinden gebruikt.
                <br />
                - Het IP-adres wordt gebruikt om ervoor te zorgen dat een
                gebruiker slechts één formulier kan verzenden en voor het
                verzamelen van acceptatie van de gebruiksvoorwaarden.
                <br />
                - Het fysieke adres, alias en opmerkingen worden gebruikt om de
                database van beoordelingen van de website te genereren.
                <br />- E-mailadressen worden niet verzameld, maar zijn
                zichtbaar voor de uitgever wanneer deze e-mails van gebruikers
                via het contactformulier ontvangt, evenals de bijbehorende
                e-mailcorrespondentie.
              </p>
              <h4> Artikel 6: Delen van verzamelde persoonlijke gegevens </h4>
              <p>
                De verzamelde persoonlijke gegevens kunnen worden gedeeld:
                <br />
                - Als BelStreet wettelijk verplicht is.
                <br />
                - Indien de informatie nodig is voor een juridische procedure.
                <br />
                - Om de wettelijke rechten van BelStreet te beschermen.
                <br />
                Buiten de situaties beschreven in dit beleid, worden
                persoonlijke informatie onder geen enkele omstandigheid openbaar
                gemaakt of gedeeld met derden.
              </p>
              <h4>
                {" "}
                Artikel 7: Opslag en bescherming van persoonlijke gegevens{" "}
              </h4>
              <p>
                BelStreet bewaart persoonlijke gegevens niet langer dan nodig is
                voor de doeleinden waarvoor ze zijn verzameld. Om deze gegevens
                te beschermen, nemen we de volgende maatregelen:
                <br />
                - Communicatie met een standaard SSL-certificaat, beveiligde
                lees- en schrijftoegang tot databases.
                <br />
                Uw gegevens worden bewaard gedurende de volgende periodes (in
                sommige gevallen, zoals wettelijk vereist, kunnen persoonlijke
                gegevens langer worden bewaard):
                <br />
                - Voor het fysieke adres, alias, opmerkingen (inclusief
                metagegevens): onbeperkte duur.
                <br />
                - Voor uitwisselingen via het contactformulier (inclusief
                e-mailadres): 6 maanden.
                <br />- Voor het IP-adres: onbeperkte duur (voor het bijhouden
                van acceptatie van de gebruiksvoorwaarden).
              </p>
              <h4> Artikel 8: Rechten van de gebruiker </h4>
              <p>
                Overeenkomstig hoofdstuk 3, artikelen 12-23 van de AVG hebben
                gebruikers van de BelStreet-website de volgende rechten met
                betrekking tot hun persoonlijke gegevens:
                <br />
                - Recht op toegang.
                <br />
                - Recht op rectificatie.
                <br />
                - Recht om te worden vergeten.
                <br />
                - Recht op beperking van de verwerking.
                <br />
                - Recht op gegevensportabiliteit.
                <br />- Recht van bezwaar.
              </p>
              <h4> Artikel 9: Beleid met betrekking tot cookies </h4>
              <p>
                Een cookie is een bestand dat wordt opgeslagen op de harde
                schijf van een gebruiker tijdens het browsen op een website.
                Deze cookie helpt om gegevens over de browsegewoonten van de
                gebruiker beter te begrijpen om hem een betere
                gebruikerservaring te bieden.
                <br />
                <br />
                De BelStreet-website maakt geen gebruik van cookies. De
                applicaties die op de website worden gebruikt (Recaptcha en
                Formsubmit) zijn standaard applicaties en kunnen cookies
                gebruiken die niet zichtbaar zijn voor de websitebeheerder.
              </p>
              <h4> Artikel 10: Aanvullende bepalingen </h4>
              <p>N/A</p>
              <h4> Artikel 11: Wijziging van het privacybeleid </h4>
              <p>
                Om in overeenstemming te blijven met de wet of eventuele
                wijzigingen in ons proces voor de verwerking van persoonlijke
                gegevens, kan dit privacybeleid regelmatig worden gewijzigd en
                aangepast. Gebruikers wordt geadviseerd om dit beleid regelmatig
                te controleren om op de hoogte te blijven van ons beleid met
                betrekking tot het verzamelen en verwerken van persoonlijke
                gegevens.
              </p>
              <h4> Artikel 12: Contact </h4>
              <p>
                Gebruikers kunnen BelStreet bereiken op de volgende
                contactgegevens:
              </p>
              <p>
                <b>Naam:</b> BelStreet
              </p>
              <p>
                <b>Uitgever:</b> Alejandro Rubio
              </p>
              <p>
                <b>E-mail:</b> info@belstreet.com
              </p>
              <p></p>
              <p>Laatst bijgewerkt op 3/12/2022.</p>
            </div>
            <br />
            <br />
            <a href="/">
              <button
                style={{ width: 300 }}
                className="PaginaInicio primary filter-btn"
              >
                Terug naar de hoofdwebsite
              </button>
            </a>
          </div>
        </div>
        <div style={{ marginTop: 44 }}>
          <Footer />
        </div>
      </div>
    );
  else {
    return (
      <div>
        <Nav />
        <div style={{ width: "80%", marginLeft: "10%" }}>
          <div className="main_infos">
            <div className="text">
              <div className="paragraph_title">
                <h2> Politique de confidentialité du site BelStreet</h2>
              </div>
              <p>
                <b>Dénomination: </b> BelStreet
              </p>
              <p>
                <b>Editeur:</b> Alejandro Rubio
              </p>
              <p>
                <b>Mail:</b> info@belstreet.com
              </p>
              <p></p>
              <br />
              <h4>
                {" "}
                Article 1 : L'objectif de la politique de confidentialité
              </h4>
              <p>
                Cette politique de confidentialité est établie dans le but
                d'informer les utilisateurs du site BelStreet, possédé et géré
                par Alejandro Rubio, des modalités suivantes :
                <br />
                <br />
                - Les données personnelles recueillies par le site internet.
                <br />
                - L'utilisation faite de ces données.
                <br />
                - L'accès à ces données.
                <br />
                - Les droits que possèdent les utilisateurs du site.
                <br />
                - La politique liée à l'utilisation de cookies.
                <br />
                <br />
                Cette politique de confidentialité fonctionne parallèlement aux
                conditions générales du site BelStreet.
              </p>
              <h4> Article 2 : Lois applicables</h4>
              <p>
                Conformément au Règlement Général sur la Protection des Données,
                cette politique de confidentialité est sujette aux règlements
                suivants :
                <br />
                <br />
                Les données personnelles sont:
                <br />
                <br />
                - traitées de manière licite et transparente;
                <br />
                - collectées à des fins déterminées, explicites et légitimes, et
                ne seront pas traitées ultérieurement d'une manière incompatible
                avec ces fins. Conformément à l'article 89, paragraphe 1 du
                RGPD, le stockage et le traitement de ces données à des fins
                archivistiques dans l'intérêt public, à des fins de recherche
                scientifique ou historique ou à des fins statistiques, n'est pas
                considéré comme incompatible avec les finalités initiales;
                <br />
                - adéquates, pertinentes et limitées à ce qui est nécessaire
                dans le cadre des finalités pour lesquelles elles sont traitées;
                <br />
                - exactes, et si nécessaires tenues à jour. Toutes les mesures
                raisonnables seront prises pour corriger des données incorrectes
                au regard de la finalité pour laquelle celles-ci sont
                collectées;
                <br />
                - conservées sous une forme permettant l'identification des
                personnes concernées pour une durée suffisante pour leur
                traitement;
                <br />
                - traitées d'une façon qui garantit la sécurité de celles-ci, y
                compris en ce qui concerne le traitement non-autorisé ou
                illicite, la perte ou la destruction de ces données,
                accidentelle ou volontaire.
                <br />
                <br />
                Le traitement des données collectées n'est licite que si au
                moins l'une des conditions suivantes est remplie:
                <br />
                <br />
                - La personne concernée par les données à consenti au traitement
                de celles-ci pour une ou plusieurs finalités spécifiques.
                <br />
                - Le traitement des données est nécessaire à l'exécution d'un
                contrat dont la personne concernée est partie ou à l'exécution
                des mesures précontractuelles prises à la demande de celui-ci.
                <br />
                - Le traitement est nécessaire à la réalisation d'une obligation
                légale à laquelle le responsable, BelStreet, est soumis.
                <br />
                - Le traitement est nécessaire à la sauvegarde des intérêts
                vitaux de toute personne physique.
                <br />
                - Le traitement est nécessaire à la réalisation d'une mission
                d'intérêt public dont est investi BelStreet.
                <br />- Le traitement est nécessaire aux fins des intérêts
                légitimes poursuivis par le responsable du traitement ou par un
                tiers, à moins que ne prévalent les intérêts, libertés ou droits
                fondamentaux de la personne concernée.
              </p>
              <h4> Article 3 : Consentement</h4>
              <p>
                {" "}
                En utilisant le site BelStreet, les utilisateurs consentent à:
                <br />
                <br />
                - Toutes les conditions incluses dans la présente politique de
                confidentialité;
                <br />- La collecte, l'utilisation et la conservation des
                données listées dans la présente politique de confidentialité.
              </p>
              <h4> Article 4 : Données personnelles collectées </h4>
              <p>
                Lors de la navigation du site BelStreet différentes données
                personnelles au sujet des utilisateurs sont collectées.
                <br />
                <br />
                Les données suivantes sont collectées de manière automatique :
                <br />
                <br />
                - Aucune donnée n'est collectée de manière automatique.
                <br />
                <br />
                Les données suivantes sont recueillies de manière
                non-automatique :
                <br />
                <br />
                - Adresse physique de l'utilisateur.
                <br />
                - Adresse IP de l'utilisateur.
                <br />
                - Adresse mail de l'utilisateur.
                <br />
                - Alias et commentaires sur une rue.
                <br />
                - Echanges de mail en employant le formulaire de contact.
                <br />
                <br />
                Ces données sont recueillies lors de l'envoi d'un formulaire
                d'évaluation (adresse physique de l'utilisateur, Adresse IP de
                l'utilisateur, Alias et commentaires sur une rue) et l'envoi
                d'un formulaire de contact (adresse mail de l'utilisateur et
                échanges de mail).
                <br />
                Aucune donnée supplémentaire n'est collectée sans vous en
                informer au préalable.
              </p>
              <h4> Article 5 : Traitement de ces données </h4>
              <p>
                Les données personnelles recueillies sur le site BelStreet ne
                sont collectées et traitées que dans le cadre des fins précisées
                dans la présente politique de confidentialité et / ou dans les
                pages pertinentes du site. Les données personnelles que nous
                collectons ne seront pas utilisées à d'autres fins.
                <br />
                <br />
                - L'adresse IP est employée avec le but qu'un utilisateur puisse
                envoyer qu'un seul formulaire et pour la collecte d'acceptation
                de conditions d'utilisation.
                <br />
                - L'adresse physique, alias et commentaires s'emploient avec le
                but de génerer la base de données d'évaluations du site.
                <br />- Les adresses mail ne sont pas collectées mais elles sont
                visibles pour l'éditeur lors qu'il reçoive de mails des
                utilisateurs à travers le forumlaire de contact ainsi que la
                conversation mail qui découle.
              </p>
              <h4>
                {" "}
                Article 6 : Partage des données personnelles recueillies{" "}
              </h4>
              <p>
                Les données personnelles collectées pourront être partagées :
                <br />
                <br />
                - Si BelStreet y est contrainte par la loi.
                <br />
                - Si les informations sont requises pour toute procédure
                judiciaire.
                <br />
                - Afin de protéger les droits légaux de BelStreet.
                <br />
                <br />
                En dehors des situations prévues dans cette présente politique,
                les informations personnelles ne seront en aucun cas divulguées
                ou partagées à des tiers.
              </p>
              <h4>
                {" "}
                Article 7 : Stockage et protection des données personnelles{" "}
              </h4>
              <p>
                BelStreet ne conserve pas les données personnelles plus
                longtemps que ce qui est nécessaire à la réalisation des fins
                pour lesquelles elles sont collectées. Afin de protéger ces
                données, nous mettons en oeuvre les mesures suivantes :
                <br />
                <br />
                - Communication avec standard SSL certificate, lecture et
                écriture securisée de bases de données.
                <br />
                <br />
                Vos données sont conservées le temps suivant (dans des cas
                prévus dans la loi, vos données personnelles peuvent être
                conservées plus longtemps):
                <br />
                <br />
                - Pour l'adresse, alias, commentaires (y compris métadonnées) :
                durée indéfinie .
                <br />
                - Pour les échanges à travers le formulaire de contact (y
                compris adresse mail) : 6 mois.
                <br />- Pour l'adresse IP : durée indéfinie (pour stocker
                l'acceptation de conditions d'utilisation).
              </p>
              <h4> Article 8 : Droits de l'utilisateur </h4>
              <p>
                Conformément au chapitre 3, art 12-23 du RGPD, les utilisateurs
                du site BelStreet ont, en ce qui concerne leurs données
                personnelles, les droits suivants :
                <br />
                <br />
                - Droit d'accès.
                <br />
                - Droit de rectification.
                <br />
                - Droit à l'effacement.
                <br />
                - Droit de restreindre le traitement.
                <br />
                - Droit à la portabilité des données.
                <br />- Droit d'objection.
              </p>
              <h4> Article 9 : Politique au sujet des cookies </h4>
              <p>
                Un cookie est un fichier stocké sur le disque dur d'un
                utilisateur lorsqu'il navigue sur un site web. Ce cookie permet
                de mieux connaître les données relatives aux habitudes de
                navigation de l'utilisateur afin de lui proposer une meilleure
                expérience d'utilisation.
                <br />
                <br />
                Le site BelStreet n'utilise pas des cookies. Les applications
                employées dans le site (Recaptcha et Formsubmit) sont des
                applications standard et peuvent employer des cookies qui ne
                sont pas visibles pour l'éditeur du site.
              </p>
              <h4> Article 10 : Dispositions supplémentaires </h4>
              <p>N/A</p>
              <h4>
                {" "}
                Article 11 : Modification de la politique de confidentialité{" "}
              </h4>
              <p>
                Afin de rester en accord avec la loi ou de refléter tout
                changement dans notre processus de gestion des données
                personnelles, la présente politique de confidentialité peut être
                amenée à changer et à être modifiée régulièrement. Il est
                recommandé aux utilisateurs de vérifier régulièrement cette
                politique afin de se tenir informés de notre politique en termes
                de collecte et de traitement de données personnelles.
              </p>
              <h4> Article 12 : Contact </h4>
              <p>
                L'utilisateur peut joindre BelStreet aux coordonnées suivantes:
              </p>
              <p>
                <b>Dénomination: </b> BelStreet
              </p>
              <p>
                <b>Editeur:</b> Alejandro Rubio
              </p>
              <p>
                <b>Mail:</b> info@belstreet.com
              </p>
              <p></p>
              <p>Dernière mise à jour le 3/12/2022.</p>
            </div>
            <br />
            <br />
            <a href="/">
              <button
                style={{ width: 300 }}
                className="PaginaInicio primary filter-btn"
              >
                Retour vers le site principal
              </button>
            </a>
          </div>
        </div>
        <div style={{ marginTop: 44 }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Privacy;
