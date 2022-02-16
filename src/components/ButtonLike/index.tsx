import { useState } from 'react';
import { ButtonElement, Container, Counter, DivLoading } from './styles';
import Lottie from 'react-lottie';
import likeAnimation from '../../animations/likeAnimation.json';
import heartAnimation from '../../animations/heartAnimation.json';
import loading from '../../animations/loading.json';

function ButtonLike() {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });
  const [like, setLike] = useState(false);

  const loadingDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const likeDefaultOptions = {
    loop: false,
    autoplay: false,
    animationData: likeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const heartDefaultOptions = {
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
      isStopped: false,
      direction: animationState.direction === 1 ? -1 : 1,
    });
  }

  return (
    <>
      <Container>
        <h3 style={{ marginBottom: 24 }}>Em loop</h3>
        <DivLoading>
          <div style={{ pointerEvents: 'none' }}>
            <Lottie
              style={{ cursor: 'pointer' }}
              options={loadingDefaultOptions}
              speed={1} // já é o padrão
              height={180}
              width={180}
            />
          </div>
        </DivLoading>
      </Container>
      <Container>
        <h3>Ao clicar (sem animação no retorno)</h3>
        <ButtonElement onClick={handleClick}>
          <div style={{ pointerEvents: 'none' }}>
            <Lottie
              style={{ cursor: 'pointer' }}
              options={heartDefaultOptions}
              height={160}
              width={160}
              speed={like ? 2 : 3}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
              direction={animationState.direction}
            />
          </div>
        </ButtonElement>
        <Counter>{like ? 1 : 0}</Counter>
      </Container>
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
        <Counter>{like ? 1 : 0}</Counter>
      </Container>
    </>
  );
}

export default ButtonLike;
