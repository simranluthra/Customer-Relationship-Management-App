import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import * as Notifications from 'expo-notifications';

import { Button } from "../components";
import { deleteCustomers, getCustomers } from "../store/customer/actions";

const WelcomePage = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  const handleContinue = () => {
    navigation.navigate("RegionListPage");
  };

  const handleClearStorage = async () => dispatch(deleteCustomers());

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Welcome',
        body: 'Welcome to customer management app',
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Customer Management App</Text>
      <Button onPress={handleContinue}>Click on Continue....</Button>
      <Button style={{ marginTop: 10 }} onPress={handleClearStorage}>
        Click on Clear Storage
      </Button>
      <Button style={{ marginTop: 10 }} onPress={scheduleNotification}>
        Schedule Notification
      </Button>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom: 50,
  },
});
