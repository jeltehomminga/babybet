import React, {useState} from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'



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
    const [isOpen, setIsOpen] = useState(false)
    const onClick = { onClick : () => setIsOpen(!isOpen)}
  
    return subPaths.length > 0 ? (
          <details open={isOpen} >
      <summary {...onClick} >
          <NavItem {...onClick} to={headPath}>{headName}</NavItem>
        </summary>
        <ul style={{listStyleType: 'none'}}>
        {subPaths.map(({ name, path }) => (
          <li><NavItem {...onClick} to={`${headPath}${path}`}>{name}</NavItem></li>
        ))}
        </ul>
      </details>
    ) : (
      <NavItem {...onClick} to={headPath}>{headName}</NavItem>
    );
  };

  export default () => (
    <Nav>
    <NavDetails />
    {/* <NavDetails headPath='/babybet' headName='Babybet' /> */}
    <NavDetails
      headPath="/babies"
      headName="Babies"
      subPaths={[{ name: "Add baby", path: "/addbaby" }, { name: 'Parents', path: '/parents'}]}
    />

    <NavDetails headPath='/babybet' headName='Babybet' />
  </Nav>
  )