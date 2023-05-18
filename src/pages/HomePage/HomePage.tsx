import { CardComponent } from '@/components';
import * as S from './HomePage.styles';

export const HomePage = () => {
  return (
    <S.Container>
      <img src="/logo.png" alt="Logo do ReactJS" />
      <S.Title>Awesome React Boilerplate</S.Title>

      <CardComponent
        color="light"
        title="Feito com ❤️ por rhuangabrielsantos"
      />
    </S.Container>
  );
};
