import React from 'react';

export const Covid19 = () => {
  return (
    <div>
      {/* COVID-19 info & updates */}
      <div className="margsize">
        <h2 className="h2">COVID-19 info & updates</h2>
        <div className="threeBox">
          <div>
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-3432/k2-_12c7e138-42f9-4151-a531-10e8d1a3f5e2.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
            <h3 className="boxc">At-home COVID-19 tests</h3>
            <p>Now available at Walmart.</p>
            <button id="learn-more" className="gotoCart">Shop now</button>
          </div>
          <div>
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-26e9/k2-_5af76a70-623a-49ce-bdd9-210e208560ab.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
            <h3 className="boxc">COVID vaccine & booster</h3>
            <p>Now available for eligible patients.</p>
            <button id="learn-more" className="gotoCart">Schedule now</button>
          </div>
          <div>
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-30c5/k2-_039b9c15-64aa-488a-a37a-ae09819faa2d.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
            <h3 className="boxc">COVID-19 vaccine record</h3>
            <p>Vaccinated at a Walmart pharmacy? Access your digital card.</p>
            <button id="learn-more" className="gotoCart">Learn more</button>
          </div>
        </div>
        <br /><br /><br />
      </div>
    </div>
  );
};
