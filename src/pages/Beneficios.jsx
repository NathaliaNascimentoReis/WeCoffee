import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { FaStar, FaCoffee, FaLeaf } from 'react-icons/fa';
import { GiCoffeeBeans } from 'react-icons/gi';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-[#FAF3E0] text-[#492F1E]">
            <Header />

            <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
                <section className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#8C532B] p-3 rounded-xl text-white flex items-center justify-center">
                            <FaStar className="w-7 h-7" />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight">Benefícios</h1>
                    </div>

                    <p className="text-[#492F1E] text-lg md:text-xl max-w-xl leading-relaxed mt-4 font-normal">
                        Mais que café, uma experiência que faz bem para você, para sua rotina e para
                        o mundo.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="border border-[#E5D7C5] rounded-2xl p-8 flex flex-col items-center text-center bg-[#FAF3E0]">
                        <div className="bg-[#938C61] w-28 h-28 rounded-full flex items-center justify-center mb-6">
                            <GiCoffeeBeans className="text-white text-5xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#492F1E] mb-2 max-w-[180px]">
                            Ingredientes Selecionados
                        </h3>
                        <div className="w-8 h-[2px] bg-[#938C61] my-3"></div>
                        <p className="text-sm text-[#492F1E]/90 leading-relaxed mt-2 max-w-[240px]">
                            Utilizamos apenas grãos de alta qualidade, de origem responsável e
                            torrefação artesanal para garantir o melhor sabor em cada xícara.
                        </p>
                    </div>

                    <div className="border border-[#E5D7C5] rounded-2xl p-8 flex flex-col items-center text-center bg-[#FAF3E0]">
                        <div className="bg-[#7C4828] w-28 h-28 rounded-full flex items-center justify-center mb-6">
                            <FaCoffee className="text-white text-4xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#492F1E] mb-2 max-w-[180px]">
                            Sabor que Acolhe
                        </h3>
                        <div className="w-8 h-[2px] bg-[#7C4828] my-3"></div>
                        <p className="text-sm text-[#492F1E]/90 leading-relaxed mt-2 max-w-[240px]">
                            Nossas receitas são feitas com carinho para proporcionar momentos de
                            conforto e bem-estar no seu dia.
                        </p>
                    </div>

                    <div className="border border-[#E5D7C5] rounded-2xl p-8 flex flex-col items-center text-center bg-[#FAF3E0]">
                        <div className="bg-[#938C61] w-28 h-28 rounded-full flex items-center justify-center mb-6">
                            <FaLeaf className="text-white text-4xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#492F1E] mb-2 max-w-[200px]">
                            Sustentável & Consciente
                        </h3>
                        <div className="w-8 h-[2px] bg-[#938C61] my-3"></div>
                        <p className="text-sm text-[#492F1E]/90 leading-relaxed mt-2 max-w-[240px]">
                            Apoiamos produtores locais e práticas sustentáveis que respeitam o meio
                            ambiente e valorizam as pessoas.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
