import React from 'react'
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../../store/noodles'

const Header = props => {
  return (
    <div>
      <button onClick={() => props.visibilityFilter('SHOW_ALL')}>All</button>
      <button onClick={() => props.visibilityFilter('SHOW_HAND_PULLED')}>
        Hand-Pulled
      </button>
      <button onClick={() => props.visibilityFilter('SHOW_DRY')}>Dry</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  visibilityFilter: visFilter => dispatch(setVisibilityFilter(visFilter))
})

export default connect(null, mapDispatchToProps)(Header)
