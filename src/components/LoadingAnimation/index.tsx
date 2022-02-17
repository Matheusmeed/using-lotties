import { loadingAnimation } from 'animations';
import Lottie from 'react-lottie';
import { Container, DivLoading } from './styles';

export default function LoadingAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container>
      <h3>Animação em Loop</h3>
      <DivLoading>
        <div style={{ pointerEvents: 'none' }}>
          <Lottie
            style={{ cursor: 'pointer' }}
            options={defaultOptions}
            speed={1} // já é o padrão
            height={180}
            width={180}
          />
        </div>
      </DivLoading>
    </Container>
  );
}
