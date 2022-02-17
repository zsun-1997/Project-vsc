import { Routes, Route, Redirect } from 'react-router-dom';
import Page from './compoents/PageTemplate/PageTemplate';
import Home from './pages/Home/Home';
import NotHome from './pages/NotHome/NotHome';
import './App.scss';

function App() {
    return (
        <div className="app">
            <div className="content"></div>
            <Page>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/not-home" element={<NotHome />} />
                </Routes>
            </Page>
        </div>
    );
}

export default App;