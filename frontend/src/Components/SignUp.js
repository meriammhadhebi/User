import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router";

function SignUp() {
  const [loginData, setData] = useState({
    Email: "",
    Password: "",
  });
  const history = useHistory();
  //*************add Product*************
  const [loginFlag, setloginFlag] = useState(false);
  useEffect(async () => {
    if (loginFlag) {
      console.log("email" + loginData.Email);
      console.log("pwd" + loginData.Password);
      await axios
        .get("http://localhost:4000/user", {
          Email: loginData.Email,
          Password: loginData.Password,
        })
        .then(function (response) {
          setData(response.data);
          console.log(response);
        });
    }
    setloginFlag(false);
  }, [loginFlag]);
  return (
    <>
      <Header />
      <div>
        <TextField
          label="Email"
          value={loginData.Email}
          onChange={(e) => setData({ ...loginData, Email: e.target.value })}
        />
        <div className="card">
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            value={loginData.Password}
            onChange={(e) =>
              setData({ ...loginData, Password: e.target.value })
            }
          />
        </div>
        <div>
          <Button
            onClick={() => {
              setloginFlag(true);
            }}
            className="btn"
            aria-label="add"
            type="submit"
          >
            Login
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
