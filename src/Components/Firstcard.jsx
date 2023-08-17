import React from 'react';

export const Firstcard = () => {
  return (
    <div>
      {/* first Card */}
      <div id="belowScrollBar" className="margsizea">
        {/* first Card */}
        <div id="main1" className="margsizea">
          <div id="div1">
            <h3 className="hd">Reserve pickup or delivery</h3>
            <button className="gotoCart">See times</button>
          </div>
          <div id="div2">
            <div id="hddiv">
              <h3 className="hd">Popular services</h3>
            </div>
            <div id="logoDiv">
              <div className="divimg">
                <img className="imgpop" src="https://i5.walmartimages.com/dfw/4ff9c6c9-64d0/k2-_f0d316e7-25a9-4436-a60d-2efd62702aa3.v1.png?odnHeight=90&odnWidth=90&odnBg=FFFFFF" alt="" />
                <p>Pharmacy</p>
              </div>
              <div className="divimg">
                <img className="imgpop" src="https://i5.walmartimages.com/dfw/4ff9c6c9-15ce/k2-_ad628e1a-53e3-4f61-9359-a2660f4792af.v1.png?odnHeight=90&odnWidth=90&odnBg=FFFFFF" alt="" />
                <p>Auto Care Center</p>
              </div>
              <div className="divimg">
                <img className="imgpop" src="https://i5.walmartimages.com/dfw/4ff9c6c9-15ce/k2-_ad628e1a-53e3-4f61-9359-a2660f4792af.v1.png?odnHeight=90&odnWidth=90&odnBg=FFFFFF" alt="" />
                <p>Custom Cakes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
