import React from 'react';

export const FavProducts = () => {
  return (
    <div>
      {/* Your Fav Departments */}
      <div className="margsize">
        <h2 className="h2">Your favorite departments</h2>
        <a href="https://www.walmart.com/cp/electronics/6944?athcpid=f4afd4fd-9649-464d-928a-0d26ebfc657c&athpgid=AthenaHomepageDesktop&athznid=athenaModuleZone&athmtid=AthenaCategory&athtvid=2&athena=true">
          <div className="your-fav">
            < h6 className="h4">Grocery</ h6 >
            < h6 className="h4">Arts, Crafts &amp; Sewing</ h6>
            < h6 className="h4">Sports &amp; Outdoor</ h6>
            < h6 className="h4">Baby</ h6 >
            < h6 className="h4">Movie &amp; TV Shows</ h6>
            < h6 className="h4">Beauty</h6>
          </div>
        </a>
      </div>
      <br /><br />
    </div>
  );
};
