
function VideoPreview(bind,args) {

  this.videoTitle = args.videoTitle;
  this.channelName = args.channelName;

}

VideoPreview.prototype.displayAlert = function() {
  alert("Clicked!");
}

module.exports = VideoPreview;

