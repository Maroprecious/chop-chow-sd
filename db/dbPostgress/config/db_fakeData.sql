INSERT INTO
  list (
    id,
    product_name,
    product_image,
    product_price,
    sizes,
    price_per_ounce
  )
VALUES
  (
    1,
    'Ijebu Garri',
    'garri.jpg',
    8.99,
    '50lbs',
    null
  ),(
    2,
    'Brown Beans',
    'beans.jpg',
    12.00,
    '2 lbs',
    3.2
  ),(
    3,
    'Honey Beans',
    'beans.jpeg',
    12.00,
    '2 lbs',
    3.2
  ),(
    4,
    'Spinach',
    'spinach.jpeg',
    2.99,
    '0.5lbs',
    null
  ),(
    5,
    'Kale',
    'kale.jpg',
    2.99,
    '0.5lbs',
    null
  ),(
    6,
    'Oregano',
    'oregano.jpg',
    1.00,
    '1lbs',
    null
  ),(
    7,
    'Squash Potatoes',
    'squash_poatoes.jpeg',
    8.99,
    '50lbs',
    null
  ),(
    8,
    'Water',
    'water.jpeg',
    8.99,
    '50lbs',
    null
  ),(
    9,
    'Plantain Chips',
    'plantain_chips.jpg',
    12.00,
    '2 lbs',
    3.2
  ),(
    10,
    'Cashews',
    'cashews.jpg',
    12.00,
    '2 lbs',
    3.2
  ),(
    11,
    'Peanuts',
    'peanuts.jpeg',
    8.99,
    '50lbs',
    null
  ),(
    12,
    'Watermelon',
    'watermelon.jpg',
    12.00,
    '2 lbs',
    3.2
  ),(
    13,
    'Pineapple',
    'pineapple.jpg',
    12.00,
    '2 lbs',
    3.2
  );
INSERT INTO
  customer (
    id,
    firstname,
    lastname,
    email,
    password,
    phonenumber,
    street,
    city,
    zipcode,
    ipsid
  )
VALUES
(
    1,
    'Olasubomi',
    'Awokoya',
    'olasubomi.awokoya@hotmail.com',
    '$2a$05$C2OPWtVFkyH/WBayaDmAduMiFVeHTenP8Cb8PVeWa8C.sSdKKE2O.',
    234,
    'areha',
    'american',
    12334,
    4566
),(
    2,
    'Ola',
    'Awokoya',
    'iamsubomi@gmail.com',
    '$2a$05$6Q1VE6DzhS8Z2pBr1VEPv.sM2dWPKacPv9GFC5M1.auGPlbab38aK',
    282,
    'street',
    'city',
    92131,
    4566
  );
  INSERT INTO
  customer_list (
    customer_id,
    list_id
  )
VALUES(
  1,
  1
), (
  2,
  2
);
INSERT INTO
  admin (id, name)
VALUES
  (1, 'Olasubomi');
INSERT INTO
  supplier (id, storename)
VALUES
  (1, 'Dima');