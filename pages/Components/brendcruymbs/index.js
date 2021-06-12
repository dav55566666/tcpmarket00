import React from 'react';
import PropTypes from 'prop-types';
import Prev from "../../../public/icons/arrovback.svg"

const Brendcrumbs = ({ backtext, children, location }) => {
    return (
        <div className="brendcrumbs">
            <div className="brendcrumbs-cont">
              <div className="brendcrumbs-cont-left">
                <a>
                  <img src={Prev} />
                  {backtext}
                </a>
              </div>
              <div className="brendcrumbs-cont-right">
                {children}
                <p>{location}</p>
              </div>
            </div>
        </div>
    );
}
export default Brendcrumbs;
