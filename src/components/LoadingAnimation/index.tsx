import { loadingAnimation } from 'animations';
import Lottie from 'react-lottie';
import { Container, DivLoading } from './styles';

export default function LoadingAnimation() {
  const defaultOptions = {
    loop: true, // default
    autoplay: true, // default
    animationData: loadingAnimation,
  };
  return (
    <Container>
      <h3>Animação em Loop</h3>
      <DivLoading>
        <div>
          <Lottie
            isPaused={false} // default
            isStopped={false} // default
            direction={1} //default
            speed={1} // default
            height={180}
            width={180}
            isClickToPauseDisabled={true}
            options={defaultOptions}
          />
        </div>
      </DivLoading>
    </Container>
  );
}
