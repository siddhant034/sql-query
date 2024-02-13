export enum QUERY {
    CUSTOMERS = 1,
    ORDER = 2,
    PRODUCTS = 3,
    SUPPLIERS = 4,
    INVALID = 5
};

export const QUERY_DATA_MAP = {
    [QUERY.CUSTOMERS] : 'src/mocks/customers.csv',
    [QUERY.ORDER] : 'src/mocks/orders.csv',
    [QUERY.PRODUCTS] : 'src/mocks/products.csv',
    [QUERY.SUPPLIERS] : 'src/mocks/suppliers.csv',
};