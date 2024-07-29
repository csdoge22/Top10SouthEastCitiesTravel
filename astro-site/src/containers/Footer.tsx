const Footer = () => {
    return (
        <div className="container-sm bg-white">
            <h5 className="text-center p-sm-4">Follow me on social media:</h5>
            <ul className="list-group list-group-horizontal text-center d-flex offset-3">
                <li className="list-group-item border-black border-5 m-4"><a className="badge bg-warning " href="https://www.instagram.com/csdoge22/">Instagram</a></li>
                <li className="list-group-item border-black border-5 m-4"><a className="badge bg-success " href="https://www.instagram.com/csdoge22/">Portfolio</a></li>
                <li className="list-group-item border-black border-5 m-4"><a className="badge bg-danger " href="https://www.instagram.com/csdoge22/">YouTube</a></li>
                <li className="list-group-item border-black border-5 m-4"><a className="badge bg-info " href="https://www.instagram.com/csdoge22/">LinkedIn</a></li>
            </ul>
        </div>
    )
}
export default Footer;