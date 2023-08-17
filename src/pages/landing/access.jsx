import { HeaderLogin } from "../../components/header/Header"
import { useEffect, useState } from "react"
import ButtonOptionsLogin from "../../components/buttons/ButtonOptionsLogin"

import paw from "../../img/paw.png"
import vet from "../../img/vet.png"
import clinic from "../../img/clinic.png"

export default function Access() {
    const [ pagesLogin, setPagesLogin ] = useState(0)

    function NavigationPages(){
        switch (pagesLogin) {
            case 0:
                return <ButtonOptions alterPage={setPagesLogin} />
            default:
                return <ButtonOptions />
        }
    }

    const style = {
        position: "absolute"
    }

    useEffect(() => {
        document.body.classList.add("bg-primary")

        return () => { // função de limpeza, é executada quando o componente é desmontado
            document.body.classList.remove("bg-primary")
        }
    }, [])

    return (
        <>
            <main className="h-screen">
                <HeaderLogin style={style}/>
                <div
                    className="max-w-7xl mx-auto h-full flex items-center"
                >
                    <NavigationPages />
                </div>
            </main>
            <div className="h-screen w-1/2 bg-banner bg-cover absolute right-0 top-0 -z-10" />
        </>
    )
}


function ButtonOptions({ alterPage }) {
    return (
        <section
            className="min-w-[250px] w-1/2 flex flex-col gap-8"
        >
            <p
                className="text-white text-2xl"
            >
                Crie ou acesse sua conta como:
            </p>
            <div className="flex flex-col gap-6">
                <ButtonOptionsLogin description={"Acesso para tutores de animais de estimação"} title={"Tutor"} imageName={paw} slug={"tutor"} />
                <ButtonOptionsLogin description={"Acesso para clínicas veterinárias"} title={"Clínica"} imageName={clinic} slug={"clinica"} />
                <ButtonOptionsLogin description={"Acesso para profissionais da área veterinária"} title={"Veterinário"} imageName={vet} slug={"veterinario"} />
            </div>
        </section>
    )
}