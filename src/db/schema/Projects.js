import { Schema, model } from "mongoose";

const ProjectsSchema = new Schema(
  {
    color : String,
    configuration : String,
    contribution : String,
    descriptionDesc : String,
    descriptionHead : String,
    distributeLink : String,
    period : String,
    promotionDesc : String,
    promotionHead : String,
    title : String,
    tools : Array,
  },
  {
    timestamps: true,
  }
);

const ProjectModel = model("Project", ProjectsSchema);

export {ProjectModel};