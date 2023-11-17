import { CheckCircle } from "@phosphor-icons/react"

export default function BoxPrice({ price, listBenefits, month=false }){
    return(
        <section
            className="p-6 rounded-lg max-w-xs flex flex-col gap-10 items-center justify-between"
            style={{boxShadow: "0px 0px 7.3px 0px rgba(64, 64, 64, 0.20)"}}
        >
            <div
                className="flex flex-col gap-8"
            >
                <strong
                    className="text-[2rem] font-sora font-bold text-center w-full inline-block"
                >
                    R$ {price} 
                    <span className="text-base">/{month ? "mês" : "ano"}</span>
                </strong>
                <ul
                    className="flex flex-col gap-2"
                >
                    {
                        listBenefits.map(lb => {
                            return(
                                <li
                                    className="flex gap-4 items-center"
                                >
                                    <CheckCircle size={24} color="#22B77E" />
                                    <span>
                                        {lb}
                                    </span> 
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <button 
                type="button"
                className="py-3 rounded-lg bg-green w-full font-lato font-semibold text-white text-lg hover:bg-teal-700 transition-colors duration-300"
            >
                {price == 0 ? "Padrão" : "Teste grátis"}
            </button>
        </section>
    )
}