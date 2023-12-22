import { Title, CardItem, Card } from './Trendings.styled';
const baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

export const Trendings = ({ title, name, poster_path }) => {
  return (
    <CardItem>
      <Card>
        <img src={baseURL + poster_path} alt={title} />
        <Title>
          {title && title}
          {name && name}
        </Title>
      </Card>
    </CardItem>
  );
};
