import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dance to Live Music in Cambridge UK</title>
        <meta
          name="description"
          content="Prepare to get your groove on with dance-inducing tunes played live by Jazz and Funk big band, Linton Jazz and The Weirdest Thing on Oct 14 2023. Register now!"
        />
        <meta
          property="og:title"
          content="Dance to Live Music in Cambridge UK"
        />
        <meta
          property="og:description"
          content="Prepare to get your groove on with dance-inducing tunes played live by Jazz and Funk big band, Linton Jazz and The Weirdest Thing on Oct 14 2023. Register now!"
        />
      </Helmet>
      <div className="home-container1">
        <div className="home-main">
          <div className="home-left-banner">
            <img alt="image" src="/livemusicdance.svg" className="home-image" />
          </div>
          <div className="home-pink-line"></div>
          <div className="home-blank-menu"></div>
          <div className="home-pink-line1"></div>
          <div className="home-main-content">
            <div className="home-mob-banner-left">
              <img
                alt="image"
                src="/livemusicdance.svg"
                className="home-image1"
              />
            </div>
            <div className="home-about">
              <div className="home-heading">
                <span className="home-text">ABOUT</span>
              </div>
              <div className="home-content">
                <div className="home-text01">
                  <span className="home-text02">
                    <span>
                      Prepare to get your groove on with dance-inducing tunes
                      played live by Jazz and Funk big band, Linton Jazz and The
                      Weirdest Thing.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      We&apos;ll kick off the evening with a beginner-friendly
                      Ceroc dance lesson led by David Walker who has been
                      teaching Ceroc for 25 years. Whether you come with a
                      partner or without you will get a chance to try out all
                      the moves.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Then the evening takes off with a heady mix of
                      Contemporary Swing to Glenn Miller and 80’s Funk. 
                    </span>
                    <span>
                      Put your new moves into practice or do your own thing on
                      the dance floor, it’s going to be one big party!
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      And not only that, the best part is that all money from
                      ticket sales will go to one of the Cancer charities that
                      Linton Jazz supports.
                    </span>
                  </span>
                </div>
                <div id="success" className="home-success">
                  <span className="home-text14">
                    <span>Registration success!</span>
                    <br></br>
                  </span>
                </div>
                <div id="form_section" className="home-form">
                  <form
                    id="myForm"
                    name="registration"
                    enctype="application/x-www-form-urlencoded"
                    className="home-formdefault"
                  >
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email address"
                      className="home-textinput input"
                    />
                    <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
                  </form>
                </div>
                <div className="home-images">
                  <div className="home-images1">
                    <div className="home-message">
                      <img
                        alt="image"
                        src="/dancing_couple1-1500w.webp"
                        className="home-image2"
                      />
                      <div className="home-container2"></div>
                      <span className="home-text17">
                        Feel free to dance the way you want
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-support-images">
                      <img
                        alt="image"
                        src="/dancing_couple2-1200h.webp"
                        className="home-image3"
                      />
                      <span className="home-text18 DesktopMessage">
                        Feel the freedom to dance the way you want
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-music">
              <div className="home-heading1">
                <span className="home-text19 DesktopMenu">MUSIC</span>
              </div>
              <div className="home-content1">
                <span className="home-text20">
                  <span>Jazz and Funk supplied by Linton Jazz</span>
                  <br></br>
                  <span>
                    Classic rock, modern, pop covers and sassy originals
                    supplied by The Weirdest Thing
                  </span>
                </span>
              </div>
            </div>
            <div className="home-location">
              <div className="home-heading2">
                <span className="home-text24 DesktopMenu">LOCATION</span>
              </div>
              <div className="home-content2">
                <span className="home-text25">
                  <span>King Edward VII Memorial Hall</span>
                  <br></br>
                  <span>High Street</span>
                  <br></br>
                  <span>Newmarket</span>
                  <br></br>
                  <span>Suffolk CB8 8JP</span>
                </span>
              </div>
            </div>
            <div className="home-date">
              <div className="home-heading3">
                <span className="home-text33 DesktopMenu">DATE</span>
              </div>
              <div className="home-content3">
                <span className="home-text34">
                  October 14, 2023 7:30pm-11:30pm
                </span>
              </div>
            </div>
            <div className="home-tickets">
              <div className="home-heading4">
                <span className="home-text35 DesktopMenu">TICKETS</span>
              </div>
              <div className="home-content4">
                <span className="home-text36">£12, all goes to charity</span>
                <span className="home-booking-link">book on eventbrite</span>
              </div>
            </div>
            <div className="home-info">
              <div className="home-heading5">
                <span className="home-text37">INFO</span>
              </div>
              <a
                href="mailto:info@livemusic.dance?subject="
                className="home-link"
              >
                <div className="home-content5">
                  <span className="home-text38">info@livemusic.dance</span>
                </div>
              </a>
            </div>
            <div className="home-eventpartners">
              <div className="home-heading6">
                <span className="home-text39">EVENT PARTNERS</span>
              </div>
              <div className="home-logos">
                <div className="home-container3">
                  <a
                    href="https://www.lintonjazz.co.uk"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <img
                      alt="image"
                      src="/icons/linton-jazz.svg"
                      loading="lazy"
                      className="home-image4"
                    />
                  </a>
                  <a
                    href="https://www.ceroc.com/24/131/ceroc-fowlmere-fowlmere-village-hall?id=102"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/icons/ceroc_logo_colour.svg"
                      loading="lazy"
                      className="home-image5"
                    />
                  </a>
                </div>
                <div className="home-container4">
                  <a
                    href="https://www.akendi.co.uk"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link3"
                  >
                    <img
                      alt="image"
                      src="/icons/akendi_logo_b.svg"
                      loading="lazy"
                      className="home-image6"
                    />
                  </a>
                  <img
                    alt="image"
                    src="/icons/cmbswingdance_400x400.svg"
                    className="home-cambridge-swing-logo"
                  />
                  <img
                    alt="image"
                    src="/icons/twt%20logo_bw.svg"
                    className="home-image7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-pink-line2"></div>
        <div className="home-footer">
          <div className="home-left-banner1"></div>
          <div className="home-pink-line3"></div>
          <div className="home-blank-menu1"></div>
          <div className="home-pink-line4"></div>
          <div className="home-main-content1">
            <span className="home-text40">
              ©Akendi UK Limited, all rights reserved, 2023.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
