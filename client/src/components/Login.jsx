import { supabase } from '../supabaseClient.js';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Login(){
    const email = useRef("");
    const password = useRef("");
    const navigate = useNavigate();

    async function handleSubmit() {  
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email.current.value,
            password: password.current.value
        })
        if(!error){
            navigate("/");
        }
    }

    return(
        <div className="max-w-4xl max-sm:max-w-lg mx-auto font-[sans-serif] p-6 shadow-md mt-20">
            <form>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Email Id</label>
                        <input name="email" type="text" ref={email} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
                    </div>
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Password</label>
                        <input name="password" type="password" ref={password} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
                    </div>
                </div>
                <div className="mt-8">
                    <button type="button" className="mx-auto block py-3 px-6 text-sm tracking-wider rounded text-white bg-green-700 hover:bg-green-800 focus:outline-none" onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;