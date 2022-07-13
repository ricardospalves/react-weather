type CurrentWeatherErrorProps = {
  heading: string
  description: string
}

export const CurrentWeatherError = ({
  description,
  heading,
}: CurrentWeatherErrorProps) => {
  return (
    <section className="text-center max-w-sm mx-auto mt-8">
      <h2 className="font-bold mb-4 text-3xl">{heading}</h2>

      <p>{description}</p>
    </section>
  )
}
