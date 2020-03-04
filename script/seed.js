'use strict'

const dummyUsers = [
  {
    firstName: 'Cody',
    lastName: 'Cafe',
    email: 'cody@email.com',
    imageUrl: 'http://dummyimage.com/119x183.bmp/cc0000/ffffff',
    password: '123',
    isAdmin: true
  },
  {
    firstName: 'Chip',
    lastName: 'Wabersich',
    email: 'cwabersich1@huffingtonpost.com',
    imageUrl: 'http://dummyimage.com/184x158.png/ff4444/ffffff',
    password: 'K6VeYQJQOgM'
  },
  {
    firstName: 'Denni',
    lastName: 'Fosher',
    email: 'dfosher2@google.it',
    imageUrl: 'http://dummyimage.com/225x226.png/dddddd/000000',
    password: '751zUPyt'
  },
  {
    firstName: 'Abbott',
    lastName: 'Janos',
    email: 'ajanos3@imdb.com',
    imageUrl: 'http://dummyimage.com/241x229.jpg/dddddd/000000',
    password: 'jyfTqZDa'
  },
  {
    firstName: 'Vilma',
    lastName: 'Dufaire',
    email: 'vdufaire4@china.com.cn',
    imageUrl: 'http://dummyimage.com/177x221.png/ff4444/ffffff',
    password: '6eCxcZatAZu'
  }
]

const dummyNoodles = [
  {
    name: 'Spicy Beef Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl:
      'https://media-cdn.tripadvisor.com/media/photo-s/0d/32/cf/39/spicy-beef-noodle-soup.jpg',
    description: 'Beef noodle soup with spice and veggies',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Pork Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl:
      'https://img.delicious.com.au/OqmFaoLj/w759-h506-cfill/del/2017/07/japanese-spicy-miso-pork-ramen-49051-1.jpg',
    description: 'Pork with noodles and soup',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Lamb Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl:
      'https://i.pinimg.com/originals/63/de/ad/63deada440ecd5b4bd40c503f26df6a0.jpg',
    description: 'Lamb with noodles and soup',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Chicken Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl:
      'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/SFS_CurriedChickenNoodleSoup-42_bqbizi',
    description: 'Chicken with noodle soup and spice',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Vegetable Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl:
      'https://heatherchristo.com/wp-content/uploads/2014/01/Spicy-Thai-Curry-Noodle-Soup1.jpg',
    description: 'Vegetables with a mix of spicy noodle and soup',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Seafood Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl:
      'https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1902/bbtreesubmission190209644/117880688-korean-chinese-cuisine-jjambbong-spicy-seafood-noodle-soup-with-octopus-crab-and-shrimp.jpg',
    description: 'Seafood mix of shrimp and others with noodle and soup',
    price: 10.99,
    quantity: 1,
    isCustom: false
  }
]

const dummyOrders = [
  {status: 'completed', date: '2019-09-16', instructions: null},
  {status: 'pending', date: '2019-07-09', instructions: null},
  {status: 'pending', date: '2019-10-07', instructions: null},
  {
    status: 'pending',
    date: '2019-08-25',
    instructions: 'Robust tangible matrix'
  },
  {status: 'completed', date: '2019-03-24', instructions: null},
  {status: 'pending', date: '2019-08-11', instructions: null}
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

  await Promise.all(
    orders.map(order => {
      return order.setUser(users[Math.round(Math.random() * 5)])
    }),
    orders.map(order => {
      if (Math.round(Math.random()) === 1) {
        return order.addNoodle(noodles[Math.round(Math.random() * 6)], {
          through: {quantity: Math.random() * 100}
        })
      }
    }),
    orders.map(order => {
      if (Math.round(Math.random()) === 1) {
        return order.addNoodle(noodles[Math.round(Math.random() * 6)], {
          through: {quantity: Math.random() * 100}
        })
      }
    }),
    ingredients.map(ingredient => {
      if (Math.round(Math.random()) === 1) {
        return ingredient.addNoodle(noodles[Math.round(Math.random() * 5)])
      }
    }),
    ingredients.map(ingredient => {
      if (Math.round(Math.random()) === 1) {
        return ingredient.addNoodle(noodles[Math.round(Math.random() * 5)])
      }
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
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

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
