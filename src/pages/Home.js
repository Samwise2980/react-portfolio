import React from "react";
import Wrapper from "../components/Wrapper";
export default function Home() {
  return (
    <Wrapper>
      <div className="row">
        <div className="col mt-3 title-text text-center">
          <h3>About Me</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="col text-center">
            <img
              className="m img-fluid"
              id="profile-pic"
              src="assets/images/profilephoto.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p>
            Hey there, my name is Samuel Foster. I am a full stack developer
            with passions and curiosity as far as my resources can guide me. The
            matrix is a place filled with questions and I'm here to find the
            answers!
          </p>
          <p>
            My inspirations have sprouted primarly through my own personal
            hobbies i.e Table Top Games, Video Games, Photography, Film, ect.;
            however, I am very excited to delve into each new challenging
            adventure armed with discipline and Google Fu!
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
