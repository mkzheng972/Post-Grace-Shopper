'use strict'

const dummyUsers = [
  {
    firstName: 'Cody',
    lastName: 'Cafe',
    email: 'cody@email.com',
    imageUrl: 'http://dummyimage.com/119x183.bmp/cc0000/ffffff',
    password: '123'
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
    imageUrl: '../public/spicyBeefNoodleSoup.jpg',
    description: 'Beef noodle soup with spice and veggies',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Pork Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl: '../public/spicyPorkNoodleSoup.jpg',
    description: 'Pork with noodles and soup',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Lamb Noodle Soup',
    noodleType: 'hand-pulled',
    imageUrl: '../public/spicyLambNoodleSoup.jpg',
    description: 'Lamb with noodles and soup',
    price: 10.99,
    quantity: 1,
    isCustom: false
  },
  {
    name: 'Spicy Chicken Noodle Soup',
    noodleType: 'hand-pulled',
    // imageUrl: '../public/spicyChickenNoodleSoup.jpeg',
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
    imageUrl: '../public/spicyVegetableNoodleSoup.jpg',
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
  {status: 'pending', date: '2019-08-11', instructions: null},
  {
    status: 'pending',
    date: '2019-08-04',
    instructions: 'Polarised regional hub'
  },
  {status: 'completed', date: '2019-10-12', instructions: null},
  {
    status: 'pending',
    date: '2019-07-23',
    instructions: 'Proactive impactful methodology'
  },
  {
    status: 'pending',
    date: '2019-09-01',
    instructions: 'Re-engineered multimedia capacity'
  },
  {status: 'completed', date: '2020-02-19', instructions: null},
  {
    status: 'pending',
    date: '2019-05-24',
    instructions: 'Mandatory asymmetric utilisation'
  },
  {
    status: 'pending',
    date: '2019-12-05',
    instructions: 'Inverse optimal extranet'
  },
  {status: 'completed', date: '2019-06-30', instructions: null},
  {status: 'pending', date: '2019-07-03', instructions: null},
  {status: 'completed', date: '2019-03-11', instructions: null},
  {status: 'pending', date: '2019-08-30', instructions: null},
  {status: 'pending', date: '2019-04-20', instructions: null},
  {status: 'pending', date: '2019-06-09', instructions: null},
  {status: 'completed', date: '2019-10-31', instructions: null},
  {status: 'pending', date: '2019-08-18', instructions: null},
  {status: 'pending', date: '2020-02-07', instructions: null},
  {status: 'completed', date: '2020-01-26', instructions: null},
  {
    status: 'completed',
    date: '2019-07-23',
    instructions: 'Integrated intermediate emulation'
  },
  {status: 'completed', date: '2019-05-05', instructions: null},
  {status: 'pending', date: '2019-06-25', instructions: null},
  {status: 'pending', date: '2019-05-21', instructions: null},
  {status: 'completed', date: '2019-12-16', instructions: null},
  {
    status: 'completed',
    date: '2019-05-04',
    instructions: 'Integrated full-range toolset'
  },
  {status: 'completed', date: '2019-08-09', instructions: null},
  {
    status: 'pending',
    date: '2020-01-29',
    instructions: 'Implemented executive toolset'
  },
  {
    status: 'completed',
    date: '2019-10-27',
    instructions: 'Adaptive uniform projection'
  },
  {status: 'completed', date: '2019-04-17', instructions: null},
  {
    status: 'completed',
    date: '2020-01-12',
    instructions: 'Multi-layered motivating secured line'
  },
  {status: 'pending', date: '2019-08-07', instructions: null},
  {status: 'completed', date: '2019-04-20', instructions: null},
  {status: 'pending', date: '2019-11-08', instructions: null},
  {status: 'pending', date: '2019-04-16', instructions: null},
  {status: 'completed', date: '2019-05-05', instructions: null},
  {
    status: 'pending',
    date: '2019-12-24',
    instructions: 'Versatile eco-centric throughput'
  },
  {status: 'completed', date: '2019-12-29', instructions: null},
  {
    status: 'pending',
    date: '2019-04-23',
    instructions: 'Mandatory human-resource collaboration'
  },
  {status: 'pending', date: '2020-01-13', instructions: null},
  {
    status: 'pending',
    date: '2019-07-04',
    instructions: 'Enterprise-wide stable adapter'
  },
  {status: 'pending', date: '2019-04-22', instructions: null},
  {status: 'pending', date: '2019-07-22', instructions: null},
  {
    status: 'completed',
    date: '2019-06-02',
    instructions: 'Function-based directional initiative'
  },
  {
    status: 'completed',
    date: '2020-01-30',
    instructions: 'Re-contextualized contextually-based frame'
  },
  {status: 'completed', date: '2019-06-16', instructions: null},
  {
    status: 'pending',
    date: '2020-02-05',
    instructions: 'Digitized context-sensitive database'
  }
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
  },
  {
    name: 'Pastry - Raisin Muffin - Mini',
    isVeggie: true,
    description: 'Polarised interactive matrix'
  },
  {
    name: 'Wine - Vouvray Cuvee Domaine',
    isVeggie: false,
    description: 'Reactive leading edge function'
  },
  {
    name: 'Gooseberry',
    isVeggie: true,
    description: 'Enterprise-wide client-driven infrastructure'
  },
  {
    name: 'Snapple Lemon Tea',
    isVeggie: true,
    description: 'Front-line asynchronous leverage'
  },
  {
    name: 'Marjoram - Fresh',
    isVeggie: false,
    description: 'Distributed global ability'
  },
  {
    name: 'French Pastries',
    isVeggie: true,
    description: 'Universal intangible open architecture'
  },
  {
    name: 'Scallops 60/80 Iqf',
    isVeggie: false,
    description: 'Self-enabling static collaboration'
  },
  {
    name: 'Sesame Seed',
    isVeggie: true,
    description: 'Future-proofed multi-tasking flexibility'
  },
  {
    name: 'Pepper - Scotch Bonnet',
    isVeggie: true,
    description: 'Up-sized value-added extranet'
  },
  {
    name: 'Shrimp - Black Tiger 8 - 12',
    isVeggie: true,
    description: 'Profound empowering concept'
  },
  {
    name: 'Lettuce - California Mix',
    isVeggie: true,
    description: 'Expanded fault-tolerant approach'
  },
  {
    name: 'Strawberries',
    isVeggie: true,
    description: 'Automated incremental knowledge base'
  },
  {
    name: 'Soupcontfoam16oz 116con',
    isVeggie: true,
    description: 'Grass-roots neutral methodology'
  },
  {
    name: 'Petit Baguette',
    isVeggie: true,
    description: 'Organized upward-trending service-desk'
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
      return order.setUser(users[Math.round(Math.random() * 20)])
    }),
    orders.map(order => {
      if (Math.round(Math.random()) === 1) {
        return order.addNoodle(noodles[Math.round(Math.random() * 6)])
      }
    }),
    orders.map(order => {
      if (Math.round(Math.random()) === 1) {
        return order.addNoodle(noodles[Math.round(Math.random() * 6)])
      }
    }),
    ingredients.map(ingredient => {
      if (Math.round(Math.random()) === 1) {
        return ingredient.addNoodle(noodles[Math.round(Math.random() * 6)])
      }
    }),
    ingredients.map(ingredient => {
      if (Math.round(Math.random()) === 1) {
        return ingredient.addNoodle(noodles[Math.round(Math.random() * 6)])
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
