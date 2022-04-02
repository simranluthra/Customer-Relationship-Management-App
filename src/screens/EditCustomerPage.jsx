import { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Button as DefaultButton,
  View,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "react-native-elements";

import { Button } from "../components";
import { saveCustomer } from "../store/customer/actions";
import regions from "../store/regions_data";

const EditCustomerPage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const customerId = route?.params?.customerId || null;

  const customer = customerId
    ? useSelector((state) =>
        state.customer.customers.find((x) => x.id === customerId)
      )
    : null;

  const [firstName, setFirstName] = useState(
    customer ? customer.firstName : ""
  );
  const [lastName, setLastName] = useState(customer ? customer.lastName : "");
  const [status, setStatus] = useState(customer ? customer.isActive : true);
  const [selectedRegion, setSelectedRegion] = useState(
    customer ? customer.region : ""
  );

  const handleSave = () => {
    Keyboard.dismiss();

    dispatch(
      saveCustomer({
        id: customerId || "",
        firstName,
        lastName,
        isActive: status,
        region: selectedRegion,
      })
    );

    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <DefaultButton title="Save" onPress={handleSave} />,
    });
  }, [handleSave]);

  const handleFirstNameChange = (fname) => setFirstName(fname);
  const handleLastNameChange = (lname) => setLastName(lname);
  const handleStatusChange = () => setStatus(!status);

  return (
    <View>
      <Input
        label="First Name"
        placeholder="John"
        value={firstName}
        onChangeText={handleFirstNameChange}
      />
      <Input
        label="Last Name"
        placeholder="Doe"
        value={lastName}
        onChangeText={handleLastNameChange}
      />
      <Text style={styles.headings}>Status</Text>
      <Button
        style={{ marginTop: 5, backgroundColor: !status ? "grey" : "darkblue" }}
        onPress={handleStatusChange}
      >
        Active
      </Button>
      <Button
        style={{ marginTop: 5, backgroundColor: status ? "grey" : "darkblue" }}
        onPress={handleStatusChange}
      >
        Inactive
      </Button>
      <Text style={[styles.headings, { marginTop: 10 }]}>Select Region</Text>
      {regions &&
        regions.map((region, index) => (
          <Button
            style={{
              marginTop: 5,
              backgroundColor:
                selectedRegion !== region.id ? "grey" : "darkblue",
            }}
            key={`${region.id}-${index}`}
            onPress={() => setSelectedRegion(region.id)}
          >
            {region.name}
          </Button>
        ))}
    </View>
  );
};

export default EditCustomerPage;

const styles = StyleSheet.create({
  statusView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
  headings: {
    fontSize: 22,
    fontWeight: "500",
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
});
