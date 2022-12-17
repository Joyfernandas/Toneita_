import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../Card/Cards.css"
import { Link } from 'react-router-dom';
function Cards() {

  return (
    <>
    {/* navend */}
    <div>
  <div className="container">
    <div className="row" id="slider-text">
      <div className="col-md-6">
        <h2>Tonieta Mattress</h2>
      </div>
    </div>
  </div>
  {/* Item slider*/}
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12">
        <div className="carousel carousel-showmanymoveone slide" id="itemslider">
          <div className="carousel-inner">
            <div className="item active">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1640003145169-d10a2e85a64d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="img-responsive center-block" /></a>
                <h4 className="text-center">Mattress</h4>
                <h5 className="text-center">200,00 TK</h5>
              </div>
            </div>
            <div className="item active">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1425219366480-47fdbbe0e83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="img-responsive center-block" /></a>
                <h4 className="text-center">Mattress</h4>
                <h5 className="text-center">200,00 TK</h5>
              </div>
            </div>
            <div className="item active">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="img-responsive center-block" /></a>
                <h4 className="text-center">Mattress</h4>
                <h5 className="text-center">200,00 TK</h5>
              </div>
            </div>
            <div className="item active">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1631650120985-20791383127e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80" className="img-responsive center-block" /></a>
                <h4 className="text-center">Mattress</h4>
                <h5 className="text-center">200,00 TK</h5>
              </div>
            </div>
            <div className="item active">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1641932889144-d09cab69ef86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="img-responsive center-block" /></a>
                <h4 className="text-center">Mattress</h4>
                <h5 className="text-center">200,00 TK</h5>
              </div>
            </div>
            <div className="item active">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1631650120985-20791383127e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" className="img-responsive center-block" /></a>
                <h4 className="text-center">Mattress</h4>
                <h5 className="text-center">200,00 TK</h5>
              </div>
            </div>
            {/* ttest */}
            <div className="item">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1425219366480-47fdbbe0e83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  className="img-responsive center-block" /></a>
                <h4 className="text-center">Baby Mattress</h4>
                <h5 className="text-center">800 TK</h5>
              </div>
            </div>
            <div className="item">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60" className="img-responsive center-block" /></a>
                <span className="badge">10%</span>
                <h4 className="text-center">PANTALONE TERI 2</h4>
                <h5 className="text-center">4000,00 TK</h5>
                <h6 className="text-center">5000,00 TK</h6>
              </div>
            </div>
            <div className="item">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1531925470851-1b5896b67dcd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91fe0ca1b5d72338a8aac04935b52148&auto=format&fit=crop&w=500&q=60" className="img-responsive center-block" /></a>
                <h4 className="text-center">CVETNA HALJINA</h4>
                <h5 className="text-center">4000,00 RSD</h5>
              </div>
            </div>
            <div className="item">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60" className="img-responsive center-block" /></a>
                <h4 className="text-center">MAJICA FOTO</h4>
                <h5 className="text-center">40,00 TK</h5>
              </div>
            </div>
            <div className="item">
              <div className="col-xs-12 col-sm-6 col-md-2">
                <a href="#"><img src="https://images.unsplash.com/photo-1532086853747-99450c17fa2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=61a42a11f627b0d21d0df757d9b8fe23&auto=format&fit=crop&w=500&q=60" className="img-responsive center-block" /></a>
                <h4 className="text-center">MAJICA MAYORAL</h4>
                <h5 className="text-center">100,00 TK</h5>
              </div>
            </div>
          </div>
          <div id="slider-control">
            <a className="left carousel-control" href="#itemslider" data-slide="prev"><img src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_402-512.png" alt="Left" className="img-responsive" /></a>
            <a className="right carousel-control" href="#itemslider" data-slide="next"><img src="http://pixsector.com/cache/81183b13/avcc910c4ee5888b858fe.png" alt="Right" className="img-responsive" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Item slider end*/}
  <br /><br />
</div>

    </>

  );
}

export default Cards;