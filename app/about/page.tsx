import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

export default function Page() {
    return <>

        <div className="container py-4">
            <div className="row">

                <Header />
                <Nav />

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://i.pinimg.com/736x/a0/e3/fb/a0e3fb0cdfe47fb1e08cf65f478c716b.jpg" />
                    <h1>About Us</h1>
                    <p>
                        We are the best coffee roaster!
                    </p>
                </div>

            </div>
        </div>

    </>
}