import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/api/users';
import { Ratings } from '../imports/api/ratings';

Meteor.startup(() => {
  // code to run on server at startup
  
  /*if (Votos.find().count() === 0) {
	  	const votos = [{
	         Usuario: "Usuario 1",
	         matrizVotos: { 
	             I1: 5,
	             I2: 5,
	             I3: 5,
	             I4: 5,
	             I5: 5,             
	             I6: null,
	             I7: null,
	             I8: null,
	             I9: null,
	             I10: null,
	             I11: null,
	             I12: null,
	             I13: null,
	             I14: null,
	             I15: null
	         }
	  }]; 

	  	votos.forEach((voto) => {
	  		Votos.insert(voto)
  		});
  	}*/
});
