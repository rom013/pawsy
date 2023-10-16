import { useLocation, useNavigate } from "react-router-dom"
import { HeaderMedic } from "../../components/HeaderMedic"
import { ArrowUUpLeft, GenderFemale, GenderMale } from "@phosphor-icons/react";
import CardPatients from "../../components/componentsMedic/CardPatients/CardPatients";
import gato from "../../img/gato.jpg";
import axios from "axios";
import { props, useEffect, useState } from "react";
import dayjs from "dayjs" 
import Cookies from "js-cookie";

export default function PatientsForMedic(){
    const navigate = useNavigate()
    const location = useLocation()
    const { informacoes } = location.state
    const [clinicsPet, setClinicsPet] = useState([]);

    useEffect(() => {
        const tokenMedic = Cookies.get("jwtTokenMedic")
        axios.get(`${import.meta.env.VITE_URL}/clinicsPet`, {
            headers: {
              Authorization: `Bearer ${tokenMedic}`
            }
          }).then(res =>{
            setClinicsPet(res.data.results)
          })
    }, []);

    

    const imgClinic = informacoes.img;
    const nameClinic = informacoes.nameClinic;

    // const petsInfo = [
    //     "Julinho", "Rodrigo Goes",
    //     "Balestrin", "Renato Cariani",
    //     "Tom", "Thomas Shelby",
    //     514, 884, 654
    // ]

    // const health = [
    // /*0 1 2*/    "3 anos", "4 anos", "5 anos",
    // /*3 4 5*/     "Spitz Alemão", "Sem raça definida", "Dobberman",
    // /*6 7 8*/     "Excelente", "Médio", "Ruim",
    // /*9 10 11*/   4, 10, 20,
    // /*12 13 14*/  0.4, 0.6, 0.8,
    // /*15 16 18*/  "Não", "Não", "Não",
    // /*19 20 21*/  "Sim", "Não", "Não",
    // /*22 23 24*/  "Manso", "Manso", "Não-Manso",
    // /*25 26 27*/  "Não", "Sim", "Sim"

    // ]

    return(
        <>
            <header>
                <HeaderMedic/>
            </header>
            <div className="flex">
                <button onClick={() => navigate("/medico")} className="px-96 flex items-center gap-2 -mb-10 mt-5"><ArrowUUpLeft color="#22B77E"/>Voltar</button>
            </div>
            <section className="mt-16 flex justify-center items-center bg-[#F5F7FB]">
                <div className="p-6 bg-white rounded-lg flex flex-col">
                    <div className="flex justify-center">
                        <img 
                            src={`${import.meta.env.VITE_URL}/files/${imgClinic}`} 
                            className="w-44 h-44 rounded-full border-4 border-[#22B77E]"
                        />
                    </div>
                    <h1 className="text-center text-2xl font-semibold mt-4 uppercase">
                        {nameClinic}
                    </h1>
                    <h3 className="text-xl font-semibold mt-4">Pacientes</h3>
                    <div className="flex gap-3 mt-5">
                        <input type="radio" name="gender" id="mal" className="hidden" />
                        <label id="male" htmlFor="mal">Macho <GenderMale color="#8FB5FF" size="24px" /></label>

                        <input type="radio" id="fem" name="gender" className="hidden" />
                        <label id="female" htmlFor="fem">Fêmea <GenderFemale color="#FF8FCB" size="24px" /></label>
                    </div>
                    <div className="flex flex-col">
                    {
                        clinicsPet.map(patients => {
                        return (
                            <CardPatients img={patients.url_img} 
                            namePet={patients.nm_pet} 
                            nameDono={patients.nm_tutor} 
                            idPet={patients.id_pet} 
                            idade={dayjs(patients.dt_nascimento).format("DD/MM/YYYY")} 
                            raca={patients.id_raca} 
                            //bemestar={health[6]} 
                            peso={patients.num_peso} 
                            //altura={health[12]} 
                            //alergia={health[15]} 
                            //castrado={health[19]} 
                            //comportamento={health[22]} 
                            //tratamento={health[25]} 
                            />
                        )
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    )
}