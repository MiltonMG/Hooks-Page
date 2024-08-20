import { Link } from "react-router-dom";
export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1>HooksApp</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to={`/`}>useState</Link>
                            <Link className="nav-link" to={'/useEffect'}>useEffect</Link>
                            <Link className="nav-link" to={'/useMemo'}>useMemo</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
