export const APIBaseUrl: string = "http://localhost:9191";

export const APIEndpoints = {
  productApi: {
    products: () => `${APIBaseUrl}/product`,
    byId: () => `${APIBaseUrl}/product/by-id`,
    create: () => `${APIBaseUrl}/product/create`,
    update: () => `${APIBaseUrl}/product/update`,
    delete: () => `${APIBaseUrl}/product/delete`,
  }
}
