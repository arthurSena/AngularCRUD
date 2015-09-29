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

   		 $scope.selectedRow = null;  // initialize our variable to null
  		 $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
     		$scope.selectedRow = index;
  		}

		// $scope.loadData = function(){
		// 	$scope.numLimit += 10;
		// 	if ($scope.numLimit > 10) {
		// 		var temp = 0;
		// 		for (var i = $scope.numLimit; i < $scope.numLimit + 10 ; i++){
		// 			$scope.contactsToShow[temp] = $scope.contacts[i];
		// 			temp++;
		// 		}
		// 	}
		// }

		// $scope.nextPage = function(){
		// 	numLimit += 10;
		// }

}]);

// app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) { 
//  forecast.success(function(data) { 
//     $scope.fiveDay = data; 
//   });
  
  
// }]);