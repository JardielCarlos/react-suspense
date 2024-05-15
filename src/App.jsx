import { Suspense, lazy } from "react";
  
function App() {

  // const ListStudent = lazy(() => import('./components/ListStudents'))

  const ListStudent = lazy(() => 
    new Promise(resolve => 
      setTimeout(resolve, 2000) // Ajuste este valor para o atraso da api desejado
    ).then(() => import('./components/ListStudents'))
  );

  return (
    <div className="App">
        <Suspense fallback={<h1>Loading Time...</h1>}>
          <ListStudent />
        </Suspense>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
