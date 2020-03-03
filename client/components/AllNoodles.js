import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllNoodles} from '../store/noodles'

export class AllNoodles extends Component {
  // componentDidMount() {

  // }

  render() {
    const {noodles} = this.props
    console.log(noodles)
    return (
      <div>
        {noodles.map(noodle => (
          <div key={noodle.id}>
            <h4>{noodle.name}</h4>
            <img src={noodle.imageUrl} />
            <p>image Placeholder</p>
            <p>{noodle.description}</p>
            <p>{noodle.price}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  noodles: state.noodles
})

const mapDispatchToProps = dispatch => ({
  getAllNoodles: dispatch(getAllNoodles())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllNoodles)
