import { useNavigate } from "react-router-dom";
import apiClient from "./api";
// name: "Pratik",
//   email: "pratiktest1@gmail.com",
//   password: "Pratik@123"
export default function Register() {
  const navigate = useNavigate();

 async function handleRegister(e) {
  e.preventDefault();

  const name = e.target.username.value;
  const email = e.target.useremail.value;
  const password = e.target.userpassword.value;

  try {
    const res = await apiClient.post("/auth/signup", {
      name,     
      email,     
      password, 
    });

    console.log("SUCCESS:", res.data);

    alert("Registered successfully");
    navigate("/login");

  } catch (err) {
    console.log("FULL ERROR:", err.response?.data);

    // for backend message 
    alert(err.response?.data?.error?.message || "Register failed");
  }
}
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4 font-sans text-white">

      <div className="w-full max-w-5xl bg-ter rounded-lg overflow-hidden flex flex-col md:flex-row border border-bordercolor shadow-2xl">

        {/* LEFT */}
        <div className="md:w-1/2 relative min-h-[400px] md:min-h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/image/Product Display Logic_ Curated Float.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-12 flex flex-col justify-between">
            <div>
              <span className="text-pri font-bold tracking-widest text-sm uppercase">
                The Atelier
              </span>
              <h1 className="text-5xl font-bold mt-4 leading-tight">
                Join the <br />
                <span className="text-sec">Exclusive</span> <br />
                Gallery.
              </h1>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">

          <form className="space-y-6" onSubmit={handleRegister}>

            {/* USERNAME */}
            <div>
              <label className="text-[10px] text-muted uppercase">Username</label>
              <input
                name="username"
                className="w-full bg-transparent border-b border-bordercolor py-2 outline-none focus:border-pri"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-[10px] text-muted uppercase">Email</label>
              <input
                name="useremail"
                className="w-full bg-transparent border-b border-bordercolor py-2 outline-none focus:border-pri"
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-[10px] text-muted uppercase">Password</label>
              <input
                type="password"
                name="userpassword"
                className="w-full bg-transparent border-b border-bordercolor py-2 outline-none focus:border-pri"
                required
              />
            </div>

            <button className="w-full bg-pri text-dark font-bold py-4 rounded-md mt-4 hover:brightness-110 uppercase text-sm">
              Create Account
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}