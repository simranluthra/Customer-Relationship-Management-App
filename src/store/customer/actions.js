export const getCustomers = () => ({ type: 'GET_CUSTOMERS' });
export const saveCustomer = (customer) => ({ type: 'SAVE_CUSTOMER', payload: customer });
export const deleteCustomers = () => ({ type: 'DELETE_CUSTOMERS' });
