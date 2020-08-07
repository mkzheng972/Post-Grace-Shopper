'use strict'

const dummyUsers = [
  {
    firstName: 'Cody',
    lastName: 'Cafe',
    email: 'cody@email.com',
    imageUrl:
      'https://ksk132dvocz3814ql108etk1-wpengine.netdna-ssl.com/wp-content/uploads/2009/10/Pug-Puppy.jpg',
    password: '123',
    isAdmin: true
  },
  {
    firstName: 'Chip',
    lastName: 'Wabersich',
    email: 'cw@email.com',
    imageUrl:
      'https://b3h2.scene7.com/is/image/BedBathandBeyond/97023047087521p?$690$&wid=690&hei=690',
    password: '123'
  },
  {
    firstName: 'Denni',
    lastName: 'Fosher',
    email: 'df@email.com',
    imageUrl: 'https://i.stack.imgur.com/l60Hf.png',
    password: '123'
  }
]

const dummyNoodles = [
  {
    name: 'Spicy Beef Noodle Soup',
    noodleType: 'soup',
    imageUrl:
      'https://media-cdn.tripadvisor.com/media/photo-s/0d/32/cf/39/spicy-beef-noodle-soup.jpg',
    description:
      'Beef noodle soup with beef flank, bok choy, and house special soup',
    price: 1099,
    quantity: 1,
    isCustom: false,
    isVeggie: false
  },
  {
    name: 'Spicy Pork Noodle Soup',
    noodleType: 'soup',
    imageUrl:
      'https://img.delicious.com.au/OqmFaoLj/w759-h506-cfill/del/2017/07/japanese-spicy-miso-pork-ramen-49051-1.jpg',
    description: 'Ground pork with spicy noodles, bok choy, scallion, and egg',
    price: 1099,
    quantity: 1,
    isCustom: false,
    isVeggie: false
  },
  {
    name: 'Spicy Lamb Noodle Soup',
    noodleType: 'soup',
    imageUrl:
      'https://i.pinimg.com/originals/63/de/ad/63deada440ecd5b4bd40c503f26df6a0.jpg',
    description:
      'Sliced lamb with spicy noodles, chili sauce, scallions, and cilantro',
    price: 1099,
    quantity: 1,
    isCustom: false,
    isVeggie: false
  },
  {
    name: 'Spicy Chicken Noodle Soup',
    noodleType: 'soup',
    imageUrl:
      'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/SFS_CurriedChickenNoodleSoup-42_bqbizi',
    description: 'Chopped chicken with noodles, basil, carrot, lime, mushroom',
    price: 999,
    quantity: 1,
    isCustom: false,
    isVeggie: false
  },
  {
    name: 'Spicy Vegetable Noodle Soup',
    noodleType: 'soup',
    imageUrl:
      'https://heatherchristo.com/wp-content/uploads/2014/01/Spicy-Thai-Curry-Noodle-Soup1.jpg',
    description:
      'Vegetables with spicy noodles, basil, bok choy, mushroom, green or red pepper',
    price: 999,
    quantity: 1,
    isCustom: false,
    isVeggie: true
  },
  {
    name: 'Spicy Seafood Noodle Soup',
    noodleType: 'soup',
    imageUrl:
      'https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1902/bbtreesubmission190209644/117880688-korean-chinese-cuisine-jjambbong-spicy-seafood-noodle-soup-with-octopus-crab-and-shrimp.jpg',
    description:
      'Seafood mix with spicy noodles, shrimp, squid, calm, crab, and red pepper',
    price: 1199,
    quantity: 1,
    isCustom: false,
    isVeggie: false
  },
  {
    name: 'Spicy Cold Noodles',
    noodleType: 'dry',
    imageUrl: '/images/spicyColdNoodles.jpg',
    description: 'Spicy cold noodles with peanut sauce and scallion',
    price: 999,
    quantity: 1,
    isCustom: false,
    isVeggie: true
  },
  {
    name: 'Spicy DanDan Noodles',
    noodleType: 'dry',
    imageUrl: '/images/spicyDanDanNoodles.jpg',
    description:
      'Chinese dandan noodles with ground pork, chinese broccoli, and chili sauce',
    price: 1099,
    quantity: 1,
    isCustom: false,
    isVeggie: false
  },
  {
    name: 'Spicy Egg Noodles',
    noodleType: 'dry',
    imageUrl: '/images/spicySweetWontonNoodlesWithEgg.jpeg',
    description:
      'Spicy egg noodles with a soft boiled egg, tomato, and red pepper',
    price: 999,
    quantity: 1,
    isCustom: false,
    isVeggie: false
  },
  {
    name: 'Spicy Udon Noodles',
    noodleType: 'dry',
    imageUrl: '/images/spicyUdonNoodlesWithTofu.jpeg',
    description:
      'Spicy udon noodles with selected herbs and mixed choices of vegetables',
    price: 1099,
    quantity: 1,
    isCustom: false,
    isVeggie: true
  },
  {
    name: 'Spicy Singapore Noodles',
    noodleType: 'dry',
    imageUrl: '/images/spicySingaporeNoodles.jpeg',
    description:
      'Spicy singapore rice noodles with tofu and various vegetables',
    price: 1199,
    quantity: 1,
    isCustom: false,
    isVeggie: false
  }
]

const dummyOrders = [
  {status: 'completed', date: '2019-09-16', instructions: null},
  {status: 'completed', date: '2019-07-09', instructions: null},
  {status: 'completed', date: '2019-10-07', instructions: null},
  {status: 'completed', date: '2019-08-25', instructions: null},
  {status: 'completed', date: '2019-03-24', instructions: null},
  {status: 'completed', date: '2019-08-11', instructions: null}
]

const dummyIngredients = [
  {
    name: 'Cookies - Amaretto',
    isVeggie: true,
    description: 'Self-enabling non-volatile methodology'
  },
  {
    name: 'Mustard - Individual Pkg',
    isVeggie: false,
    description: 'Up-sized logistical attitude'
  },
  {
    name: 'Pastry - Apple Large',
    isVeggie: true,
    description: 'Polarised zero administration info-mediaries'
  },
  {
    name: 'Cake - Box Window 10x10x2.5',
    isVeggie: false,
    description: 'Sharable zero defect definition'
  },
  {
    name: 'Cafe Royale',
    isVeggie: false,
    description: 'Profound bottom-line matrices'
  },
  {
    name: 'Ice Cream Bar - Oreo Sandwich',
    isVeggie: false,
    description: 'Decentralized clear-thinking local area network'
  }
]

const db = require('../server/db')
const {User, Order, Noodle, Ingredient} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all(
    dummyUsers.map(user => {
      return User.create(user)
    })
  )

  const orders = await Promise.all(
    dummyOrders.map(order => {
      return Order.create(order)
    })
  )

  const noodles = await Promise.all(
    dummyNoodles.map(noodle => {
      return Noodle.create(noodle)
    })
  )

  const ingredients = await Promise.all(
    dummyIngredients.map(ingredient => {
      return Ingredient.create(ingredient)
    })
  )

  await users[0].addOrder(orders[0])
  await users[0].addOrder(orders[1])
  await users[1].addOrder(orders[2])
  await users[1].addOrder(orders[3])
  await users[2].addOrder(orders[4])
  await users[2].addOrder(orders[5])

  await orders[0].addNoodle(noodles[0], {through: {quantity: 2, price: 10}})
  await orders[0].addNoodle(noodles[1], {through: {quantity: 2, price: 10}})
  await orders[1].addNoodle(noodles[2], {through: {quantity: 2, price: 10}})
  await orders[1].addNoodle(noodles[3], {through: {quantity: 2, price: 10}})
  await orders[2].addNoodle(noodles[4], {through: {quantity: 2, price: 10}})
  await orders[2].addNoodle(noodles[5], {through: {quantity: 2, price: 10}})

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `` function from the `run` function.
// This way we can isolate the error handling and exit trapping.
// The `` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `` function, IF we ran this module directly (`node `).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of ``.
if (module === require.main) {
  runSeed()
}

// we export the  function for testing purposes (see `./.spec.js`)
module.exports = seed
