import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {ProductDto} from '../../store/dto/ProductDto';
import Colors from '../../theme/Colors';
import AddToCart from '../../drawables/ic_add.svg';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/slices/cartSlice';

type ProductProp = {product: ProductDto};
const ProductItem = ({product}: ProductProp) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.itemView}>
      <View style={styles.mainCardView}>
        <Image
          style={styles.img}
          source={{
            uri: product.img,
          }}
        />
        <View style={styles.infoContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {product.name}
          </Text>
          <Text style={styles.price}>{product.price} $</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.addCart}
        onPress={() => {
          dispatch(addToCart(product));
        }}>
        <AddToCart width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    width: '47%',
    height: 350,
    marginEnd: 20,
    paddingBottom: 20,
  },
  mainCardView: {
    height: '100%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.lightGray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'column',
  },
  title: {
    color: Colors.black,
    width: '70%',
  },
  price: {
    color: Colors.red,
  },
  img: {
    width: '100%',
    height: 280,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  addCart: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 10,
  },
});

export default ProductItem;
