
function VideosCard(bind,args) {

  this.title = args.videosCardTitle;

  bind(this);

  this.list = fs.mixList(this,'.video-preview-list');

  for (videoPreview of args.videoPreviews) {
    this.list.push('ui/VideoPreview', videoPreview);
  }

}

module.exports = VideosCard;
