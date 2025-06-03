import React from "react";
import ReactDOM from 'react-dom/client';
import { sidebarBtn } from '../../modules/functions-flie/functions.js';
import './Sidebar.css';
import { StrictMode } from "react";

function Sidebar() {
    return (
        <header>
            <div className="row">
                <div className="sidebar col-md-2" id="sidebar">
                    <div className="logo-div">
                        <a className="logo fs-4 d-block" data-i18n="logo">D A Y R O</a>
                    </div>

                    <aside>
                        <div className="nav-list">
                            <div className="kalakar">
                                <a className="text-center" data-i18n="kalakar"
                                    href="">Kalakaro</a>
                            </div>

                            <div className="ReligionalHistory text-center">
                                <a data-i18n="history">History</a>
                            </div>

                            <div id="historyDropdown" className="dropdown-content">
                                <a data-i18n="community" href="src/mainhtmls/community/communities.html">Community
                                    History</a>
                                <a data-i18n="city" href="src/mainhtmls/cityhistory/cityhistory.html">City History</a>
                            </div>

                            <div className="for-artist text-center">
                                <a data-i18n="artist" className="" href="src/mainhtmls/artist/artists.html">Book Artist</a>
                            </div>

                            <div className="about-page">
                                <i className="fas fa-info-circle about-icon"></i>
                                <a data-i18n="about" href="src/mainhtmls/about-page/about.html">About dayro</a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <div class="display-icon">
                <a onClick={sidebarBtn} class="sidebarToggle fs-4"><i className="bi bi-list"></i></a>
            </div>
        </header>
    )
};

export default Sidebar;