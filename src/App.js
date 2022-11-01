import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import HomeMain from '../src/Home/HomeMain'
import NoMatch from '../src/PageElement/NoMatch'
import Individual from './PageElement/IndividualCountry'
import { DataContext } from './ContextFile/DataContext';
import { useContext, } from 'react';

function App() {
  const datacontext = useContext(DataContext)
  const arrayPageValue = datacontext.arrayPageValue
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/*' element={<HomeMain />}/>
          {arrayPageValue.map((page) =>(
            page.value.map((country,i) =>{
              let NewName = country.name.common.replace(/\s/g,'')
              return(
                <Route 
                  path={`page${page.id}/${NewName.toLowerCase()}`}
                  element={<Individual data={country} />} 
                  key={i}
                />
              )
            })
          ))}
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;