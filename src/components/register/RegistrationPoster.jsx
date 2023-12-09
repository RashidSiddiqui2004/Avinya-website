
import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";

function RegistrationPoster() {

    const [email, setEmail] = useState('Enter Your Email');

    const updateEmailField = (e) => {
        if (email == 'Enter Your Email') {
            setEmail('');
        }

        else {
            setEmail(e);
        }
    }

    return (
        <div class="bg-gradient-to-r w-[115%] md:w-[100%]
         from-green-300 to-blue-400 text-white
        py-16 flex flex-row rounded-lg">

            <div class="container mx-auto text-center w-[50%] ml-6 md:w-[70%]">
                <h2 class="text-4xl font-bold mb-4">Register with
                    <span className='text-red-400'> Avinya</span>, Today!</h2>

                <p class="text-lg mb-8 px-1 md:px-20 text-slate-800">Unlock exclusive benefits by registering with us.
                    Join students from all over India in tech events, a 30-hour hackathon, and more. Don't miss out on the excitement!</p>

                <form class="max-w-sm mx-auto">
                    <div class="flex items-center border-b-2 border-white py-2">
                        <MdEmail className='text-3xl' />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => { updateEmailField(e.target.value) }}
                            className="appearance-none bg-transparent 
                            border-none w-full text-lg text-white
                            mr-3 py-1 px-2 leading-tight outline-none italic"
                        />
                        <button
                            type="submit"
                            class="flex-shrink-0 bg-orange-400 text-xl
                            text-slate-800 hover:bg-green-400 hover:border-green-400 py-1 px-2 rounded focus:outline-none"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>

            <div className='w-[50%] md:w-[25%] mt-[15%] px-2 sm:mt-0 sm:px-0'>
                <img src="/discussionDS.png" alt="" className='w-[80%]' />
            </div>
        </div>

    )
}

export default RegistrationPoster