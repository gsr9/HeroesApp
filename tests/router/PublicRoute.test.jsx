import {render, screen} from "@testing-library/react";
import {PublicRoute} from "../../src/router/PublicRoute";
import {AuthContext} from "../../src/auth/context/AuthContext";
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe('Pruebas en PublicRoute', function () {

  test('debe de mostrar el children si no está autenticado', () => {
    const contextValue = {logged: false}
    const childrenText = 'Ruta pública';
    const children = (<h1>{childrenText}</h1>);
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          {children}
        </PublicRoute>
      </AuthContext.Provider>
    );
    expect(screen.getByText(childrenText)).toBeTruthy();
  })

  test('debe de navegar si el usuario está autenticado', () => {
    const contextValue = {
      logged: true, user: {
        name: 'Strider',
        id: '123'
      }
    };
    const marvelPageText = 'Página marvel'

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>

          <Routes>
            <Route path='login' element={
              <PublicRoute>
                <h1>Ruta pública</h1>
              </PublicRoute>
            }></Route>
            <Route path='marvel' element={<h1>{marvelPageText}</h1>}></Route>
          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(marvelPageText)).toBeTruthy();
  })
});
