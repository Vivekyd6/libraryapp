import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>&copy; 2023 Library App. All Rights Reserved.</p>
          </div>
          <div className="col-md-4">
            <ul className="list-inline text-md-right">
              <li className="list-inline-item">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <p>Made by Vivek Yadav</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
