import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
        <div>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<List/>}/>
                    <Route path="/form" element={<Form/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </div>
    )
}
