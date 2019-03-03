import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styled from '@emotion/styled'
import TopImage from './img/Hem.jpg'
import Background from './img/Menu.png'

const Image = styled.img`
  display: block;
`

const Menu = styled.div`
  background: url(${Background}) no-repeat;
  height: 80px;
  display: flex;
`

const Logo = styled.div`
  width: 230px;
  margin-left: 25px;
  cursor: pointer;
`

const Links = styled.div`
  flex-grow: 1;
  text-align: center;
  padding-top: 20px;

  a.active {
    font-weight: bold;
  }

  a {
    color: #fff;
    display: inline-block;
    font-size: 12px;
    font-family: 'Helvetica';
    margin: 5px 2px 4px 32px;
  }
`

export default withRouter(({ history }) => (
  <>
    {history.location.pathname === '/' && <Image src={TopImage} alt='Göran Wickström' />}
    <Menu>
      <Logo onClick={() => history.push('/')} />
      <Links>
        <NavLink to='/kanner-du-igen-dig'>Känner du igen dig?</NavLink>
        <NavLink to='/om-goran-och-wipro'>Om Göran & WIPRO</NavLink>
        <NavLink to='/kraftfulla-utvecklingsprogram'>Kraftfulla utvecklingsprogram</NavLink>
        <br />
        <NavLink to='/energifyllda-forelasningar'>Energifyllda föreläsningar</NavLink>
        <NavLink to='/framgangsrikt-ledarskap'>Framgångsrikt ledarskap</NavLink>
        <NavLink to='/vd-att-hyra'>Vd att hyra</NavLink>
        <NavLink to='/referenser'>Referenser</NavLink>
        <NavLink to='/fakta-Kontakt'>Fakta / Kontakt</NavLink>
      </Links>
    </Menu>
  </>
))
