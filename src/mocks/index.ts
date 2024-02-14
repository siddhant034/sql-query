export enum QUERY {
    CUSTOMERS = 1,
    ORDER = 2,
    PRODUCTS = 3,
    SUPPLIERS = 4,
    INVALID = 5
};

export const QUERY_DATA_MAP = {
    [QUERY.CUSTOMERS] : 'mocks/customers.csv',
    [QUERY.ORDER] : 'mocks/orders.csv',
    [QUERY.PRODUCTS] : 'mocks/products.csv',
    [QUERY.SUPPLIERS] : 'mocks/suppliers.csv',
};