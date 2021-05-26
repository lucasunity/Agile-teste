import React, { Component } from "react";

export const General = ({}) => {
  const clickMenu = async (ref) => {};

  return (
    <div style={{ display: "contents" }}>
      <div className="container-18" id="general_menu">
        <div className="container-27">
          <div className="container-29">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <g fill="none" fillRule="evenodd" stroke="#9B9B9B">
                <path
                  fillRule="nonzero"
                  strokeWidth="1.5"
                  d="M17 33c8.822 0 16-7.177 16-16 0-8.822-7.178-16-16-16S1 8.177 1 17c0 8.822 7.178 16 16 16z"
                />
                <g transform="translate(10 10)">
                  <rect width="1" height="13" x="6.5" y=".5" rx=".5" />
                  <rect
                    width="1"
                    height="13"
                    x="6.5"
                    y=".5"
                    rx=".5"
                    transform="rotate(90 7 7)"
                  />
                </g>
              </g>
            </svg>

            <p className="text6"> Mi Lista</p>
          </div>

          <div className="container-29">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                <path
                  stroke="#9B9B9B"
                  strokeWidth="1.5"
                  d="M16 32c8.822 0 16-7.177 16-16 0-8.822-7.178-16-16-16S0 7.177 0 16c0 8.822 7.178 16 16 16z"
                />
                <path
                  fill="#9B9B9B"
                  fillRule="nonzero"
                  d="M16.237 19.556a7.548 7.548 0 0 1 6.257 3.329 1.178 1.178 0 1 1-1.952 1.32 5.194 5.194 0 0 0-4.305-2.294 5.195 5.195 0 0 0-4.305 2.293 1.178 1.178 0 0 1-1.952-1.32 7.548 7.548 0 0 1 6.257-3.328z"
                />
                <circle cx="7.111" cy="14.222" r="1.778" fill="#9B9B9B" />
                <circle cx="24.889" cy="14.222" r="1.778" fill="#9B9B9B" />
              </g>
            </svg>

            <p className="text6">Evaluar</p>
          </div>

          <div className="container-29">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                <path
                  stroke="#9B9B9B"
                  strokeWidth="1.5"
                  d="M16 32c8.822 0 16-7.177 16-16 0-8.822-7.178-16-16-16S0 7.177 0 16c0 8.822 7.178 16 16 16z"
                />
                <circle cx="16.143" cy="16.143" r="3.699" fill="#9B9B9B" />
              </g>
            </svg>

            <p className="text6">Grabar</p>
          </div>

          <div className="container-29">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
            >
              <g fill="none" fillRule="nonzero">
                <path
                  stroke="#9B9B9B"
                  strokeWidth="1.5"
                  d="M17 33c8.822 0 16-7.177 16-16 0-8.822-7.178-16-16-16S1 8.177 1 17c0 8.822 7.178 16 16 16z"
                />
                <path
                  fill="#9B9B9B"
                  d="M15.186 10.943l1.144-1.147v9.096c0 .49.396.887.884.887a.886.886 0 0 0 .884-.887V9.796l1.144 1.147a.88.88 0 0 0 1.25 0 .89.89 0 0 0 0-1.255L17.84 7.027a.903.903 0 0 0-.066-.06l-.03-.022-.04-.029-.037-.023-.036-.022c-.013-.007-.026-.012-.04-.018-.012-.007-.025-.013-.039-.019l-.038-.014-.044-.015-.038-.01-.045-.011-.045-.007-.04-.006a.902.902 0 0 0-.083-.004h-.01a.884.884 0 0 0-.082.004c-.014.001-.027.004-.04.006l-.046.007-.044.01-.04.01-.042.016-.04.014-.037.018c-.014.006-.028.012-.041.02l-.035.02-.04.024-.036.028-.033.024a.896.896 0 0 0-.062.056l-.003.002-2.653 2.662a.89.89 0 0 0 0 1.255.883.883 0 0 0 1.251 0z"
                />
                <path
                  fill="#9B9B9B"
                  d="M22.959 13H20.66a.863.863 0 0 0-.862.864c0 .478.386.865.862.865h1.436v8.644H12.33V14.73h1.436a.863.863 0 0 0 .862-.865.863.863 0 0 0-.862-.864H11.47a.863.863 0 0 0-.862.864v10.374c0 .477.386.864.862.864h11.489a.863.863 0 0 0 .861-.864V13.864A.863.863 0 0 0 22.96 13z"
                />
              </g>
            </svg>

            <p className="text6">Compartir</p>
          </div>
        </div>

        <div className="container-28">
          <p className="text4">SINOPSE</p>
          <p className="text5" id="sinopse_id"></p>
        </div>
      </div>
    </div>
  );
};
