import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Blogleft from "../blog/blogleft"
import BlogleftItem from '../blog/blogleft/item';
import Blogsingletext from "./blogtext"
import Blogsingleimg from "./blogimg"
import H2 from "./blogabzac/h2"
import H3 from "./blogabzac/h3"
import Ul from "./blogul"
import Li from "./blogul/item"
import Video from "../../unikit/video"



const Blogsingle = ({data, viev}) => {
    return (
        <div className="blogsingle">
          <div className="blogsingle-cont">
            <div className="blogsingle-cont-flex">
              <div className="blogsingle-cont-flex-statya">
                <Blogsingleimg firstimg={"/icons/m2igkDGvVrk (1).png"} />
                <H2 abzac={"Название статьи жирным грифтом и размером 18 пиксилей. Так же заголовок может быть в две строки а может даже и в 3, когда как. "} />
                <Blogsingletext blogtext={"На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце."} />
                <Ul>
                  <Li litext={"И список тут предусмотрен."} />
                  <Li litext={"И список тут предусмотрен."} />
                  <Li litext={"И список тут предусмотрен."} />
                  <Li litext={"И список тут предусмотрен."} />
                  <Li litext={"И список тут предусмотрен."} />
                </Ul>
                <H3 abzac={"Какой-то заголовок абзаца. Который кстати тоже может быть давольно-таки длинным."} />
                <Blogsingletext blogtext={"Тут опять естественно. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце."} />
                <Video videposter={"/icons/m2igkDGvVrk (1).png"} videopath={"/icons/adasd_vnG0VlFp.compressed.mp4"} btnimg={"/icons/icon (12).svg"} />
                <Blogsingletext blogtext={"Тут опять естественно. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце. На голубом небе ярко светило и играло своими золотыми лучами ласковое весеннее солнце."} />
                <div className="bottomstatya-sites">
                  <p>Автор: Trade Change Place</p>
                  <span>Поделиться: </span>
                  <div className="bottomstatya-sites-flex">
                    <a><img src="/icons/facebook-app.svg" /></a>
                    <a><img src="/icons/twitter-app.svg" /></a>
                    <a><img src="/icons/viber-round-color.svg" /></a>
                    <a><img src="/icons/telegram (1).svg" /></a>
                    <a><img src="/icons/wa-whatsapp.svg" /></a>
                    <a><img src="/icons/vk-round-color 1.svg" /></a>
                  </div>
                </div>
                <div className="statyainfo">
                  <a><img src="/icons/fi-sr-eye.svg" />{viev}</a>
                  <p>{data}</p>
                </div>
              </div>
              <Blogleft className="blog-cont-flex-left-int2">
                <BlogleftItem intimg={"/icons/picture (2).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                <BlogleftItem intimg={"/icons/picture (2).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
                <BlogleftItem intimg={"/icons/picture (2).png"} inttitle={"Заголовок статьи, в 2 строки, но если не влазит..."} inttext={"Тут  можно продемонстрировать короткий текст статьи, но не думаю что стоить перебарщивать с длиной..."} intdata={"31.02.2021"} />
              </Blogleft>
            </div>
          </div>
        </div>
    );
}
export default Blogsingle;
