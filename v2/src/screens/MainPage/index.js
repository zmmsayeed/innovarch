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
import Clients from '../Clients';

class MainPage extends React.Component {

    render() {
        let {page} = this.props;
        console.log("Props to main page: ", page)

        return (

            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-12 col-sm-12 col-md-3">
                        <Navbar section={this.props.page} />
                    </div>
                    <div className={ page === 'Home' ? "col-12 col-sm-12 col-md-9 sideSection" : "col-12 col-sm-12 col-md-9 sideSection p-md-5 p-3" }>
                        {
                            page === 'Projects' ? <Projects />
                                : page === 'Home' ? <Home />
                                : page === 'About' ? <AboutUs />
                                : page === 'People' ? <Team />
                                : page === 'Contact' ? <Contact />
                                : page === 'Clients' ? <Clients />
                                : null
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default MainPage;