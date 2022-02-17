import { heartAnimation } from 'animations';
import { useState } from 'react';
import Lottie from 'react-lottie';
import { ButtonElement, Container, Counter } from './styles';

export default function ButtonHeart() {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });
  const [like, setLike] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: heartAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  function handleClick() {
    setLike((prev) => !prev);
    setAnimationState({
      ...animationState,
      isStopped: like,
    });
  }

  return (
    <Container>
      <h3>Ao clicar (sem animação no retorno)</h3>
      <ButtonElement onClick={handleClick}>
        <div style={{ pointerEvents: 'none' }}>
          <Lottie
            style={{ cursor: 'pointer' }}
            options={defaultOptions}
            height={160}
            width={160}
            speed={like ? 2 : 3}
            isStopped={animationState.isStopped}
          />
        </div>
      </ButtonElement>
      <Counter active={like}>{like ? 1 : 0}</Counter>
    </Container>
  );
}
