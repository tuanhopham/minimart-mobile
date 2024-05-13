import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/actions/cartActions';
// import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ item }) => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();

  const handleAddToCart = () => {
    // dispatch(addToCart(item));
    // You can add toast notification using a library like react-native-toast-message
  };

  return (
    <TouchableOpacity 
    style={styles.productItem} 
    // onPress={() => navigation.navigate('ProductDetails', { productId: item.id } as { productId: string })}
    >
  
      <View style={styles.productImg}>
      <Image source={{ uri: item.imgUrl[0] }} style={styles.image} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text>{item.category}</Text>
      </View>
      <View style={styles.productCardBottom}>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productItem: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  productImg: {
    height: 150,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productCardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductCard;
