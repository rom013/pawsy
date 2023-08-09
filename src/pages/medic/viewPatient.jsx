import { useLocation } from "react-router-dom";
import { HeaderMedic } from "../../components/HeaderMedic";
import dono from "../../img/profilePerson.jpeg"
import { GenderMale } from "@phosphor-icons/react";

export default function ViewPatient(){
    const location = useLocation()
    const { pet } = location.state

    return(
        <>
            <header>
                <HeaderMedic/>
            </header>
            <main className="max-w-7xl mx-auto mt-8 bg-[#F5F7FB] flex justify-between">
                <section className="bg-white p-6 rounded-xl w-3/4 flex justify-between"> 
                    <div className="flex gap-6 ">
                        <div className="flex flex-col items-center">
                            <img src={pet.img} className="w-60 h-60 rounded-full border-4 border-[#1BA8C4]"/>
                            <label className="mt-4 p-1 w-20 rounded-xl bg-[#1BA8C4] text-white text-center text-sm">#{pet.idPet}</label>
                            <div className="flex flex-col mt-6">
                                <h1 className="font-bold text-2xl mb-4">
                                    Observações
                                </h1>
                                <h2 className="font-semibold text-base">Alergia a medicamentos: {pet.alergia}</h2>
                                <h3 className="font-semibold text-base">Castrado(a): {pet.castrado}</h3>
                                <h4 className="font-semibold text-base">Comportamento: {pet.comportamento}</h4>
                                <h5 className="font-semibold text-base">Tratamento: {pet.tratamento}</h5>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="uppercase font-bold text-4xl flex items-center gap-2 mb-4">{pet.namePet} <GenderMale color="#1BA8C4"/></h1>
                            <h2 className="font-semibold text-base">Idade: {pet.idade}</h2>
                            <h3 className="font-semibold text-base">Raça: {pet.raca}</h3>
                            <h4 className="font-semibold text-base">Bem-estar: {pet.bemestar}</h4>
                            <h5 className="font-semibold text-base">Peso: {pet.peso}</h5>
                            <h6 className="font-semibold text-base">Altura: {pet.altura}</h6>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4 h-full justify-center">
                        <button className="rounded-md px-6 text-center text-white bg-[#22937E] p-1">
                            Receitas médicas
                        </button>
                        <button className="rounded-md px-6 text-center text-white bg-[#22937E] p-1">
                            Vacinas e vermifugação
                        </button>
                    </div>
                </section>
                <section className="bg-white p-6 rounded-xl flex flex-col max-h-96"> 
                    <div>
                        <img src={dono} className="w-36 h-36 rounded-full border-4 border-primary"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-center mt-5 text-lg font-bold">
                            {pet.nameDono}
                        </p>
                    </div>
                    <div className="flex gap-4 items-center mt-5">
                        <img src={pet.img} className="w-10 h-10 rounded-full border-2 border-primary"/>
                        <h2 className="font-semibold text-base">{pet.namePet}</h2>
                    </div>
                </section>
            </main>
        </>
    )
}