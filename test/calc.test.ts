import { Lecture, resolveLectures } from "../src/calc";

const sampleLocalLecture: Lecture = require("../json/local_lecture.json");
const sampleRemoteLecture: Lecture = require("../json/remote_lecture.json");
const sampleResolvedLecture: Lecture = require("../json/resolved_lecture.json")

describe("test resolveLecture function", () => {
  it("should return sampleResolvedLecture for resolveLecture(sampleRemoteLecture, sampleLocalLecture)", () => {
    expect(resolveLectures(sampleRemoteLecture, sampleLocalLecture)).toEqual(sampleResolvedLecture);
  });
});

