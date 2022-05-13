import { title } from "./App";
import axios from "axios";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RadioOptions from './components/RadioOptions';
import CheckboxOptions from './components/CheckboxOptions';
import RadioButtons from './components/buttons/RadioButtons';

describe("unit testing basics", () => {
    test("assert if title is React", () => {
      expect(true).toBe(true);
    });
  
    test("assert if title is React", () => {
      expect(title).toBe("React App");
    });
  });

describe("test Item component", () => {
  test("render item component", () => {
      <RadioButtons label={''} buttons={[]}/>
  });
});
    
describe("test Item component", () => {
  test("render item component", () => {
    const fnt=jest.fn();
    render(
      <RadioOptions options={["Every 15 days"]} value={'true'} handleChange={function (e: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      } }/>
      );
      screen.debug()
      const title=screen.getByText("Every 15 days")
      expect(title).toBeInTheDocument();
  });
});



test("snapshot testing", () => {
  const fnt=jest.fn();
  const { container } = render(<CheckboxOptions options={[]} handleChange={fnt} />);
  expect(container.firstChild).toMatchSnapshot();
});
