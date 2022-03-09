import RouterPage from './Router';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  console.log(`Hello you!`)
  console.log(navigator.userAgentData)
  console.log(navigator.userAgentData.platform)
  return (
    <>
      <Nav />
      <RouterPage />
      <Footer />
    </>
  );
}

export default App;
