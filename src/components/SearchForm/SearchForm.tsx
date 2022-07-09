import { useCallback, useContext, useEffect, useRef } from 'react'
import { MdMyLocation as MyLocationIcon } from 'react-icons/md'

import { CurrentWeatherDataContext } from 'src/contexts/CurrentWeatherDataContext'

const LOCATION_TEXT = 'Pegar a minha localização'

export const SearchForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const {
    search,
    setSearch,
    setCoordinates,
    query: { refetch, data },
  } = useContext(CurrentWeatherDataContext)

  const dispatchSetSearch = useCallback(
    (name: string) => {
      setSearch(name)
    },
    [setSearch],
  )

  useEffect(() => {
    if (data) {
      dispatchSetSearch(data.name)
    }
  }, [data, dispatchSetSearch])

  return (
    <form
      role="search"
      ref={formRef}
      onSubmit={(event) => {
        event.preventDefault()
        refetch()
      }}
    >
      <label htmlFor="searchField" className="block pb-1">
        Digite o nome da cidade
      </label>

      <div className="flex-col md:flex-row flex gap-2">
        <div className="md:grow relative">
          <input
            type="search"
            className="block w-full border-2 rounded border-current h-10 pl-2 pr-10 bg-transparent disabled:cursor-not-allowed disabled:opacity-50"
            id="searchField"
            placeholder="Ex.: Tangamandápio"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            autoFocus={true}
            required
          />

          <button
            type="button"
            className="block w-10 h-10 absolute inset-y-0 right-0 hover:text-blue-700 focus-visible:text-blue-700 dark:hover:text-blue-500 dark:focus-visible:text-blue-500 transition-colors"
            aria-label={LOCATION_TEXT}
            onClick={() => {
              navigator.geolocation.getCurrentPosition(({ coords }) => {
                setSearch('')
                setCoordinates({
                  latitude: coords.latitude,
                  longitude: coords.longitude,
                })
              })
            }}
          >
            <MyLocationIcon
              className="block mx-auto w-6 h-6"
              title={LOCATION_TEXT}
              aria-hidden={true}
            />
          </button>
        </div>

        <button
          type="submit"
          className="block w-full md:w-auto md:shrink-0 rounded h-10 font-bold px-4 bg-blue-700 hover:bg-blue-900 focus-visible:bg-blue-900 dark:bg-blue-500 dark:hover:bg-blue-300 dark:focus-visible:bg-blue-300 dark:text-neutral-900 text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          Buscar
        </button>
      </div>
    </form>
  )
}
