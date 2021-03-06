import { Content, Container } from './styles'

import logoIMG from '../../assets/images/logo.svg'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoIMG} alt="logo do projeto" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>



      </Content>
    </Container>
  )
}