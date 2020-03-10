import multer from "multer";

const multerTxt = multer({ dest: "src/uploads/txt/" });

export const uploadTxt = multerTxt.single("txtFile");
