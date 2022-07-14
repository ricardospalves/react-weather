import { MdError as ErrorIcon } from 'react-icons/md'

type CurrentWeatherErrorProps = {
  heading: string
  description: string
}

export const CurrentWeatherError = ({
  description,
  heading,
}: CurrentWeatherErrorProps) => {
  return (
    <section className="rounded p-4 text-center max-w-sm mx-auto mt-8 border bg-red-400 border-red-600 dark:bg-red-600 dark:border-red-800">
      <ErrorIcon
        className="block w-12 h-12 fill-current mx-auto"
        aria-hidden={true}
      />

      <h2 className="font-bold mb-4 text-3xl">{heading}</h2>

      <p>{description}</p>
    </section>
  )
}
