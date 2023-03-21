import React from 'react';

interface Props {}

const Footer: React.FC<Props> = (props) => {
    return (
        <div className="footer">
        <div className="footer-inner">
          <div className="grid-parent">
            <div className="grid-item">
              <div className="grid-item-inner">
                <div className="logo-img">
                  <img src="./images/jadidomashnologo.svg" alt="" />
                  <div className="logo-cont">
                    <h4>
                      Јади <br />
                      домашно
                    </h4>
                    <p>Јадете здраво. Јадете подобро.</p>
                  </div>
                </div>
                <div className="icon-btn">
                  <a href="#"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-item-inner">
                <ul>
                  <li><a href="#">За нас</a></li>
                  <li><a href="#">Мени</a></li>
                  <li><a href="#">Стани готвач</a></li>
                  <li><a href="#">Најави се</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-item-inner">
                <ul className="list-style">
                  <li><a href="#">Правни</a></li>
                  <li><a href="#">Политика за приватност</a></li>
                  <li><a href="#">Услови за веб станица</a></li>
                  <li><a href="#">Прифатлиа политика за користење</a></li>
                  <li><a href="#">Политика за колашиња</a></li>
                  <li><a href="#">Општи Услови</a></li>
                </ul>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-item-inner">
                <p>Пратете ги новостите</p>
                <div className="image">
                  <img src="./images/footer-mail.png" alt="" />
                </div>
                <form className="news-btn">
                  <input type="email" placeholder="Електонска пошта" />
                  <button className="btn" type="submit"><b>ПРЕТПЛАТИ СЕ</b></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;