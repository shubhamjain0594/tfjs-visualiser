(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t){},134:function(e,t){},135:function(e,t){},183:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),r=a(79),i=a.n(r),s=(a(92),a(80)),c=a(81),o=a(85),m=a(82),d=a(86),u=(a(94),a(84)),h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={predictions:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onImageChange",value:function(e){var t=this;if(e.target.files&&e.target.files[0]){var a=new FileReader;a.onload=function(e){t.setState({image:e.target.result,predictions:[]})},a.readAsDataURL(e.target.files[0])}}},{key:"predictImage",value:function(e){var t=this;if(this.state.image){var a=document.getElementById("target");u.a().then(function(e){e.classify(a).then(function(e){t.setState({predictions:e})})})}}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"TF-JS Visualiser"))),l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"Did you know that you can run deep learning models in the browser using ",l.a.createElement("a",{href:"https://js.tensorflow.org/"},"tensorflow.js"),". This is a small experiment to learn this and play with the models. We deploy ",l.a.createElement("a",{href:"https://arxiv.org/abs/1704.04861"},"MobileNets")," for prediction, trained on ImageNet. Upload an image and click on ",l.a.createElement("b",null,"Predict")," to see what the model predicts."),l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",{className:"custom-file"},l.a.createElement("label",{className:"custom-file-label"},"Choose File",l.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:this.onImageChange.bind(this)})))),this.state.image&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",{className:"col-6 offset-3"},l.a.createElement("img",{id:"target",src:this.state.image,style:{maxWidth:"100%",height:"auto"},alt:"Uploaded"}))),l.a.createElement("div",{className:"row mb-3 justify-content-center"},l.a.createElement("div",{className:"col-xs-4 offset-xs-4"},l.a.createElement("button",{className:"btn btn-primary",onClick:this.predictImage.bind(this)},"Predict")))),l.a.createElement("div",{className:"row mb-6"},l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Class Rank"),l.a.createElement("th",null,"Class"),l.a.createElement("th",null,"Probability")),this.state.predictions.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.className),l.a.createElement("td",null,e.probability.toFixed(2)))}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(181);i.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){e.exports=a(183)},92:function(e,t,a){},94:function(e,t,a){},99:function(e,t){}},[[87,2,1]]]);
//# sourceMappingURL=main.50a29e45.chunk.js.map