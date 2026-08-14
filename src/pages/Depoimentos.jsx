import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { FaStar, FaCommentDots } from 'react-icons/fa';

export default function App() {
    const depoimentos = [
        {
            id: 1,
            nome: 'Juliana Martins',
            estrelas: 5,
            comentario:
                '“O café da WeCoffee é simplesmente incrível! O sabor é único e dá pra sentir o cuidado em cada detalhe. Meu novo momento favorito do dia!”',
        },
        {
            id: 2,
            nome: 'Rafael Souza',
            estrelas: 5,
            comentario:
                '“A qualidade dos produtos é excepcional e o atendimento também! É ótimo saber que estou consumindo algo sustentável e apoiando produtores locais.”',
        },
        {
            id: 3,
            nome: 'Camila Oliveira',
            estrelas: 5,
            comentario:
                '“Ambiente acolhedor, café delicioso e aquele cheirinho que faz a gente querer ficar mais um pouco. Recomendo de olhos fechados!”',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#FAF3E0] text-[#492F1E]">
            <Header />

            <main className="flex-1 w-full pl-10 pr-10 py-10">
                {/* Seção Depoimentos */}
                <section className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#8C532B] p-2.5 rounded-xl text-white flex items-center justify-center">
                            <FaCommentDots className="w-6 h-6" />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight">Depoimentos</h1>
                    </div>

                    <p className="text-[#492F1E] text-lg max-w-xl leading-relaxed mt-3 font-normal">
                        Nada melhor do que ouvir de quem já viveu a experiência WeCoffee. Veja o que
                        nossos clientes dizem sobre nós!
                    </p>
                </section>

                {/* Lista de Depoimentos (Apenas texto) */}
                <section className="flex flex-col gap-5 my-6 max-w-3xl">
                    {depoimentos.map((item) => (
                        <div
                            key={item.id}
                            className="border border-[#E5D7C5] rounded-2xl p-6 bg-[#FAF3E0] flex flex-col gap-3">
                            <div>
                                <h3 className="text-xl font-bold text-[#492F1E]">{item.nome}</h3>
                                <div className="flex gap-1 text-[#8C532B] mt-1">
                                    {[...Array(item.estrelas)].map((_, i) => (
                                        <FaStar key={i} className="w-4 h-4" />
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm md:text-base text-[#492F1E]/90 leading-relaxed italic">
                                {item.comentario}
                            </p>
                        </div>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
}
