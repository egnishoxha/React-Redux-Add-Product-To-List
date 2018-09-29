import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddProduct from './containers/AddProduct';
import ProductList from './components/ProductList';
import GrandTotal from './components/GrandTotal';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <main className="App-intro">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10">
                                <AddProduct/>
                                <ProductList/>
                            </div>
                            <div className="col-md-2">
                                <GrandTotal/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
