app.controller('MainController', ['$scope','dataService',function($scope,dataService){
		dataService.success(function(data){
			$scope.contacts = data;
		});
		$scope.nome = "Arthur";
		$scope.sobrenome = "Sena";
		$scope.numLimit = 10;
		$scope.contactsToShow = [];
		$scope.temp = {
					id:-1,
   		 			first_name:"",
   		 			last_name:"",
   		 			email:"",
   		 			country:""
		};

		 $scope.sort = function(keyname){
		        $scope.sortKey = keyname;   //set the sortKey to the param passed
		        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
   		 }

   		 $scope.addContact = function(){
   		 		$scope.temp.id = $scope.contacts.length + 1; 
   		 		$scope.contacts.push($scope.temp)?true:false;
   		 		$scope.temp = {
					id:-1,
   		 			first_name:"",
   		 			last_name:"",
   		 			email:"",
   		 			country:""
				};
   		 }

   		 $scope.editContact = function(contact){
   		 	$scope.temp = {
   		 			id:contact.id,
   		 			first_name:contact.first_name,
   		 			last_name:contact.last_name,
   		 			email:contact.email,
   		 			country:contact.country
   		 	}
   		 }

   		 $scope.editAndAdd = function(){
   		 	for (var i = $scope.contacts.length - 1; i >= 0; i--) {
   		 		if($scope.contacts[i].id == $scope.temp.id){
   		 			$scope.contacts[i] = $scope.temp;
   		 		}
   		 	};

   		 	$scope.temp = {
					id:-1,
   		 			first_name:"",
   		 			last_name:"",
   		 			email:"",
   		 			country:""
				};
   		 }


   		 $scope.removeContact = function(contact){

   		 	for (var i = $scope.contacts.length - 1; i >= 0; i--) {
   		 		if($scope.contacts[i] == contact){
   		 			$scope.contacts.splice(i,1);
   		 		}

   		 	};
   		 }

   		 $scope.selectedRow = null;  // initialize our variable to null
  		 $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
     		$scope.selectedRow = index;
  		}

}]);