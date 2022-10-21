import {render, screen} from "@testing-library/react";
import {PublicRoute} from "../../src/router/PublicRoute";
import {AuthContext} from "../../src/auth/context/AuthContext";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {PrivateRoute} from "../../src/router/PrivateRoute";

describe('Pruebas en PrivateRoute', function () {

  test('debe de mostrar el children si está autenticado', () => {
    const contextValue = {logged: true, user: {id: 'abc', name: 'Juan'}}
    const childrenText = 'Ruta privada';
    const children = (<h1>{childrenText}</h1>);
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>{children}</PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(childrenText)).toBeTruthy();
  })

  test('debe de navegar al login si el usuario no está autenticado', () => {
    const contextValue = {
      logged: false
    };
    const loginPageText = 'Login page'

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Routes>
            <Route path='login' element={<h1>{loginPageText}</h1>}></Route>
            <Route path='marvel' element={<PrivateRoute><h1>Marvel Page</h1></PrivateRoute>}></Route>
          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(loginPageText)).toBeTruthy();
  })

  test('debe de guardar la última ruta visitada', () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {logged: true, user: {id: 'abc', name: 'Juan'}}
    const childrenText = 'Ruta privada';
    const children = (<h1>{childrenText}</h1>);
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>{children}</PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText(childrenText)).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
  })
});
