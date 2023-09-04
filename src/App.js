import Header from './Component/Header'
import UseStateCom from './Component/UseStateCom'
import UseEffectCom from './Component/UseEffectCom'
import UseContextCom from './Component/UseContextCom'
import UseRefCom from './Component/UseRefCom'

function App() {
  return (
    <>
      <h1 style={{ color: "red" }}>App Js Page</h1>
      <br />
      ==========================================================================
      <UseStateCom />
      <br />
      ==========================================================================
      <UseEffectCom />

      <br />
      ==========================================================================
      <UseContextCom />
      <br />
      ==========================================================================
      <UseRefCom/>
      <br />
      ==========================================================================
    </>
  );
}

export default App;
