import Link from 'next/link';
import React from 'react';


const Login: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://i.pinimg.com/originals/20/25/e4/2025e4a2f153284114061de0c5da9ff3.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
            </a>
            
            <p className="mt-4 leading-relaxed text-white/90"></p>
          </div>
        </section>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
          <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <span className="text-center mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">Welcome to Cosplay.In</span>
          </a>
        </Link>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                  and
                  <a href="#" className="text-gray-700 underline"> privacy policy</a>.
                </p>
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Login
                </button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  No account?
                  <a href="register.html" className="text-gray-700 underline"> Sign up</a>.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;