import Header from './Component/Header'
import UseStateCom from './Component/UseStateCom'
import UseEffectCom from './Component/UseEffectCom'
import UseContextCom from './Component/UseContextCom'
import UseRefCom from './Component/UseRefCom'
import React from 'react';
import FormikComponent from './Component/FormikComponent';
import ReactHookForm from './Component/ReactHookForm';
import JoiFormValidation from './Component/JoiFormValidation';
import Promises from './Component/Promises';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component/Layout';
import Home from './Component/Home';

const Bundle = React.lazy(() => import('./Component/Bundle'));  
function App() {
  return (
    <>
    
      <h1 style={{ color: "red" }}>App Js Page</h1>

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Promises />} />
          <Route path="contact" element={<JoiFormValidation />} />
          <Route path="*" element={<FormikComponent />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
   

      <br />
      ==========================================================================
      <Header />
       {/*
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
      <Bundle />  
      <br />
      ==========================================================================
      <FormikComponent />  
      <br />
      ==========================================================================
      <ReactHookForm />  

      <br />
      ==========================================================================
      <JoiFormValidation /> 
      <br />
      ==========================================================================
      <Promises />  */}
      
    </>
  );        
}

export default App;
