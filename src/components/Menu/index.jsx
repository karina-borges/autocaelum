import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Menu({ children }) {
    const [active, setActive] = useState(false);
    let menuActiveClass = active ? 'active' : '';

    const handleClickMenu = () => setActive(!active);

    return (
        <nav id="menu">
            <button className="btn-mobile" onClick={ handleClickMenu }>
                <i className="fas fa-bars"></i>
            </button>
            <div className={`container flex ${menuActiveClass}`}>
                <ul className="menu-principal">
                    <li><NavLink to="/" activeClassName="active" exact><i className="fas fa-home"></i> Home</NavLink></li>
                    <li><NavLink to="/sobre" activeClassName="active">Sobre a Empresa</NavLink></li>
                    <li><NavLink to="/veiculos" activeClassName="active">Veículos</NavLink></li>
                    <li><NavLink to="/contato" activeClassName="active">Fale conosco</NavLink></li>
                </ul>

                { children }
            </div>
        </nav>
    )
}
