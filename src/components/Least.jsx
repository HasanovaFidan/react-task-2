
import React from 'react';
import Iteam from './Iteam';

function Least() {
    
  const myObj = [
    {
        "id": 1,
        "title": "GALATASARAY FORM",
        "price": "1M",
        "category": "GALASARAY",
        "description": "Galatasaray (futbol takımı), Galatasaray Spor Kulübü'nün Süper Lig'de mücadele eden futbol takımıdır. Galatasaray Spor Kulübü'ne ait olan Galatasaray Sportif Anonim Şirketi, kulübün futbol takımının sahibidir. Galatasaray Spor Kulübü'nün 1997 yılında şirketleşme sürecine girmesinin ardından kurulmuştur..",
        "image": "https://i.pinimg.com/736x/4a/65/3a/4a653ac8e7b9bfe99732f8d250efed02.jpg"
        },
    {
        "id": 2,
        "title": "nike Blazer vintage from Fidan ",
        "price": 168,
        "description": "In the '70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team.",
        "category": "shoes",
        "image": "https://static.nike.com/a/images/t_default/ee8dc601-8535-4704-a96b-ff74fa9c5e97/blazer-mid-77-vintage-shoes-CBDjT0.png",
        },

    {
        "id": 3,
        "title": "Adidas vintage shoes ",
        "price": 22.3,
        "category": "shoes",
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "image": "https://static.footshop.com/img/p/5/5/1/7/0/4/551704-full_product.jpg",
        },
  




        {
        "id": 4,
        "title": "Attack on titan",
        "price": 19.99,
        "description": "Titana Saldırı (Japonca: 進撃の巨人, romanize: Shingeki no Kyojin; çev, Hajime Isayama tarafından yazılan bir manga serisidir.",
        "category": "suviner",
        "image": "https://ae01.alicdn.com/kf/Se11a0db5d5e9402585c1ee7c7af9dcabl.jpg_640x640Q90.jpg_.webp",
        },
        {
        "id": 5,
        "title": "Attack on titan",
        "price": 23,
        "description": "Titana Saldırı (Japonca: 進撃の巨人, romanize: Shingeki no Kyojin; çev, Hajime Isayama tarafından yazılan bir manga serisidir",
        "category": "hoodie",
        "image": "https://www.animehouse.co.nz/cdn/shop/products/1582742077953_700x700.jpg?v=1587266145"
        },
        {
        "id": 6,
        "title": "Tokyo Revengers",
        "price": 95,
        "description": "Tokyo Revengers (Japanese: 東京卍リベンジャーズ[a], Hepburn: Tōkyō Ribenjāzu) is a Japanese manga series written and illustrated by Ken Wakui. It was serialized in Kodansha's shōnen manga magazine Weekly Shōnen Magazine from March 2017 to November 2022, with its chapters collected in 31 tankōbon volumes.",
        "category": "manga",
        "image": "https://i.ebayimg.com/images/g/a~EAAOSwOLNhTgSy/s-l1600.jpg",
        },
    
        {
            "id": 7,
            "title": "Motorcyle jacket ",
            "price": 168,
            "description": "The purpose of a motorcycle jacket is to not only provide you with protection from the unfortunate event of a crash, but also protect you from the relentless weather you may face whilst riding..",
            "category": "jacket",
            "image": "https://m.media-amazon.com/images/I/61-pm2CftoL._AC_UY1000_.jpg",
            },
            {
                "id": 8,
                "title": "Adidas pants ",
                "price": 30,
                "description": " We all own and wear them, but do you really know the history of your sweatshirts? We will explain how that comfy, fashionable sweatshirt of yours was invented and how it came to be so popular around the world!",
                "category": "pants",
                "image": "https://media-assets.grailed.com/prd/listing/31092371/a1e2c9865f82495ab5720883b9c15a27?w=525&h=700&fit=clip&auto=format",
                },
            
                {
                    "id": 9,
                    "title": "Adidas pants ",
                    "price": 68,
                    "description": " Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                    "category": "pants",
                    "image": "https://i.pinimg.com/1200x/1f/79/a0/1f79a0ab95bd07b7de7c85a01e89c891.jpg",
                    },
                    {
                        "id": 10,
                        "title": "ring ",
                        "price": 18,
                        "description": " Ring LLC is a manufacturer of home security and smart home devices owned by Amazon. It manufactures a titular line of smart doorbells, home security cameras, and alarm systems.",
                        "category": "jawerlly",
                        "image": "https://media.turgeonraine.com/app/uploads/2021/09/29105711/RADPL02767-1.jpg",
                        },
  ];
  

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>description</th>
            <th>category</th>
            <th>image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myObj.map((item) => (
            <tr key={item.id}>
              <Iteam
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Least;

