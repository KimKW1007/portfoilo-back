import {Projects} from "../db/index.js";

class projectConnect {

  static async getProject() {
    const project = await Projects.findAll();
    project.reverse();
    return project;
  }

}
export { projectConnect };