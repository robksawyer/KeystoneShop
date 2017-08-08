import React, {Component} from 'react';

const Landing = (props) => {
  return (
    <div>
      <div class="container-fluid home-image">
        <div class="container">
          <div class="tag-line">Handcrafted<br/>for your home</div>
        </div>
      </div>
      <div class="container collections">
        <div class="collection"><a class="collection-image living" href="/store/living-room">
            <div class="tag-line">Living</div></a>
          </div>
        <div class="collection"><a class="collection-image kitchen" href="/store/kitchen">
            <div class="tag-line">Kitchen</div></a>
          </div>
        <div class="collection"><a class="collection-image bedding" href="/store/bedroom">
          <div class="tag-line">Bedding</div></a>
        </div>
      </div>
      <div class="container content">
        <div class="col-md-8 col-md-push-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="container-fluid home-banner-image"></div>
    </div>
  )
}

module.exports = Landing;
