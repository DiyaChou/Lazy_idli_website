import React, { useRef, useEffect, useState } from "react";
import "./footer.css";
import { Alert, Checkbox, CircularProgress, TextField } from "@mui/material";
import FooterStatus from "../../components/footerStatus/FooterStatus";
import FooterLinks from "../../components/footerLinks/FooterLinks";

function Footer({ reference }) {
  const mapRef = useRef();
  const [imageHeight, setImgHeight] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkedState, setCheckedState] = useState(new Array(5).fill(false));
  const [checkboxCounter, setCheckboxCounter] = useState(0);
  const [checkboxErr, setCheckboxErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [failureMsg, setFailureMsg] = useState(false);

  const handleCheckbox = (e, position) => {
    e.target.checked
      ? setCheckboxCounter(checkboxCounter + 1)
      : setCheckboxCounter(checkboxCounter - 1);
    const updatedCheckedState = checkedState.map((item, index) =>
      index + 1 === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    if (checkboxCounter === 0) {
      setCheckboxErr(true);
    } else {
      setCheckboxErr(false);
    }
  }, [checkboxCounter]);

  useEffect(() => {
    setImgHeight(mapRef.current.getBoundingClientRect().height);
  }, [imageHeight]);

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return true;
    else return false;
  }

  const handleSubmit = async () => {
    setFailureMsg(false);
    setSuccessMsg(false);
    setLoading(true);
    setNameErr(false);
    setEmailErr(false);
    setPhoneErr(false);
    if (!name) setNameErr(true);
    if (!phone) setPhoneErr(true);
    if (phone.length !== 10) setPhoneErr(true);
    if (!email) setEmailErr(true);
    if (!ValidateEmail(email)) setEmailErr(true);

    if (
      !name ||
      !phone ||
      !email ||
      checkboxCounter === 0 ||
      phone.length !== 10 ||
      !ValidateEmail(email)
    ) {
      setLoading(false);
      return;
    }

    await fetch("http://localhost:8626/postQuery", {
      method: "POST",
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        topics: checkedState,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setSuccessMsg(true);
          setTimeout(() => setSuccessMsg(false), 10000);
        }
        setLoading(false);
      })
      .catch(() => {
        setFailureMsg(true);
        setLoading(false);
      });
  };

  return (
    <div className="footerContainer" id="footer">
      <div className="footerTop">
        <div className="footerTopCheckbox">
          <div className="footerTopHeader">I'm Interested in...</div>

          <div className="checkboxes">
            <div className="checkbox">
              <Checkbox value={1} onChange={(e) => handleCheckbox(e, 1)} />
              <span>Branding</span>
            </div>

            <div className="checkbox">
              <Checkbox value={2} onChange={(e) => handleCheckbox(e, 2)} />
              <span>UX/UI Design</span>
            </div>

            <div className="checkbox">
              <Checkbox value={3} onChange={(e) => handleCheckbox(e, 3)} />
              <span>Graphic Design</span>
            </div>

            <div className="checkbox">
              <Checkbox value={4} onChange={(e) => handleCheckbox(e, 4)} />
              <span>Industrial Design</span>
            </div>

            <div className="checkbox">
              <Checkbox value={5} onChange={(e) => handleCheckbox(e, 5)} />
              <span>Development</span>
            </div>
          </div>

          <div
            className="errorMessage"
            style={
              checkboxErr ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            Please select atleast one!
          </div>
        </div>

        <div className="footerTopForm">
          <div className="footerForm">
            <TextField
              required
              error={nameErr}
              helperText={nameErr ? "Please provide your name!" : ""}
              id="standard-basic"
              className="textField"
              label="Full Name"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              type={"number"}
              required
              id="standard-basic"
              className="textField"
              label="Phone Number"
              variant="standard"
              error={phoneErr}
              helperText={
                phoneErr ? "Please provide a valid phone number!" : ""
              }
              onChange={(e) => setPhone(e.target.value.trim())}
            />

            <TextField
              type={"email"}
              required
              id="standard-basic"
              className="textField"
              label="Email"
              variant="standard"
              error={emailErr}
              helperText={emailErr ? "Please provide a valid email!" : ""}
              onChange={(e) => setEmail(e.target.value.trim())}
            />

            {loading ? (
              <CircularProgress />
            ) : (
              <div className="submitBtn" onClick={handleSubmit}>
                Let's get in Touch!
              </div>
            )}

            <div style={{ marginTop: "20px", position: "relative" }}>
              <Alert
                severity="success"
                style={
                  successMsg
                    ? { position: "relative", display: "flex" }
                    : { display: "none" }
                }
              >
                Thank you!&nbsp;&nbsp;We will get in touch with you shortly..
              </Alert>

              <Alert
                severity="error"
                style={failureMsg ? { display: "flex" } : { display: "none" }}
              >
                Something went wrong!
              </Alert>
            </div>
          </div>

          <div className="footerMap">
            <iframe
              title="map"
              ref={mapRef}
              style={{ filter: "invert(90%)" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5896954586324!2d77.60768031461156!3d12.934071990880591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1452fa5564c3%3A0x10d54532c591f71!2sIKP%20EDEN!5e0!3m2!1sen!2sin!4v1648476620602!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <FooterStatus />
        <FooterLinks reference={reference} />
      </div>
    </div>
  );
}

export default Footer;
