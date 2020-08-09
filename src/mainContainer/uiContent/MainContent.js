import React, { Component } from 'react'
import NavbarContainerManager from '../navbar/NavbarContainerManager'
import LandingPage from '../landingPage/uiContent/LandingPage'
export default class MainContent extends Component {
    render() {

        return (
            <div>
            <NavbarContainerManager />
            <LandingPage/>
            </div>
        )
    }
}
