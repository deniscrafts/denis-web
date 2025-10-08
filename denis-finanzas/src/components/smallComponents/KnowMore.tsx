
interface KnowMoreProps {
    headTo: string;
}

const KnowMore: React.FC<KnowMoreProps> = ({ headTo }) => {

    const scrollToSection = () => {
        const element = document.getElementById(headTo);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className=" w-full flex justify-center animate-pulse text-[rgba(var(--branding),1)] ">
            <div className="bg-[rgba(var(--branding),1)] rounded-full p-2 hover:scale-110 transition-transform cursor-pointer" onClick={scrollToSection}>
                <h3 className="text-white">Ver Más</h3>
            </div>
        </div>
        
    )
}
export default KnowMore;