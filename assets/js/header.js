const header = document.querySelector(".header");

header.innerHTML = `
    <!--NAVIGATION BAR-->
    <nav class="navbar navbar-expand-lg fixed-top my-0 py-0">
        <div class="container-fluid my-0 py-0">
            <a class="navbar-brand" href="https://aydavid-thetechguy.github.io">
                <img src="./assets/img/banner.png"/>
            </a>
            <div class="navbar-responsive">
                <ul class="navbar-nav me-0 m-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">HOME</a>
                    </li>
                    <li class="nav-item submenu">
                        <span class="nav-link dropdown-btn">
                            <span class="txt">SCHOOLS</span>
                            <span class="material-icons mi-24 drop-icon">expand_more</span>
                        </span>
                        <ul class="dropdown-content m-auto">
                            <li>
                                <a class="submenu-item" href="#">Kindagarten</a>
                            </li>
                            <li><a class="submenu-item" href="#">Nursery and Primary School</a></li>
                            <li><a class="submenu-item" href="#">Secondary School</a></li>
                        </ul>
                    </li>
                    <li class="nav-item submenu">
                        <span class="nav-link dropdown-btn">
                            <span class="txt">ACADEMICS</span>
                            <span class="material-icons mi-24 drop-icon">expand_more</span>
                        </span>
                        <ul class="dropdown-content m-auto">
                            <li>
                                <a class="submenu-item" href="./admission.html">Admission</a>
                            </li>
                            <li><a class="submenu-item" href="#">Our Curriculum</a></li>
                            <li><a class="submenu-item" href="#">Special Programs</a></li>
                            <li><a class="submenu-item" href="#">School Calendar</a></li>
                        </ul>
                    </li>
                    <li class="nav-item submenu">
						<span class="nav-link dropdown-btn">
                            <span class="txt">NEWS</span>
                            <span class="material-icons mi-24 drop-icon">expand_more</span>
                        </span>
                        <ul class="dropdown-content m-auto">
                            <li><a class="submenu-item" href="#">News and Events</a></li>
                            <li><a class="submenu-item" href="#">Upcoming Events</a></li>
                        </ul>
                    </li>
                    <li class="nav-item submenu">
                        <span class="nav-link dropdown-btn">
                            <span class="txt">ABOUT</span>
                            <span class="material-icons mi-24 drop-icon">expand_more</span>
                        </span>
                        <ul class="dropdown-content m-auto">
                            <li><a class="submenu-item" href="#">History</a></li>
                            <li>
                                <a class="submenu-item" href="#">Our Vision, Mission and Core Values</a>
                            </li>
							<li><a class="submenu-item" href="#">School Song</a></li>
							<li><a class="submenu-item" href="#">School Management</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contact.html">CONTACT US</a>
                    </li>
                </ul>
				<button
					class="btn menu-btn py-2"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#menu"
					aria-controls="menu"
				>
					<span class="material-icons" style="font-size: 32px">menu</span>
				</button>
				<div
					class="offcanvas offcanvas-start offcanvas-nav"
					tabindex="-1"
					id="menu"
					aria-labelledby="menuLabel"
				>
					<div class="offcanvas-header">
						<img src="./assets/img/banner.png"/>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div class="offcanvas-body">
						<div class="menu-sect">
							<a class="nav-link" href="#">HOME</a>
						</div>
						<div class="submenu">
							<a class="nav-link dropdown-btn" href="#">
								SCHOOLS <span class="material-icons mi-24 drop-icon">expand_more</span>
							</a>
							<ul class="dropdown-content m-auto">
								<li>
									<a class="submenu-item" href="#">Kindagarten</a>
								</li>
								<li>
									<a class="submenu-item" href="#">Nursery and Primary School</a>
								</li>
								<li>
									<a class="submenu-item" href="#">Secondary School</a>
								</li>
							</ul>
						</div>
						<div class="submenu">
							<a class="nav-link dropdown-btn" href="#">
								ACADEMICS <span class="material-icons mi-24 drop-icon">expand_more</span>
							</a>
							<ul class="dropdown-content m-auto">
								<li>
									<a class="submenu-item" href="./admission.html">Admission</a>
								</li>
								<li>
									<a class="submenu-item" href="#">Our Curriculum</a>
								</li>
								<li>
									<a class="submenu-item" href="#">Special Programs</a>
								</li>
								<li>
									<a class="submenu-item" href="#">School Calendar</a>
								</li>
							</ul>
						</div>
						<div class="submenu">
							<a class="nav-link dropdown-btn" href="#">
								NEWS <span class="material-icons mi-24 drop-icon">expand_more</span>
							</a>
							<ul class="dropdown-content m-auto">
								<li>
									<a class="submenu-item" href="#">News & Events</a>
								</li>
								<li>
									<a class="submenu-item" href="#">Upcoming Events</a>
								</li>
							</ul>
						</div>
						<div class="submenu">
							<a class="nav-link dropdown-btn" href="#">
								ABOUT <span class="material-icons mi-24 drop-icon">expand_more</span>
							</a>
							<ul class="dropdown-content m-auto">
								<li>
									<a class="submenu-item" href="#">History</a>
								</li>
								<li>
									<a class="submenu-item" href="#">Our Vision, Mission and Core Values</a>
								</li>
								<li>
									<a class="submenu-item" href="#">School Song</a>
								</li>
								<li>
									<a class="submenu-item" href="#">School Management</a>
								</li>
							</ul>
						</div>
						<div class="menu-sect">
							<a class="nav-link" href="./contact.html">CONTACT US</a>
						</div>
					</div>
				</div>
            </div>
        </div>
    </nav>
    `;
