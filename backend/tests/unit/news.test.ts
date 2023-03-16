import request from "supertest";
import app from "../../src/app";

describe("NewsAPI", () => {
  describe("Successfully requesting General news articles", () => {
    it("Should return a response code of 200", async () => {
      const res = await request(app).get("/api/news/");
      expect(res.statusCode).toBe(200);
    });
  });
});
