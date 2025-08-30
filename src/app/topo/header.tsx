'use client'
import Logo from './img/logo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Header(){
    return(
        <header className="bg-[url(/img/banner.png)] bg-cover bg-center h-[400px]
        flex flex-col  justify-center items-center text-white">
           <Image src = {Logo} width={200}  alt = 'logo da pousada ubatuba'/>
           <h1 className='md:text-4xl text-2xl '>Pousada Ubatuba</h1>
           <p className='font-bold text-[14px]'>Av. Leovigildo Dias Vieira, Itaguá, Ubatuba - SP, 11688-600</p>

           <nav className='bg-white lg:w-[800px] text-black border-2 border-black border-solid absolute top-[350px] w-[400px] h-[100px]'>
             <ul className='lg:w-[800px] w-[400px] h-[100px] flex justify-around items-center lg:text-[18px] font-bold'>
                <li>
                    <Link href="">Página Inicial</Link>
                    
                </li>
             
                <li>
                    <Link href="">Reservas</Link>
                    
                </li>
             
                <li>
                    <Link href="">Localização</Link>
                    
                </li>
            </ul>
           </nav>
             
        </header>
    )
}