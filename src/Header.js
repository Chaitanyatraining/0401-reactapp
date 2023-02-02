import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="usersdata" className="nav-link">UsersData</Link>
        </li>
        <li className="nav-item">
          <Link to="pagination" className="nav-link">pagination</Link>
        </li>
        <li className="nav-item">
          <Link to="paginationuseEffect" className="nav-link">pagination useEffect</Link>
        </li>
        <li className="nav-item">
          <Link to="useRefHook" className="nav-link">useRefHook </Link>
        </li>
        <li className="nav-item">
          <Link to="useContextHook" className="nav-link">UseContext Hook </Link>
        </li>
        <li className="nav-item">
          <Link to="usereducer" className="nav-link">UseReducer Hook </Link>
        </li>
        <li className="nav-item">
          <Link to="contactUs" className="nav-link">Contact Us</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header