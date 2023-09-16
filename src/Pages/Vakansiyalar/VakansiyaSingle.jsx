import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LayoutCompanent from "../../layoutCompanent/layoutCompanent";
import NavBar from "../NavbarPage/NavBar";
import NavbarContent from "../../layoutCompanent/NavbarContent";
import { Link } from "react-router-dom";
import style from "./Vakansiyalar.module.css";
import axios from "axios";
import { connect } from "react-redux";
const url = "https://json-xacmaz.vercel.app/post4/";
function VakansiyaSingle({ user, dispatch }) {
  const [modal , setmodal] = useState(false)
  const { id } = useParams();
  useEffect(() => {
    axios.get(url + id).then(({ data }) => {
      console.log(data);
      dispatch({
        type: "data",
        payload: data,
      });
    });
  }, []);
  return (
    <>
      <LayoutCompanent>
        <NavBar />
        <NavbarContent />

        <div className="content-navbar-block-vakansiyalar">
          <div className="content-top-text-navbar-block">
            <Link to={"/"}>
              <p className="pElement-content-navabr-block">ana səhifə</p>
            </Link>
            <p className="pElement-bold-navbar-block">Vakansiyalar</p>
            <p className="pElement-bold-navbar-block">
              Lorem Ipsum is simply dummy text
            </p>
          </div>
          <div className="content-text-navbar-block">
            <p>Vakansiyalar</p>
            <h2>Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</h2>
          </div>
        </div>

        <div className={style["page-container"]}>
             
             <h1>Vakansiya #{`${id}`}</h1>

          <div className={style["page-bolck"]}>
            <h2>Lorem Ipsum is simply dummy text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className={style["page-bolck"]}>
            <h2>İşiniz nədən ibarətdir?</h2>
              <ul>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab culpa nemo nisi modi tempora illo eius, impedit, minus harum accusantium, quas veniam dolorum blanditiis quo ex perferendis deleniti eaque sit.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error mollitia quisquam et eius aliquam necessitatibus recusandae porro veniam. Maxime rem fugiat, quibusdam accusamus molestias nam ipsum dolorum placeat impedit?</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error mollitia quisquam et eius aliquam necessitatibus recusandae porro veniam. Maxime rem fugiat, quibusdam accusamus molestias nam ipsum dolorum placeat impedit?</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error mollitia quisquam et eius aliquam necessitatibus recusandae porro veniam. Maxime rem fugiat, quibusdam accusamus molestias nam ipsum dolorum placeat impedit?</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error mollitia quisquam et eius aliquam necessitatibus recusandae porro veniam. Maxime rem fugiat, quibusdam accusamus molestias nam ipsum dolorum placeat impedit?</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error mollitia quisquam et eius aliquam necessitatibus recusandae porro veniam. Maxime rem fugiat, quibusdam accusamus molestias nam ipsum dolorum placeat impedit?</li>
              </ul>
          </div>

          <div className={style["page-bolck"]}>
            <h2>Tələb edilən bilik, bacarıq və təcrübə</h2>
              <ul>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab culpa nemo nisi modi tempora illo eius, impedit, minus harum accusantium, quas veniam dolorum blanditiis quo ex. Price {`${user.price}`} </li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error mollitia quisquam et eius aliquam necessitatibus recusandae porro veniam. Maxime rem fugiat, quibusdam accusamus molestias nam ipsum dolorum placeat impedit?</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error mollitia quisquam et eius aliquam necessitatibus recusandae porro veniam. Maxime rem fugiat, quibusdam accusamus molestias nam ipsum dolorum placeat impedit?</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error mollitia quisquam et eius aliquam necessitatibus recusandae porro veniam. Maxime rem fugiat, quibusdam accusamus molestias nam ipsum dolorum placeat impedit?</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error mollitia quisquam et eius aliquam necessitatibus recusandae porro veniam. Maxime rem fugiat, quibusdam accusamus molestias nam ipsum dolorum placeat impedit?</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error mollitia quisquam et eius aliquam necessitatibus recusandae porro veniam. Maxime rem fugiat, quibusdam accusamus molestias nam ipsum dolorum placeat impedit?</li>
              </ul>
          </div>

          <h3 onClick={()=>setmodal(true)} >Müraciət et</h3>

          <div className={`modal ${modal? `modal` :`modal-none`}`}>
              <div className="modal-content">
              <h2>Məlumatlar</h2>
              <div className='modal-input'>
                <input type="text"  placeholder="Ad"/>
                <input type="text" placeholder="Soyad" />
              </div>
              <div className='modal-input'>
                <input type="text" placeholder="Cinsiniz" />
                <input type="date" placeholder="Doğum tarixi*"/>
                <input type="text" placeholder="İş təcrübəsi*"/>
              </div>
              <div className='modal-input'>
                <input type="email"  placeholder="Email*"/>
                <input type="number"  placeholder="Telefon*"/>
              </div>
              <label for="upload-photo">CV fayı yükləyin</label>
              <input type="file" name="photo" id="upload-photo" />    
              <p>Göndər</p>
              <i onClick={()=>setmodal(false)} className="fa-solid fa-xmark"></i>
            </div>
          </div>

        </div>

        <div className={style["content"]}>
          <div className={style["content-right"]}>
            <h2>Əlaqə</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <div className={style["content-text-row"]}>
              <p>+994 50 123 45 67</p>
              <p>+994 70 123 45 67</p>
              <p>info@xacmazagro.az</p>
            </div>
          </div>
          <div className={style["content-left"]}>
            <h3>Bizi izlə!</h3>
            <div className={style["content-left-row"]}>
              <div className={style["content-icon"]}>
                <i className="fa-brands fa-linkedin"></i>
                <p>linkedin</p>
              </div>
              <div className={style["content-icon"]}>
                <i className="fa-brands fa-twitter"></i>
                <p>Twitte</p>
              </div>
              <div className={style["content-icon"]}>
                <i className="fa-solid fa-envelope"></i>
                <p>E-mail</p>
              </div>
            </div>
          </div>
        </div>
      </LayoutCompanent>
    </>
  );
}
const mapstate = (state) => state;
export default connect(mapstate)(VakansiyaSingle);
