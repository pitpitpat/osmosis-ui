
function PageComponent(bind,args) {

  bind(this);

  fs.mix(this, 'ui/SideNav');
  fs.mix(this, 'ui/MainView');
  fs.mix(this, 'ui/ContactUsButton');

}

module.exports = PageComponent;
