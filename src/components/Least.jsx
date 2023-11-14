
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
        "title": "Mens Casual Slim",
        "price": 15.99,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        },
        {
        "id": 5,
        "title": "John Hardy Women's",
        "price": 695,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        },
        {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        },
    
        {
            "id": 7,
            "title": "Motorcyle jacket ",
            "price": 168,
            "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            "category": "jacket",
            "image": "https://m.media-amazon.com/images/I/61-pm2CftoL._AC_UY1000_.jpg",
            },
            {
                "id": 8,
                "title": "Adidas pants ",
                "price": 168,
                "description": " Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                "category": "pants",
                "image": "https://media-assets.grailed.com/prd/listing/31092371/a1e2c9865f82495ab5720883b9c15a27?w=525&h=700&fit=clip&auto=format",
                },
            
                {
                    "id": 9,
                    "title": "Adidas pants ",
                    "price": 168,
                    "description": " Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                    "category": "pants",
                    "image": "https://i.pinimg.com/1200x/1f/79/a0/1f79a0ab95bd07b7de7c85a01e89c891.jpg",
                    },
                    {
                        "id": 10,
                        "title": "ring ",
                        "price": 168,
                        "description": " Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
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

