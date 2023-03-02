import { Lecture, resolveLectures } from "./calc";
const localLecture: Lecture = require("../json/local_lecture.json");
const remoteLecture: Lecture = require("../json/remote_lecture.json");  
const resolvedLecture = resolveLectures(remoteLecture, localLecture);

console.log(resolvedLecture);