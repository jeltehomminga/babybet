import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Nav = styled.nav(() => ({
  padding: 32,
  color: "deepSkyBlue",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start"
}));

const NavItem = styled(Link)({
  color: "deepSkyBlue"
});

const NavDetails = ({ headPath = "/", headName = "Home", subPaths = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = { onClick: () => setIsOpen(!isOpen) };

  let match = useRouteMatch({
    path: headPath
  });

  useEffect(() => {
    !match && setIsOpen(false);
  }, [match]);

  return subPaths.length > 0 ? (
    <details open={isOpen}>
      <summary {...onClick}>
        <NavItem to={headPath}>{headName}</NavItem>
      </summary>
      <ul style={{ listStyleType: "none" }}>
        {subPaths.map(({ name, path }) => (
          <li key={path}>
            <NavItem to={`${headPath}${path}`} >{name}</NavItem>
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
      subPaths={[{ name: "Highscore", path: "/highscore" }]}
    />
  </Nav>
);
