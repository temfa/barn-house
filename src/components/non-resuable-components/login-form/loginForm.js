import React, { useState } from "react";
import "./loginForm.css";
import { useNavigate } from "react-router-dom";
import { db } from "../../../utils/firebase/firebase-config";
import { auth } from "../../../utils/firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../reusable-components/loader/loader";
import Cookies from "universal-cookie";
const LoginForm = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const adminLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
        onValue(ref(db), (snapshot) => {
          const data = snapshot.val();
          if (data.admin !== null) {
            setLoading(false);
            Object.entries(data.admin).filter((item) => {
              if (item[1].email === email) {
                setLoading(false);
                cookies.set("admin", item[1]);
                navigate("/admin/dashboard");
              }
              return item;
            });
          } else {
            setLoading(false);
            toast.error("Something went wrong!!!Try again");
          }
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        console.log(error.code);
        if (error.code === "auth/wrong-password") {
          toast.error("Please check the Password");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("Please check the Email");
        }
      });
  };
  const userLogin = () => {
    alert("Hello2");
  };
  return (
    <div className="login-form-container">
      <ToastContainer />
      <h2>Login</h2>
      <p>Please login using account detail bellow.</p>
      <form>
        <div className="login-form-input">
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="login-form-input">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {loading ? <Loader /> : <button onClick={user === "admin" ? adminLogin : userLogin}>Sign In</button>}
      </form>
    </div>
  );
};

export default LoginForm;
