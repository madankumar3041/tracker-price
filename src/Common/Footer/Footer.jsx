import React from "react";
import './Footer.css'
function Footer() {
  return (
    <div className="footer-main">
      <div id="site-footer-credit">
        <div class="site-section-wrapper site-section-wrapper-footer">
          <div id="site-footer-credits">
            <p class="site-credit">
              Copyright © 2020-2021 The Infowarehouse 
            </p>
          </div>
          {/* <nav id="site-copyright-nav">
            <ul id="site-copyright-menu" class="clearfix">
              <li
                id="menu-item-4339"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4339"
              >
                <a href="/">
                  Terms and Conditions
                </a>
              </li>
              <li
                id="menu-item-4337"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4337"
              >
                <a href="/">
                  Privacy Policy
                </a>
              </li>
              <li
                id="menu-item-4338"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4338"
              >
                <a href="/">
                  Refund Policy
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
