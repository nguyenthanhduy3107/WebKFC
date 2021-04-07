import './App.css';
import './App.js';

function Option(){
	return(
		<div className="container col-lg-7">
        <div className="wrapper">
          <nav className="navbar navbar-expand-lg navbar-dark justify-content-start" style={{background: '#111', fontWeight: 'bold'}}>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href>COMBO 1 NGƯỜI</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">COMBO NHÓM</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">MENU ƯU ĐÃI</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">MÓN LẺ</a>
                </li>
              </ul>
              <div className="dropdown">
                <a className="btn dropdown-toggle" href="#" />
              </div>
            </div></nav>
        </div>
        </div>
		);
}
export default Option;