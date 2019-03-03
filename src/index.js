import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './Menu'
import Styles from './Styles'
import Hem from './pages/Hem'
import KannerDuIgenDig from './pages/Kanner-du-igen-dig'
import OmGoranOchWipro from './pages/Om-goran-och-wipro'
import KraftfullaUtvecklingsprogram from './pages/Kraftfulla-utvecklingsprogram'
import EnergifylldaForelasningar from './pages/Energifyllda-forelasningar'
import FramgangsriktLedarskap from './pages/Framgangsrikt-ledarskap'
import VdAttHyra from './pages/Vd-att-hyra'
import Referenser from './pages/Referenser'
import FaktaKontakt from './pages/Fakta-och-kontakt'
import RightBackground from './img/Right.png'

const Page = styled.div`
  width: 1000px;
  margin: 0px auto;
`

const Main = styled.div`
  display: flex;
`

const Text = styled.div`
  width: 610px;
  padding: 25px 50px;
`

const Right = styled.div`
  flex-grow: 1;
  background-image: url(${RightBackground});
  background-repeat: no-repeat;
  margin-top: 20px;
`

const Footer = styled.div`
  border-top: solid 1px #ccc;
  margin: 50px auto 0px auto;
  padding: 20px 0px;
  font-size: 12px;
`

ReactDOM.render(
  <Router>
    <Page>
      <Styles />
      <Menu />
      <Main>
        <Text>
          <Route path='/' exact component={Hem} />
          <Route path='/kanner-du-igen-dig' exact component={KannerDuIgenDig} />
          <Route path='/om-goran-och-wipro' exact component={OmGoranOchWipro} />
          <Route path='/kraftfulla-utvecklingsprogram' exact component={KraftfullaUtvecklingsprogram} />
          <Route path='/energifyllda-forelasningar' exact component={EnergifylldaForelasningar} />
          <Route path='/framgangsrikt-ledarskap' exact component={FramgangsriktLedarskap} />
          <Route path='/vd-att-hyra' exact component={VdAttHyra} />
          <Route path='/referenser' exact component={Referenser} />
          <Route path='/fakta-kontakt' exact component={FaktaKontakt} />
        </Text>
        <Right />
      </Main>
      <Footer>
        Copyright &copy; 2019 WIPRO AB | Vid fel eller fr&aring;gor; <a href='mailto:info@wipro.se'>info@wipro.se</a>
      </Footer>
    </Page>
  </Router>,
  document.getElementById('root')
)
