
import { paquetesData } from "@/data/paquetesData"
import PaqueteCard from "../ui/PaqueteCard"

const PaquetesSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-5 xl:px-50">
            {
                paquetesData.map(item => (
                    <PaqueteCard key={item.id} paquete={item} />
                ))
            }
        </section>
    )
}
export default PaquetesSection