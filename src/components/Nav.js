import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = styled.nav(() => ({
  padding: 32,
  color: "deepSkyBlue",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "baseline",

  "@media (max-width: 420px)": {
    flexWrap: 'wrap'
  }
}));

const NavItem = styled(Link)({
  position: "relative",
  color: "deepSkyBlue",

});

const Ul = styled.ul({
  listStyleType: "none",
  position: "absolute",
  zIndex: 10,
  padding: "15px 30px",
  backgroundColor: "rgba(40,44,52,0.99)",
  boxShadow: "inset -1px -2px 20px 0px rgba(255,255,255,0.1)",
  border: 'deepSkyBlue 1px solid',
  borderRadius: 5,
  width: 'max-content',
  "@media (max-width: 420px)": {
    padding: '10px 15px'
  }
});

const NavDetails = ({
  headPath = "/",
  headName = "Home",
  subPaths = [],
  isOpen,
  setIsOpen,
  index
}) => {
  const handleClick = e => {
    e.preventDefault();
    setIsOpen(isOpen === index ? 0 : index);
  };

  return (
    <details
      open={isOpen === index}
      style={{ position: "relative" }}
      onClick={handleClick}
    >
      <summary>
        {subPaths.length > 0 ? (
          <p>{headName}</p>
        ) : (
          <NavItem to={headPath}>{headName}</NavItem>
        )}
      </summary>
      {subPaths.length > 0 && (
        <Ul>
          <li key={headPath}>
            <NavItem to={headPath}>{headName}</NavItem>
          </li>

          {subPaths.map(({ name, path }) => (
            <li key={path}>
              <NavItem to={`${headPath}${path}`}>{name}</NavItem>
            </li>
          ))}
        </Ul>
      )}
    </details>
  );
};

export default () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <Nav>
      <NavDetails isOpen={isOpen} setIsOpen={setIsOpen} index={1} />
      <NavDetails
        index={2}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        headPath="/babies"
        headName="Babies"
        subPaths={[
          { name: "Add baby", path: "/addbaby" },
          { name: "Parents", path: "/parents" }
        ]}
      />
      <NavDetails
        index={3}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        headPath="/babybets"
        headName="Babybets"
        subPaths={[
          { name: "New bet", path: "/newbet/new" },
          { name: "Highscore", path: "/highscore" }
        ]}
      />
            <NavDetails
        index={4}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        headPath="/profile"
        headName="Profile"

      />
    </Nav>
  );
};
