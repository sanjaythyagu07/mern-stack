// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Product from './componets/Product';
import UserList from './componets/UserList';

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/userlist">User List</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/product" element={<Product />} />
                <Route path="/userlist" element={<UserList />} />
            </Routes>
        </Router>
    );
}

export default App;
