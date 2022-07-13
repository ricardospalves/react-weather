import { GENERAL, GITHUB } from 'src/constants'
import { Container } from '../Container'
import { HtmlLink } from '../HtmlLink'

export const Header = () => {
  return (
    <Container
      as="header"
      className="flex justify-between h-10 shrink-0"
      edgePadding
    >
      <h1 className="font-bold h-full flex items-center">{GENERAL.appName}</h1>

      <HtmlLink
        href={GITHUB.repositoryUrl}
        className="h-full flex items-center"
      >
        Repositório
      </HtmlLink>
    </Container>
  )
}
