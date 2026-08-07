import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="bg-[#FFF4DF] text-[#946125]">
            <section className="flex flex-row items-center justify-start gap-20">
                <img src={logo} alt="WeCoffee Logo" className="h-30 pl-3" />

                <NavLink to="/" className="hover:text-[#492F1E] transition">
                    <h2 className="text-xl font-bold">Início</h2>
                </NavLink>

                <NavLink to="/catalogo" className="hover:text-[#492F1E] transition">
                    <h2 className="text-xl font-bold">Catálogo</h2>
                </NavLink>

                <NavLink to="/beneficios" className="hover:text-[#492F1E] transition">
                    <h2 className="text-xl font-bold">Benefícios</h2>
                </NavLink>
                
                <NavLink to="/depoimentos" className="hover:text-[#492F1E] transition">
                    <h2 className="text-xl font-bold">Depoimentos</h2>
                </NavLink>
            </section>
        </header>
    );
}
