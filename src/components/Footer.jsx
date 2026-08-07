import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Header() {
    return (
        <footer className="bg-[#91553D] text-[#FFF4DF] flex flex-col items-center justify-between py-10">
             <section className="flex flex-row items-start gap-20">
                <div className="flex flex-col items-start gap-2 max-w-xl">
                    <h1 className="text-xl font-bold">WECOFFEE</h1>
                    <h2 className="text-lg font-medium">
                        Feito com carinho para levar sabor, acolhimento e propósito para o seu dia!
                    </h2>
                </div>

                <div>
                    <h3 className="text-base font-bold">Data Privacy Guidellness</h3>
                    <h3 className="text-base font-bold">Product Exchange Policy</h3>
                    <h3 className="text-base font-bold">Privacy Options</h3>
                    <h3 className="text-base font-bold">Terms of Use</h3>
                </div>
            </section>

            <section className="flex flex-row gap-5 mt-5">
                <FaInstagram className="size-9" />
                <FaTiktok className="size-8" />
                <FaFacebookF className="size-8" />
            </section>

            <div className="flex flex-col items-center justify-center gap-2 mt-10">
                <h4 className="text-sm">@ 2026 WECOFFEE. Todos os direitos reservados.</h4>
            </div>
        </footer>
    );
}
