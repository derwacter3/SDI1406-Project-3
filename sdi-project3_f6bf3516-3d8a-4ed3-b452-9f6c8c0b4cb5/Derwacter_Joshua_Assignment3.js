//alert("JavaScript works!");

//Global Variables
var basketballGame = false,
	basketballPlayer = {
		name: "",
		position: "",
		inside shooting: 0,
		outside shooting: 0,
		dribbling: 0,
		passing: 0,
		hwear: "",	// headwear
		ubwear: "", // upper body wear
		lbwear: "", // lower body wear
	},
	basketballCharacter = function () {
		// Local Variables
		var playerStats = false,
				playerInsideShooting = 0,
				playerOutsideShooting = 0,
				playerDribbling = 0,
				playerPassing = 0,
				playerData = {};
				
	basketballPlayer.name = prompt("Enter players name.");

var JSON = {
	"Positions": {
				"Point Guard":	["Stamina", 80, "Injury", 20],
				"Shooting Guard":	["Stamina", 75, "Injury", 24],
				"Small Forward":	["Stamina", 72, "Injury", 26],
				"Power Forward":	["Stamina", 68, "Injury", 36],
				"Center":	["Stamina", 62, "Injury", 45],
			},
	"Headwear": {
				"Headband":	["Inside Shooting", 5, "Passing", 5],
				"Goggles":	["Outside Shooting", 5, "Dribbling", 5],
			},
	"Upper Body Wear": {
						"Under Shirt":	["Stamina", 4, "Passing", 3],
						"Wrist Band":	["Injury", 3, "Dribbling", 6],
						"Arm Band":	["Outside Shooting", 5, "Stamina", 3],
					},
	"Lower Body Wear": {
						"Knee Brace":	["Inside Shooting", 3, "Dribbling", 2],
						"Shin Sleeve":	["Injury", 4, "Stamina", 1],
						"Shoes":	["Passing", 7, "Dribbling", 7]
					}
};
