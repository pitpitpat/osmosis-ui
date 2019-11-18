
function ContentView(bind,args) {

    bind(this);

    fs.mix(this, 'ui/BreadCrumb');

    fs.mix(this, 'ui/Video')
    fs.mix(this, 'ui/VideoOverview');

    fs.mix(this, 'ui/VideosCard');

}

module.exports = ContentView;

