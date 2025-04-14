
import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBer/Navber'
import PricingOptions from './components/PricingOptions/PricingOptions';
import ResultChart from './components/ResultsChart/ResultChart';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';

function App() {

  const priceingPromise = fetch('pricingData.json').then(res => res.json());
  const marksPromise = axios.get('marksData.json');

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
          <Suspense fallback={<span class="loading loading-dots loading-lg"></span>}>
              <PricingOptions priceingPromise={priceingPromise}></PricingOptions>
          </Suspense>
          <ResultChart></ResultChart>
          <Suspense fallback={<span class="loading loading-dots loading-lg"></span>}>
            <MarksChart marksPromise={marksPromise}></MarksChart>
          </Suspense>
      </main>

    </>
  )
}

export default App
