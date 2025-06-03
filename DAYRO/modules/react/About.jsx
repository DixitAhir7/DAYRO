import React from "react";
import ReactDOM from 'react-dom/client';
import Sidebar from './Sidebar';
import './Sidebar.css';
import { StrictMode } from "react";

const Sidebardiv = document.getElementById('sidebarDiv');
ReactDOM.createRoot(Sidebardiv).render(
    <StrictMode>
        <Sidebar />
    </StrictMode>
);