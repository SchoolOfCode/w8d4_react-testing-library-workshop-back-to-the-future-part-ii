import { render } from "@testing-library/react";

import ClearList from "./";

const testProps = {
   clearList: jest.fn(),
   buttonText: "chocolate",
};

test("test if clearList renders properly", () => {
   const { getByTestId } = render(<ClearList {...testProps} />);
   const actual = getByTestId("clearListTest");
   expect(actual).toBeInTheDocument();
});
