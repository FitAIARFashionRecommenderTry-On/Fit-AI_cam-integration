import React from 'react';

// Array of product objects
const products = [
  {
    id: 1,
    imageSrc: 'https://i5.walmartimages.com/asr/4663d1a9-c3b3-4673-9f77-88348911aeb3_1.3cda2572b155d8b16f6b4239eb06ada3.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category: 'CATEGORY 1',
    title: 'The Catalyzer',
    price: '$18.00',
  },
  {
    id: 2,
    imageSrc: 'https://i5.walmartimages.com/asr/a531df7c-c95c-44f8-b47b-14290cb4159b_1.0bdfef25107119c948fd3a793ac32471.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category: 'CATEGORY 2',
    title: 'Shooting Stars',
    price: '$21.15',
  },
  {
    id:3,
    imageSrc:'https://i5.walmartimages.com/asr/2f2cc628-ba4f-44bf-9258-5d94720aabc7_4.61672f68d5539cf08335cba5366e4208.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category:'CATEGORY 3',
    title:'Neptune',
    price:'$12.00',
  },
  {
    id:4,
    imageSrc:'https://i5.walmartimages.com/asr/1aa1156f-5e04-4dd7-8b1c-83b5ca9d8202_2.a2c36706c5be54b3eba98d793d9e1207.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category: 'CATEGORY 4',
    title:'The 400 Blows',
    price:'$18.40',
  },
  
  // Add more product objects as needed
];

export const HomeFurniture = () => {
  return (
    <div>
      {/* -----bestselling in home furniture----- */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="h2">
              bestselling in home furniture
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.imageSrc}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                  <p className="mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// export const HomeFurniture  = () => {
//   return (
//     <div>
//       {/* For you */}
//       <div className="margsize">
//         <h2 className='h2'> bestselling in home furniture</h2>
//         <div className="threeBox">
//         {products.map((product) => (
//             <div key={product.id}>
//               <img src={product.imageSrc} alt={product.title} />
//               <h3 className="boxc">{product.title}</h3>
//               <p>{product.description}</p>
//               <button className="gotoCart">{product.buttonText}</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };