import { SetStateAction, useState } from 'react'
import './Search.scss'

const Search = (props: {
  onSearch: (arg0: SetStateAction<string>) => void
}) => {
  const [searchValue, setEnteredSearchValue] = useState('')
  const searchChangeHandler = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setEnteredSearchValue(e.target.value)
    props.onSearch(e.target.value)
  }
  return (
    <>
      <label className="label--search" htmlFor="Search"> </label>
      <input
        type="text"
        name="Search"
        className="input--search"
        value={searchValue}
        onChange={searchChangeHandler}
        placeholder="SEARCH (Client Name / Policy Number)"
      />
    </>
  )
}

export default Search
