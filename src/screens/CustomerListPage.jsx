import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Card } from "react-native-elements";
import { useSelector } from "react-redux";

const CustomerListPage = ({ navigation, route }) => {
  const regionId = route?.params?.regionId || null;
  const customers = useSelector((state) => {
    if (regionId)
      return state.customer.customers.filter((x) => x.region === regionId);
    else return state.customer.customers;
  });

  return (
    <View>
      {customers && customers.length > 0 ? (
        customers.map((customer, index) => (
          <TouchableOpacity
            key={`${customer.id}-${index}`}
            style={styles.touchable}
            onPress={() =>
              navigation.navigate("CustomerDetailsPage", {
                customerId: customer.id,
              })
            }
          >
            <Card containerStyle={styles.customerCard}>
              <Text style={styles.text}>Name: {`${customer.firstName} ${customer.lastName}`}</Text>
              <Text style={styles.text}>
                status: {customer.isActive ? "active" : "inactive"}
              </Text>
            </Card>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No customers found.</Text>
      )}
    </View>
  );
};

export default CustomerListPage;

const styles = StyleSheet.create({
  touchable: {
    width: "80%",
    marginTop: 20,
    borderRadius: 15,
  },
  customerCard: {
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: "darkblue",
  },
  text: {
    color: 'white'
  },
});
