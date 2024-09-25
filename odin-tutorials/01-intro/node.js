require("dotenv").config();

if (process.env.NODE_ENV === "prod") {
  // do production-specific stuff
  console.log(process.env.NODE_ENV);
}

// don't want to ruin the surprise by hardcoding the URL!
// it might even change every few days!
// redirectUserToSuperSecretVideo(process.env.VIDEO_URL);
