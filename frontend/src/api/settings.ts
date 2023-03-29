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

export interface Settings {
    general: boolean;
    business: boolean;
    entertainment: boolean;
    health: boolean;
    science: boolean;
    sports: boolean;
    technology: boolean;
}

export async function updateSettings(
    userId: string,
    settings: Settings
): Promise<User> {
    const response = await fetchData(`/api/settings/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
    });
    return response.json();
}
