import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import InfoCard from './Components/Infocard'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      <InfoCard/>
      </div>
    )
  }
}
