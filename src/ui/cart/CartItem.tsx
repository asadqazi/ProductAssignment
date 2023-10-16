import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {CartDto} from '../../store/dto/CartDto';
import Colors from '../../theme/Colors';
import {useDispatch} from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from '../../store/slices/cartSlice';

type CartItemProp = {cartItem: CartDto};
const CartItem = ({cartItem}: CartItemProp) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.mainCardView}>
        <Image
          style={styles.img}
          source={{
            uri: cartItem.product.img,
          }}
        />
        <View style={styles.body}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={2} style={styles.title}>
              {cartItem.product.name}
            </Text>
            <Text
              numberOfLines={2}
              style={{...styles.title, color: Colors.red}}>
              {cartItem.product.price * cartItem.count}$
            </Text>
          </View>

          <View style={styles.counter}>
            <View style={styles.button}>
              <Button
                title="-"
                color={Colors.white}
                onPress={() => {
                  dispatch(decrementQuantity(cartItem.product.id));
                }}
              />
            </View>
            <Text>Total Count: {cartItem.count}</Text>
            <View style={styles.button}>
              <Button
                title="+"
                color={Colors.white}
                onPress={() => {
                  dispatch(incrementQuantity(cartItem.product.id));
                }}
              />
            </View>
          </View>
          <Button
            title="Delete"
            onPress={() => {
              dispatch(removeItem(cartItem.product.id));
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 140,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 20,
    paddingEnd: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  mainCardView: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.lightGray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    padding: 10,
  },
  img: {
    width: '20%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    width: '70%',
    fontSize: 14,
    color: Colors.black,
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  body: {
    width: '100%',
    paddingStart: 16,
    alignItems: 'flex-start',
  },
  counter: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '70%',
  },
  button: {backgroundColor: Colors.primaryColor, borderRadius: 5, width: 50},
});

export default CartItem;
