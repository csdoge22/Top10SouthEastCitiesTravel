import '../layouts/ButtonLayout.css';
const Navbar = () => {
    return (
			<div className="container-sm">
				<nav className="navbar navbar-expand-sm bg-warning-subtle rounded-5 justify-content-center">
					<ul className="navbar-nav rounded-5">
						<li className="nav-item bg-warning rounded-5 me-3 text-center">
							<a className="nav-link" href="/">Home</a>
						</li>
						<li className="nav-item bg-warning rounded-5 me-3 text-center">
							<a className="nav-link" href="/about">About</a>
						</li>
						<li className="nav-item bg-warning rounded-5 me-3 text-center">
							<a className="nav-link" href="/best">10 Best Cities</a>
						</li>
						<li className="nav-item bg-warning rounded-5 me-3 text-center">
							<a className="nav-link" href="/hotels">Hotels</a>
						</li>
						<li className="nav-item bg-warning rounded-5 me-3 text-center">
							<a className="nav-link" href="/cruises">Cruises</a>
						</li>
						<li className="nav-item bg-warning rounded-5 me-3 text-center">
							<a className="nav-link" href="/food">Food</a>
						</li>
						<li className="nav-item bg-warning rounded-5 me-3 text-center">
							<a className="nav-link" href="/essentials">Essentials</a>
						</li>
						<li className="nav-item bg-warning rounded-5 me-3 text-center">
							<a className="nav-link" href="/contact">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
    )
}
export default Navbar;