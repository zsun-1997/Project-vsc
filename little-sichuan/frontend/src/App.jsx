import { Routes, Route } from 'react-router-dom';
import Page from './compoents/PageTemplate/PageTemplate';
import Home from './pages/Home/Home';
import NotHome from './pages/NotHome/NotHome';
import './App.scss';
import Cart from './compoents/Cart/Cart';

function App() {
    return (
        <div className="app">
            <div className="content">
                <Page>
                    <Cart />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/not-home" element={<NotHome />} />
                    </Routes>
                </Page>
            </div>
        </div>
    );
}

export default App;
