import ErrorRepository from "../src/errorrrepository";

test('Проверка на создание класса', () => {
    const repo = new ErrorRepository();
    const map = new Map();
    map.set(404, "Not Found");
    map.set(500, "Internal Server Error");
    map.set(403, "Forbidden");
    map.set(401, "Unauthorized");
    const expectedRepo = {
        errorMap: map
    };
    expect(repo).toEqual(expectedRepo);
})


test('Проверка распознавания ошибки', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(404)).toBe('Not Found');
    expect(repo.translate(500)).toBe('Internal Server Error');
    expect(repo.translate(403)).toBe('Forbidden');
    expect(repo.translate(401)).toBe('Unauthorized');
    expect(repo.translate(235)).toBe('Unknown error');
})