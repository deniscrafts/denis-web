import { FaAngleDown } from 'react-icons/fa'
const SmallDownArrow = ({headTo}: {headTo: string}) => {

    const scrollToSection = () => {
        const element = document.getElementById(headTo);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className=" w-full flex justify-center mt-30 mb-40 animate-bounce text-[rgba(var(--branding),1)] ">
            <div className="bg-[rgba(var(--branding),1)] rounded-full p-2 hover:scale-110 transition-transform cursor-pointer" onClick={scrollToSection}>
                <FaAngleDown color="white" />
            </div>
        </div>
        
    )
}
export default SmallDownArrow