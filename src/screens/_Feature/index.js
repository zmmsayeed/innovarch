import React from "react";

// importing stylesheet
import './style.css';

function Feature() {
  return (
    <div id="featureSection">
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade "
        data-ride="carousel" data-interval="3000" data-pause="false"
      >
        {/* <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/1.jpg" class="img-fluid" alt="..." />
            <div class="carousel-caption d-block d-md-block">
              <h5>Specialist</h5> <br/>
              <p>
                We are specialist in the field of architect.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/2.jpg" class="img-fluid" alt="..." />
            <div class="carousel-caption d-block d-md-block">
              <h5>Obsessed</h5><br/>
              <p>
                Our Obsession Is Distinctive interiors.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/3.jpg" class="img-fluid" alt="..." />
            <div class="carousel-caption d-block d-md-block">
              <h5>High Quality</h5><br/>
              <p>
                High Quality Materials In All Solutions.
              </p>
            </div>
          </div>
        </div>
        {/* <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a> */}
      </div>

      <div className="d-block d-sm-block d-md-none">
          HERE HERE
      </div>
    </div>
  );
}

export default Feature;
