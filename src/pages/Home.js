import { Container, Carousel, Image } from 'react-bootstrap';

const Home = () => {
    return (
    <Container>
      <Carousel variant='light' id='carousel-inner'>
        <Carousel.Item>
          <Image
            fluid = 'true'
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fmark-zuckerberg-pete-buttigieg.jpg&f=1&nofb=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <p class="caption">Applying to be a software engineer, and desiring to contemplate your life by staring at a screen all day?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            fluid = 'true'
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Falis.alberta.ca%2Fmedia%2F697210%2Fastronomer.jpg&f=1&nofb=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p class="caption">Or... maybe you want to be looking into the dark night?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            fluid = 'true'
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.ffx.io%2Fimages%2F%24width_800%2C%24height_450%2Ft_crop_auto%2Fq_86%2Cf_auto%2Fdf0d2d1a8563fc5325dd7b280be9d44dce4a304f&f=1&nofb=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p class="caption">Or, you're a special case, and want to be a professional food eater? Doesn't matter! Store whatever you're looking for here!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>Welcome to Job Tracker! Built for all your possible job application needs. Store all the contacts you've made, and jobs you've applied to!</h1>
    </Container>
    );
  };
  
  export default Home;
  