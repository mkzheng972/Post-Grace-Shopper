'use strict'

const dummyUsers = [
  {
    firstName: 'Deanna',
    lastName: 'Aynold',
    email: 'daynold0@cisco.com',
    imageUrl: 'http://dummyimage.com/119x183.bmp/cc0000/ffffff',
    password: 'CDQ2CbQ6KRT'
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
  },
  {
    firstName: 'Karil',
    lastName: 'Jakubowski',
    email: 'kjakubowski5@soundcloud.com',
    imageUrl: 'http://dummyimage.com/239x178.jpg/dddddd/000000',
    password: 'AQI9GtF'
  },
  {
    firstName: 'Harmony',
    lastName: 'Hollyer',
    email: 'hhollyer6@reference.com',
    imageUrl: 'http://dummyimage.com/205x195.bmp/dddddd/000000',
    password: '5AwnTq'
  },
  {
    firstName: 'Jeannie',
    lastName: 'McGaraghan',
    email: 'jmcgaraghan7@livejournal.com',
    imageUrl: 'http://dummyimage.com/130x230.bmp/5fa2dd/ffffff',
    password: 'rEPSGDE0i88'
  },
  {
    firstName: 'Pooh',
    lastName: 'Zemler',
    email: 'pzemler8@qq.com',
    imageUrl: 'http://dummyimage.com/208x170.bmp/dddddd/000000',
    password: 'MJYfaf'
  },
  {
    firstName: 'Alec',
    lastName: 'Bartalot',
    email: 'abartalot9@examiner.com',
    imageUrl: 'http://dummyimage.com/240x111.bmp/dddddd/000000',
    password: 's5fB8el7oa'
  },
  {
    firstName: 'Cece',
    lastName: 'Haylands',
    email: 'chaylandsa@state.gov',
    imageUrl: 'http://dummyimage.com/237x191.bmp/cc0000/ffffff',
    password: 'AgSybaoj60X'
  },
  {
    firstName: 'Forrester',
    lastName: 'Westley',
    email: 'fwestleyb@fastcompany.com',
    imageUrl: 'http://dummyimage.com/175x142.jpg/cc0000/ffffff',
    password: '34wwb1'
  },
  {
    firstName: 'Mack',
    lastName: 'Dallemore',
    email: 'mdallemorec@skyrock.com',
    imageUrl: 'http://dummyimage.com/226x211.bmp/ff4444/ffffff',
    password: 'Q7MLWLeWvM1m'
  },
  {
    firstName: 'Milicent',
    lastName: 'Priestland',
    email: 'mpriestlandd@360.cn',
    imageUrl: 'http://dummyimage.com/119x220.jpg/ff4444/ffffff',
    password: 'pw4qd8O7'
  },
  {
    firstName: 'Linn',
    lastName: 'Frowde',
    email: 'lfrowdee@ezinearticles.com',
    imageUrl: 'http://dummyimage.com/235x153.png/cc0000/ffffff',
    password: 'Q5oVYoh1geT'
  },
  {
    firstName: 'Natka',
    lastName: 'Dudliston',
    email: 'ndudlistonf@oracle.com',
    imageUrl: 'http://dummyimage.com/204x156.png/5fa2dd/ffffff',
    password: '0yAkBQqqABkT'
  },
  {
    firstName: 'Elle',
    lastName: 'Chippindale',
    email: 'echippindaleg@webmd.com',
    imageUrl: 'http://dummyimage.com/178x241.jpg/5fa2dd/ffffff',
    password: 'rxrEcwjYtnx9'
  },
  {
    firstName: 'Briana',
    lastName: 'Brolechan',
    email: 'bbrolechanh@infoseek.co.jp',
    imageUrl: 'http://dummyimage.com/112x244.bmp/dddddd/000000',
    password: 'XOUTDb7pe'
  },
  {
    firstName: 'Chester',
    lastName: 'Rougier',
    email: 'crougieri@webmd.com',
    imageUrl: 'http://dummyimage.com/207x248.jpg/ff4444/ffffff',
    password: 'lPKUhZ2pk'
  },
  {
    firstName: 'Cynthy',
    lastName: 'Jonah',
    email: 'cjonahj@tuttocitta.it',
    imageUrl: 'http://dummyimage.com/127x104.bmp/dddddd/000000',
    password: '4RECgOgtf6'
  }
]

const dummyNoodles = [
  {
    name: 'Spicy Beef Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl: '',
    description: 'Beef noodle soup with spice and veggies',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Pork Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl: '',
    description: 'Pork with noodles and soup',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Lamb Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl: '',
    description: 'Lamb with noodles and soup',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Chicken Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl: '',
    description: 'Chicken with noodle soup and spice',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Vegetable Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl: '',
    description: 'Vegetables with a mix of spicy noodle and soup',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Seafood Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl: '',
    description: 'Seafood mix of shrimp and others with noodle and soup',
    price: 10.99,
    quantity: 1,
    isCustom: false
  }
]

const db = require('../server/db')
const {User, Order, Noodle, Ingredient} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'testemail@email.com', password: '1', googleId: 1}),
    dummyUsers.map(user => {
      return User.create(user)
    })
  ])

  const orders = await Order.create({
    instructions: 'No cilantro',
    userId: 1,
    status: 'pending'
  })

  const noodles = await Promise.all(
    dummyNoodles.map(noodle => {
      return Noodle.create(noodle)
    })
  )

  const ingredient = await Ingredient.create({
    name: 'beef',
    description: 'this is beef from nyc',
    isVeggie: false
  })

  // THERE IS AN ERROR

  await orders.addNoodle(noodles[0])
  // await dummyNoodles[0].addIngredient(ingredient)

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
