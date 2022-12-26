import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Cart, Heart, Search } from "styled-icons/bootstrap";
import { Menu } from "styled-icons/boxicons-regular";
import FloatingComponent from "../FloatingComponent/FloatingComponent";

const NavData = [
  {
    id: 1,
    name: "Products",
    to: "no link",
  },
  {
    id: 2,
    name: "Mattress",
    to: "/mattress",
  },
  {
    id: 3,
    name: "Pillows",
    to: "/pillows",
  },
  {
    id: 4,
    name: "Kids pillows",
    to: "/KidsPillows ",
  },
  {
    id: 5,
    name: "Cushions",
    to: "/cushion",
  },
  {
    id: 6,
    name: "Bolster",
    to: "/bolster",
  },
];

function App() {
  const [BurgerMenu, setBurgerMenu] = useState(false);
  const location = useLocation();
  const [atHidden, setatHidden] = useState(false)
  useEffect(() => {

    if(location.pathname == '/'){
      setatHidden(false)
    }else{
     setatHidden(true)
    }


  }, []);
 
  console.log(location)
  const OpenModalCus = () => {
    var component = document.getElementById("ModalContent");
    var parent = document.getElementById("testcus");

    if (component.hasAttribute("hidden")) {
      component.removeAttribute("hidden");
      parent.classList.add("slide-animation-cus");
    } else {
      component.setAttribute("hidden", true);
      parent.classList.remove("slide-animation-cus");
    }
  };

  return (
    <>
      <NavBarWrapper>
        <Link to="/">
          <NavLogo src="assets/images/image1.png" />
        </Link>
        <NavLinkWrapper>
          {NavData.map((item) => (
            <>

           
              {item.to === 'no link' ?
                <NavLinks onClick={() => OpenModalCus()} key={item.id}  hidden={atHidden} >{item.name}</NavLinks> :
                <Link to={item.to}>
                  <NavLinks key={item.id}>{item.name}</NavLinks>
                </Link>}
            </>
          ))}
          <NavLinks><DropDownMenu /></NavLinks>
        </NavLinkWrapper>

        <LinControllWrapper>
          <a data-bs-toggle="offcanvas" href="#SearchBarCanvas" role="button" aria-controls="SearchBarCanvas">
            <Search fill="black" width={15} cursor={"pointer"} />
          </a>
          <Link to='/wishlist'>
            <Heart fill="black" width={15} cursor={"pointer"} />
          </Link>
          <Link to="/pricedetails">
            <Cart fill="black" width={15} cursor={"pointer"} />
          </Link>
          <ModifiedMenu
            onClick={() => setBurgerMenu(!BurgerMenu)}
            fill="black"
            width={20}
            cursor={"pointer"}
          />
        </LinControllWrapper>
      </NavBarWrapper>

      {BurgerMenu ? <NavMenu /> : ""}
      <SearchBar />
      <FloatingComponent />

    </>
  );
}

const SearchBar = () => {
  return (
    <>
      <div className="offcanvas offcanvas-top" tabindex="-1" id="SearchBarCanvas" aria-labelledby="SearchBarCanvasLabel" style={{ height: "150px" }}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title display-6" id="SearchBarCanvasLabel">Search</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="input-group mb-3 px-8">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

export const DropDownMenu = () => {
  return (
    <>
      <div class="btn-group">
        <button type="button" style={{ fontSize: "15px" }} class="btn text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
        </button>
        <ul class="dropdown-menu bg-gray">
        <a class="dropdown-item">
                  <Link to="/">Home</Link>
                </a>

                <a class="dropdown-item">
                  <Link to="/about">About</Link>
                </a>
                <a class="dropdown-item">
                  <Link to="/profileinfo">Contact Profile </Link>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
                  <Link to="/myorder">Orders </Link>
                  </a>
        </ul>
      </div>
    </>
  )
}

export const NavMenu = () => {
  return (
    <>
      <MobileMenu>
        {NavData.map((item) => (
          <MobileMenuLink key={item.id}>{item.name}</MobileMenuLink>
        ))}
        <MobileMenuLink><DropDownMenu /></MobileMenuLink>
      </MobileMenu>
    </>
  );
};

const NavBarWrapper = styled.div`
  width: 100vw;
  height:85px;
  background-color: #ffffff;
  box-shadow: 1px 0px 6px 0px;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.img`
  width: 150px;
`;

const NavLinkWrapper = styled.ul`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const NavLinks = styled.li`
  display: inline;
  padding-right: 15px;
  text-transform: capitalize;
  font-weight: 500;
  color: #646464;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size:14px;

  &:hover {
    color: #948f8f;
    transform: translateX(5px);
  }
`;

const LinControllWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
const ModifiedMenu = styled(Menu)`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
const MobileMenu = styled.ul`
  width: 100vw;
  background-color: #ffffff;
  position: absolute;
  z-index: 5;
`;
const MobileMenuLink = styled.li`
  list-style-type: none;
  padding: 5px 10px;
  text-transform: capitalize;
  font-weight: 500;
  color: #646464;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size:12px;

  &:hover {
    transform: translateX(10px);
    color: #948f8f;
  }
`;
