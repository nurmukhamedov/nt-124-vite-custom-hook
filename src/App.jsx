import './App.css';
import Movie from './components/Movie';
import RestCountries from './components/RestCountries';
import { BsSearch } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import Example from './components/ExampleTailwind';

function App() {

  return (
    <>

      <Example />

      <div className='flex'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nisi dignissimos, cupiditate nihil soluta hic!</p>
        <h2 className='bg-blue text-9xl border-4 border-orange-500 border-solid font-serif'>Hello Tailwind</h2>
      </div>
      <RestCountries />
      <Movie />
      <BsSearch className='search_icon' />
      <RxHamburgerMenu />

    </>
  )
}

export default App
