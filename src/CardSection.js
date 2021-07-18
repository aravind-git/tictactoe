import React, { Component } from 'react';
function CardSection(){
    return(
        <div>
               <div class="bg-success text-center">
      <p class="display-4 text-white p-4">Discover the amazing new app</p>
      <p class="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
      </p>
      <div class="row  p-4">
        <div class="col-6 text-right">
          <button class="btn btn-warning btn-lg">Play Store</button>
        </div>
        <button class="btn btn-warning btn-lg">App Store</button>
        <div class="col-6 text-center"></div>
      </div>
    </div>
        <section class="contact bg-success ">
        <div class="container ">
          <h2 class="text-white">
            We love new friends!
          </h2>
          <div class="row">
            <div class="col-4">
              <div class="card" style={{width: "18rem"}}>
                <img
                  src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-success">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card" style={{width: "18rem"}}>
                <img
                  src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a href="#" cXDS1ER34589875432W1  z vcxlass="btn btn-success">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card" style={{width: "18rem"}}>
                <img
                  src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-success">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
}
export default CardSection;