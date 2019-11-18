
function ContentView(bind,args) {

  bind(this);

  fs.mix(this, 'ui/BreadCrumb');

  fs.mix(this, 'ui/Video')
  fs.mix(this, 'ui/VideoOverview');

  this.nextVideosCardData = {
    'videosCardTitle': 'Up Next',
    'videoPreviews': [
      {
        videoTitle: 'Blood pressure, blood flow and resistance',
        channelName: 'Osmosis',
      }
    ]
  };

  fs.mix(this, 'ui/VideosCard', this.nextVideosCardData);

}

module.exports = ContentView;

