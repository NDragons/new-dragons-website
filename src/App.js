import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useMyContext} from "./components/blog/Store";
import Loading from "./components/blog/Loading";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {

    const { loading } = useMyContext();

    return (
        <>
            <Router>
                {loading && <Loading/>}
                <Navbar />
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;