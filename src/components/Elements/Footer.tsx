import { FormattedMessage } from "react-intl";

function Footer () {

    return (
        <div className="footer">
            <span className="footer__copy">
                © Alejandro Rubio 2022
            </span>
            <span className="footer__links">
                <a href="">
                    <FormattedMessage 
                        defaultMessage="Sur nous/Contact"
                        id="footer.contact"
                    />
                </a>
                <a href="/terms">
                    <FormattedMessage 
                        defaultMessage="Conditions d'utilisation"
                        id="footer.conditions"
                    />
                </a>
                <a href="">
                    <FormattedMessage 
                        defaultMessage="Vie privée"
                        id="footer.privacy"
                    />
                </a>
            </span>
        </div>
    );

}

export default Footer;