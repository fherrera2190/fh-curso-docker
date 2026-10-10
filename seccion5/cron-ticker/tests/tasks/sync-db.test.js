const { syncDB } = require("../../task/sync-db");

describe("Pruebas en Sync-DB", () => {
  test("deberia retornar el numero de veces que se ha ejecutado", () => {
    let times = syncDB();
    times = syncDB();

    expect(times).toBeGreaterThan(1);
  });
});
