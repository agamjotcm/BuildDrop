import React, { Component } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

export class Home extends Component {
  render() {
    return (
      <>
      <Header />
      <div>
        <Hero />
      </div>
      </>
    )
  }
}

export default Home