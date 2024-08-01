import React from "react";
import AddIcon from "../assets/plus.png";
import RelatedPost from "../widgets/RelatedPost";
import Tags from "../widgets/Tags";
import MostReads from "../widgets/MostReads";
import Categories from "../widgets/Categories";
import Comment from "./Comment";

function BlogDetails() {
  return (
        <div className="blog-cnt">
          <div className="blog-post-cnt post-details-cnt">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            <div className="blog-status-info">
              <p className="blue-text ">Read more in 8 Minutes</p>
              <div className="blog-status">
                <div className="date-info-cnt">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 4H3C1.89543 4 1 4.89543 1 6V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V6C19 4.89543 18.1046 4 17 4Z"
                      stroke="#333448"
                      stroke-opacity="0.5"
                    />
                    <path
                      d="M1 8C1 6.114 1 5.172 1.586 4.586C2.172 4 3.114 4 5 4H15C16.886 4 17.828 4 18.414 4.586C19 5.172 19 6.114 19 8H1Z"
                      fill="#333448"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M5 1V4M15 1V4"
                      stroke="#333448"
                      stroke-opacity="0.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="blue-text">05 Sep 2022</p>
                </div>
                <div className="date-info-cnt">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5.8C2 4.943 2 4.361 2.038 3.911C2.073 3.473 2.138 3.248 2.218 3.092L0.436 2.184C0.189 2.669 0.0899999 3.186 0.0439999 3.748C-8.9407e-08 4.298 0 4.976 0 5.8H2ZM2 8V5.8H0V8H2ZM0 8V13H2V8H0ZM0 13V15.914H2V13H0ZM0 15.914C0 17.205 1.562 17.852 2.475 16.939L1.061 15.525C1.13792 15.448 1.23594 15.3956 1.34265 15.3744C1.44936 15.3532 1.55998 15.364 1.6605 15.4057C1.76102 15.4473 1.84693 15.5179 1.90737 15.6083C1.9678 15.6988 2.00004 15.8052 2 15.914H0ZM2.475 16.939L5.415 14L4 12.586L1.061 15.525L2.475 16.939ZM12.2 12H5.414V14H12.2V12ZM14.908 11.782C14.752 11.862 14.528 11.927 14.089 11.962C13.639 11.999 13.057 12 12.2 12V14C13.024 14 13.701 14 14.252 13.956C14.814 13.91 15.331 13.811 15.816 13.564L14.908 11.782ZM15.782 10.908C15.5903 11.2843 15.2843 11.5903 14.908 11.782L15.816 13.564C16.5686 13.1805 17.1805 12.5686 17.564 11.816L15.782 10.908ZM16 8.2C16 9.057 16 9.639 15.962 10.089C15.927 10.527 15.862 10.752 15.782 10.908L17.564 11.816C17.811 11.331 17.91 10.814 17.956 10.252C18.001 9.702 18 9.024 18 8.2H16ZM16 5.8V8.2H18V5.8H16ZM15.782 3.092C15.862 3.248 15.927 3.472 15.962 3.911C16 4.361 16 4.943 16 5.8H18C18 4.976 18 4.299 17.956 3.748C17.91 3.186 17.811 2.669 17.564 2.184L15.782 3.092ZM14.908 2.218C15.2843 2.40974 15.5903 2.71569 15.782 3.092L17.564 2.184C17.1805 1.43139 16.5686 0.819488 15.816 0.436L14.908 2.218ZM12.2 2C13.057 2 13.639 2 14.089 2.038C14.527 2.073 14.752 2.138 14.908 2.218L15.816 0.436C15.331 0.189 14.814 0.0900002 14.252 0.0440001C13.702 1.49012e-07 13.024 0 12.2 0V2ZM5.8 2H12.2V0H5.8V2ZM3.092 2.218C3.248 2.138 3.472 2.073 3.911 2.038C4.361 2 4.943 2 5.8 2V0C4.976 0 4.299 1.49012e-07 3.748 0.0440001C3.186 0.0900002 2.669 0.189 2.184 0.436L3.092 2.218ZM2.218 3.092C2.40974 2.71569 2.71569 2.40974 3.092 2.218L2.184 0.436C1.43139 0.819488 0.819488 1.43139 0.436 2.184L2.218 3.092ZM5.414 14V12C4.88361 12.0001 4.37499 12.2109 4 12.586L5.414 14Z"
                      fill="#333448"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M5 5H13M5 9H10"
                      stroke="#333448"
                      stroke-opacity="0.5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p className="blue-text">58</p>
                </div>
                <div className="date-info-cnt">
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.544 7.045C20.848 7.471 21 7.685 21 8C21 8.316 20.848 8.529 20.544 8.955C19.178 10.871 15.689 15 11 15C6.31 15 2.822 10.87 1.456 8.955C1.152 8.529 1 8.315 1 8C1 7.684 1.152 7.471 1.456 7.045C2.822 5.129 6.311 1 11 1C15.69 1 19.178 5.13 20.544 7.045Z"
                      stroke="#333448"
                      stroke-opacity="0.5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8Z"
                      stroke="#333448"
                      stroke-opacity="0.5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="blue-text">2.8k</p>
                </div>
              </div>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/a090/4ed3/75794b707ee77d9722968ddc31d203bd?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HaCdcKMKsgQv0ZniCZsvbt-RwhCXFrc8Qqso-TrXkVHSFKEMEsLraw5GGUMEfJsQozkI42YWBwd2b8iGnlO6jcBUNpQmF6lDbT2oSB~yXKdCpWqEB2nZeJtFp6yPYX~WjK5h37-8XdkCvnIS5CVGEsugC~Zbx-pzMnQHwAC730HhwBGVwZlAT1YRLuRmBeOKGT--oYhSVrjhbAHE699GYFHd2a-pCLimIThoI~8y17D3hV5pAPGF1qyydGn3mBCyE0ZOSb5Wj261KsXk9oArb7FzdnXCzgVbkfIJpkkS14yFO64D~iqtpUB1mOf8r92gJr~PMCWhsquWTlM9lIQZhg__"
              alt="blog-img"
              className="blog-image"
            />
            <p className="blog-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="social-reach-cnt">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon"
              >
                <g clip-path="url(#clip0_1_1305)">
                  <g clip-path="url(#clip1_1_1305)">
                    <g clip-path="url(#clip2_1_1305)">
                      <path
                        d="M15.5 7.83008C15.5 3.68794 12.1421 0.330078 8 0.330078C3.85786 0.330078 0.5 3.68794 0.5 7.83008C0.5 11.5735 3.24263 14.6763 6.82812 15.239V9.99805H4.92383V7.83008H6.82812V6.17774C6.82812 4.29805 7.94785 3.25977 9.66099 3.25977C10.4813 3.25977 11.3398 3.40625 11.3398 3.40625V5.25196H10.3941C9.4625 5.25196 9.17188 5.83013 9.17188 6.42383V7.83008H11.252L10.9194 9.99805H9.17188V15.239C12.7574 14.6763 15.5 11.5735 15.5 7.83008Z"
                        fill="#333448"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_1305">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.5 0.330078)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1_1305">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.5 0.330078)"
                    />
                  </clipPath>
                  <clipPath id="clip2_1_1305">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.5 0.330078)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>2.5k</p>
            </div>
            <div className="blog-tags">
              <p className="widget-tag"># Endodontics (10)</p>
              <p className="widget-tag"># Endodontics (10)</p>
              <p className="widget-tag"># Endodontics (10)</p>
            </div>
          </div>
          <div className="blogger-details-cnt profileInfo">
            <img
              src="https://s3-alpha-sig.figma.com/img/ea4c/73d0/19e43707a3c8797a72b8069971487eae?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NKHKQm6CsXhKGcEvUNJtyikwlMylz0n~wvWTWJG6YE7TaX-a783TkCXvxPNSq8s47WzKxfqItBELg~rkYMB7hz6sE6l~GYxE2TZwvh8tP01x1X61lDqV3qkin051bMGvAgoryfIVAixL3hid7MxIsxjSW89HqK76y-tIt4G1FwmbV5M8qJDiiudM8CIEjW2vXuAGHfjy9wV5t~EfiXU~HcZKyUjMWLEvdquXhESgB~1iihhdtv5To0PUIEa7KrQKQyfkXmirMYbG1S9TIFC51gnH2ynVjMhavKl-fSgv6Rc3YXEaSCiIpZ6atvsquEwH8k672V4nRrxn4N6qadXoQA__"
              alt="profile-img"
              className="profile-img"
            />
            <h4>Elizabeth</h4>
            <p>Dentist</p>
            <p className="profile-bio">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem recusandae atque iusto ipsam. Tempore nihil modi
              doloribus architecto necessitatibus assumenda aut, illo accusamus
              ipsa, facilis quaerat expedita repellat quisquam! Magni.
            </p>
            <div className="profile-socials-cnt">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_1367)">
                  <g clip-path="url(#clip1_1_1367)">
                    <g clip-path="url(#clip2_1_1367)">
                      <path
                        d="M16 7.5C16 3.35786 12.6421 0 8.5 0C4.35786 0 1 3.35786 1 7.5C1 11.2434 3.74263 14.3462 7.32812 14.9089V9.66797H5.42383V7.5H7.32812V5.84766C7.32812 3.96797 8.44785 2.92969 10.161 2.92969C10.9813 2.92969 11.8398 3.07617 11.8398 3.07617V4.92188H10.8941C9.9625 4.92188 9.67188 5.50005 9.67188 6.09375V7.5H11.752L11.4194 9.66797H9.67188V14.9089C13.2574 14.3462 16 11.2434 16 7.5Z"
                        fill="#333448"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_1367">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1_1367">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                  <clipPath id="clip2_1_1367">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_1372)">
                  <g clip-path="url(#clip1_1_1372)">
                    <g clip-path="url(#clip2_1_1372)">
                      <path
                        d="M14.5458 0.109375H1.76367C1.15137 0.109375 0.65625 0.592773 0.65625 1.19043V14.0254C0.65625 14.6231 1.15137 15.1094 1.76367 15.1094H14.5458C15.1582 15.1094 15.6562 14.6231 15.6562 14.0283V1.19043C15.6562 0.592773 15.1582 0.109375 14.5458 0.109375ZM5.10645 12.8916H2.87988V5.73144H5.10645V12.8916ZM3.99316 4.75586C3.27832 4.75586 2.70117 4.17871 2.70117 3.46679C2.70117 2.75488 3.27832 2.17774 3.99316 2.17774C4.70508 2.17774 5.28223 2.75488 5.28223 3.46679C5.28223 4.17579 4.70508 4.75586 3.99316 4.75586ZM13.4384 12.8916H11.2149V9.41113C11.2149 8.58204 11.2001 7.51269 10.0576 7.51269C8.90039 7.51269 8.72461 8.41796 8.72461 9.35254V12.8916H6.50391V5.73144H8.63672V6.70997H8.66602C8.96191 6.14747 9.68848 5.55273 10.7696 5.55273C13.0225 5.55273 13.4384 7.03516 13.4384 8.9629V12.8916Z"
                        fill="#333448"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_1372">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1_1372">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                  <clipPath id="clip2_1_1372">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_1377)">
                  <g clip-path="url(#clip1_1_1377)">
                    <g clip-path="url(#clip2_1_1377)">
                      <path
                        d="M5.3751 12.7036C11.034 12.7036 14.1301 8.01402 14.1301 3.94849C14.1301 3.81665 14.1273 3.68189 14.1214 3.55005C14.7236 3.11449 15.2435 2.57499 15.6562 1.95689C15.0954 2.20645 14.4998 2.36944 13.8899 2.44029C14.5321 2.0554 15.0128 1.45075 15.2431 0.738437C14.639 1.09643 13.9784 1.34896 13.2896 1.48521C12.8256 0.992058 12.2118 0.66553 11.5435 0.556115C10.8752 0.446699 10.1895 0.560489 9.59234 0.879893C8.99518 1.19929 8.51988 1.70652 8.2399 2.32315C7.95993 2.93978 7.89089 3.63146 8.04346 4.29126C6.82031 4.22988 5.62371 3.91214 4.53124 3.35864C3.43877 2.80514 2.47481 2.02823 1.70186 1.07828C1.309 1.7556 1.18878 2.55711 1.36564 3.31988C1.5425 4.08266 2.00316 4.74949 2.654 5.18482C2.16539 5.16931 1.68748 5.03776 1.25977 4.80103V4.83913C1.25933 5.54993 1.50506 6.23895 1.95519 6.78906C2.40533 7.33917 3.03208 7.71643 3.72891 7.8567C3.27628 7.98054 2.80124 7.99858 2.34053 7.90943C2.53716 8.52073 2.91973 9.05538 3.43486 9.4388C3.94998 9.8222 4.57195 10.0352 5.21396 10.0481C4.12402 10.9043 2.77761 11.3687 1.3916 11.3665C1.1458 11.3661 0.900249 11.351 0.65625 11.3214C2.06429 12.2247 3.70221 12.7045 5.3751 12.7036Z"
                        fill="#333448"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_1377">
                    <rect
                      width="15"
                      height="13"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1_1377">
                    <rect
                      width="15"
                      height="13"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                  <clipPath id="clip2_1_1377">
                    <rect
                      width="15"
                      height="13"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_1382)">
                  <g clip-path="url(#clip1_1_1382)">
                    <g clip-path="url(#clip2_1_1382)">
                      <path
                        d="M8.15625 1.45996C10.1602 1.45996 10.3975 1.46875 11.1855 1.50391C11.9179 1.53614 12.3134 1.65918 12.5772 1.76172C12.9258 1.89649 13.1777 2.06054 13.4384 2.32129C13.7022 2.58496 13.8632 2.83399 13.998 3.18262C14.1005 3.44629 14.2236 3.84472 14.2558 4.57421C14.291 5.36523 14.2999 5.60254 14.2999 7.60352C14.2999 9.60743 14.291 9.84473 14.2558 10.6328C14.2236 11.3653 14.1005 11.7608 13.998 12.0244C13.8632 12.3731 13.6993 12.625 13.4384 12.8858C13.1748 13.1494 12.9258 13.3106 12.5772 13.4453C12.3134 13.5479 11.915 13.6709 11.1855 13.7032C10.3945 13.7383 10.1572 13.7471 8.15625 13.7471C6.15234 13.7471 5.91504 13.7383 5.12695 13.7032C4.39453 13.6709 3.99902 13.5479 3.73535 13.4453C3.38672 13.3106 3.13477 13.1465 2.87402 12.8858C2.61035 12.6221 2.44922 12.3731 2.31445 12.0244C2.21191 11.7608 2.08887 11.3623 2.05664 10.6328C2.02148 9.84179 2.0127 9.6045 2.0127 7.60352C2.0127 5.59961 2.02148 5.3623 2.05664 4.57421C2.08887 3.84179 2.21191 3.44629 2.31445 3.18262C2.44922 2.83399 2.61328 2.58204 2.87402 2.32129C3.1377 2.05762 3.38672 1.89649 3.73535 1.76172C3.99902 1.65918 4.39746 1.53614 5.12695 1.50391C5.91504 1.46875 6.15234 1.45996 8.15625 1.45996ZM8.15625 0.109375C6.12012 0.109375 5.86523 0.118164 5.06543 0.15332C4.26855 0.188477 3.7207 0.317383 3.24609 0.501953C2.75098 0.695312 2.33203 0.950195 1.91602 1.36915C1.49707 1.78516 1.24219 2.2041 1.04883 2.69629C0.864258 3.17383 0.735352 3.71874 0.700195 4.51562C0.665039 5.31836 0.65625 5.57325 0.65625 7.60938C0.65625 9.6455 0.665039 9.9004 0.700195 10.7002C0.735352 11.4971 0.864258 12.0449 1.04883 12.5196C1.24219 13.0147 1.49707 13.4336 1.91602 13.8496C2.33203 14.2656 2.75098 14.5235 3.24316 14.7139C3.7207 14.8985 4.26563 15.0274 5.0625 15.0625C5.8623 15.0977 6.11719 15.1065 8.15332 15.1065C10.1894 15.1065 10.4443 15.0977 11.2442 15.0625C12.041 15.0274 12.5889 14.8985 13.0634 14.7139C13.5556 14.5235 13.9746 14.2656 14.3906 13.8496C14.8067 13.4336 15.0645 13.0147 15.2549 12.5225C15.4395 12.0449 15.5683 11.5 15.6035 10.7032C15.6386 9.90332 15.6475 9.64844 15.6475 7.61231C15.6475 5.57618 15.6386 5.32128 15.6035 4.52148C15.5683 3.7246 15.4395 3.17676 15.2549 2.70215C15.0704 2.20411 14.8154 1.78516 14.3965 1.36915C13.9804 0.953125 13.5616 0.695313 13.0694 0.504883C12.5918 0.320312 12.0468 0.191406 11.25 0.15625C10.4473 0.118164 10.1924 0.109375 8.15625 0.109375Z"
                        fill="#333448"
                      />
                      <path
                        d="M8.15723 3.75781C6.03028 3.75781 4.30469 5.48339 4.30469 7.61035C4.30469 9.7373 6.03028 11.4629 8.15723 11.4629C10.2842 11.4629 12.0097 9.7373 12.0097 7.61035C12.0097 5.48339 10.2842 3.75781 8.15723 3.75781ZM8.15723 10.1094C6.77735 10.1094 5.65821 8.99023 5.65821 7.61035C5.65821 6.23046 6.77735 5.11132 8.15723 5.11132C9.53711 5.11132 10.6562 6.23046 10.6562 7.61035C10.6562 8.99023 9.53711 10.1094 8.15723 10.1094Z"
                        fill="#333448"
                      />
                      <path
                        d="M13.0644 3.60255C13.0644 4.10058 12.6601 4.50196 12.165 4.50196C11.6669 4.50196 11.2656 4.09766 11.2656 3.60255C11.2656 3.1045 11.6699 2.70312 12.165 2.70312C12.6601 2.70312 13.0644 3.10743 13.0644 3.60255Z"
                        fill="#333448"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_1382">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1_1382">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                  <clipPath id="clip2_1_1382">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.65625 0.109375)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="comments-cnt">
            <h4 className="comments-title">Comments</h4>
            <Comment/> 
            <Comment/> 
            <Comment/> 
          </div>
        </div>
  )
}

export default BlogDetails