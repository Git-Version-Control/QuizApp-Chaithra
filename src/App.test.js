import { title } from "./App";
import axios from "axios";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


describe("unit testing basics", () => {
    test("assert if title is React", () => {
      expect(true).toBe(true);
    });
  
    test("assert if title is React", () => {
      expect(title).toBe("React App");
    });
  });