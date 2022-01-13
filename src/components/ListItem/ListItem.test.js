import { render } from "@testing-library/react";

import ListItem from "./";

const testProps = {
   name: "item 1",
   completed: true,
   tickItem: jest.fn(),
};

test("test if clearList renders properly", () => {
   const { getByTestId } = render(<ListItem {...testProps} />);
   const actual = getByTestId("list-item");
   expect(actual).toBeInTheDocument();
});
