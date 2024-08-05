export default class ErrorRepository {
    constructor() {
        this.errorMap = new Map([
            [404, "Not Found"],
            [500, "Internal Server Error"],
            [403, "Forbidden"],
            [401, "Unauthorized"]
        ]);
    }

    translate(code) {
        return this.errorMap.get(code) || "Unknown error";
    }
}