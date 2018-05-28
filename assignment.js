const checkAnimals=()=> {
		let input=window.prompt("enter any kind of animal in this prompt box");

	
			input=input.toLowerCase();

			let animalsToCheck=["goat","camel","sheep","eagle","lion","tiger","liger","gorilla","cat","dog","whale","shark","cow"];

			let result="oops, " + input + " not on list, please try again";

			for (let i = 0; i < animalsToCheck.length; i++) {

				if(animalsToCheck[i]==input){

					result="Yes, "+input+ " is on the list";
					}
			
				}
		
		return window.alert(result)
			}
	 