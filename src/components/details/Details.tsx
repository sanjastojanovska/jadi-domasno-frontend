import React from "react";
import { Chef } from "../../pages/ChefsOverview";

interface Props {
  chefDetail: Chef;
}

const Details: React.FC<Props> = ({ chefDetail }) => {
  return (
    <div className="details">
      <div className="grid-parent">
        <div className="grid-item img-details">
          <div className="grid-item-inner">
            <img src={chefDetail.avatar_image} alt="" />
          </div>
        </div>
        <div className="grid-item about-chef">
          <div className="grid-item-inner">
            <span className="h1">{chefDetail.fullname}</span>
            <div className="about-inner">
              <p>{chefDetail.cuisine}</p>
              <div className="distance">
                <img src="/images/chefs-house.svg" alt="" />
                <span>{chefDetail.address_distance}м</span>
              </div>
            </div>
            <div className="buttons-item">
              <div className="buttons-inner">
                <img src="/images/chefs-star.svg" alt="" />
                <span>{chefDetail.rating}</span>
              </div>
              <div className="buttons-inner">
                <i className="fa-solid fa-comment text-primary"></i>
                <span>4</span>
              </div>
              <div className="buttons-inner">
                <img src="/images/chef-detail-btn-inner.png" alt="" />
                <span>4</span>
              </div>
            </div>
            <p className="about-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              tempora animi sed expedita beatae cum laborum dicta ratione, quis
              facilis quas id atque esse dolor! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Fugit iure maxime consequatur qui
              repellat, assumenda cum sint est aliquid repellendus consequuntur
              dolorem necessitatibus labore nihil ut inventore? Quas, iusto
              quasi!
            </p>
          </div>
        </div>
        <div className="grid-item question">
          <div className="grid-item-inner">
            <p>Имате прашања?</p>
            <button className="btn">
              <i className="fa-solid fa-comment text-primary"></i> Прати порака
              на горвачот
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
