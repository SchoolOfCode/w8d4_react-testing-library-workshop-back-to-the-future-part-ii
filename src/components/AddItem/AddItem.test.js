import { render } from "@testing-library/react";

import AddItem from "./";

const testProps = {
   addToList: jest.fn(),
   buttonText: "orange 🍊",
};

test("Given a buttonText the button should display the text and when being clicked it should fire a function", () => {
   const { getByTestId } = render(<AddItem {...testProps} />);
   const actual = getByTestId("button-test");
   expect(actual).toHaveTextContent(testProps.buttonText);
});
