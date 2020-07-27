import React from 'react'

export const SortNoodle = ({handleSortNoodle}) => {
  return (
    <div className="card text-center" id="sort-noodle">
      <h4>Filter By Noodle Type</h4>
      <div className="sort-products">
        <button
          type="button"
          className="btn btn-warning"
          name="soup"
          onClick={handleSortNoodle}
        >
          Soup Noodles
        </button>
        <button
          type="button"
          className="btn btn-warning"
          name="dry"
          onClick={handleSortNoodle}
        >
          Dry Noodles
        </button>
        <button
          type="button"
          className="btn btn-warning"
          name="veggie"
          onClick={handleSortNoodle}
        >
          Veggie Noodles
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          name="all"
          onClick={handleSortNoodle}
        >
          No Filter
        </button>
        {/* {userAdmin} TO ADD NOODLES */}
      </div>
    </div>
  )
}
