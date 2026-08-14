import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import Coffee from '../assets/coffee.webp';

export default function App() {
    return (
        <container className="flex-row">
            <Header />

            <main className="bg-[#FFF4DF] text-[#492F1E] flex flex-row pl-10 pb-20 pr-10 pt-10 ">
                <section>
                    <div>
                        <h1 className="text-4xl font-bold">Sua cafeteria favorita!</h1>
                    </div>
                    <div>
                        <h4 className="text-[#492F1E] pt-5 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </h4>
                    </div>

                    <div className="pt-10">
                        <button className="bg-[#A4976B] text-[#FFF4DF] hover:bg-[#897E56] text-lg font-bold py-2 px-4 rounded-2xl">
                            <h3>Conheça nossa marca!</h3>
                        </button>
                    </div>
                </section>

                <section className="pl-10">
                    <img src={Coffee} alt="Café" className="w-300 h-90 object-cover rounded-2xl" />
                </section>
            </main>

            <Footer />
        </container>
    );
}
