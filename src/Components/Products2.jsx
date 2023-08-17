import React from 'react';

const products = [
  {
    id: 1,
    image: 'https://i5.walmartimages.com/asr/bef8fa49-0f7f-4366-b931-c37c60b3b695_1.ea694bc617c7a8f7ec41a2a905c86add.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category: 'CATEGORY 1',
    name: 'The Catalyzer',
    price: '$16.00',
  },
  {
    id: 2,
    image: 'https://i5.walmartimages.com/asr/05636c96-5eb4-4a55-b46b-26d6fdb9623d_1.7950380f9c338c994f36c6f79d4c8ec3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category: 'CATEGORY 2',
    name: 'Shooting Stars',
    price: '$21.15',
  },
  {
    id: 3,
    image: 'https://i5.walmartimages.com/asr/e43c2722-40b9-446e-ae42-d950cfbfbba5.260ed804a3b47600c0f0522cb72cca46.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category: 'CATEGORY 3',
    name: 'Neptune',
    price: '$12.00',
  },
  {
    id: 4,
    image: 'https://i5.walmartimages.com/asr/a694e1eb-04e0-48b2-94fb-b7c2fd8f6f65_1.9ce40c8c2548f9ef172b0b959bf14049.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category: 'CATEGORY 4',
    name: 'The 400 Blows',
    price: '$18.40',
  },
  {
    id: 5,
    image: 'https://i5.walmartimages.com/asr/2508a014-15f0-46b5-a522-ec339933bba8.ed03641eb7cb865f566fb6021c76f4b2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category: 'CATEGORY 5',
    name: 'Shooting Stars',
    price: '$21.15',
  },
  {
    id: 6,
    image: 'https://i5.walmartimages.com/asr/11634dbf-6650-4939-a176-3203fd7806bf.d8bfa5b837c33f584839c30b93441ed9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category: 'CATEGORY 6',
    name: 'Shooting Stars',
    price: '$21.15',
  },
  {
    id: 7,
    image: 'https://i5.walmartimages.com/asr/15e80331-ebea-4083-9cbc-abc900ceea18_1.19112813c923697a1057dca8cff28ae1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category: 'CATEGORY 7',
    name: 'Shooting Stars',
    price: '$21.15',
  },
  {
    id: 8,
    image: 'https://i5.walmartimages.com/asr/169104c9-8576-4704-961a-5061dcf88bde_3.cf208655ffe6860f2d8d80e061404095.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category: 'CATEGORY 8',
    name: 'Shooting Stars',
    price: '$21.15',
  },
  // Add more products...
];

export const Products2 = () => {

  const productsPerRow = 4;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          <h1 className="h2">overstock savings</h1>
            {products.map((product, index) => (
              <div className={`lg:w-1/${productsPerRow} md:w-1/2 p-4`} key={index}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
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


