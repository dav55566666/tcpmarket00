import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Blogleft from "../blog/blogleft"
import Blogright from "../blog/blogright"
import BlogleftItem from '../blog/blogleft/item';
import BlogrightItem from '../blog/blogright/item';
const Blog = () => {
    return (
        <div className="blog">
            <div className="blog-cont">
              <h1>Блог</h1>
              <div className="blog-cont-flex">
                <Blogleft>
                  <BlogleftItem intimg={"/icons/picture (2).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                  <BlogleftItem intimg={"/icons/picture (2).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                  <BlogleftItem intimg={"/icons/picture (2).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                </Blogleft>
                <Blogright>
                  <BlogrightItem intimg={"/icons/picture (3).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                  <BlogrightItem intimg={"/icons/picture (3).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                  <BlogrightItem intimg={"/icons/picture (3).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                  <BlogrightItem intimg={"/icons/picture (3).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                  <BlogrightItem intimg={"/icons/picture (3).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                  <BlogrightItem intimg={"/icons/picture (3).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                </Blogright>
              </div>
            </div>
        </div>
    );
}
export default Blog;
