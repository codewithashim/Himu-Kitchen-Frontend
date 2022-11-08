import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const UseFirebase = () => {
  const {
    googleLoginProvider,
    facebookLoginProvider,
    setError,
    setLoading,
    signInUser,
    updateUserDetails,
    createUser,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  // =================== google login  ====================
  const googleProvider = new GoogleAuthProvider();
  const handelGoogleLogin = (event) => {
    event.preventDefault();
    googleLoginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Succesfully Login!", "You clicked the button!", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // =================== Facebook login  ==================
  const facebookProvider = new FacebookAuthProvider();
  const handelFacebookLogin = (event) => {
    event.preventDefault();
    facebookLoginProvider(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Succesfully Login!", "You clicked the button!", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // ==================== Email Sign Up ===================

  const handelEmailSignUp = (event) => {
    event.preventDefault();
    console.log("Email Sign Up");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.fullname.value;
    const photo = form.photoURL.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handelUpdateUseerDetails(name, photo);
        Swal.fire("Succesfully Sign Up!", "You clicked the button!", "success");
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  const handelUpdateUseerDetails = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserDetails(profile)
      .then((result) => {
        console.log(result);
        // Swal.fire("Succesfully Update!", "You clicked the button!", "success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  // ==================== Email Sign In ===================

  const handelEmailSignIn = (event) => {
    event.preventDefault();
    console.log("Email Sign In");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        fetch("https://car-rent-server-codewithashim.vercel.app/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });

        form.reset();
        Swal.fire("Succesfully Sign In!", "You clicked the button!", "success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //================================ get jwt token ================================

  //=======================================================

  return {
    handelGoogleLogin,
    handelFacebookLogin,
    handelEmailSignIn,
    handelEmailSignUp,
  };
};

export default UseFirebase;
