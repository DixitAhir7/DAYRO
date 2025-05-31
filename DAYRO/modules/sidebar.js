export function Experiment() {
    try {
        const sidebarDiv = document.createElement('div');
        sidebarDiv.id = 'sidebar';
        document.body.insertBefore(sidebarDiv, document.body.firstChild);

        sidebarDiv.innerHTML += `
            <header>
        <div class="row">
            <!-- Sidebar -->
            <div class="sidebar col-md-2" id="sidebar">
                <div class="logo-div">
                    <a class="logo fs-4 d-block" data-i18n="logo">D A Y R O</a>
                </div>
                <aside>
                    <div class="nav-list mt-4">
                        <div class="readers mt-3">
                            <a class="text-center" href="" data-i18n="reader">For
                                Readers</a>
                        </div>

                        <div class="kalakar mt-3">
                            <a class="text-center" data-i18n="kalakar"
                                href="../index.html">Kalakaro</a>
                        </div>

                        <div class="ReligionalHistory text-center mt-3">
                            <a data-i18n="history">History</a>
                        </div>

                        <div id="historyDropdown" class="dropdown-content">
                            <a data-i18n="community" href="src/mainhtmls/community/communities.html">Community
                                History</a>
                            <a data-i18n="city" href="src/mainhtmls/cityhistory/cityhistory.html">City History</a>
                        </div>

                        <div class="for-artist text-center mt-3">
                            <a data-i18n="artist" class="" href="src/mainhtmls/artist/artists.html">For Artist</a>
                        </div>

                        <div class="about-page mt-3">
                            <i class="fas fa-info-circle about-icon"></i>
                            <a data-i18n="about" class="" href="src/mainhtmls/about-page/about.html">About dayro</a>
                        </div>
                    </div>

                    <hr>
                    <div class="user-info">
                        <!-- for_share button -->
                        <div class="share">
                            <a title="sharing is caring" id="forshare">share</a>
                        </div>

                        <div class="translate">
                            <form>
                                <select>
                                    <option value="language">language</option>
                                    <option class="guj" value="ગુજરાતી">ગુજરાતી</option>
                                    <option value="english">english</option>
                                </select>
                            </form>
                        </div>
                        <div class="display-icon">
                            <a class="sidebarToggle fs-4"><i class="bi bi-list"></i></a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </header>
        `
    } catch (e) { console.log('while adding sidebar', e); }
};