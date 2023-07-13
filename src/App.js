// import logo from './logo.svg';
// import './App.css';
// import Button from '~/component/Button';
// Fragment: thẻ chỉ chứa, ko sinh ra thẻ thật ở trong DOM
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // nếu ko có layout đc setting thì mặc định sẽ lấy DefaultLayout
                        // const Layout = route.layout === null ? Fragment : DefaultLayout; //nếu Layout là null thì lấy Fragment(ko có Layout) ko thì lấy DefaultLayout

                        let Layout = DefaultLayout; //set Layout = DefaultLayout

                        // nếu có layout thì đặt là layout
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            // nếu Layout bằng null thì Layout = Fragment(ko có Layout)
                            Layout = Fragment;
                        } // còn lại là LayoutDefault

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
