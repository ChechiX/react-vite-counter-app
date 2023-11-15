const { render, screen } = require('@testing-library/react');
const { FirstApp } = require('../src/FirstApp');


describe('Pruebas en <FirstApp />', () => {

  const title    = 'Hola, soy Goku';
  const subTitle = 'Soy un subtitulo';

  test('debe de hacer match con el snapshot', () => {

    const { container } = render( <FirstApp title={ title } />);
    expect( container ).toMatchSnapshot();

  });

  test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {

    render( <FirstApp title={ title } />);
    expect( screen.getByText(title) ).toBeTruthy();
    // screen.debug();

  });

  test('Debe de mostrar el titulo en un h1', () => {

    render( <FirstApp title={ title } />);
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);

  });

  test('Debe de mostrar el subtitulo enviado por props', () => {

    render( 
      <FirstApp
        title={ title }
        subTitle={ subTitle }
      /> 
    );

    expect( screen.getAllByText(subTitle).length ).toBe(2);

  });

});