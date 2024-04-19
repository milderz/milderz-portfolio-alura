import { StyledForm } from "./Styles/Form.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";

const ContactForm = () => {
  const [inView, setInView] = useState(false);
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputNameValueError, setInputNameValueError] = useState(false);
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputEmailValueError, setInputEmailValueError] = useState(false);
  const [inputMessageValue, setInputMessageValue] = useState("");
  const [inputMessageValueError, setInputMessageValueError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  const form = useRef();

  const handleContactFormOnSubmit = (event) => {
    event.preventDefault();
    if (inputNameValue === "") {
      setInputNameValueError(true);
    }
    if (inputEmailValue === "") {
      setInputEmailValueError(true);
    }
    if (inputMessageValue === "") {
      setInputMessageValueError(true);
    }

    if (inputNameValue !== "") {
      setInputNameValueError(false);
    }
    if (inputEmailValue !== "") {
      setInputEmailValueError(false);
    }
    if (inputMessageValue !== "") {
      setInputMessageValueError(false);
    }

    if (
      inputNameValue !== "" &&
      inputEmailValue !== "" &&
      inputMessageValue !== ""
    ) {
      setSendingEmail(true);

      emailjs
        .sendForm(
          "service_tfdrsqd",
          "template_gpor08u",
          form.current,
          "flzT7xi3wlITXflpu"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSendingEmail(false);
            setEmailSent(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      {sendingEmail ? (
        <div className="form-sent">
          <h3 className="form-sent-message">Sending message...</h3>
          <Loader />
        </div>
      ) : emailSent ? (
        <div className="form-sent">
          <h3 className="form-sent-message">Message sent successfully</h3>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      ) : (
        <InView
          onChange={setInView}
          className={`${inView ? "in-view" : "in-view-false"}`}
          threshold={0.125}
          style={{ flex: "1" }}
        >
          <StyledForm ref={form} onSubmit={handleContactFormOnSubmit}>
            <label
              className={`${
                inputNameValueError && "input-invalid"
              } form-input `}
            >
              <input
                type="text"
                placeholder="Your name"
                onChange={(e) => setInputNameValue(e.target.value)}
              />
            </label>
            <label
              className={`${
                inputEmailValueError && "input-invalid"
              } form-input `}
            >
              <input
                type="email"
                placeholder="Your email"
                onChange={(e) => setInputEmailValue(e.target.value)}
              />
            </label>
            <label
              className={`${
                inputMessageValueError && "input-invalid"
              } form-input-description `}
            >
              <textarea
                type="text"
                placeholder="How can I help you?"
                onChange={(e) => setInputMessageValue(e.target.value)}
              />
            </label>
            <button className="submit-form-button" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
              SEND
            </button>
          </StyledForm>
        </InView>
      )}
    </>
  );
};

export default ContactForm;
