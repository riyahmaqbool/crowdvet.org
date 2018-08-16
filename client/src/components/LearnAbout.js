import React, { Component } from "react";
import Carousel from "./Carousel-mz";
import carousel from './caroussel-1.png';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import idgen from "./idgen";
import "./learnAbout.css";
import missingMiddle from "./missing-middle.svg";
import financial from "./financial-maturity.svg";
import dseGlance from "./DSE-glance.svg";
import SignUpModal from "./SignUpModal";

class LearnAbout extends Component {

  render() {
    const header = <div className="white-text flow-text center-element learn-about">How can you help social enterprises make the world
    a better place, even if you can’t make a loan?</div>
    return (
      <div>
      <Carousel images={[carousel, carousel]}
      options={{ fullWidth: true, indicators: true }} carouselId={idgen()}
       fixedText={header}
      />
      <SignUpModal />
      <div className="container">
        {this.renderContent()}
      </div>
      </div>
    )
  }

  renderContent() {
    const startVetting = this.props.auth ?  <Link className="btn-flat start-vetting-btn" to={"/user"}>Start Vetting</Link> : <Link className="btn-flat start-vetting-btn modal-trigger" to={"#modal1"}>Start Vetting</Link>

    return (
        <div className="row">
          <div className="row" />
          <p className="col s12 center font-26 green-color" >
            Early-stage social enterprises are stuck in the "missing middle",
            too big for microfinance, yet too small for traditional banking.
          </p>
          <p className="center"><img src={missingMiddle} /></p>
          <p className="col s12 center font-26">The Direct-to-Social Enterprise
          program is a pilot program that aims to raise capital for early-stage social enterprises in a new and more efficient way.</p>
          <p className="center"><img src={financial} /></p>
          <p className="col s12 center font-26">CrowdVet.org, a pilot project under the DSE program, crowdsources
          the vetting of these loan applications so that Kiva can provide more
          early-stage social enterprises with access to 0% interest working capital loans.
          </p>
          <p className="col s12 font-40 green-color center">DSE Program at a Glance</p>
          <p className="center"><img src={dseGlance} /></p>
          <div className="col s6 center">
              {startVetting}

          </div>
          <div className="col s6 center">
            <Link className="btn-flat" id="learn-more-btn" to={"/how-works"} >Learn More</Link>
          </div>
        </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LearnAbout);
