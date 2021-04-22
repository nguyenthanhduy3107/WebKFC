import './App.css';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    
     <div className="container col-lg-7">
        <div className="wrapper">
          <nav className="navbar navbar-expand-lg navbar-dark justify-content-start" style={{background: '#111', fontWeight: 'bold'}}>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Router>
                <Sidebar/>
              </Router>
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
             <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to={0} className="active" />
              <li data-target="#myCarousel" data-slide-to={1} />    
              <li data-target="#myCarousel" data-slide-to={2} />  
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ backgroundImage: "url(/hinh/image.png)" }} ></div>
              <div className="carousel-item ">
                 <img src="/hinh/33ca53a80cc682c16ddedcb42c136e96.png" alt=""/>
              </div>  
              <div className="carousel-item ">
                <img src="/hinh/33ca53a80cc682c16ddedcb42c136e96.png" alt=""/>
              </div>
              <a href="#myCarousel" className="carousel-control-prev" role="button" data-slide="prev">
                <span className="sr-only">Previous</span>
                <span className="carousel-control-prev-icon" aria-hiden="true" />
              </a>
              <a href="#myCarousel" className="carousel-control-next" role="button" data-slide="next">
                <span className="sr-only">Next</span>
                <span className="carousel-control-next-icon" aria-hiden="true" />
              </a>
            </div>
          </div>
          <div className="box-card">
        <div className="row no-gutters">
          <div className="col-lg-3">
            <div className="side-bar">
              <div className="nav-menu">
                <span>Combo 1 người</span>
              </div>
              <div className="menu">
                <nav className="side-nav">
                  <a href="#" className="nav-link active">Tất cả</a>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="card" style={{width: '18rem'}}>
              <img src="/hinh/7d36d8d380315c169ba830b0b5b4c26d.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-danger">Thêm món</a>
                <a href="/option" className="btn btn-outline-dark">Tùy chỉnh</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
