import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Container from './components/Container';
import Text from './components/Text';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <div>
        <Container>
          <Text className="testName">Текст текст</Text>
          <Text disabled>Текст текст</Text>
          <Text italic element="p">Текст текст</Text>
          <Text strong>Текст текст</Text>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
