import { CaretLeft } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"


export default function GoBack() {
    const navigation = useNavigate()
    return (
        <a
            className="select-none flex items-center text-lg text-white cursor-pointer my-5 group w-fit"
            onClick={() => navigation(-1)}
        >
            <CaretLeft className="group-hover:text-white" />
            voltar
        </a>
    )
}