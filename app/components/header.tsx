import React from "react";
import logo from "../media/logo-pilates.png"; // Asegúrate de que la ruta sea correcta

export default function Header() {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                {/* Usamos logo.src para acceder a la URL de la imagen */}
                <a className="navbar-brand" href="#">
                    <img src={logo.src} alt="Logo" width="150" /> {/* Ajusta el tamaño según sea necesario */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Classes</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://i.pinimg.com/736x/a0/e3/fb/a0e3fb0cdfe47fb1e08cf65f478c716b.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-9">
            <img className="d-block w-100 mb-3" src="https://i.pinimg.com/736x/a0/e3/fb/a0e3fb0cdfe47fb1e08cf65f478c716b.jpg" />
            <h1>Welcome</h1>
            <p>
                Explore our meticulously sourced beans, learn about our roasting process, and discover unique flavor profiles. Join us on a journey from farm to cup, and experience the true essence of coffee like never before!
            </p>
        </div>

        <div className="col-12 mb-4">
            <h1>Elevate Your Coffee Experience</h1>
            <p className="small m-0">
                Dive into the world of artisanal coffee roasting
            </p>
        </div>
    </>
}
