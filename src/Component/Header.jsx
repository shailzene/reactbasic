import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContextCom from "./UseContextCom";
import Layout from "./Layout";
import Home from "./Home";
import JoiFormValidation from "./JoiFormValidation";
import Promises from "./Promises";
import NoFound from "./NoFound";
import ReactHookForm from "./ReactHookForm";
import Bundle from "./Bundle";
import FormikComponent from "./FormikComponent";

function Header() {
    return (
        <div>
            <h1>Header </h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                        <Route path="bundle" element={<Bundle />} />
                        <Route path="formikcomponent" element={<FormikComponent />} />
                        <Route path="joiformvalidation" element={<JoiFormValidation />} />
                        <Route path="promisis" element={<Promises />} />
                        <Route path="reacthookform" element={<ReactHookForm />} />
                        
                        <Route path="*" element={<NoFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Header