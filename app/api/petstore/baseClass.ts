class ApiResponse {
  /** code */
  code = undefined;

  /** message */
  message = '';

  /** type */
  type = '';
}

class Category {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

class Order {
  /** complete */
  complete = false;

  /** id */
  id = undefined;

  /** petId */
  petId = undefined;

  /** quantity */
  quantity = undefined;

  /** shipDate */
  shipDate = '';

  /** Order Status */
  status = 'placed';
}

class Pet {
  /** category */
  category = new Category();

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** photoUrls */
  photoUrls = [];

  /** pet status in the store */
  status = 'available';

  /** tags */
  tags = [];
}

class Tag {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

class User {
  /** email */
  email = '';

  /** firstName */
  firstName = '';

  /** id */
  id = undefined;

  /** lastName */
  lastName = '';

  /** password */
  password = '';

  /** phone */
  phone = '';

  /** User Status */
  userStatus = undefined;

  /** username */
  username = '';
}

export const petstore = {
  ApiResponse,
  Category,
  Order,
  Pet,
  Tag,
  User,
};
