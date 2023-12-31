import Footer from "../Elements/Footer";
import Nav from "../Nav";
import Cookies from "js-cookie";

function Terms() {
  const locale = Cookies.get("locale") || "nl";

  if (locale === "nl")
    return (
      <div>
        <Nav />
        <div style={{ width: "80%", marginLeft: "10%" }}>
          
        <div className="main_infos">
    <div className="text">
        <div className="paragraph-title">
            <h2 className="h2"> Algemene Gebruiksvoorwaarden</h2>
        </div>
        <p>
            <b>Benaming:</b> BelStreet
        </p>
        <p>
            <b>Uitgever:</b> Alejandro Rubio
        </p>
        <p>
            <b>E-mail:</b> info@belstreet.com
        </p>
        <br />
        <h4>
            {" "}
            Artikel 1: Doel en toepassingsgebied van de Algemene Gebruiksvoorwaarden (AGV)
        </h4>

        <p>
            De bepalingen van deze Algemene Gebruiksvoorwaarden (AGV) zijn van toepassing op alle bezoekers van deze website. Door deze website te gebruiken, aanvaardt u uitdrukkelijk de onderstaande voorwaarden.
        </p>

        <h4> Artikel 2: Voorwaarden voor toegang tot de site</h4>

        <p>
            Er zijn geen financiële beperkingen of formaliteiten die de toegankelijkheid van deze website beperken. BelStreet is een puur informatieve en gratis website. De gegevens die worden ingediend bij het verzenden van een beoordelingsformulier kunnen persoonsgegevens vormen waarvan de verwerking onderworpen is aan de toepasselijke wetgeving. Zie artikel 3 voor de contactgegevens van de verantwoordelijke voor de verwerking van persoonsgegevens.
        </p>

        <h4> Artikel 3: Gegevensverwerking</h4>

        <p>
            BelStreet verzamelt persoonlijke gegevens wanneer formulieren worden ingediend. Raadpleeg het gedeelte <a href="/privacy"> privacy</a> voor meer informatie.
        </p>

        <h4>
            {" "}
            Artikel 4: Rechten en verplichtingen van de uitgever met betrekking tot intellectuele eigendom{" "}
        </h4>

        <p>
            Elke intellectuele eigendomsproductie vermeld op de BelStreet-website (logo, merken, teksten, enz.) is beschermd door intellectueel eigendom volgens de geldende Europese en Belgische normen. De bezoeker moet voorafgaande toestemming van de website verkrijgen voor elke reproductie, kopie of publicatie van elementen of inhoud van de site. Gebruikers met intellectuele eigendomsrechten kunnen via het contactformulier verzoeken om verwijdering van elementen die inbreuk maken op hun rechten. BelStreet kan echter geen financiële vergoeding eisen voor schending van intellectuele eigendomsrechten.
        </p>

        <h4> Artikel 5: Verantwoordelijkheid van de website-uitgever </h4>

        <p>
            De uitgever kan niet verantwoordelijk worden gehouden voor storingen, ontoegankelijkheid of storingen van de website. De informatie op de website wordt als betrouwbaar beschouwd. De uitgever kan echter niet aansprakelijk worden gesteld voor fouten op de site. De uitgever is evenmin verantwoordelijk voor de inhoud van berichten van gebruikers.
        </p>

        <h4> Artikel 6: Regels met betrekking tot hyperlinks </h4>

        <p>
            De BelStreet-website kan hyperlinks bevatten naar andere internetbronnen. De inhoud van deze bronnen kan op geen enkele manier de aansprakelijkheid van de uitgever inroepen.
        </p>

        <h4>
            {" "}
            Artikel 7: Toepasselijk recht en bevoegde rechtbank bij geschillen{" "}
        </h4>

        <p>
            Belgisch recht is van toepassing op alle geschillen met betrekking tot deze website. De Belgische rechtbanken zijn exclusief bevoegd om deze geschillen te behandelen.
        </p>

        <h4>
            {" "}
            Artikel 8: Regels voor mogelijke wijzigingen in de AGV{" "}
        </h4>

        <p>
            De uitgever kan op elk moment en eenzijdig de inhoud van deze algemene gebruiksvoorwaarden
          </p>
          <p>
          De uitgever kan op elk moment en eenzijdig de inhoud van deze algemene gebruiksvoorwaarden wijzigen. De uitgever is niet verplicht om rechtvaardiging te geven voor de wijzigingen die in deze voorwaarden worden aangebracht.
      </p>
      <p>Laatst bijgewerkt op 18/11/2022.</p>
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
        <div className="mt-44">
          <Footer />
        </div>
      </div>
    );
  else
    return (
      <div>
        <Nav />
        <div style={{ width: "80%", marginLeft: "10%" }}>
          <div className="main_infos">
            <div className="text">
              <div className="paragraph-title">
                <h2 className="h2"> Conditions générales d'utilisation</h2>
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
              <br />
              <h4>
                {" "}
                Article 1 : Objet et champ d'application des Conditions
                générales d'utilisation (CGU)
              </h4>

              <p>
                Les dispositions de ces Conditions générales d'utilisation (CGU)
                s'appliquent à tous les visiteurs de ce site Internet. En
                utilisant ce site Internet vous acceptez expressément les
                conditions ci-dessous.
              </p>

              <h4> Article 2 : Les conditions d'accès au site</h4>

              <p>
                Il n'y a aucune contrainte pécuniaire, ni aucune formalité qui
                limite l'accessibilité au présent site internet. Le site
                BelStreet est un site d'information purement gratuit. Les
                informations d'envoi d'un formulier d'évaluation peuvent
                constituer des données à caractère personnel dont le traitement
                est soumis à la législation applicable. Voir l'article 3 pour
                les coordonnées du responsable du traitement des données à
                caractère personnel.
              </p>

              <h4> Article 3 : Traitement de données</h4>

              <p>
                {" "}
                BelStreet collecte des données personnelles lors de l'envoi de
                formulaires. Veuillez vous adresser vers la partie{" "}
                <a href="/privacy"> vie privée</a> pour avoir plus d'infos.
              </p>

              <h4>
                {" "}
                Article 4 : Les droits et obligations de l'éditeur en matière de
                propriété intellectuelle{" "}
              </h4>

              <p>
                Toute production intellectuelle indiquée sur le site internet
                BelStreet (logo, marques, textes,…) fait l'objet d'une
                protection de la propriété intellectuelle en vertu des normes
                européennes et belges en vigueur. Le visiteur sollicite
                l'autorisation préalable du site pour toute reproduction, copie,
                publication d'élément ou contenu du site. L'utilisateur,
                propriétaire d'un droit intellectuel, peut demander via le
                formulaire de contact le retrait d'un élément violant les droits
                concernés. Aucune réparation pécuniaire ne pourra cependant être
                demandée à BelStreet pour violation de droit intellectuel.
              </p>

              <h4> Article 5 : La responsabilité de l'éditeur du site </h4>

              <p>
                L'éditeur ne peut être tenu responsable du non fonctionnement,
                d'une impossibilité d'accès ou de dysfonctionnements du site.
                Les informations du site sont réputées fiables. Néanmoins,
                l'éditeur ne peut engager sa responsabilité en cas d'erreur
                contenu sur le site. L'éditeur ne peut être tenu responsable non
                plus du contenu des messages des utilisateurs.
              </p>

              <h4> Article 6 : Les règles relatives aux liens hypertextes </h4>

              <p>
                Le site internet BelStreet peut contenir des liens hypertextes
                renvoyant vers d'autres ressources internet. Le contenu de ces
                ressources ne peut en aucune façon engager la responsabilité de
                l'éditeur.
              </p>

              <h4>
                {" "}
                Article 7 : Le droit applicable et la juridiction compétente en
                cas de contentieux.{" "}
              </h4>

              <p>
                Le droit belge est application pour tout litige relatif au
                présent site internet. Les juridictions belges sont seules
                compétentes pour connaitre de ces litiges.
              </p>

              <h4>
                {" "}
                Article 8 : Les règles encadrant d'éventuelles modifications des
                CGU.{" "}
              </h4>

              <p>
                L'éditeur peut à tout moment et unilatéralement modifier le
                contenu des présentes conditions générales d'utilisation.
                L'éditeur n'est pas tenu de donner de justification aux
                modifications qui sont opérées sur les présentes conditions.
              </p>
              <p>Dernière mise à jour le 18/11/2022.</p>
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
        <div className="mt-44">
          <Footer />
        </div>
      </div>
    );
}

export default Terms;
