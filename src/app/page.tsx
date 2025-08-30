import Header from "./topo/header";
import Image from "next/image";
import quarto1 from './img/quarto1.avif'
import quarto2 from './img/quarto2.png'
import quarto3 from './img/quarto3.png'
import quarto4 from './img/quarto4.jpg'
import quarto5 from './img/quarto5.jpg'
import quarto6 from './img/quarto6.png'
export default function Home() {
  return (
    <div className="">
          <Header/>

          <section className="flex flex-col  justify-center">
             <h1 className="lg:text-4xl text-[26px] flex justify-center mb-6  items-end h-[100px]">Conheça Nossas acomodações</h1>

             <div className=" gird grid-cols-1 lg:grid  lg:pl-10 lg:grid-cols-3 items-center w-full  lg:h-[600px] text-center">
                <div className="mb-10">
                    <Image src={quarto1} width={400} alt="quarto1"/>
                </div>
                <div className="mb-10">
                    <Image src={quarto2} width={400} alt="quarto1"/>
                </div>
                <div className="mb-10">
                    <Image src={quarto3} width={400} alt="quarto1"/>
                </div>
                <div className="mb-10">
                    <Image src={quarto4} width={400} alt="quarto1"/>
                </div>
                <div className="mb-10">
                    <Image src={quarto5} width={400} alt="quarto1"/>
                </div>
                <div className="mb-10">
                    <Image src={quarto6} width={400} alt="quarto1"/>
                </div>
             </div>

          </section>
    </div>
  );
}
