import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
import { ProductsList } from '../components/UI/ProductsList';
import Services from "../services/Services";
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/counter-timer-img.png';

const Home: React.FC = () => {
  const products =[
    {
        "price": 290,
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fghe_alpha_gamer.webp?alt=media&token=99db9e9a-e434-49da-a9fa-f1048ccca553",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fcounter-timer-img.png?alt=media&token=2110ad7b-3f85-4c57-9623-5fd68307de74",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-01.png?alt=media&token=c224445a-e3af-42e5-b868-36e722490e8f",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-02.png?alt=media&token=1f28d9bd-b35b-4180-a70f-647c225d9422"
        ],
        "size": "0",
        "quality": 191,
        "material": "Leather",
        "category": "Chair",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "productName": "Vitra Amor V3",
        "shortDesc": "vai l",
        "id": "57499387-37a3-45be-956d-f9a6968072bf",
        "reviews": [],
        "select": null,
        "type": "Dinner Chair"
    },
    {
        "id": "e484d73b-def2-4671-9bd0-28c063300338",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "size": "0",
        "reviews": [],
        "productName": "aristocratic dining Table",
        "category": "Table",
        "type": "Work Table",
        "select": "2m",
        "quality": 95,
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "material": "Wood",
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Ftable.jpg?alt=media&token=60e62f16-2b85-47d8-b9d7-bc2ba4003434",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fwatch-01.jpg?alt=media&token=f589aa13-d7eb-4e7f-8160-6a660dd02e42",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fwatch-02.jpg?alt=media&token=a7a825ba-4c80-4369-9da9-2dfb75f27c2e"
        ],
        "price": 1399
    },
    {
        "id": "46753ddf-057d-449b-8918-49e3642e2816",
        "price": 159,
        "size": "0",
        "reviews": [],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "quality": 12,
        "productName": "chair pro dark",
        "material": "Leather",
        "type": "Dinner Chair",
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fsingle-sofa-01.jpg?alt=media&token=98f7f1db-b33e-40f6-ab4e-186618416bc6",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fsingle-sofa-02.jpg?alt=media&token=cb00087b-6ad6-480e-ab9b-181855f46dcb",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fsingle-sofa-03.jpg?alt=media&token=c12ba37e-8eda-4a21-b623-0dd670856b4c",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fsingle-sofa-04.png?alt=media&token=17075e39-64ab-4e09-b07e-c59996af78e7"
        ],
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "category": "Chair"
    },
    {
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "size": "0",
        "type": "Dinner Chair",
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Farm-chair-03.jpg?alt=media&token=f3c8e7e2-8730-475b-b13e-e641d92647d6",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-01.png?alt=media&token=8e24417b-0c1f-4bc4-b573-38a3f9f42301",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-02.png?alt=media&token=9f892a17-cbad-48fc-bb92-af6c0f77dae3"
        ],
        "quality": 107,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "id": "ba71e57b-ebe5-448d-be73-9bceb0dde029",
        "price": 199,
        "material": "Fabric",
        "category": "Chair",
        "productName": "ergonomic chair",
        "reviews": []
    },
    {
        "type": "Ergonomic Chair",
        "id": "77d432ac-5025-451e-a310-510fcb6e92aa",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "productName": "ergonomic chair pro",
        "size": "0",
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fsingle-sofa-03.jpg?alt=media&token=61213fb4-e74a-4f79-a479-a433b8e4ae4a",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Farm-chair-01.jpg?alt=media&token=d0091da7-d505-4755-a513-3cd4e727c8c8",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Farm-chair-02.jpg?alt=media&token=58d96cff-5b73-4f5e-9134-6b66148dde05",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Farm-chair-03.jpg?alt=media&token=e5372e36-5aad-43b2-976a-db0d4b2233e8"
        ],
        "category": "Chair",
        "reviews": [],
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "material": "Fabric",
        "price": 180,
        "quality": 87
    },
    {
        "type": "Corner Sofa",
        "reviews": [],
        "select": " 3 seats",
        "quality": 96,
        "category": "Sofa",
        "price": 199,
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "material": "Leather",
        "productName": "ergonomic sofa",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "id": "b01a0ed0-75a8-45c5-aa16-20ada95ea1c8",
        "size": "0",
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-03%20-%20Copy.png?alt=media&token=d3928e7e-2c16-4ba1-9974-c5f62abb0868",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-03.png?alt=media&token=9854641d-40db-4dae-a66d-68beb9f34cf9",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fhero-img.png?alt=media&token=ecc9e5e7-de39-4481-852c-a0d1d7a58ad8"
        ]
    },
    {
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "category": "Sofa",
        "type": "Sofa",
        "material": "Fabric",
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-02.png?alt=media&token=9a86af48-8b96-4bbc-9577-75e3f06b900e",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-03.png?alt=media&token=7de6cbd8-c3d7-4bca-a7eb-929299e804e8"
        ],
        "id": "32cbb114-6231-4d16-a681-c50a8bd4271f",
        "reviews": [],
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "select": " 3 seats",
        "quality": 100,
        "price": 99,
        "productName": "ergonomic sofa ver2 pro",
        "size": "0"
    },
    {
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "reviews": [],
        "price": 499,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "size": "0",
        "category": "Cabinet",
        "type": "Shoes Cabinet",
        "quality": 92,
        "productName": "smart cabinet",
        "id": "66d904d4-9f6e-43ce-a639-9e0555862c82",
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2F1-tu-aq-3217.jpg?alt=media&token=323b920b-d720-489a-ac67-ff64740baa65",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fbedroom.jpg?alt=media&token=5d4c6588-afef-4390-982b-2301c1df8680",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fcounter-timer-img.png?alt=media&token=22db0564-52d9-4969-a2b8-33a4f70ccfd8",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-01.png?alt=media&token=4ac31b36-cf35-4900-82e6-49d436fde754"
        ],
        "material": "Plastic"
    },
    {
        "id": "88de8035-b41e-4faf-b83e-1870261b9656",
        "type": "Sofa",
        "category": "Sofa",
        "size": "0",
        "price": 50,
        "quality": 82,
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fcounter-timer-img.png?alt=media&token=5edb0a94-4095-40b7-a3ba-e0d4d44a6ef8",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-01.png?alt=media&token=8d9e3f2c-e3ff-48b4-9941-b9de64eec761",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-02.png?alt=media&token=18f90703-f69f-46af-bae5-bc94f6c078a3",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-03%20-%20Copy.png?alt=media&token=bd62dea0-04a3-42dd-85bf-0203442d68ce"
        ],
        "productName": "sofa 4 legs smart",
        "reviews": [],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "select": " 2 seats",
        "material": "Fabric"
    },
    {
        "productName": "sofa-4 legs",
        "reviews": [],
        "quality": 119,
        "id": "7bdb26dc-5517-49de-9f92-0d40752c6bc2",
        "price": 44,
        "type": "Sofa",
        "category": "Sofa",
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "material": "Leather",
        "size": "0",
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fcounter-timer-img.png?alt=media&token=69f3b709-6293-4d97-91c6-48500204be54",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-01.png?alt=media&token=a3f25208-490b-4d50-ad0d-254307b5a724",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-02.png?alt=media&token=cc39f09d-f047-48cb-a4e1-4170313b0f44",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-03%20-%20Copy.png?alt=media&token=99864198-8269-43b6-9387-d85157571962"
        ]
    },
    {
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2F1-845x565-6.jpg?alt=media&token=24f0f75a-7da0-46ed-a296-c0c66ad5cace",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fip15.jpg?alt=media&token=649e122d-4b06-4141-a520-853b7f1ff36d",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Ft%E1%BA%A3i%20xu%E1%BB%91ng.jpg?alt=media&token=6989f48d-8f7f-46fa-9921-c52f9d676068",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Ftalk-about-shopping-1024x640.jpg?alt=media&token=46fb10b9-1e12-46dd-a3c4-1836b9927362"
        ],
        "category": "Chair",
        "price": 100,
        "description": "1111jsdalfá",
        "type": "Gaming Chair",
        "shortDesc": "ádfjkladsjfkjksdfa",
        "size": " ",
        "quality": 200,
        "id": "e44b5906-7d6e-4688-8766-f626f5918665",
        "productName": "sofavip1",
        "material": "Wood",
        "reviews": []
    },
    {
        "material": "Wood",
        "select": "1.6m",
        "size": "0",
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "category": "Table",
        "reviews": [],
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2F124273150.jpg?alt=media&token=75d148af-1475-4c2e-a26b-cc6b16feb191",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fdouble-sofa-03.png?alt=media&token=b9264d57-eae4-46ad-9975-80b3c58a751c",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Feco-logo.png?alt=media&token=65fc19f4-3b90-4fef-aded-5f97232a6b77",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fghe_alpha_gamer.webp?alt=media&token=7f7740ef-fc88-4197-b0ee-a4eef0d0668f"
        ],
        "quality": 97,
        "type": "Work Table",
        "price": 799,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "id": "05d900bc-90ed-41ad-aa0a-b41d9a720873",
        "productName": "wooden Table "
    },
    {
        "size": "0",
        "price": 599,
        "type": "Makeup Table",
        "id": "ce606905-5ff1-48a9-a405-cf9bfb108ec1",
        "category": "Table",
        "select": "1.6m",
        "productName": "wooden table pro",
        "quality": 95,
        "material": "Wood",
        "shortDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        "reviews": [],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        "imgUrl": [
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fmau-ban-ghe.jpg?alt=media&token=d04327bc-fb23-4dbf-aca8-f79d50763bb0",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fsingle-sofa-02.jpg?alt=media&token=67acd824-e21b-4b12-a7bd-5fb0814e21c7",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fsingle-sofa-03.jpg?alt=media&token=b6ee5342-5a07-4ba8-956c-0e616b19fb65",
            "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fwatch-01.jpg?alt=media&token=a374fe74-a24b-41dc-937e-72a4f10e7466"
        ]
    }
]
  const year = new Date().getFullYear();
//   const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={{ flex: 1 }}>
    <View style={{ backgroundColor: '#f5f5f5', paddingVertical: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>Trending product in {year}</Text>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Make your Interior More Minimalistics & Modern</Text>
      <Text style={{ textAlign: 'center', fontSize: 16, paddingHorizontal: 20 }}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum</Text>
      <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: 'blue', padding: 10, marginTop: 20, borderRadius: 5 }} 
        // onPress={() => navigation.navigate('Shop')}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>SHOP NOW</Text>
      </TouchableOpacity>
    </View>

    <Services />

    <View style={{ backgroundColor: '#fff', paddingVertical: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Trending Products</Text>
      <ProductsList data={products} />
    </View>

    <View style={{ backgroundColor: '#fff', paddingVertical: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Best Sales</Text>
      <ProductsList data={products} />
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', paddingVertical: 20 }}>
      <View style={{ flex: 1 }}>
        <ProductsList data={products} />
      </View>
      {/* <Image source={counterImg} style={{ width: '50%', height: 200 }} /> */}
    </View>

    <View style={{ backgroundColor: '#fff', paddingVertical: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>New Arrivals</Text>
      <ProductsList data={products} />
    </View>

    <View style={{ backgroundColor: '#fff', paddingVertical: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Popular in Category</Text>
      <ProductsList data={products} />
    </View>
  </View>
  </ScrollView>
  );
};

export default Home;
