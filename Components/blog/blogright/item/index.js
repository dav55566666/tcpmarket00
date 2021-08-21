import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const BlogrightItem = ({intimg, inttitle, inttext, intdata}) => {
    return (
      <div className="blog-cont-flex-right-int-item">
        <img src={intimg} />
        <div className="boxtext">
          <h5>{inttitle}</h5>
          <p>{inttext}</p>
          <div className="blog-cont-flex-right-int-item-bottom">
            <a href="blogsingle">Читать</a>
            <span>{intdata}</span>
          </div>
        </div>
      </div>
    );
}
export default BlogrightItem;
