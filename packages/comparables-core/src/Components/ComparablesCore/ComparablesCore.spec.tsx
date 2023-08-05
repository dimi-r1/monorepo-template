import { render, screen } from "@testing-library/react";
import App from "./ComparablesCore";

describe("Test", () => {
    it("should render", async () => {
        render(<App />);

        expect(
            await screen.findByRole("heading", { name: "Comparables MFE" })
        ).toBeInTheDocument();
    });
});
