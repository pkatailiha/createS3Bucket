// createBucket.js
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const bucketName = 'your-bucket-name';

const createBucket = async () => {
  const params = {
    Bucket: bucketName,
    CreateBucketConfiguration: {
      LocationConstraint: 'ap-south-1' // Change to your preferred region
    }
  };

  try {
    const data = await s3.createBucket(params).promise();
    console.log(`Bucket created successfully: ${data.Location}`);
  } catch (err) {
    console.error(`Error creating bucket: ${err.message}`);
  }
};

createBucket();