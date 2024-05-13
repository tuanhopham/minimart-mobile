import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Rating from "react-native-ratings";
import COLORS from "../constants/color";
import Button from "../components/UI/Button";
interface Product {
  id: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  type: string;
  material: string;
  size: string;
  quality: number;
  reviews: string[];
  shortDesc: string;
  imgUrl: string[];
}

const product = {
  type: "Ergonomic Chair",
  id: "77d432ac-5025-451e-a310-510fcb6e92aa",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  productName: "ergonomic chair pro",
  size: "0",
  imgUrl: [
    "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Fsingle-sofa-03.jpg?alt=media&token=61213fb4-e74a-4f79-a479-a433b8e4ae4a",
    "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Farm-chair-01.jpg?alt=media&token=d0091da7-d505-4755-a513-3cd4e727c8c8",
    "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Farm-chair-02.jpg?alt=media&token=58d96cff-5b73-4f5e-9134-6b66148dde05",
    "https://firebasestorage.googleapis.com/v0/b/minimart-f4870.appspot.com/o/images%2Farm-chair-03.jpg?alt=media&token=e5372e36-5aad-43b2-976a-db0d4b2233e8",
  ],
  category: "Chair",
  reviews: [],
  shortDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  material: "Fabric",
  price: 180,
  quality: 87,
};
const ProductDetails: React.FC<{}> = ({}) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: COLORS.primary, padding: wp("4%") }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: hp("4%"),
            fontWeight: "normal",
            marginBottom: hp("1%"),
          }}
        >
          {product.productName}
        </Text>
        <View style={{ flexDirection: "row", marginBottom: hp("1%") }}>
          <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
            Price:
          </Text>
          <Text style={{ color: COLORS.white, marginLeft: wp("2%") }}>
            ${product.price}
          </Text>
        </View>
        <Image
          source={{ uri: product.imgUrl[0] }}
          style={{ width: "100%", height: hp("30%"), marginBottom: hp("2%") }}
        />
        <Button
          title="Add to cart"
          style={{
            marginTop: 0,
            marginBottom: 4,
          }}
        />
      
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: wp("2%"),
            padding: wp("2%"),
            marginBottom: hp("3%"),
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontWeight: "bold",
              marginBottom: hp("1%"),
            }}
          >
            Details:
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: hp("1%"),
            }}
          >
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              Category:
            </Text>
            <Text style={{ color: COLORS.white }}>{product.category}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: hp("1%"),
            }}
          >
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              Type:
            </Text>
            <Text style={{ color: COLORS.white }}>{product.type}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: hp("1%"),
            }}
          >
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              Material:
            </Text>
            <Text style={{ color: COLORS.white }}>{product.material}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: hp("1%"),
            }}
          >
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              Size:
            </Text>
            <Text style={{ color: COLORS.white }}>{product.size}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: hp("1%"),
            }}
          >
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              Quality:
            </Text>
            <Text style={{ color: COLORS.white }}>{product.quality}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: hp("1%"),
            }}
          >
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              Reviews:
            </Text>
            <Text style={{ color: COLORS.white }}>
              {product.reviews.length}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: hp("1%"),
            }}
          >
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              Ratings:
            </Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: wp("2%"),
            padding: wp("2%"),
            marginBottom: hp("3%"),
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontWeight: "bold",
              marginBottom: hp("1%"),
            }}
          >
            Images:
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {product.imgUrl.map((url, index) => (
              <Image
                key={index}
                source={{ uri: url }}
                style={{
                  width: wp("30%"),
                  height: wp("30%"),
                  marginRight: wp("2%"),
                  marginBottom: wp("2%"),
                }}
              />
            ))}
          </View>
          <Text
          style={{
            color: COLORS.white,
            fontSize: hp("2%"),
            marginBottom: hp("1%"),
          }}
        >
          {product.shortDesc}
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: hp("2%"),
            marginBottom: hp("3%"),
          }}
        >
          {product.description}
        </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
