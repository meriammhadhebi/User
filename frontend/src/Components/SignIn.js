import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { TextField, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";

export default function SignIn() {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
    const classes = useStyles();
  const [UserData, setUser] = useState({
    Nom: "",
    Prenom: "",
    Email: "",
    Tel: "",
    Password: "",
    Role:"particulier"
  });
  const history = useHistory();
  //*************add Product*************
  const Submit = (e) => {
    axios
      .post("http://localhost:4000/user/SignUp", UserData)
      .then(function (response) {
        setUser(response.data);
        history.push("/");
      });
  };
  //*************Form validation*************
  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const schema = yup.object().shape({
    Nom: yup
      .string()
      .required("Please Enter your last name"),
    Prenom: yup
      .string()
      .required("Please Enter your first name"),
    Tel: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid'),
    Email: yup
      .string()
      .matches(emailRegExp,'Email is not valid'),
    Password: yup
      .string()
      .required('Please Enter your password')
      .matches(passwordRegExp,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
      
    <>
    <Header />
    <div  className="container">
    <form
        onSubmit={handleSubmit(Submit)}
        noValidate
        autoComplete="off"
        className={classes.root} 
      >
        <div className="fields" style={{display:'flex',flexDirection:'column'}}>
            <div className="card">
            <TextField
                {...register("Nom")}
                label="Last Name"
                value={UserData.Nom}
                onChange={(e) =>
                setUser({ ...UserData, Nom: e.target.value })
                }
            />
            <p style={{ color: "red", marginLeft: "10px" }}>
                {errors.Nom?.message}
            </p>
            </div>
            <div className="card">
            <TextField
                {...register("Prenom")}
                label="First Name"
                value={UserData.Prenom}
                onChange={(e) =>
                setUser({ ...UserData, Prenom: e.target.value })
                }
            />
            <p style={{ color: "red", marginLeft: "10px" }}>
                {errors.Prenom?.message}
            </p>
            </div>
            <div className="card">
            <TextField
                {...register("Tel")}
                label="Phone Number"
                value={UserData.Tel}
                onChange={(e) =>
                setUser({ ...UserData, Tel: e.target.value })
                }
            />
            <p style={{ color: "red", marginLeft: "10px" }}>
                {errors.Tel?.message}
            </p>
            </div>
            <div className="card">
            <TextField
                {...register("Email")}
                label="Email"
                value={UserData.Email}
                onChange={(e) =>
                setUser({ ...UserData, Email: e.target.value })
                }
            />
            <p style={{ color: "red", marginLeft: "10px" }}>
                {errors.Email?.message}
            </p>
            </div>
            <div className="card">
            <TextField
                {...register("Password")}
                id="standard-password-input"
                label="Password"
                type="password"
                value={UserData.Password}
                onChange={(e) =>
                setUser({ ...UserData, Password: e.target.value })
                }
            />
            <p style={{ color: "red", marginLeft: "10px" }}>
                {errors.Password?.message}
            </p>
            </div>
        
        </div>
        
        <div >
          <Button className="btn" aria-label="add" type="submit">
            Add
          </Button>
        </div>
      </form>
     
    </div>
    <Footer/>
    </>
  );
}

