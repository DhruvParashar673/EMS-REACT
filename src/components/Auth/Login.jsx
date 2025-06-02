import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    // Handle form submission logic here
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2  p-20 border-emerald-600 rounded-xl ">
        <div className="flex items-center justify-center mb-10">
          <h1 className="text-3xl font-semibold bg-black-400 text-center inline-block">
            Login Here
          </h1>
        </div>

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center  justify-center p-4"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-3 text-xl placeholder:text-gray-500"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full mt-3 py-3 px-3 text-xl placeholder:text-gray-500"
            type="password"
            placeholder="Enter your Password"
          />
          <button
            type="submit"
            className="text-white outline-none border-none    bg-emerald-600 rounded-full mt-5 py-3 px-6 text-xl onclick:bg-emerald-700 hover:bg-emerald-700 transition-all duration-300 active:scale-95"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
