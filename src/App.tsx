import { ButtonHeart, LoadingAnimation } from 'components';
import ButtonLike from './components/ButtonLike';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <LoadingAnimation />
      <ButtonHeart />
      <ButtonLike />
    </Container>
  );
}

export default App;
