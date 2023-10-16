import React, {FC, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {fetchProducts} from '../../store/slices/productsSlice';
import CartItem from './CartItem';
import Colors from '../../theme/Colors';

const CartScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartState = useSelector((state: RootState) => state.cart);

  const getTotal = () => {
    var total = 0;
    cartState.cartItems.forEach(item => {
      total += item.product.price * item.count;
    });
    return total;
  };

  return (
    <SafeAreaView style={styles.container}>
      {cartState.cartItems.length == 0 ? (
        <View style={styles.nodata}>
          <Text>No data</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={cartState.cartItems}
            renderItem={item => <CartItem cartItem={item.item} />}
          />
          <View style={styles.total}>
            <Text style={styles.text}>Total: </Text>
            <Text style={styles.text}>{getTotal()}$</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  nodata: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  total: {
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.primaryColor,
    padding: 20,
  },
  text: {fontSize: 20, color: Colors.white},
});

export default CartScreen;
