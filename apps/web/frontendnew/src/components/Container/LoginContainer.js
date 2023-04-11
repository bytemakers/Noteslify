import React from "react";
import { login } from "../../services/ApiMethods";
import * as Yup from "yup";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
}
const LoginContainer = () => {

 

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        'Email is required'
      ),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .max(50, "Maximum 50 characters")
      .required(
        'Password is required'
      ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading()
      try {
        authenticateUser(setStatus, setSubmitting, values)
      } catch (err) {
        console.log(err)
        setStatus("Oops something went wrong! Please try refreshing the page")
      }
    },
  });



  async function authenticateUser(setStatus, setSubmitting, values) {
    let response = await login(values);
    console.log(response)
    if (response.data.statusCode === 200) {
      // response is successfull
    } else {
      // response is failed

    }


  }

  const enableLoading = () => {
    // setLoading(true)
  }

  const disableLoading = () => {
    // setLoading(false)
  }


  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="relative z-10 flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="md:max-w-lg mx-auto pt-16 md:pb-32">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 mb-32 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">Never forget a brilliant idea Sign In now!</h2>
                    <h3 className="mb-9 text-xl font-bold font-heading leading-normal">Why should you join us?</h3>
                    <ul className="md:max-w-xs">
                      <li className="mb-5 flex flex-wrap">
                        <svg className="mr-2" width="25" height="26" viewbox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z" fill="#2463EB"></path>
                        </svg>
                        <span className="flex-1 font-medium leading-relaxed">Stay productive and efficient with intuitive features that streamline your workflow.</span>
                      </li>
                      <li className="mb-5 flex flex-wrap">
                        <svg className="mr-2" width="25" height="26" viewbox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z" fill="#2463EB"></path>
                        </svg>
                        <span className="flex-1 font-medium leading-relaxed">Receive prompt, professional support from 24/7 dedicated customer service team.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">
              <form className="md:max-w-lg mx-auto"  onSubmit={formik.handleSubmit}>
                <label className="block mb-4">
                  <p className="mb-2 dark:text-white text-gray-900 font-semibold leading-normal">Username *</p>
                  <input className="dark:bg-gray-800 dark:border-gray-900 px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 dark:focus:ring-blue-800" id="signInInput1-1" type="text" placeholder="Enter username" />
                </label>
                <label className="block mb-5">
                  <p className="mb-2 dark:text-white text-gray-900 font-semibold leading-normal">Password *</p>
                  <input className="dark:bg-gray-800 dark:border-gray-900 px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 dark:focus:ring-blue-800" id="signInInput1-2" type="password" placeholder="********" />
                </label>
                <div className="flex flex-wrap justify-between -m-2 mb-4">
                  <div className="w-auto p-2">
                    <div className="flex items-center">
                      <input className="w-4 h-4" id="default-checkbox" type="checkbox" value="" />
                      <label className="ml-2 text-sm dark:text-white text-gray-900 font-medium" for="default-checkbox">Remember Me</label>
                    </div>
                  </div>
                  <div className="w-auto p-2"><a className="text-sm text-blue-600 hover:text-blue-700 font-medium" href="/">Forgot Password?</a></div>
                </div>
                <button className="mb-9 py-4 px-9 w-full text-white font-semibold border border-blue-700 rounded-xl shadow-4xl focus:ring focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 transition ease-in-out duration-200" type="button" disabled={formik.isSubmitting}>Sign In</button>
                <p className="mb-5 text-sm text-gray-500 font-medium text-center">Or continue with</p>
                <div className="flex flex-wrap justify-center -m-2">
                  <div className="w-auto p-2">
                    <button className="flex items-center p-4 dark:border-gray-900 dark:hover:bg-gray-800 hover:bg-gray-100 border rounded-lg transition ease-in-out duration-200">
                      <span className="font-semibold leading-normal">Sign in with Google</span>
                    </button>
                  </div>
                  <div className="w-auto p-2">
                    <button className="flex items-center p-4 dark:border-gray-900 dark:hover:bg-gray-800 hover:bg-gray-100 border rounded-lg transition ease-in-out duration-200">
                      <span className="font-semibold leading-normal">Sign in with Github</span>
                    </button>
                  </div>
                </div>
                <p className="my-5 text-gray-600 dark:text-gray-400 font-medium text-center">Don't have an account? <a href="/signup" className="dark:text-gray-200 text-gray-800 hover:underline">Signup here</a></p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default LoginContainer;
