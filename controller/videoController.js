import{videos} from "../db"
import { file } from "babel-types";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", {pageTitle : "Home", videos});
}
export const search = (req, res) => {
    const {
        query:{term : searchingBy}
    } = req;
    //const searchingBy = req.query.term;
    res.render("search", {pageTitle : "Search", searchingBy, videos});
}
export const getUpload = (req, res) => res.render("upload", {pageTitle : "upload"});
export const postUpload = (req, res) => {
    const {
        body:{
            file, title, description
        }
    } = req;
    res.redirect(routes.videoDetail(10))
}
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : "video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle : "edit Vdieo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : "delete Video"});