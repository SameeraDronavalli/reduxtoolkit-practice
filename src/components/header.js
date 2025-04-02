const Header = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ fontFamily: "Arial Black", fontSize: "35px", color: "#ed0055fa",marginBottom:"5px"}}>Fresh & Fab</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"style={{ fontFamily: 'Rockwell' }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Beauty & Personal Care</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Pet Care</a>

            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Meat & Dairy</a>

            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Offers & Deals</a>

            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">  👤Login </a>
                    
                  </li>
          </ul>
         
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Type to explore..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
