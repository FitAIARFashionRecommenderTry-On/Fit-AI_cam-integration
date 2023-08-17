// import React from 'react';

// const forYouItems = [
//   {
//     id: 1,
//     imageSrc: 'https://i5.walmartimages.com/dfw/4ff9c6c9-b13d/k2-_b7a6efb3-c391-45f0-ba5f-54001552a770.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF',
//     title: 'At-home COVID-19 tests',
//     description: 'Now available at Walmart.',
//     buttonText: 'Shop now',
//   },
//   {
//     id: 2,
//     imageSrc: 'https://i5.walmartimages.com/dfw/4ff9c6c9-ec57/k2-_02d43279-6ddb-471a-a3c1-8895b32cfcc3.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF',
//     title: 'COVID vaccine & booster',
//     description: 'Now available for eligible patients.',
//     buttonText: 'Schedule now',
//   },
//   {
//     id: 3,
//     imageSrc: 'https://i5.walmartimages.com/dfw/4ff9c6c9-9cac/k2-_3061fbc5-cfde-4a32-a4f9-50dfa83f3795.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF',
//     title: 'COVID-19 vaccine record',
//     description: 'Vaccinated at a Walmart pharmacy? Access your digital card.',
//     buttonText: 'Learn more',
//   },
// ];

// export const For_U = () => {
//   return (
//     <div>
//       {/* For you */}
//       <div className="margsize">
//         <h2 className='h2'>For you</h2>
//         <div className="threeBox">
//           {forYouItems.map(item => (
//             <div key={item.id}>
//               <img src={item.imageSrc} alt={item.title} />
//               <h3 className="boxc">{item.title}</h3>
//               <p>{item.description}</p>
//               <button className="gotoCart">{item.buttonText}</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };




import React from 'react';

const forYouItems = [
  {
    id: 1,
    imageSrc: 'https://i5.walmartimages.com/dfw/4ff9c6c9-b13d/k2-_b7a6efb3-c391-45f0-ba5f-54001552a770.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF',
    title: 'At-home COVID-19 tests',
    description: 'Now available at Walmart.',
    buttonText: 'Shop now',
  },
  {
    id: 2,
    imageSrc: 'https://i5.walmartimages.com/dfw/4ff9c6c9-ec57/k2-_02d43279-6ddb-471a-a3c1-8895b32cfcc3.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF',
    title: 'COVID vaccine & booster',
    description: 'Now available for eligible patients.',
    buttonText: 'Schedule now',
  },
  {
    id: 3,
    imageSrc: 'https://i5.walmartimages.com/dfw/4ff9c6c9-9cac/k2-_3061fbc5-cfde-4a32-a4f9-50dfa83f3795.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF',
    title: 'COVID-19 vaccine record',
    description: 'Vaccinated at a Walmart pharmacy? Access your digital card.',
    buttonText: 'Learn more',
  },
];

export const For_U = () => {
  return (
    <div>
      {/* For you */}
      <div className="margsize">
        <h2 className='h2'>For you</h2>
        <div className="threeBox">
          {forYouItems.map(item => (
            <div key={item.id}>
              <img src={item.imageSrc} alt={item.title} />
              <h3 className="boxc">{item.title}</h3>
              <p>{item.description}</p>
              <button className="gotoCart">{item.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};