import React from 'react';

// Define an array of products with their data
const products = [
  {
    image: 'https://i5.walmartimages.com/asr/83f533c3-3234-4bea-80bf-a0f9a43cd279_2.9b223f40bab27c513ba64f9f0e3fc2d9.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category: 'CATEGORY',
    title: 'The Catalyzer',
    price: '$16.00',
  },
  {
    image: 'https://i5.walmartimages.com/asr/4f581077-89bc-4475-8a68-4fa505237dab_1.8485bb6d431e126ee869d09683016993.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category: 'CATEGORY',
    title: 'Shooting Stars',
    price: '$21.15',
  },
  {
    image:'https://i5.walmartimages.com/asr/a1398e37-09d8-47da-aed3-f7cdf6338666.672654bd6d10919c3eee82c62b37014d.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category:'CATEGORY',
    title:'Neptune',
    price:'$12.00',
  },
  {
    image:'https://i5.walmartimages.com/asr/67cc1502-5ba4-4a94-8e1b-5122d621f2d0_1.6dec76298b02fd3c0cdb815d0174360b.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category:'CATEGORY',
    title:'The 400 Blows',
    price:'$18.40',
  },
  {
    image:'https://i5.walmartimages.com/asr/23d11909-4400-4c13-ac1e-6b93cadaf915.f7273fef2d6f76f16270696126dbcf69.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category:'CATEGORY',
    title:'Shooting Stars',
    price:'$21.15',
  },
  {
    image:'https://i5.walmartimages.com/asr/82a22988-38fd-45dd-9a4a-c77689be8c54.7a5b1913ce549060eadae69f2a4bd0e2.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category:'CATEGORY',
    title:'Shooting Stars',
    price:'$21.15',
  },
  {
    image:'https://i5.walmartimages.com/asr/49cf16a3-067e-42a9-9fa5-34db8145d31b.5671a00b058ddc715f7520f80cceca66.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category:'CATEGORY',
    title:'Shooting Stars',
    price:'$21.15',
  },
  {
    image:'https://i5.walmartimages.com/asr/18e7263a-b083-48f0-9264-a743f1a5fa68.9ffc55046b3cb571d9442c51479bb58c.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
    category:'CATEGORY',
    title:'Shooting Stars',
    price:'$21.15',
  },
  // Add more products to this array following the same structure
  // ...
];

export const Products = () => {
  return (
    <div>
      {/* Products */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                </a>
              <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
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



