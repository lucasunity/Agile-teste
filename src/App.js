import React, { Component } from "react";
import "./App.css";
import "./assets/styles/cast.css";
import $ from "jquery";
import { Temporadas, BarraTemporadas } from "./assets/components/temporadas";
import { Episodio } from "./assets/components/episodio";
import { Elenco } from "./assets/components/elenco";
import { Menu } from "./assets/components/menu";
import { General } from "./assets/components/general";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
    this.state = {
      castBackground:
        "https://occ-0-894-1123.1.nflxso.net/art/0ef00/005f864851e4be98e96f55020ce769fba680ef00.jpg",
      title: "",
      selectTemporada: 1,
      subTitle: "80% INDICADO / CIENCIA FICCIÓN / 2015 / EUA /14",
      sinopse: "",
      temporadas: [],
      width: null,
      cast: [],
    };
  }

  componentDidMount() {
    this.requestAPI();
  }

  async requestAPI() {
    fetch("https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json")
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);

        document.getElementById("title_id").innerText = res.Title;
        document.getElementById("subTitle_id").innerText = this.state.subTitle;

        document.getElementById("sinopse_id").innerText = res.Synopsis;

        document.getElementById(
          "container-2_id"
        ).style = `background-image: url(${res.Images.Background});`;

        setTimeout(function () {
          document.getElementById("barraTemporadas0").style.backgroundColor =
            "#2bd800";
        }, 500);

        this.setState({
          title: res.Title,
          cast: res,
          sinopse: res.Synopsis,
          castBackground: res.Images.Background,
        });
      });

    fetch("https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json")
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        this.setState({ temporadas: res });
      });
  }

  scroll(direction) {
    const width = $(".image-container").innerWidth();
    let far = (width / 20) * direction;
    let pos = $(".image-container").scrollLeft() + far;
    $(".image-container").animate({ scrollLeft: pos }, 500);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="container-2" id="container-2_id">
            <div className="container-4">
              <div className="container-6">
                <p id="title_id" className="title">
                  {" "}
                </p>
                <p id="subTitle_id" className="subTitle">
                  {" "}
                </p>
              </div>

              <div className="container-7">
                <div className="container-8">
                  <div className="container-9">
                    <Temporadas temporadas={this.state.temporadas} />
                  </div>

                  <div className="container-12">
                    <BarraTemporadas temporadas={this.state.temporadas} />
                  </div>

                  <div className="container-10">
                    <Episodio
                      temporadas={this.state.temporadas}
                      selectTemporada={this.state.selectTemporada}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-3">
            <div className="container-14">
              <div className="container-16">
                <Menu />

                <div className="container-20">
                  <div className="tele">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="30"
                      viewBox="0 0 49 30"
                    >
                      <defs>
                        <path id="a" d="M0 .417h47.959v27.747H0z" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(.376 1.834)">
                          <path
                            fill="#FFF"
                            d="M19.85 15.375h-.138c-1.028 0-2.055.002-3.082-.004-.129 0-.15.04-.15.149.003 2.964.003 5.927 0 8.89 0 .117.034.146.154.145 1.02-.004 2.04-.002 3.059-.002.157 0 .157 0 .157-.147v-9.031zm-9.923 5.667c-.15.135-.278.266-.422.379-.47.366-1.003.554-1.612.434-1.329-.26-2.092-1.795-1.235-2.945a1.88 1.88 0 0 1 1.54-.787c.502-.01.942.175 1.333.465.135.1.26.212.394.324l2.65-1.709c-1.486-1.863-3.723-2.688-6.034-1.918-1.89.63-3.828 2.521-3.496 5.167.22 1.753 1.439 3.906 4.208 4.413a5.31 5.31 0 0 0 5.26-2.082l-2.586-1.741zM37.38 15.42v.137l-.001 1.605-.015 7.24c0 .088-.01.157.13.157 2.392-.005 4.783-.004 7.175-.002.107 0 .135-.03.135-.129-.005-.626-.002-1.252-.002-1.878v-.132h-4.094v-1.256H44.6c.173 0 .173 0 .173-.168v-1.97c0-.156 0-.156-.163-.156H40.71v-1.35h4.045V15.42H37.38zm-13.447-.339c-.005.064-.01.1-.01.136 0 3.059 0 6.118-.002 9.176 0 .103.033.127.137.127.923-.004 1.847-.002 2.77-.003.04 0 .077-.004.13-.007v-3.553l6.177 3.961V15.4H33c-.876 0-1.751.002-2.627-.003-.118 0-.145.034-.145.141.004 1.108.003 2.216.003 3.324v.144l-6.297-3.925zM0 16.607v-4.144l.12.003 11.29.014 6.755.006 13.005.013c2.228.003 4.455.007 6.683.009l9.97.007h.136v15.648h-.15l-2.795-.003-5.626-.006-8.447-.004c-6.451-.002-12.902-.002-19.353-.005-3.795-.001-7.59-.005-11.386-.008-.17 0-.17 0-.17-.158L.014 16.787c0-.06-.01-.12-.014-.18z"
                            mask="url(#b)"
                          />
                        </g>
                        <path
                          fill="#FFF"
                          d="M23.241.436v2.25h-4.235v1.48h4.248v2.43h-4.253v1.369h4.28v2.267h-7.834V.436zM14.038.436v2.578h-2.78v7.218h-3.45v-7.21h-2.91V.436zM36.545 10.232V.436h7.8v2.243h-4.291v1.463h4.299v2.442h-4.296V7.97h4.323v2.262zM29.124 7.612h3.401v2.62h-6.529V.436h3.128z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="container-17">
                <div className="container-24">
                  <div className="container-21" id="id_general_barra">
                    {" "}
                  </div>
                </div>

                <div className="container-25">
                  <div
                    className="container-22"
                    id="id_elenco_barra"
                    style={{ display: "none" }}
                  />
                </div>

                <div className="container-26">
                  <div
                    className="container-23"
                    id="id_premios_barra"
                    style={{ display: "none" }}
                  />
                </div>

                <div className="container-20"></div>
              </div>

              <General />

              <div
                className="container-18"
                id="elenco_menu"
                style={{ display: "none" }}
              >
                <div className="wrapper">
                  <a className="prev" onClick={this.scroll.bind(null, -1)}>
                    &#10094;
                  </a>

                  <Elenco cast={this.state.cast} />

                  <a className="next" onClick={this.scroll.bind(null, 1)}>
                    &#10095;
                  </a>
                </div>
              </div>

              <div
                className="container-18"
                id="premios_menu"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
