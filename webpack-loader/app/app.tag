require('./name.tag');

<app> 
  <h1> { number }</h1>
  <button onclick={generate}>new number </button>
  <name names={ names }></name> 
  this.number = null;
  this.names = []
  generate = function () { 
  	 this.number = Math.floor(Math.random()*10000);
  	 this.names.push({ name : this.number });	
  } 
</app> 