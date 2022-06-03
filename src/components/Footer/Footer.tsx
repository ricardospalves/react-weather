import { GITHUB } from 'src/constants'
import { GENERAL } from 'src/constants'
import { HtmlLink } from '../HtmlLink'

export const Footer = () => {
  return (
    <footer className="shrink-0 p-4 text-center">
      <p>
        Desenvolvido por{' '}
        <HtmlLink href={GITHUB.userUrl}>{GENERAL.author}</HtmlLink>.
      </p>

      <p className="mt-4">
        Distribuído sob a{' '}
        <HtmlLink href={GITHUB.licenseUrl}>licença {GITHUB.license}</HtmlLink>.
      </p>
    </footer>
  )
}
