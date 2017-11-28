const protocol = "http://";
const sProtocol = "https://";

const Bucketapi = sProtocol+"random-files-232.s3.amazonaws.com"

export default {
	getBucketContent:Bucketapi,
	getFileContent:Bucketapi+'/:path'
}