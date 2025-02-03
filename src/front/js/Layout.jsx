import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
// Custom component
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/Footer.jsx";
// Custom Pages or Views
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { ExampleState } from "./pages/ExampleState.jsx";
import { SimpleCounter } from "./pages/SimpleCounter.jsx";
import { Error404 } from "./pages/Error404.jsx";
import { ExampleRoutes } from "./pages/ExampleRoutes.jsx";


// Create your first component
const Layout = () => {
    // The basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<ExampleState/>} path='/example-state' />
                        <Route element={<SimpleCounter/>} path='/simple-counter' />
                        <Route element={<ExampleRoutes/>} path='/example-routes' />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Error404 />} path='*'/>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
