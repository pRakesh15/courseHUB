import multer from "multer";
const storage=multer.memoryStorage();

const singleUplode=multer({storage}).single("file")

export default singleUplode;