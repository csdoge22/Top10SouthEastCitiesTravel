const Navbar = () => {
    return (
        <div className="container bg-danger">
				<nav className="navbar navbar-expand-sm bg-light justify-content-center">
					<ul className="navbar-nav bg-warning">
						<li className="nav-item">
							<a className="nav-link" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/about">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/best">10 Best Cities</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/hotels">Hotels</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/cruises">Cruises</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact">Contact</a>
						</li>
						
					</ul>
				</nav>
		</div>
    )
}
export default Navbar;