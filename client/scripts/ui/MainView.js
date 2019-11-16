
function MainView(bind,args) {

  bind(this);

  fs.mix(this,'ui/NavBar');
  fs.mix(this,'ui/ContentView');

}

module.exports = MainView;

