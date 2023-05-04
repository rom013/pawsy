import { Question, SignOut } from "@phosphor-icons/react"
import Logo from "../img/logo.png"

export function NavbarClient(props){
    const pages = [
        "Inicío",
        "Carteira de vacinação",
        "Agendar consulta",
        "Vét. mais próximo",
        "Bem-estar",
        "Receitas",
    ]


    return(
        <section className="bg-[#22B77E] min-h-screen relative px-6 py-10 flex flex-col justify-between">
            <div className="w-52">
                <img src={Logo} />
            </div>
            <nav className="flex flex-col w-[calc(100%+24px)] gap-4">
                {
                    pages.map((page, index) => {
                        return(
                            <span 
                                className={`relative px-6 py-4 text-white rounded-tl-full rounded-bl-full transition-colors cursor-pointer ${index == props.page && "bg-[#F5F7FB] !text-black f"}`}
                            >
                                {page}
                            </span>
                        )
                    })
                }
            </nav>
            <div className="flex justify-between text-white">
                <span>
                    <SignOut size={24} color="#fff"/>
                </span>
                <span>
                    <Question size={24} color="#fff"/>
                </span>
            </div>
        </section>
    )
}

export function NavbarClinic(props){
    const pages = [
        "Inicío",
        "Agenda",
        "Marketing",
        "Pacientes",
        "Perfil",
    ]


    return(
        <section className="bg-[#22B77E] min-h-screen relative px-6 py-10 flex flex-col justify-between">
            <div className="w-52">
                <img src={Logo} />
            </div>
            <nav className="flex flex-col w-[calc(100%+24px)] gap-4">
                {
                    pages.map((page, index) => {
                        return(
                            <span 
                                className={`relative px-6 py-4 text-white rounded-tl-full rounded-bl-full transition-colors cursor-pointer ${index == props.page && "bg-[#F5F7FB] !text-black f"}`}
                            >
                                {page}
                            </span>
                        )
                    })
                }
            </nav>
            <div className="flex justify-between text-white">
                <span>
                    <SignOut size={24} color="#fff"/>
                </span>
                <span>
                    <Question size={24} color="#fff"/>
                </span>
            </div>
        </section>
    )
}