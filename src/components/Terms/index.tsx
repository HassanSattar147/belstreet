import Footer from "../Elements/Footer";
import Nav from "../Nav";

function Terms () {

    return (
        <div>
            <Nav />
            <div style={{ width: "80%", marginLeft: "10%" }}>
            <div className="main_infos">
                <div className="text"> 
                <div className="paragraph-title">
                    <h2 className="h2"> Conditions générales d'utilisation</h2>
                </div>
                    <p><b>Dénomination: </b> BelStreet</p>
                    <p><b>Editeur:</b> Alejandro Rubio</p>
                    <p><b>Mail:</b> info@belstreet.com</p>
        <br />
                    <h4> Article 1 : Objet et champ d'application des Conditions générales d'utilisation (CGU)</h4>

                    <p>Les dispositions de ces Conditions générales d'utilisation (CGU) s'appliquent à tous les visiteurs de ce site Internet.
                        En utilisant ce site Internet vous acceptez expressément les conditions ci-dessous.
                    </p>

                    <h4> Article 2 : Les conditions d'accès au site</h4>

                    <p>Il n'y a aucune contrainte pécuniaire, ni aucune formalité qui limite l'accessibilité au présent site internet. 
                        Le site BelStreet est un site d'information purement gratuit.
                        Les informations d'envoi d'un formulier d'évaluation peuvent constituer des données à caractère personnel dont le traitement est soumis à la législation applicable.
                        Voir l'article 3 pour les coordonnées du responsable du traitement des données à caractère personnel.
                    </p>

                    <h4> Article 3 : Traitement de données</h4>

                    <p> BelStreet collecte des données personnelles lors de l'envoi de formulaires. 
                        Veuillez vous adresser vers la partie <a href="Legal.html"> vie privée</a> pour avoir plus d'infos.
                    </p>

                    <h4> Article 4 : Les droits et obligations de l'éditeur en matière de propriété intellectuelle </h4>

                    <p>Toute production intellectuelle indiquée sur le site internet BelStreet (logo, marques, textes,…) fait l'objet d'une protection de la propriété intellectuelle en vertu des normes européennes et belges en vigueur. 
                        Le visiteur sollicite l'autorisation préalable du site pour toute reproduction, copie, publication d'élément ou contenu du site.
                        L'utilisateur, propriétaire d'un droit intellectuel, peut demander via le formulaire de contact le retrait d'un élément violant les droits concernés. 
                        Aucune réparation pécuniaire ne pourra cependant être demandée à BelStreet pour violation de droit intellectuel.
                    </p>

                    <h4> Article 5 : La responsabilité de l'éditeur du site  </h4>

                    <p>L'éditeur ne peut être tenu responsable du non fonctionnement, d'une impossibilité d'accès ou de dysfonctionnements du site. 
                        Les informations du site sont réputées fiables. 
                        Néanmoins, l'éditeur ne peut engager sa responsabilité en cas d'erreur contenu sur le site. 
                        L'éditeur ne peut être tenu responsable non plus du contenu des messages des utilisateurs.
                    </p>

                    <h4> Article 6 : Les règles relatives aux liens hypertextes  </h4>

                    <p>Le site internet BelStreet peut contenir des liens hypertextes renvoyant vers d'autres ressources internet. 
                        Le contenu de ces ressources ne peut en aucune façon engager la responsabilité de l'éditeur. 
                    </p>

                    <h4> Article 7 : Le droit applicable et la juridiction compétente en cas de contentieux.  </h4>

                    <p>Le droit belge est application pour tout litige relatif au présent site internet. 
                        Les juridictions belges sont seules compétentes pour connaitre de ces litiges.
                    </p>

                    <h4> Article 8 : Les règles encadrant d'éventuelles modifications des CGU.  </h4>

                    <p>L'éditeur peut à tout moment et unilatéralement modifier le contenu des présentes conditions générales d'utilisation. 
                        L'éditeur n'est pas tenu de donner de justification aux modifications qui sont opérées sur les présentes conditions.
                    </p>
                    <p>Dernière mise à jour le 18/11/2022.</p>
                </div>
        <br/>
        <br/>
            </div>
            </div>
            <Footer />
        </div>
    )

}

export default Terms;
