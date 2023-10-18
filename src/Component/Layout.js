import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li> <Link to="/bundle">Bundle</Link></li>
                    <li> <Link to="/formikcomponent">Formik Validation</Link></li>
                    <li> <Link to="/joiformvalidation">Joi Form Validation</Link></li>
                    <li> <Link to="/reacthookform">Hooks Form</Link></li>
                    <li> <Link to="/promisis">promisis</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;