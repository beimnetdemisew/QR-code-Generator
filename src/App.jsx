import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import navLogo from "./assets/images/logo.png";
import { QRCodeCanvas } from "qrcode.react";

const App = () => {
  const [input, setInput] = useState("https://www.google.com");
  const downloadImage = () => {
    const canvas = document.querySelector("canvas");
    const imageDataURI = canvas.toDataURL("image/png");
    const el = document.createElement("a");
    el.href = imageDataURI;
    el.download = "qrcode.png";
    el.click();
  };
  return (
    <>
      <Navbar className="sticky-top nav" bg="dark">
        <div className="container ">
          <Navbar.Brand href="#home">
            <img src={navLogo} alt="logo" className="nav-logo" />
          </Navbar.Brand>
        </div>
      </Navbar>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 offset-md-3">
            <h3 className="fw-bolder text-center">Qr Code Generator</h3>
            <hr />
            <input
              type="url"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control"
              placeholder="write url to generate qr-code"
            />
            {input && (
              <>
                <QRCodeCanvas
                  value={input}
                  size={200}
                  level="M"
                  className="mt-4 mb-3"
                />
                <button
                  className="btn mt-1 d-block btn-warning fw-bold"
                  onClick={downloadImage}
                >
                  Download QR
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
