import React, {FC, useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {fetchProducts} from '../../store/slices/productsSlice';
import {ProductDto} from '../../store/dto/ProductDto';
import Colors from '../../theme/Colors';
import ProductItem from './ProductItem';
import {useNavigation} from '@react-navigation/native';
import Cart from '../../drawables/ic_basket.svg';

const HomeScreen: FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const homeState = useSelector((state: RootState) => state.products);
  const cartState = useSelector((state: RootState) => state.cart);

  const action = fetchProducts();
  useEffect(() => {
    dispatch(action);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {homeState.loading && <ActivityIndicator style={styles.container} />}
      {homeState.error && <Text>ERROR</Text>}
      {!homeState.loading && !homeState.error && (
        <FlatList
          style={styles.list}
          data={homeState.productData}
          renderItem={item => <ProductItem product={item.item} />}
          numColumns={2}
        />
      )}
      <View style={styles.fabView}>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <View style={styles.fabInnerView}>
            <Cart height={25} width={25} />
            <Text style={styles.count}>{cartState.cartItems.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  activityIndicator: {
    alignSelf: 'center',
  },
  list: {
    width: '100%',
    flex: 1,
    paddingStart: 20,
    paddingEnd: 20,
    marginTop: 16,
  },
  fabView: {
    width: 90,
    height: 70,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 50,
  },
  fab: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  count: {
    position: 'absolute',
    fontSize: 17,
    top: 1,
    alignSelf: 'flex-end',
    color: Colors.white,
  },
  fabInnerView: {
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
