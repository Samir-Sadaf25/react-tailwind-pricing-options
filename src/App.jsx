
import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBer/Navber'
import PricingOptions from './components/PricingOptions/PricingOptions';

function App() {

  const priceingPromise = fetch('pricingData.json').then(res => res.json());


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
      </main>

    </>
  )
}

export default App
