export default function Banner(){

    return(
        <div>
            <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand fs-4 poppins-medium tx-primary">Plantitas</a>
                <ul className="nav justify-content-end pr-3">
                <li className="nav-item">
                    <a className="nav-link hover tx-primary" to="/plantas">Plantas</a>
                </li>
                <li className="nav-item">
                    {/* Enlace a la tienda (Shop) */}
                    <a className="nav-link hover tx-primary" to="/shop">Shop</a>
                </li>
                <li className="nav-item">
                    {/* Enlace al perfil */}
                    <a className="nav-link hover tx-primary" to="/perfil">Perfil</a>
                </li>
                </ul>
            </div>
            <img src="/banner.png" className="img-fluid banner-img" alt="Banner" />
            </nav>
        </div>
    );
};