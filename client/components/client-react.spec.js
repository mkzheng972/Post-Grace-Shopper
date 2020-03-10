import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllNoodles} from './AllNoodles'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('All Noodles Product', () => {
  let AllNoodlesComponent
  let fakeUser
  let noodles

  beforeEach(() => {
    AllNoodlesComponent = shallow(<AllNoodles noodles="cody@email.com" />)
    fakeUser = {email: 'Cody', isAdmin: true}
    noodles = [
      {
        id: 3,
        name: 'Spicy Pork Noodle Soup',
        noodleType: 'hand-pulled',
        description: 'Pork with noodles and soup',
        price: 1099,
        stock: 1,
        isCustom: false,
        createdAt: '2020-03-09T17:11:17.343Z',
        updatedAt: '2020-03-09T17:11:17.343Z'
      },
      {
        id: 5,
        name: 'Spicy Beef Noodle Soup',
        noodleType: 'hand-pulled',
        description: 'Beef noodle soup with spice and veggies',
        price: 1099,
        stock: 0,
        isCustom: false,
        createdAt: '2020-03-09T17:11:17.343Z',
        updatedAt: '2020-03-09T17:11:17.343Z'
      }
    ]
  })

  it('renders all noodle products', () => {
    expect(AllNoodlesComponent.find('div').text()).to.be.equal(noodles[0])
  })
})
