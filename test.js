const { Storage } = require("@google-cloud/storage");
const fetch = require("node-fetch");

async function uploadFileFromUrl(url, bucketName, destinationFileName) {
  // Create a new instance of the Storage client
  const storage = new Storage();

  try {
    // Get a reference to the bucket
    const bucket = storage.bucket(bucketName);

    // Get a reference to the file
    const file = bucket.file(destinationFileName);

    // Check if the file exists and delete it if it does
    const [exists] = await file.exists();
    if (exists) {
      await file.delete();
      console.log(`Existing file ${destinationFileName} deleted.`);
    }

    // Fetch the file content from the URL
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const fileStream = response.body;

    // Create a write stream for the destination file
    const writeStream = file.createWriteStream({
      resumable: false,
      gzip: true,
      public: true,
    });

    // Pipe the file content to Google Cloud Storage
    fileStream.pipe(writeStream);

    return new Promise((resolve, reject) => {
      writeStream.on("finish", () => {
        console.log(`File ${destinationFileName} uploaded successfully.`);
        resolve();
      });

      writeStream.on("error", (error) => {
        console.error("Error uploading file:", error);
        reject(error);
      });
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Usage example
const fileUrl =
  "https://media.kubric.io/api/modemagic/sidecartv2e5d88d8121239d4d6ca8b4f27950784f.js";
const bucketName = "modemagic";
const destinationFileName = "sidecart_test.js";

uploadFileFromUrl(fileUrl, bucketName, destinationFileName)
  .then(() => console.log("Upload completed"))
  .catch((error) => console.error("Upload failed:", error));
