import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import Footer from "../Elements/Footer";
import Input from "../Elements/Input";
import Nav from "../Nav";
import { FormattedMessage, useIntl } from "react-intl";
import useIsMobile from "../../utils/useIsMobile";

function Contact() {

    const intl = useIntl();
    const isMobile = useIsMobile();

  return (
    <div style={{ background: "rgb(248, 248, 248)" }}>
      <Nav />

      <div className="contact-container">
        <div>
          <p>
            <FormattedMessage
              defaultMessage="BelStreet c'est un projet crée pour des gens qui vivent la réalité du marché immobilier. Notre objectif c'est d'aider les utilisateurs à faire le bon choix sur la base de critères importants pour bien y habiter dans une maison ou appartement."
              id="contact.m1"
            />
          </p>

          <p className="mt-20">
            <FormattedMessage
                defaultMessage="Nous espérons que vous trouverez le site facile à employer et utile."
                id="contact.m2"
            />
          </p>

          <p className="mt-20">
            <FormattedMessage
                defaultMessage="Vous avez des questions? N'hésitez pas à nous contacter pour que nous puissions vous aider."
                id="contact.m3"
            />
          </p>
        </div>
        <div className="mt-44" style={{ marginBottom: 44 }}>
            <h2 className="color-primary" style={{ textAlign: "center" }}>
            <FormattedMessage 
                defaultMessage="Contact Us"
                id="contact.label"
            />
            </h2>
            <form action="https://formsubmit.co/info@belstreet.com" method="POST">
            <div className="mt-20 filters-container" style={{ display: "block" }}>
                <input 
                    type="hidden" 
                    name="_next"
                    value="https://www.belstreet.com/"
                />
                <input 
                    type="hidden" 
                    name="_subject"
                    value="New message"
                />
                <p style={{ marginBottom: 8 }}>
                    <FormattedMessage defaultMessage="Email" id="contact.email" />
                </p>
                <Input 
                    placeholder={intl.formatMessage({ defaultMessage: "Enter your email", id: "contact.email.message" })}
                    name="email"
                    type="email"
                    required
                />
                <br />
                <br />
                <p style={{ marginBottom: 8 }}>
                    <FormattedMessage defaultMessage="Message" id="contact.message" />
                </p>
                <textarea 
                    className="input" 
                    style={{
                        resize: "none"
                    }}
                    required
                    name="message"
                    placeholder={intl.formatMessage({ defaultMessage: "Enter your message", id: "contact.message.message" })} 
                />
                <br />
                <br />
                <Button 
                    type="submit" 
                    text={intl.formatMessage({ defaultMessage: "Send", id: "contact.send" })}
                    variant={"primary"}
                    onClick={() => ""}
                    style={{ float: isMobile ? undefined : "right" }}
                />
                <Link to={"/"}>
            <Button
              onClick={() => {}}
              text="Back To Home"
              variant="secondary"
              style={isMobile ? { marginTop: 8 } : { marginLeft: 8 }}
            />
          </Link>
            </div>
            </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
