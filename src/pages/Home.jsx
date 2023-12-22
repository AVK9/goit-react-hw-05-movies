import { getTrending } from '../service/service';
import { Grid, Container } from 'components';
import { Trendings } from 'components';
import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Trending, setTrending] = useState([]);
  useEffect(() => {
    const dataTrending = async () => {
      setIsLoading(true);
      try {
        const data = await getTrending();
        setTrending(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    dataTrending();
  }, []);
  console.log(isLoading);
  return (
    <Container>
      <h1>У тренді</h1>
      <Grid>
        {Trending.map(({ id, title, name, poster_path }) => (
          <Trendings
            key={id}
            title={title}
            name={name}
            poster_path={poster_path}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
