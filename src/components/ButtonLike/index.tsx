import { useState } from 'react';
import { ButtonElement, Container, Counter } from './styles';
import Lottie from 'react-lottie';
import { likeAnimation } from 'animations';

export default function ButtonLike() {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });
  const [like, setLike] = useState(false);

  const likeDefaultOptions = {
    loop: false,
    autoplay: false,
    animationData: likeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  function handleClick() {
    setLike((prev) => !prev);
    setAnimationState({
      ...animationState,
      isStopped: false,
      direction: animationState.direction === 1 ? -1 : 1,
    });
  }

  return (
    <>
      <Container>
        <h3>Ao clicar (com animação no retorno)</h3>
        <ButtonElement onClick={handleClick}>
          <div style={{ pointerEvents: 'none' }}>
            <Lottie
              style={{ cursor: 'pointer' }}
              options={likeDefaultOptions}
              height={200}
              width={200}
              speed={2}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
              direction={animationState.direction}
            />
          </div>
        </ButtonElement>
        <Counter active={like}>{like ? 1 : 0}</Counter>
      </Container>
    </>
  );
}
