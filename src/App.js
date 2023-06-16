import React from 'react';
import { RecoilRoot } from 'recoil';
import Login from './pages/login/Login';
import { recoilPersist } from 'recoil-persist';

const { updateState } = recoilPersist();

function App() {
  return (
    <RecoilRoot initializeState={updateState}>
      <Login />
    </RecoilRoot>
  );
}

export default App;
