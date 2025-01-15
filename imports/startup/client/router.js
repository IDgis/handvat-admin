import '/imports/ui/main.js';
import '/imports/ui/text/list.js';
import '/imports/ui/text/form.js';
import '/imports/ui/coupling/list.js';
import '/imports/ui/coupling/form.js';

import { Text } from '/imports/api/collections/text.js';
import { CouplingLeidend } from '/imports/api/collections/couplingleidend.js';
import { CouplingOntwerp } from '/imports/api/collections/couplingontwerp.js';

Router.configure({
  layoutTemplate: 'main'
});

Router.route('/handvat-admin/', {
  name: 'textlist'
});

Router.route('/handvat-admin/text/add', {
  name: 'textadd',
  template: 'textform'
});

Router.route('/handvat-admin/text/edit/:_id', function () {
  var text = Text.findOne({_id: this.params._id});
  this.render('textform', {data: text});
}, {
  name: 'textedit'
});

Router.route('/handvat-admin/coupling', {
  name: 'couplinglist'
});

Router.route('/handvat-admin/coupling/add', {
  name: 'couplingadd',
  template: 'couplingform'
});

Router.route('/handvat-admin/coupling/leidend/:_id', function () {
  var coupling = CouplingLeidend.findOne({_id: this.params._id});
  this.render('couplingform', {data: coupling});
}, {
  name: 'couplingleidendedit'
});

Router.route('/handvat-admin/coupling/ontwerp/:_id', function () {
  var coupling = CouplingOntwerp.findOne({_id: this.params._id});
  this.render('couplingform', {data: coupling});
}, {
  name: 'couplingontwerpedit'
});