import React from 'react';

// importing stylesheet
import './style.css';

// importing components
import Navbar from '../../components/Navbar';
import Projects from '../Projects';
import AboutUs from '../About Us';
import Team from '../Team';
import Contact from '../Contact';
import Home from '../Home';

class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            section: 'Home'
        }
    }

    changeNavigation = (e) => {
        this.setState({ section: e })
    }

    render() {
        let { section } = this.state;

        return (

            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-12 col-sm-12 col-md-3">
                        <Navbar changeNavigation={this.changeNavigation} section={this.state.section} />
                    </div>
                    <div className={ section === 'Home' ? "col-12 col-sm-12 col-md-9 sideSection" : "col-12 col-sm-12 col-md-9 sideSection p-md-5 p-3" }>
                        {
                            section === 'Projects' ? <Projects />
                                : section === 'Home' ? <Home />
                                : section === 'About Us' ? <AboutUs />
                                : section === 'Our Team' ? <Team />
                                : section === 'Contact' ? <Contact />
                                : null
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default MainPage;