import incomeIMG from '../../assets/images/income.svg';
import outcomeIMG from '../../assets/images/outcome.svg';
import totalIMG from '../../assets/images/total.svg';

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIMG} alt="Entradas" />
        </header>
        <strong>R$2000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIMG} alt="Saídas" />
        </header>
        <strong>- R$1000,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIMG} alt="Total" />
        </header>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  )
}