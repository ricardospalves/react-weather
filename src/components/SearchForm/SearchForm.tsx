import { useContext } from 'react'

import { CurrentWeatherDataContext } from 'src/contexts/CurrentWeatherDataContext'

export const SearchForm = () => {
  const {
    search,
    setSearch,
    query: { refetch },
  } = useContext(CurrentWeatherDataContext)

  return (
    <form
      role="search"
      onSubmit={(event) => {
        event.preventDefault()
        refetch()
      }}
    >
      <label htmlFor="searchField" className="block pb-1">
        Digite o nome da cidade
      </label>

      <div className="flex-col md:flex-row flex gap-2">
        <input
          type="search"
          className="block w-full md:grow border-2 rounded border-current h-10 px-2 bg-transparent disabled:cursor-not-allowed disabled:opacity-50"
          id="searchField"
          placeholder="Ex.: Tangamandápio"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          autoFocus={true}
        />

        <button className="block w-full md:w-auto md:shrink-0 rounded h-10 font-bold px-4 bg-blue-700 hover:bg-blue-900 focus-visible:bg-blue-900 dark:bg-blue-500 dark:hover:bg-blue-300 dark:focus-visible:bg-blue-300 dark:text-neutral-900 text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50">
          Buscar
        </button>
      </div>
    </form>
  )
}
