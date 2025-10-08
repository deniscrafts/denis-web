import { FaXTwitter,FaYoutube } from "react-icons/fa6"

const Footer = () => {
    return(
        <footer className="bg-[rgba(var(--secondaryBackground),1)] text-white py-4 mt-8">
            <div className="w-full flex justify-center mb-4 items-center">
                <a href="https://www.youtube.com/@denisfinanzas" target="_blank" rel="noopener noreferrer" className="mx-4">
                    <FaYoutube
                        className="text-[rgba(var(--tertiaryBranding))]"
                            
                        size={36}
                    />
                </a>
                <a href="https://x.com/denisfinanzas" target="_blank" rel="noopener noreferrer" className="mx-4">
                    <FaXTwitter
                        className="text-[rgba(var(--tertiaryBranding))]"
                            
                        size={28}
                    />
                </a>
            </div>
            <div className="container mx-auto text-center text-[rgba(var(--secondaryText))]">
                <p>&copy; {new Date().getFullYear()} Denis Finanzas 2025. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer