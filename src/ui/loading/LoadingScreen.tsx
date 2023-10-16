import {FC} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../theme/Colors';
import LogoIcon from '../../drawables/ic_symplyfy_logo.svg';

const LoadingScreen: FC = () => {
  return (
    <View style={styles.container}>
      <LogoIcon width={200} height={200} color={Colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
});

export default LoadingScreen;
