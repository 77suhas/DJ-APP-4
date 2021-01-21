song = ""
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
function preload() {
  song = loadSound("music.mp3")
}
function setup() {
  canvas = createCanvas(500, 500)
  canvas.center()
  video = createCapture(VIDEO)
  video.hide()
  video.size(500, 500)
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on("pose", getPoses)
}
function draw() {
  image(video, 0, 0, 500, 500)
  fill("#f70000")
  stroke("#f70000")
  circle(leftWristX, leftWristY, 20)

  leftWristY_number = Number(leftWristY)
  leftWristY_number_decimals = floor(leftWristY_number)
  volume = leftWristY_number_decimals/500
  song.setVolume(volume)
  document.getElementById("volume").innerHTML = "volume:" +volume
}
function modelLoaded() {
  console.log("model is loaded")
}
function getPoses(results) {
  console.log(results)
  leftWristX = results[0].pose.leftWrist.x
  console.log("leftWristX = "+leftWristX)
  rightWristX = results[0].pose.rightWrist.x
  console.log("rightwristX = "+rightWristX)
  leftWristY = results[0].pose.leftWrist.y
  console.log("leftWristY = "+leftWristY)
  rightWristY = results[0].pose.rightWrist.y
  console.log("rightWristY = "+rightWristY)
}
function play() {
  song.play()
  song.setVolume(1)
  song.rate(1)
}
function stop() {
  song.stop()
}