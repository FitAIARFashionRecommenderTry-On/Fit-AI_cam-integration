import React from 'react';

export const Inseason = () => {
  return (
    <div>
      {/* -----In season----- */}
      <div className="margsizea">
        <h2 className="h2">In season</h2>
        <div className="twoBox">
          <div>
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-e343/k2-_262a3d1f-bb82-4094-8638-dee65db96105.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
              alt=""
            />
            <h3>Quick & healthy dinners</h3>
            <p>Whip up easy, affordable weeknight meals in under thirty minutes</p>
            <button className="gotoCart">Shop now</button>
          </div>
          <div>
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-86f8/k2-_4541019e-a4cd-4683-8cfa-27282faba2ad.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
              alt=""
            />
            <h3>Built for Better</h3>
            <p>Products designed to help meet your needs & live by your values.</p>
            <button className="gotoCart">Shop now</button>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
};
