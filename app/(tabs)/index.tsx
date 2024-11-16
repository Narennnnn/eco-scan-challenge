import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import ScanScreenInfo from '@/components/ScanScreenInfo';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <ScanScreenInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 