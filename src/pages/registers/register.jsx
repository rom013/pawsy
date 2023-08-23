import { useState, useEffect } from "react";
import RegisterForm from "../../components/forms/Register";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderLogin } from "../../components/header/Header";
import GoBack from "../../components/buttons/GoBack";

export default function Register() {

    const [typeUser, setTypeUSer] = useState()
    const location = useLocation()
    const navigate = useNavigate()


    useEffect(() => {
        if (!location.state) {
            navigate("/acesso")
        }
        else {
            const { slug } = location.state
            setTypeUSer(slug)
        }

        document.body.classList.add("bg-primary")
        return () => { // função de limpeza, é executada quando o componente é desmontado
            document.body.classList.remove("bg-primary")
        }
    }, [])

    const style = {
        position: "relative"
    }

    return (
        <>
            <main className="h-screen">
                <HeaderLogin style={style} />
                <div
                    className="max-w-7xl mx-auto flex flex-col justify-center "
                >
                    <GoBack />
                    <RegisterForm userType={typeUser} />
                </div>
            </main>
            <div className="h-screen w-1/2 bg-banner bg-cover fixed right-0 top-0 -z-10">
                <div className="bg-secundary/50 w-1/2 p-6 rounded-lg text-white absolute bottom-20 left-1/2 -translate-x-1/2">
                    <span>Pawsy, a plataforma ideal para o bem-estar dos seus pet</span>
                </div>
            </div>
        </>
        
    )
}
