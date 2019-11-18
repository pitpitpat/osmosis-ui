
function ContentView(bind,args) {

  bind(this);

  fs.mix(this, 'ui/BreadCrumb');

  fs.mix(this, 'ui/Video')
  fs.mix(this, 'ui/VideoOverview');

  this.upNextVideosCardData = {
    videosCardTitle: 'Up Next',
    videoPreviews: [
      {
        thumbnailSrc: 'assets/img/video_thumbnail_0.jpg',
        videoTitle: 'Electrocardiography. Normal sinus rythm',
        channelName: 'Osmosis'
      }
    ]
  };

  fs.mixAppend($('.up-next-videos-card',this.dom),'ui/VideosCard', this.upNextVideosCardData);

  this.memoryAnchorsVideosCardData = {
    videosCardTitle: 'Memory Anchors',
    videoPreviews: [
      {
        thumbnailSrc: 'assets/img/video_thumbnail_1.jpg',
        videoTitle: 'Electrocardiography. Hypertrophy and enlargement',
        channelName: 'Osmosis'
      },
      {
        thumbnailSrc: 'assets/img/video_thumbnail_2.jpg',
        videoTitle: '12 Lead Contiguous Leads - Lateral Wall MI',
        channelName: 'Picmonic'
      },
      {
        thumbnailSrc: 'assets/img/video_thumbnail_3.jpg',
        videoTitle: '12 Lead Contiguous Leads - Septal Wall MI',
        channelName: 'Picmonic'
      }
    ]
  };

  fs.mixAppend($('.memory-anchors-videos-card',this.dom),'ui/VideosCard', this.memoryAnchorsVideosCardData);

}

module.exports = ContentView;

