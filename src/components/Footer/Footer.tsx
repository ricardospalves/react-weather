import { GITHUB } from 'src/constants'

export const Footer = () => {
  return (
    <footer className="shrink-0 p-4 text-center">
      <p>
        Distribuído sob a{' '}
        <a
          href={GITHUB.licenseUrl}
          className="underline text-blue-700 hover:text-blue-900 focus-visible:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300 dark:focus-visible:text-blue-300 transition-colors"
        >
          licença {GITHUB.license}
        </a>
        .
      </p>
    </footer>
  )
}
