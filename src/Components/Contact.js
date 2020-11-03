import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="" />
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <span
            className={props.online ? "status-online" : "status-offline"}
          ></span>
          <span className="status-text">
            {props.online ? "online" : "offline"}
          </span>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;
