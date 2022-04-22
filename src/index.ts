import app from "./server";
const PORT = process.env.PORT || 3000;
app
  .listen(PORT)
  .on("listening", () => console.log("Server is running at port " + PORT));
