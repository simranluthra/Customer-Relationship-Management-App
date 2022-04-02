import { useEffect } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Card } from 'react-native-elements';

import regions from '../store/regions_data';

const CustomerDetailsPage = ({ navigation, route }) => {
  const customerId = route?.params?.customerId || null;

  const customer = customerId
    ? useSelector((state) => 
    state.customer.customers.find((x) => x.id === customerId))
    : null;

  const region = customer
    ? regions.find((x) => x.id === customer.region)
    : null;

  const handleSave = () => 
    navigation.navigate('EditCustomerPage', 
    { 
      customerId: customerId || '' 
    });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => 
      <Button title="Edit" onPress={handleSave} />
    });
  }, [handleSave]);

  return (
    <Card style={styles.customerCard}>
    <View>
      {customer ? (
          <Card>
            <Text style={styles.text}>First Name: {customer.firstName} </Text>
            <Text style={styles.text}>Last Name: {customer.lastName} </Text>
            <Text style={styles.text}>Region: {region ? region.name : ''}</Text>
            <Text style={styles.text}>Status: {customer.isActive ? 'Active' : 'Inactive'} </Text>
          </Card>
      ) : (
        <Text>Customer not found</Text>
      )}
    </View>
    </Card>
  );
};

export default CustomerDetailsPage;

const styles = StyleSheet.create({
  customerCard: {
    width: '80%',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 15,
  },
  text: {
    fontSize: 30
  }
});
