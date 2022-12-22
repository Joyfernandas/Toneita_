import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cart, Heart, Search } from "styled-icons/bootstrap";
import { Menu } from "styled-icons/boxicons-regular";

const NavData = [
  {
    id: 1,
    name: "Products",
    to: "/products",
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

  return (
    <>
      <NavBarWrapper>
        <NavLogo src="assets/images/image1.png" />
        <NavLinkWrapper>
          {NavData.map((item) => (
            <>
              <Link to={item.to}>
                <NavLinks key={item.id}>{item.name}</NavLinks>
              </Link>
            </>
          ))}
        </NavLinkWrapper>
        <LinControllWrapper>
          <Search fill="black" width={15} cursor={"pointer"} />
          <Link to='/wishlist'>
          <Heart fill="black" width={15} cursor={"pointer"} />
          </Link>
          <Link to="/myorder">
          <Cart fill="black" width={15} cursor={"pointer"}/>
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
    </>
  );
}

export default App;

export const NavMenu = () => {
  return (
    <>
      <MobileMenu>
        {NavData.map((item) => (
          <MobileMenuLink key={item.id}>{item.name}</MobileMenuLink>
        ))}
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
