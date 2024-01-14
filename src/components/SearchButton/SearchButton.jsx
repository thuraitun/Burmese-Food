
const SearchButton = ({ search, setSearch }) => {
  return (
    <div className="mr-6">
        <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search here ......" className="input w-full max-w-xs focus:outline-none border border-orange-500 focus:border-orange-500" />
    </div>
  )
}

export default SearchButton
