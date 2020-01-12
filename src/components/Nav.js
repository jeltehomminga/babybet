import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = styled.nav(() => ({
  padding: 32,
  color: "deepSkyBlue",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "baseline"
}));

const NavItem = styled(Link)({
  color: "deepSkyBlue"
});

const NavDetails = ({ headPath = "/", headName = "Home", subPaths = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return subPaths.length > 0 ? (
    <details open={isOpen}>
      <summary onClick={onClick}>
        <p>{headName}</p>
      </summary>
      <ul style={{ listStyleType: "none" }}>
        <li key={headPath}>
          <NavItem to={headPath}>{headName}</NavItem>
        </li>

        {subPaths.map(({ name, path }) => (
          <li key={path}>
            <NavItem to={`${headPath}${path}`}>{name}</NavItem>
          </li>
        ))}
      </ul>
    </details>
  ) : (
    <NavItem to={headPath}>{headName}</NavItem>
  );
};

export default () => (
  <Nav>
    <NavDetails />
    <NavDetails
      headPath="/babies"
      headName="Babies"
      subPaths={[
        { name: "Add baby", path: "/addbaby" },
        { name: "Parents", path: "/parents" }
      ]}
    />
    <NavDetails
      headPath="/babybet"
      headName="Babybet"
      subPaths={[{ name: "New bet", path: "/newbet" },{ name: "Highscore", path: "/highscore" }]}
    />
  </Nav>
);
