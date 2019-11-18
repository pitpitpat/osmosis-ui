
function VideosCard(bind,args) {

  this.title = 'Up Next';

  // this.list = fs.mixList(this,'.mix-list');
  // this.list.push('ui/ListElement',{
  //   title: 'Title example '+(this.list.items.length+1),
  //   body: 'Here is an example body.',
  // });

}

VideosCard.prototype.displayAlert = function() {
  alert("Clicked!");
}

module.exports = VideosCard;

