import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import UserWords from "./UserWords";

describe("UserWords Component", () => {
  it("renders list when word prop is  passed", () => {
    // const list = [{ _id: "62495f5f380e91ee3ae225c2", word: "First" }];

    render(
      <UserWords list={[{ _id: "62495f5f380e91ee3ae225c2", word: "First" }]} />
    );
    const listItemElement = screen.getAllByRole("listitem");

    expect(listItemElement).not.toHaveLength(0);
  });

  it("renders list when empty word prop is  passed", () => {
    // const list = [{ _id: "62495f5f380e91ee3ae225c2", word: "First" }];

    render(<UserWords list={[]} />);
    const listItemElement = screen.getAllByRole("list");

    expect(listItemElement).toHaveLength(1);
  });
});
