import { User } from "../models/user";
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
          errorMessage
      );
    }
  }
}

export async function getSignedInUser(): Promise<User> {
  const response = await fetchData("/api/users", {
    method: "GET",
  });
  return response.json();
}

export interface UserCredentials {
  username: string;
  password: string;
  confirmPassword: string;
}

export async function signUp(credentials: UserCredentials): Promise<User> {
  const response = await fetchData("/api/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export async function signIn(credentials: UserCredentials): Promise<User> {
  const response = await fetchData("/api/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export async function signout(signedInUser: User) {
  const response = await fetchData("/api/users/signout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: signedInUser.username }),
  });
  return response.json();
}
