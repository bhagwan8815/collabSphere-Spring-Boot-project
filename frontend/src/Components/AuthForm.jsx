import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate , Link } from "react-router-dom";
import { register, login } from "../Redux/Auth/Action";
import toast from "react-hot-toast";

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const { loading, error, user, jwt } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "signup") {
      dispatch(register(formData));
    } else {
      dispatch(login({ email: formData.email, password: formData.password }));
    }
  };

  useEffect(() => {
    if (jwt && user) {  
      if (type === "signup") {
        toast.success("Signup successful! Please log in.");
        navigate("/login");
      } else {
        toast.success("Login successful!");
        navigate("/projectslist");
      }
    }
  }, [jwt, user, navigate, type]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 text-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-20"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        {type === "signup" ? "Sign Up" : "Log In"}
      </h2>

      {type === "signup" && (
        <div className="mb-4">
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
      >
        {loading
          ? type === "signup"
            ? "Signing Up..."
            : "Logging In..."
          : type === "signup"
          ? "Sign Up"
          : "Log In"}
      </button>
     <div className="mt-4">
       {
        type=='signup'?<Link to="/login" className="text-blue-600 font-bold"> <span className="text-white">Already have an account ? </span>Login</Link>:<Link to="/signup" className="text-blue-600 font-bold"><span className="text-white">Don't have an account ? Create Account  </span>Sign Up</Link>
      }
     </div>

      {error && (
        <p className="text-red-500 text-center mt-4">
          {typeof error === "string" ? error : "Something went wrong!"}
        </p>
      )}
    </form>
  );
};

export default AuthForm;







// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { register, login } from "../Redux/Auth/Action";
// import toast from "react-hot-toast";

// const AuthForm = ({ type }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     fullName: "",
//   });

//   const { loading, error, user, jwt } = useSelector((state) => state.auth);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (type === "signup") {
//       dispatch(register(formData));
//     } else {
//       dispatch(login({ email: formData.email, password: formData.password }));
//     }
//   };

//   useEffect(() => {
//     if (jwt && user) {
//       if (type === "signup") {
//         toast.success("Signup successful! Please log in.");
//         navigate("/login");
//       } else {
//         toast.success("Login successful!");
//         navigate("/projectslist");
//       }
//     }
//   }, [jwt, user, navigate, type]);

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-zinc-900 text-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-20"
//     >
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         {type === "signup" ? "Sign Up" : "Log In"}
//       </h2>

//       {type === "signup" && (
//         <div className="mb-4">
//           <label className="block mb-1">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
//           />
//         </div>
//       )}

//       <div className="mb-4">
//         <label className="block mb-1">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block mb-1">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
//       >
//         {loading
//           ? type === "signup"
//             ? "Signing Up..."
//             : "Logging In..."
//           : type === "signup"
//           ? "Sign Up"
//           : "Log In"}
//       </button>

//       {error && (
//         <p className="text-red-500 text-center mt-4">
//           {typeof error === "string" ? error : "Something went wrong!"}
//         </p>
//       )}
//     </form>
//   );
// };

// export default AuthForm;





// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { register, login } from "../Redux/Auth/Action"; 
// const AuthForm = ({ type }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     fullName: "",
//   });

//   const { loading, error, user, jwt } = useSelector((state) => state.auth); // adjust if your reducer name is different

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (type === "signup") {
//       dispatch(register(formData));
//     } else {
//       dispatch(login({ email: formData.email, password: formData.password }));
//     }
//   };

//   useEffect(() => {
//     if (jwt) {
//       if (type === "signup") {
//         navigate("/login");
//       } else {
//         navigate("/projectslist");
//       }
//     }
//   }, [jwt, navigate, type]);

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-zinc-900 text-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-20"
//     >
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         {type === "signup" ? "Sign Up" : "Log In"}
//       </h2>

//       {type === "signup" && (
//         <div className="mb-4">
//           <label className="block mb-1">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
//           />
//         </div>
//       )}

//       <div className="mb-4">
//         <label className="block mb-1">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block mb-1">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
//       >
//         {loading
//           ? type === "signup"
//             ? "Signing Up..."
//             : "Logging In..."
//           : type === "signup"
//           ? "Sign Up"
//           : "Log In"}
//       </button>

//       {error && (
//         <p className="text-red-500 text-center mt-4">
//           {typeof error === "string" ? error : "Something went wrong!"}
//         </p>
//       )}
//     </form>
//   );
// };

// export default AuthForm;









// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthForm = ({ type }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     fullName: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (type === "signup") {
//       localStorage.setItem("user", JSON.stringify(formData));
//       alert("Signup successful!");
//       navigate("/login");
//     } else {
//       const storedUser = JSON.parse(localStorage.getItem("user"));
//       if (
//         storedUser &&
//         storedUser.email === formData.email &&
//         storedUser.password === formData.password
//       ) {
//         alert("Login successful!");
//         navigate("/projectslist");
//       } else {
//         alert("Invalid credentials");
//       }
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-zinc-900 text-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-20"
//     >
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         {type === "signup" ? "Sign Up" : "Log In"}
//       </h2>

//       {type === "signup" && (
//         <div className="mb-4">
//           <label className="block mb-1">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
//           />
//         </div>
//       )}

//       <div className="mb-4">
//         <label className="block mb-1">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block mb-1">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
//       >
//         {type === "signup" ? "Sign Up" : "Log In"}
//       </button>
//     </form>
//   );
// };

// export default AuthForm;

