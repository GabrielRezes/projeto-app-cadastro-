import React, { useState } from 'react';

//img
import Logo from '../assets/img/login/logo.svg';

const Login = () => {

    const [ rememberAccount, setRememberAccount ] = useState(false);
    const [ passwordVisibility, setPasswordVisibility ] = useState(false)

    const handleChangeToggle = () => {
        setRememberAccount(!rememberAccount);
    };

    const handleChangePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    return (
        <div className="flex flex-col
                        items-center justify-around">
            
            {/* logo */}
            <div className="">
                <img src={Logo} alt=''/>
            </div>

            <form className="flex flex-col gap-6
                             w-11/12 h-2/4
                             px-4 py-7 rounded-lg   
                           bg-whiteLight">

                {/* input conta */}
                <div className="flex flex-col
                                w-full gap-1">

                    <label className="font-bold text-blueGray-500"
                           forHtml="email">
                            Email
                    </label>
                    <input className="h-9 px-2 w-full mx-auto shadow-md rounded-md" 
                           name="email" 
                           type="email"/>
                </div>

                {/* input senha */}
                <div className="relative flex flex-col
                                w-full gap-2 ">

                    <label className="font-bold text-blueGray-500"
                           forHtml="password">
                            Senha
                    </label>
                    <input className="h-9 px-2 w-full mx-auto shadow-md rounded-md" 
                           name="password" 
                           type={`${passwordVisibility ? "text" : "password"}`}/>
                           
                    <span className="absolute right-4 bottom-2"
                          onClick={handleChangePasswordVisibility}>
                        {passwordVisibility ?

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blueGray-800" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                            </svg>

                            :

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blueGray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                            </svg>
                        }
                        
                        
                    </span>

                </div>

                {/* toggle salvar conta */}
                <div className="flex justify-between items-center" >
                    <h3 className="font-bold text-blueGray-700">Lembrar minha conta</h3>

                    <div className={`relative h-5 w-10 rounded-xl bg-opacity-90
                                     transform transition ease-in-out duration-1000
                                    ${rememberAccount ? 
                                      "bg-orange-300 bg-opacity-20 ":
                                      "bg-coolGray-300 "
                                     }   
                                   `}>

                        <span className={`absolute right-2 -bottom-0.5 h-6 w-6 rounded-full
                                          transform transition ease-in-out duration-700
                                          ${rememberAccount ? 
                                            "bg-orangeDark translate-x-2":
                                            "bg-whiteLight  border-2 border-coolGray-400 -translate-x-2"
                                           }
                                        `}
                              onClick={handleChangeToggle}>              
                        </span>                    
                    </div>
                </div>

                <button className="h-12 w-2/3 mx-auto mt-10 rounded-md
                                 text-white font-bold tracking-widest
                                   bg-gradient-to-r from-orangeDark to-orangeLight"
                        type="submit">
                            ENTRAR
                </button>

                <div className="font-bold text-orange-400 mx-auto">
                    <a>ESQUECI MINHA SENHA</a>
                </div>



            </form>

        </div>
    )
}

export default Login
