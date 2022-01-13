import { render } from "@testing-library/react";

import ListDisplay from "./";

const testProps = {
   list: ["item 1", "item 2"],
   tickItem: jest.fn(),
};

test("test if clearList renders properly", () => {
   const { getByTestId } = render(<ListDisplay {...testProps} />);
   const actual = getByTestId("listDisplayTest");
   expect(actual).toBeInTheDocument();
});
