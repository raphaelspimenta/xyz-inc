import * as actions from "./index";
describe("candidates actions", () => {
  it("setToDone should create SET_TO_DONE action", () => {
    expect(actions.setToDone(1)).toEqual({
      type: "SET_TO_DONE",
      id: 1
    });
  });

  it("moveToTrash should create MOVE_TO_TRASH action", () => {
    expect(actions.moveToTrash(1)).toEqual({
      type: "MOVE_TO_TRASH",
      id: 1
    });
  });
});
