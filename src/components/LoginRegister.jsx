import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { addUserAPI } from "../service/allAPI"; // ✅ import API

function LoginRegister({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) {
      setUsername("");
      setPassword("");
      setRole("user");
      setRegisterData({ name: "", email: "", password: "" });
    }
  }, [isOpen]);

  const handleLogin = (e) => {
    e.preventDefault();
    const r = role.toLowerCase();

    if (r === "admin" && username === "admin" && password === "admin123") {
      setUsername("");
      setPassword("");
      setRole("user");
      onClose();
      navigate("/admin/dashboard");
      return;
    }

    if (r === "user") {
      setUsername("");
      setPassword("");
      setRole("user");
      onClose();
      navigate("/");
      return;
    }

    alert("Invalid credentials");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!registerData.name || !registerData.email || !registerData.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const result = await addUserAPI(registerData);
      if (result.status === 201) {
        alert("User registered successfully!");
        setRegisterData({ name: "", email: "", password: "" });
        setActiveTab("login");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white/70 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#2dd4bf] w-[400px] rounded-lg shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-3 font-semibold ${
              activeTab === "login"
                ? "bg-[#2dd4bf] text-white"
                : "bg-[#1aa6a5] text-gray-200"
            }`}
          >
            LOGIN
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 py-3 font-semibold ${
              activeTab === "register"
                ? "bg-[#2dd4bf] text-white"
                : "bg-[#1aa6a5] text-gray-200"
            }`}
          >
            REGISTER
          </button>
        </div>

        <div className="bg-[#2dd4bf] p-8 text-white">
          {activeTab === "login" ? (
            <>
              <h2 className="text-xl font-bold mb-3">Sign In Here!</h2>
              <p className="text-sm mb-6">
                Log into your account in just a few simple steps.
              </p>

              <div className="space-y-4">
                <div className="flex items-center bg-white/20 px-3 py-2 rounded">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  <input
                    type="text"
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-transparent outline-none flex-1 text-white placeholder-white"
                  />
                </div>
                <div className="flex items-center bg-white/20 px-3 py-2 rounded">
                  <FontAwesomeIcon icon={faLock} className="mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent outline-none flex-1 text-white placeholder-white"
                  />
                </div>

                <div className="flex items-center gap-2 text-sm mt-2">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>

                <div className="flex items-center bg-white/20 px-3 py-2 rounded mt-2">
                  <label className="mr-2 text-white text-sm">Login as:</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="bg-transparent border border-white/30 text-white rounded px-2 py-1 text-sm outline-none"
                  >
                    <option value="user" className="text-black">
                      User
                    </option>
                    <option value="admin" className="text-black">
                      Admin
                    </option>
                  </select>
                </div>

                <button
                  onClick={handleLogin}
                  className="w-full bg-white text-black py-2 rounded mt-4 hover:bg-gray-100 transition"
                >
                  SIGN IN
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-3">Create Account</h2>
              <p className="text-sm mb-6">
                Register your account in just a few steps.
              </p>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="flex items-center bg-white/20 px-3 py-2 rounded">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  <input
                    type="text"
                    placeholder="User Name"
                    value={registerData.name}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        name: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none flex-1 text-white placeholder-white"
                  />
                </div>
                <div className="flex items-center bg-white/20 px-3 py-2 rounded">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none flex-1 text-white placeholder-white"
                  />
                </div>
                <div className="flex items-center bg-white/20 px-3 py-2 rounded">
                  <FontAwesomeIcon icon={faLock} className="mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none flex-1 text-white placeholder-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-[#2dd4bf] py-2 font-semibold rounded mt-4 hover:bg-gray-100 transition"
                >
                  REGISTER
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
