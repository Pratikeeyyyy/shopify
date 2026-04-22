import React, { useEffect } from "react";

export default function Login() {
  
 
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4 font-sans text-white">
      <div className="w-full max-w-5xl bg-ter rounded-lg overflow-hidden flex flex-col md:flex-row border border-bordercolor shadow-2xl">
        <div
          className="md:w-1/2 relative min-h-[400px] md:min-h-[600px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/image/Product Display Logic_ Curated Float.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-12 flex flex-col justify-between">
            <div>
              <span className="text-pri font-bold tracking-widest text-sm uppercase">
                The Atelier
              </span>
              <h1 className="text-5xl font-bold mt-4 leading-tight">
                Enter the <br />
                <span className="text-sec">Luminescent</span> <br />
                Monolith.
              </h1>
              <p className="text-muted mt-6 max-w-xs leading-relaxed"  >
                Curate your digital identity within our bespoke gallery of
                exclusive collections.
              </p>
              <div className="flex gap-4 mt-4 text-[10px]  text-muted font-semibold uppercase">
                <span>Sustainability</span>
                <span className="opacity-30">/</span>
                <span>Craftsmanship</span>
                <div className="bg-soft text-muted mt-[50px]   ml-[20px]">
                  <span className="  text-[10px] text-sec font-sans uppercase ">
                    New Season
                  </span>
                  <p className=" text-[16px] mt-1 tracking-wider uppercase">
                    Archive Series 01
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="flex gap-8 mb-10 border-b border-bordercolor">
            <button className="pb-4 text-white font-medium border-b-2 border-pri">
              Login
            </button>
            <button className="pb-4 text-muted hover:text-white transition-colors">
              Sign Up
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-3 bg-soft border border-bordercolor py-3 rounded hover:bg-white/5 transition-all">
              <span className="text-[10px] tracking-tighter font-bold uppercase">
                Google
              </span>
              <span className="text-[8px] opacity-60">GOOGLE</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-soft border border-bordercolor py-3 rounded hover:bg-white/5 transition-all">
              <span className="text-[10px] font-bold uppercase"> Apple</span>
              <span className="text-[8px] opacity-60">APPLE</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-8">
            <div className="w-full border-t border-bordercolor"></div>
            <span className="absolute bg-ter px-4 text-[10px] text-muted uppercase tracking-widest">
              Or continue with
            </span>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] text-muted uppercase tracking-widest block">
                Email Address
              </label>
              <input className="w-full bg-transparent border-b border-bordercolor py-2 outline-none focus:border-pri transition-colors placeholder:text-soft text-sm" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] text-muted uppercase tracking-widest block">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[10px] text-pri uppercase tracking-widest"
                >
                  Forgot?
                </button>
              </div>
              <input
                type="password"
                className="w-full bg-transparent border-b border-bordercolor py-2 outline-none focus:border-pri transition-colors placeholder:text-soft"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="keep"
                className="accent-pri h-4 w-4 rounded bg-dark border-bordercolor"
              />
              <label htmlFor="keep" className="text-xs text-muted">
                Keep me signed in for 30 days
              </label>
            </div>
            <button className="w-full bg-pri text-dark font-bold py-4 rounded-md mt-4 shadow-[0_0_20px_rgba(163,166,255,0.3)] hover:brightness-110 transition-all uppercase tracking-widest text-sm">
              Access Gallery
            </button>
          </form>

          <p className="text-[10px] text-muted text-center mt-8">
            By entering, you agree to our
            <span className="underline cursor-pointer text-white">
              Terms of Service
            </span>
          </p>
        </div>
      </div>

      <footer className="w-full max-w-5xl mt-8 flex justify-between items-center text-[10px] text-muted uppercase tracking-widest px-2">
        <p>© 2024 The Digital Atelier. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
