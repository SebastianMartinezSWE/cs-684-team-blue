import { News } from "../models/news";
import {
  BadRequestError,
  ConflictError,
  UnauthorizedError,
} from "../utils/HttpErrors";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    if (response.status === 400) {
      throw new BadRequestError(errorMessage);
    } else if (response.status === 401) {
      throw new UnauthorizedError(errorMessage);
    } else if (response.status === 409) {
      throw new ConflictError(errorMessage);
    } else {
      throw Error(
        "Request failed with status: " +
          response.status +
          ", message: " +
          errorMessage,
      );
    }
  }
}

export async function getDefaultNews(): Promise<News> {
  const response = await fetchData(`/api/news/default`, {
    method: "GET",
  });
  return response.json();
}

export async function getNews(user: String): Promise<News["articles"]> {
  const response = await fetchData(`/api/news/${user}`, {
    method: "GET",
  });
  return response.json();
}
