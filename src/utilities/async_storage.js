import AsyncStorage from '@react-native-async-storage/async-storage';
const { getItem, setItem, removeItem } = AsyncStorage;

const getCustomersFromStorage = async () => {
  try {
    const customers = await getItem('customers');
    const customersJSON = customers ? JSON.parse(customers) : [];
    return { data: customersJSON };
  } catch (error) {
    console.log(`Error: ${error}`);
    return { data: [] };
  }
};

const saveCustomerInStorage = async (customer) => {
  try {
    const customers = await getItem('customers');
    let customersJSON = customers ? JSON.parse(customers) : [];
    let id;
    if (customer.id) {
      id = customer.id;
      customersJSON = customersJSON.filter((x) => x.id !== customer.id);
    } else {
      id = `${Date.now()}`;
    }
    customersJSON.push({
      ...customer,
      id
    });
    await setItem('customers', JSON.stringify(customersJSON));
    return { data: customersJSON };
  } catch (error) {
    console.log(`Error: ${error}`);
    return { data: null };
  }
};

const deleteCustomersFromStorage = async () => {
  try {
    await removeItem('customers');
    return true;
  } catch (error) {
    console.log(`Error: ${error}`);
    return false;
  }
};

export { getCustomersFromStorage, saveCustomerInStorage, deleteCustomersFromStorage };
