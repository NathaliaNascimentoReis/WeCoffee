import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function App() {
    return (
        <container className="flex-row">
            <Header />

            <main className="bg-[#FFF4DF] text-[#492F1E] flex flex-col pl-10 pb-20 pr-10 pt-10">
                <section className="flex flex-row items-start gap-20">
                    <div className="flex flex-row items-center gap-2">
                        <h1 className="text-4xl font-bold ">Depoimentos</h1>
                    </div>
                </section>

                <section className="flex flex-row"></section>
            </main>

            <Footer />
        </container>
    );
}
