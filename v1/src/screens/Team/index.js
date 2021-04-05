import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import team from './team';

// importing components
import TeamCard from "../../components/TeamCard";

// importing stylesheet
import "./style.css";

export default class Team extends Component {
  render() {
    return (
      <div>
        <div class="fam-main" >
          <h1 class="section-heading fam-heading">
            Our Team
          </h1>

          <div class="d-flex mx-auto">
            <div class="col-12 col-md-4 my-auto">

              <div class="mr-auto" style={{ width: '2.5rem', borderBottom: '4px solid #EEC40E' }} ></div>

              <p class="fam-section-desc">
                We have a very dedicated, experienced, and hard working team from all parts of the country! 
                {/* We have around <span>40 team members</span> working from all parts of the country! */}
              </p>
            </div>

            <div class="cards-container">
                <div class="group-wrapper container d-flex justify-content-center flex-wrap m-5" >

                    {
                        team.map(member => (
                            <TeamCard key={uuid()} link={member.link} image={member.image} name={member.name} role={member.role} status={member.status} />
                        ))
                    }

                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
