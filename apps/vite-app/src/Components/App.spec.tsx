import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test", () => {
    it("should render", async () => {
        render(<App />);

        expect(
            await screen.findByRole("heading", { name: "TEST MFE" })
        ).toBeInTheDocument();
    });
});
