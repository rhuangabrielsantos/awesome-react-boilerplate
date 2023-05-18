import * as S from './CardComponent.styles';

interface CardComponentProps {
  title?: string;
  color?: 'dark' | 'light';
}

export const CardComponent = ({
  title = 'Hello World',
  color = 'dark'
}: CardComponentProps) => {
  return (
    <S.Wrapper color={color} data-testid="card-component">
      <h1>{title}</h1>
    </S.Wrapper>
  );
};
