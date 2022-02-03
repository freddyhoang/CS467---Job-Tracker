import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

const Home = () => {
    return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <Image
            thumbnail = 'true'
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gethealthystayhealthy.com%2Fsites%2Fdefault%2Ffiles%2F2019-04%2Fsitting-behind-your-desk-bad-for-your-health.jpg&f=1&nofb=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Applying to be a software engineer, and desiring to contemplate your life by staring at a screen all day?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            thumbnail = 'true'
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdm0qx8t0i9gc9.cloudfront.net%2Fthumbnails%2Fvideo%2FVd3bj2jPe%2Fmale-scientist-conducting-research-in-chemical-lab-scientist-working-with-chemical-liquid-in-research-laboratory-scientist-filling-test-tubes-with-samples-in-laboratory-scientist-working-in-lab_bsribr_ol_thumbnail-1080_01.png&f=1&nofb=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>Or... maybe you want to be in a cold laboratory all day and make things explode?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            thumbnail = 'true'
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.brandgfx.com%2Fwp-content%2Fuploads%2F2013%2F03%2Fsirius.jpg&f=1&nofb=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>Or, you're a special case, and want to be a professional food eater? Doesn't matter! Store whatever you're looking for here!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>Welcome to Job Tracker! Built for all your possible job application needs. Store all the contacts you've made, and jobs you've applied to!</h1>
    </Container>
    );
  };
  
  export default Home;
  