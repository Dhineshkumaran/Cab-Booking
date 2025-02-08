import { data } from 'react-router-dom';
import Car from '../assets/undraw_vintage_q09n.svg';
import { useEffect } from 'react';

function Home(){
    useEffect(()=>{
        async function getUsers() {
            const response = await fetch(import.meta.env.VITE_SUPABASE_URL, {
                headers: {
                    "apiKey": import.meta.env.VITE_SUPABASE_ANON_KEY
                }
            });
            const data = await response.json();
            console.log(data);
        }
        getUsers();
    }, [])
    return(
        <div className='w-[100vw] flex p-20'>
            <div className='w-1/2'>
                <h1 className='text-4xl font-bold'>The only <span className='text-green-700'>CAB</span> booking app you need!</h1>
                <p className='pt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='w-1/2'>
                <img src={Car}></img>
            </div>
        </div>
    );
}

export default Home;