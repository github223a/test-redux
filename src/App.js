import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Table from './components/table';

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const App = props => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <Main>
            <Table>
            </Table>
        </Main>
    </div>
);


export default connect()(App);
