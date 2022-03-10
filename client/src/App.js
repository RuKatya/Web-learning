import RouterPage from './Router';

function App() {
  console.log(`Hello you!`)
  console.log(navigator.userAgentData)
  console.log(navigator.userAgentData.platform)
  return (
    <>
      <RouterPage />
    </>
  );
}

export default App;
