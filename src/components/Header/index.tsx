import { Content, Container } from './styles'
import logoIMG from '../../assets/images/logo.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoIMG} alt="logo do projeto" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}