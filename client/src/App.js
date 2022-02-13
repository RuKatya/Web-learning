import NavBar from './components/NavBar';
import RouterPage from './Router';
import Footer from './components/Footer';

function App() {
  console.log(`Hello you!`)
  console.log(navigator)
  return (
    <>
      <NavBar />
      <RouterPage />
      <Footer />
    </>
  );
}

export default App;
