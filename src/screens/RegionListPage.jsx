import { StyleSheet, View } from 'react-native';

import { Button } from '../components';
import regions from '../store/regions_data';

const RegionListPage = ({ navigation }) => {

  return (
    <View style={styles.container}>
      {regions.map((region, index) => (
        <Button
          key={`${region.id}-${index}`}
          onPress={() =>
            navigation.navigate('CustomerListPage', {
              regionId: region.id
            })
          }
        >
          {region.name}
        </Button>
      ))}
      <Button style={styles.createBtn} onPress={() => navigation.navigate('EditCustomerPage')}>
        Create Customer
      </Button>
    </View>
  );
};

export default RegionListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  createBtn: {
    backgroundColor: 'darkblue'
  }
});
