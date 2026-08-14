import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import CafeFeliz from '../assets/cafefeliz.jpg';
import Matcha from '../assets/matcha.jpg';

import { FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';

export default function App() {
    return (
        <container className="flex-row">
            <Header />

            <main className="bg-[#FFF4DF] text-[#492F1E] flex flex-col pl-10 pb-20 pr-10 pt-10">
                <section className="flex flex-row items-start gap-20">
                    <div className="flex flex-row items-center gap-2">
                        <FaShoppingBasket className="size-9" />
                        <h1 className="text-4xl font-bold ">Nosso Produtos</h1>
                    </div>
                </section>

                <section className="flex flex-row gap-10">
                    <section className="flex flex-col">
                        <section className="flex flex-row bg-[#A4976B] my-10 rounded-2xl w-150 h-90">
                            <div className="flex flex-col rounded-2xl pl-10 pt-10 gap-5">
                                <h3 className="text-[#FFF4DF] text-3xl">Café feliz</h3>
                                <p className="text-[#FFF4DF] text-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.{' '}
                                </p>
                            </div>
                            <div className={'pl-10 pr-10 flex justify-center items-center'}>
                                <img
                                    src={CafeFeliz}
                                    alt="Café"
                                    className="w-330 h-55 object-cover rounded-2xl border-6 border-white"
                                />
                            </div>
                        </section>
                        <div>
                            <button className="bg-[#492F1E] text-[#FFF4DF] hover:bg-[#8A5E2D] text-lg font-bold py-3 px-6 rounded-2xl flex flex-row gap-5 items-center">
                                <FaShoppingCart className="size-6" />
                                <h3>Compre Já!</h3>
                            </button>
                        </div>
                    </section>

                    <section>
                        <section className="flex flex-row bg-[#A4976B] my-10 rounded-2xl w-150 h-90">
                            <div className="flex flex-col rounded-2xl pl-10 pt-10 gap-5">
                                <h3 className="text-[#FFF4DF] text-3xl">Café feliz</h3>
                                <p className="text-[#FFF4DF] text-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.{' '}
                                </p>
                            </div>
                            <div className={'pl-10 pr-10 flex justify-center items-center'}>
                                <img
                                    src={Matcha}
                                    alt="Café"
                                    className="w-330 h-55 object-cover rounded-2xl border-6 border-white"
                                />
                            </div>
                        </section>
                        <div>
                            <button className="bg-[#492F1E] text-[#FFF4DF] hover:bg-[#8A5E2D] text-lg font-bold py-3 px-6 rounded-2xl flex flex-row gap-5 items-center">
                                <FaShoppingCart className="size-6" />
                                <h3>Compre Já!</h3>
                            </button>
                        </div>
                    </section>
                </section>
            </main>

            <Footer />
        </container>
    );
}
