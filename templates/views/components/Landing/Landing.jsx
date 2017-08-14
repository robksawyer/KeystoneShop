import React from 'react';

const Landing = (props) => {
  return (
    <div>
      <div className="container-fluid home-image">
        <div className="container">
          <div className="tag-line">Handcrafted<br/>for your home</div>
        </div>
      </div>
      <div className="container collections">
        <div className="collection"><a className="collection-image living" href="/store/living-room">
            <div className="tag-line">Living</div></a>
          </div>
        <div className="collection"><a className="collection-image kitchen" href="/store/kitchen">
            <div className="tag-line">Kitchen</div></a>
          </div>
        <div className="collection"><a className="collection-image bedding" href="/store/bedroom">
          <div className="tag-line">Bedding</div></a>
        </div>
      </div>
      <div className="container content">
        <div className="col-md-8 col-md-push-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="container-fluid home-banner-image"></div>
    </div>
  )
}

// React Engine needs exports, don't export default
module.exports = Landing;
