import React from "react";
import { useParams } from "react-router-dom";
import "./details.css";
const UserDetails = ({ users }) => {
  const { iduser } = useParams();
  const user = users.find((el) => el.id === Number(iduser));
  console.log(user);
  return (
    <div className="main-container">
      <div className="heading">
        <h1 className="heading__title">{user.name}</h1>
        <p className="heading__credits">
          <a
            className="heading__link"
            target="_blank"
            href="https://dribbble.com/sl"
          >
            {user.username}
          </a>
        </p>
      </div>
      <div className="cards">
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt" />
          </div>
          <p className="card__exit">
            <i className="fas fa-times" />
          </p>
          <h2 className="card__title">
            {user.email}
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right" />
            </a>
          </p>
        </div>
        <div className="card card-2">
          <div className="card__icon">
            <i className="fas fa-bolt" />
          </div>
          <p className="card__exit">
            <i className="fas fa-times" />
          </p>
          <h2 className="card__title">
            address:{user.address.street}
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right" />
            </a>
          </p>
        </div>
        <div className="card card-3">
          <div className="card__icon">
            <i className="fas fa-bolt" />
          </div>
          <p className="card__exit">
            <i className="fas fa-times" />
          </p>
          <h2 className="card__title">Ut enim ad minim veniam.</h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right" />
            </a>
          </p>
        </div>
        <div className="card card-4">
          <div className="card__icon">
            <i className="fas fa-bolt" />
          </div>
          <p className="card__exit">
            <i className="fas fa-times" />
          </p>
          <h2 className="card__title">
          {user.phone}
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right" />
            </a>
          </p>
        </div>
        <div className="card card-5">
          <div className="card__icon">
            <i className="fas fa-bolt" />
          </div>
          <p className="card__exit">
            <i className="fas fa-times" />
          </p>
          <h2 className="card__title">
            Ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right" />
            </a>
          </p>
        </div>
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt" />
          </div>
          <p className="card__exit">
            <i className="fas fa-times" />
          </p>
          <h2 className="card__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
