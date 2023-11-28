//controls the information that we are going to use from the API call
export interface Product {
  "id": number,
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": string[]
}

export interface Products {
  products: Product[];
}

//TODO: Create category interface, create a category list interface
export interface Category {
  "title": string
}

export interface Categories {
  categories: Category[];
}

// TODO: Add User Interface with just a few fields

// TODO: Add a array/list of Users Interface
