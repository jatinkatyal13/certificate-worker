module.exports = {
  host: process.env.host || "localhost",
  login: process.env.login || "test",
  password: process.env.password || "test",
  port: process.env.port || "5672",
  appSecret: process.env.appSecret || "" ,
  minio: {
    bucketName: process.env.minioBucketName || "bucket",
    accessKey: process.env.minioAccessKey || "bleh",
    secretKey: process.env.minioSecretKey || "WontWork"
  },
  sentryDSN: process.env.sentryDSN || "http://no:willnotwork@xxx.cb.lk/007"
}