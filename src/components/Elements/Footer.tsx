import { FormattedMessage } from "react-intl";

function Footer () {

    return (
        <div className="footer">
            <span className="footer__copy">
                © Alejandro Rubio 2022
            </span>
            <span className="footer__links">
                <a href="/contact">
                    <p className="footer-link">
                    <FormattedMessage 
                        defaultMessage="Sur nous/Contact"
                        id="footer.contact"
                    />
                    </p>
                </a>
                <a href="/terms">
                    <p className="footer-link">
                    <FormattedMessage 
                        defaultMessage="Conditions d'utilisation"
                        id="footer.conditions"
                    />
                    </p>
                </a>
                <a href="/privacy">
                    <p className="footer-link">
                    <FormattedMessage 
                        defaultMessage="Vie privée"
                        id="footer.privacy"
                    />
                    </p>
                </a>
            </span>
        </div>
    );

}

export default Footer;