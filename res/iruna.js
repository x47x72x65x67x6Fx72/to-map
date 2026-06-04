// {id:int, x:int, y:int, name:str, areas:[str], bosses:[str], mobs:[str]}
// "d": {a:[], b:[], m:[]}

const nodes = new vis.DataSet([
 
    {"id":1, "x":0, "y":15, "label":"Aulada Ancient Tower", "d": {
        a:["Aulauda Ancient Tower", "Observation Deck"], 
        b:["Seltirio", "Astol"], 
        m:["Rutiro", "Gold Jelly", "Tower Ghost"]}},

    {"id":2,"x":1, "y":15, "label":"Debakcy Channel", "d": {
        a:["Debakcy Channel", "Basement 1", "Basement 2"], 
        b:["Silver Roar"],
        m:["Corda", "Blue Jelly", "Ruin Rat"]}},

    {"id":3, "x":1, "y":16, "label":"Athema Ruined Town", "d": {
        a:["Athema Ruined Town", "Area 2"], 
        b:["King Potum", "Crimsosch"], 
        m:["Vanilla Potum", "Kijimu", "Rio Frosch"]}},

    {"id":4, "x":2, "y":14, "label":"Haotas Ravine", "d": {
        a:["Haotas Ravine", "Deepest Part"], 
        b:["Warmonger"], 
        m:["Pain Leaf", "White Hound", "Fin Frog"]}},

    {"id":10, "x":2, "y":17, "label":"Zoktzda Ruins", "d": {
        a:["Zoktzda Ruins", "Abnormal Space", "Reserved Hall"], 
        b:["Stone Mercenary", "Ruin Golem"], 
        m:["Goblin", "Skeleton", "Green Jelly", "Wind Roar", "Stone"]}},

    {"id":5, "x":3, "y":15, "label":"Rugio Ruins", "d": {
        a:["Rugio Ruins"], 
        b:["Boss Colon"], 
        m:["Colong", "Raffy", ""]}},

    {"id":6, "x":3, "y":14, "label":"Strum Road", "d": {
        a:["Strum Road"], 
        b:["Colo Commander"], 
        m:["Colon", "Kijimu", "Helm Colon"]}},

    {"id":7, "x":3, "y":13, "label":"Marbaro Forest", "d": {
        a:["Marbaro Forest", "Deepest Part"], 
        b:["Forest Wolf"], 
        m:["Colon", "Helm Colon", "Pico"]}},

    {"id":8, "x":3, "y":16, "label":"Suedor Cliff", "d": {
        a:["Suedor Cliff"],
        b:[], 
        m:["Colon", "Raffy", "Kijimu"]}},

    {"id":9, "x":3, "y":17, "label":"Rinom Plains", "d": {
        a:["Rinom Plains"], 
        b:["B.B. Goblin"], 
        m:["Goblin", "Pico", "Kijimu"]}},

    {"id":11, "x":3, "y":18, "label":"Ribisco Cave", "d": {
        a:["Area 1", "Area 2", "Area 3", "Deepest Part"], 
        b:["Boss Goblin"], 
        m:["Frosch", "Goblin"]}},





    {"id":33, "x":4, "y":13, "label":"New Moon Palace", "d": {
        a:["New Moon Palace", "1st Chamber", "2nd Chamber", "Innermost"], 
        b:["Mauez"], 
        m:["Mage Marionette", "Stone", "Swoard Marionette", "Palace Solider"]}},

    {"id":31, "x":4, "y":14, "label":"Lutaros Cavern", "d": {
        a:["Lutaros Cavern", "Basement 1", "Basement 2", "Deepest Part"], 
        b:["Ooze"], 
        m:["Stone Solider", "Voda Road", "Slime", "Turquoise Lionfish"]}},

    {"id":13, "x":4, "y":15, "label":"Nisel Mountain", "d": {
        a:["Nisel Mountain", "Mountainside", "Near the Summit", "Summit"], 
        b:["Giant Boar", "Brutal Dragon Decel"], 
        m:["Shell Mask", "Little Boar", "Boar", "Rutin"]}},

    {"id":12, "x":4, "y":16, "label":"Icule Lake", "d": {
        a:["Icule Lake"], 
        b:["Tortuga"], 
        m:["Cobre", "Frosch", "Miwi"]}},

    {"id":22, "x":4, "y":17, "label":"Saham Underground Cave", "d": {
        a:["Basement 1", "Basement 2", "Basement 3", "Deepest Part"], 
        b:["Boss Roga", "Naiata"], 
        m:["Rotten Nemico", "Orc Warrior", "Gob Roga"]}},

    {"id":21, "x":4, "y":18, "label":"Saham Crater", "d": {
        a:["Saham Crater"], 
        b:["Mutant Goblin", "Demon's Gate"], 
        m:["Mutant Goblin", "Orc", "Flame Roar"]}},

    {"id":32, "x":5, "y":13, "label":"Nehelo Swamp", "d": {
        a:["Nehelo Swamp"], 
        b:[], 
        m:["Kinote", "Water Ghost", "Moss Ball"]}},

    {"id":30, "x":5, "y":14, "label":"Yorl Highlands", "d": {
        a:["Yorl Highlands"], 
        b:["Arcoiris"], 
        m:["Billy", "Squire", "Conoppy"]}},

    {"id":14, "x":5, "y":16, "label":"Ruined Temple Town", "d": {
        a:["Ruines Temple Town"], 
        b:[], 
        m:["Beak", "Raffy", "Lavarca", "Farfalla"]}},

    {"id":16, "x":5, "y":17, "label":"Ruined Temple", "d": {
        a:["Area 1", "Area 2", "Area 3", "Forbidden Hall"], 
        b:["Miracle Potum", "Minotaur"], 
        m:["Beak", "Goblin", "Guardian Statue", "Roar"]}},

    {"id":20, "x":5, "y":18, "label":"Korda Basin", "d": {
        a:["Korda Basin"], 
        b:[], 
        m:["Ratia", "Soda Potum", "Kijimu", "Aqua Jelly"]}},

    {"id":29, "x":6, "y":14, "label":"Land of Chaos", "d": {
        a:["Land of Chaos"], 
        b:[], 
        m:["Elizard", "Rutin", "Squire"]}},

    {"id":23, "x":6, "y":15, "label":"Sofya City", "d": {
        a:["Sofy Citiy", "Underground Channel"], 
        b:["Gespenst"], 
        m:["Corda", "Blue Jelly", "Ghost"]}},

    {"id":15, "x":6, "y":16, "label":"Rakau Plains", "d": {
        a:["Rakau Plains"], 
        b:[], 
        m:["Raffy", "Pico", "Lavarca", "Pomum", "Piedra"]}},

    {"id":17, "x":6, "y":17, "label":"Reug Salt Plains Wanderers Camp", "d": {
        a:["Reug Salt Plains Wanderers Camp"], 
        b:[], 
        m:["Piedra", "Pomum", "Wooly", "Night Mushroom"]}},

    {"id":19, "x":6, "y":18, "label":"Longo Canyon", "d": {
        a:["Longo Canyon"], 
        b:[], 
        m:["Euris", "Pova", "Cliff Pico"]}},





    {"id":54, "x":7, "y":12, "label":"Magic Waste Site", "d": {
        a:["Area 1", "Area 2", "Area 3", "Deepest Part"], 
        b:["Scrader"], 
        m:["Murin", "Helmcoon", "Orange Jelly", "Cursed Clock", "Duston"]}},

    {"id":28, "x":7, "y":13, "label":"Fiery Volcano", "d": {
        a:["Area 1", "Area 2", "Area 3", "Lava Trail"], 
        b:["Mochelo", "Flare Volg"], 
        m:["Red Jelly", "Savaran", "Fire Ghost", "Stone Knight", "Flame Butterfly"]}},

    {"id":27, "x":7, "y":14, "label":"Witeka Scorched Plains", "d": {
        a:["Witeka Scorched Plains"], 
        b:[], 
        m:["Roca", "Savaran", "Calron"]}},

    {"id":25, "x":7, "y":15, "label":"Land under Developement", "d": {
        a:[], 
        b:["Boss Colon"], 
        m:["Colon", "Shell Mask"]}},

    {"id":47, "x":7, "y":16, "label":"Gate of Another World", "d": {
        a:["Area 1", "Area 2", "Front"], 
        b:["Outerworld Wolf", "Nurethoth"], 
        m:["Glow Ray", "Planet Head"]}},




    {"id":18, "x":7, "y":17, "label":"Isthmus of Kaus", "d": {
        a:["Istmus of Kaus", "Dragon's Den"], 
        b:["Eerie Crystal"], 
        m:["Hound", "Pain Leaf", "Purple Jelly"]}},

    {"id":53, "x":8, "y":12, "label":"Teaus Hill", "d": {
        a:["Teaus Hill", "Marshland", ], 
        b:[], 
        m:["Kinote", "Jelfy", "Serpain", "Verdesch"]}},

    {"id":35, "x":8, "y":13, "label":"Scaro Town", "d": {
        a:["Area 1", "Area 2", "Central Part"], 
        b:["Ganlef"], 
        m:["Beak", "Solider Rat", "Death Hound", "Devil's Book"]}},

    {"id":34, "x":8, "y":14, "label":"Douce Hamlet", "d": {
        a:["Douce Hamlet"], 
        b:["Big Coryn"], 
        m:["Wooly", "Crow Killer", "Coryn"]}},

    {"id":26, "x":8, "y":15, "label":"Underground Ruins", "d": {
        a:["Underground Ruins", "Basement 1", "Basement 2", "Deepest Part"], 
        b:["Excavated Golem"], 
        m:["Ruin Rat", "Torpo", "Nemico"]}},

    {"id":46, "x":8, "y":16, "label":"Road to Another world", "d": {
        a:["Area 1", "Area 2"], 
        b:[], 
        m:["Astron", "Kijimu", "White Jelly"]}},

    {"id":45, "x":8, "y":17, "label":"Vyshed the Tainted Land", "d": {
        a:["Area 1", "Area 2", "Albatif Village"], 
        b:["Death Colon", "Grass Dragon Yelb"], 
        m:["Colon Zombie", "Abyss Eye", "Moss Mushroom"]}},

    {"id":51, "x":9, "y":12, "label":"Wanderers' Plains", "d": {
        a:["Wanderers' Plains"], 
        b:["Grylle"], 
        m:["Greg", "Tulin", "Coryn"]}},

    {"id":52, "x":9, "y":13, "label":"El Scaro", "d": {
        a:["El Scaro"], 
        b:[], 
        m:[]}},

    {"id":36, "x":9, "y":14, "label":"Darkanon Plain", "d": {
        a:["Darkanon Plain"], 
        b:[], 
        m:["Farfalla", "Violaccoon", "Pojo", "Rocksaur"]}},

    {"id":37, "x":9, "y":15, "label":"Centerio Highlands", "d": {
        a:["Centerio Highlands"], 
        b:["Sand Mole"], 
        m:["Sand Frosch", "Foxiger"]}},

    {"id":38, "x":9, "y":16, "label":"Ancient Empress's Tomb" , "d": {
        a:["Area 1", "Area 2", "Area 3", "Deepest Part"], 
        b:["Ancient Empress"], 
        m:["Bone Dragonewt", "Black Jelly", "Cassy", "Nightmare Roar", ""]}},

    {"id":44, "x":9, "y":17, "label":"Fabizo Boundary", "d": {
        a:["Fabizo Boundary"], 
        b:[], 
        m:["Basalt", "Larmo", "Glasch"]}},

    {"id":49, "x":10, "y":12, "label":"Gravel Terrace", "d": {
        a:["Gravel Terrace"], 
        b:["Jade Raptor", "Goldoon"], 
        m:["Mewte", "Miragela", "Rock Stinger"]}},

    {"id":48, "x":10, "y":13, "label":"Maia Diela", "d": {
        a:["Maia Delia"], 
        b:[], 
        m:["Flying Egg", "Rodentail", "Ghilly"]}},

    {"id":39, "x":10, "y":14, "label":"Harde Hill", "d": {
        a:["Harde Hill"], 
        b:[], 
        m:["Berryy Pomum", "Salliphant", "Arborgon", ""]}},

    {"id":40, "x":10, "y":15, "label":"Figo's Manor", "d": {
        a:["Figo's Manor"], 
        b:[], 
        m:["Crow Destroyer", "Maple Fox", "Floral Bee"]}},

    {"id":42, "x":10, "y":16, "label":"Ethos Fortress", "d": {
        a:["Ethos Fortress"], 
        b:[], 
        m:["Death Zombeast", "Flying Quertz", "Gob Roga"]}},

    {"id":43, "x":10, "y":17, "label":"Lost Town", "d": {
        a:["Lost Town", "Square", "Magic Barrier"], 
        b:["Pillar Golem"], 
        m:["Wandering Shadow", "Death Hound", "Parasitized Dog"]}},

    {"id":50, "x":11, "y":12, "label":"Akaku Desert", "d": {
        a:["Area 1", "Area 2", "w", "Akaku Downtown", "Akaku Downtown Palace"], 
        b:["Metal Stinger", "Goovua"], 
        m:["Kiliznar", "Scalar Roar", "Sand Anglerfish", "Mudrosche"]}},

    {"id":41, "x":11, "y":15, "label":"Land Under Cultivation", "d": {
        a:["Area 1", "Area 2", "Area 3", "Hill"], 
        b:["Masked Warrior"], 
        m:["Pojo", "Green Boar", "Owl", "Lime wPotum"]}},





    {"id":95, "x":0, "y":10, "label":"Suburb of Droma Square", "d": {
        a:["Area 1", "Area 2", "Area 3", "Dorma Square"], 
        b:["Volotur", "Ultimate Machina"], 
        m:["Lyark Brawler", "Death Media", "Cannon Golem", "Volo"]}},

    {"id":96, "x":1, "y":9, "label":"Ultimea Palace", "d": {
        a:["Storage Area 1", "Storage Area 2", "Demi Machina Storage", "Corridor", "Throne"], 
        b:["Wandering Wheel", "Ornlarf", "Venena The Lil Empress"], 
        m:["Stavros Machina", "High Tigris", "Lyark Defender", "Wheel Machina"]}},

    {"id":94, "x":1, "y":10, "label":"Ultimea City", "d": {
        a:["Roof"], 
        b:[], 
        m:["Ignis Golem", "Death Media", "Petarma"]}},

    {"id":85, "x":2, "y":7, "label":"Lufenas Mansion", "d": {
        a:["Entrance", "Corridor", "Library", "Hall"], 
        b:["Commander Golem", "Zahhak Machina"], 
        m:["Assault Golem", "Puppet Dragon", "Lyark Vanguard"]}},

    {"id":84, "x":2, "y":8, "label":"Lufenas Mansion: Garden", "d": {
        a:["Garden"], 
        b:[], 
        m:["Tigris Machina", "Lyark Vanguard", "Earl Colon"]}},

    {"id":87, "x":2, "y":9, "label":"Ultimea Sewer: East", "d": {
        a:["East"], 
        b:[], 
        m:["Killer Mouse", "Solider Rat", "Energy Quarz"]}},

    {"id":88, "x":2, "y":10, "label":"Ultimea Sewer: Southeast", "d": {
        a:["Southeast"], 
        b:[], 
        m:["Singing Eye", "Grape Jelly", "Underground Nemico"]}},

    {"id":89, "x":2, "y":11, "label":"Brahe Laboratory", "d": {
        a:["1st Building", "2nd Building", "3rd Building", "4th Building"], 
        b:["Guignol"], 
        m:["Singing Eye", "Moth Machina", "Bio Launcher", "Lyark Specialist", "Retainer Doll", "Mystery Pot", "Parasitized Spider"]}},

    {"id":81, "x":3, "y":7, "label":"Large Demi Machina Factory", "d": {
        a:["Area 1", "Area 2", "Area 3", "Deepest Part"], 
        b:["Mozto Machina"], 
        m:["Ledon Machina", "Golem Guard", "Horn Machina"]}},

    {"id":83, "x":3, "y":8, "label":"Ultimea: Outer Gate", "d": {
        a:["Outer Gate"], 
        b:[], 
        m:[]}},

    {"id":86, "x":3, "y":9, "label":"Hora Diomedea", "d": {
        a:["Hora Diomeda"], 
        b:[], 
        m:["General Store Adala", "Lepage", "General Store Adala", "Blacksmith Liut", "Synthesist Lefe"]}},

    {"id":90, "x":3, "y":10, "label":"Ultimea Sewer: South", "d": {
        a:["South"], 
        b:[], 
        m:["Squnail", "Venomsch", "Mine Digger"]}},

    {"id":91, "x":3, "y":11, "label":"Cuervo Jail", "d": {
        a:["1st Floor", "2nd Floor", "3rd Floor", "Roof"], 
        b:["Gwaimol"], 
        m:["Ghost in the Jail", "Lyark Machine Solider", "Lyark Jailer", "Toy Bolg", ""]}},

    {"id":80, "x":4, "y":7, "label":"Sykea Deep Valley", "d": {
        a:["Sykea Deep Valley"], 
        b:[], 
        m:["Mech Little Boar", "Demi Ork"]}},

    {"id":82, "x":4, "y":8, "label":"Monster's Forest", "d": {
        a:["Foggy Way", "Animal Trail", "Deep Part", "Tree Way"], 
        b:["Lalvada"], 
        m:["Sick Mushroom", "Pecols", "Owlzard", "Nepenthe"]}},

    {"id":92, "x":4, "y":10, "label":"Copia Reservoir", "d": {
        a:["Copia Reservoir"], 
        b:[], 
        m:["Pond Snake", "Copia Rat", "Young Pore"]}},

    {"id":93, "x":4, "y":11, "label":"Buried Tower", "d": {
        a:["Collapsed Top", "Inside", "Entrance"], 
        b:["Seraph Machina", "Maton Swoard"], 
        m:["Mine Digger", "Lost Machina", "Galdon", ""]}},

    {"id":127, "x":4, "y":12, "label":"Dea Ruinea", "d": {
        a:["Dea Ruinea"], 
        b:["Demonic Eye"], 
        m:[]}},

    {"id":78, "x":5, "y":7, "label":"Peligro Landfill", "d": {
        a:["Peligro Landfill"], 
        b:[], 
        m:["Plant Machina", "Kinote", "Petally"]}},

    {"id":79, "x":5, "y":8, "label":"Small Demi Machina Factory", "d": {
        a:["Area 1", "Area 2", "Area 3", "Core"], 
        b:["Dusk Machina", "Tyrant Machina"], 
        m:["Torture Machina", "Rugos Demi Machina", "Fist Machina"]}},

    {"id":128, "x":5, "y":12, "label":"Morga Wasteland", "d": {
        a:["Area 1", "Area 2", "Area 3", "Deepest Area"], 
        b:["Demonic Quasar"], 
        m:["Evil Eye", "Florroractur", "Mummy Golem", "Hellhound", ""]}},





    {"id":77, "x":6, "y":7, "label":"Singolare Ruins", "d": {
        a:["1st Floor", "2nd Floor", "3rd Floor"], 
        b:["Proto Leon"], 
        m:["Cavern Rat", "Rocksaur", "Cursed Magic Swoard", "Octaray"]}},

    {"id":74, "x":6, "y":8, "label":"Klaspe Slum", "d": {
        a:["Klaspe Slum"], 
        b:[], 
        m:["Duston", "Rat Scavenger", "Slum Potum"]}},

    {"id":75, "x":6, "y":9, "label":"Site of Simcracker", "d": {
        a:["Site of Simcracker"], 
        b:[], 
        m:["Gajo", "Muddy Gnome", "Floral Bee"]}},

    {"id":76, "x":6, "y":10, "label":"Huge Crysta Factory", "d": {
        a:["1st Floor", "2nd Floor", "3rd Floor", "Storage"], 
        b:["Builder Golem", "York"], 
        m:["Crafted Golem", "Clockwork Watcher", "Custos Demi Machina"]}},

    {"id":73, "x":7, "y":7, "label":"Blazing Graben", "d": {
        a:["Surface", "Upper", "Lower", "Deepest Part"], 
        b:["Tapir", "Salamander", "Ifrid"], 
        m:["Wooly", "Bestion", "Baby Salamander", "Sufard", "Blaze Ant"]}},

    {"id":72, "x":7, "y":8, "label":"Artillery Defense Line", "d": {
        a:["Artillery Defense Line"], 
        b:["Iconos"], 
        m:["Greg", "Ornis Demi Mahina"]}},

    {"id":70, "x":7, "y":9, "label":"Fort Solfini", "d": {
        a:["Wall", "Outside", "Inside", "Roof"], 
        b:["Inzanio the Dark Knight", "Twilight Dragon"], 
        m:["Goblin", "Frosti", "Skeleton", "Pawn"]}},

    {"id":97, "x":8, "y":5, "label":"Tolbas Grassland", "d": {
        a:["Tolbas Grassland"], 
        b:[], 
        m:["Lanbat", "Healily", "Molemet"]}},

    {"id":71, "x":8, "y":8, "label":"Einklang", "d": {
        a:["Einklang"], 
        b:[], 
        m:["Senie", "Tnark", "Female Blacksmith", "Woman in Need", "Young Man", "Yumomo"]}},

    {"id":69, "x":8, "y":9, "label":"Polde Ice Valley", "d": {
        a:["Polde Ice Valley"], 
        b:["Don Yeti"], 
        m:["Little Snow Boar", "Yeti", "Milk Potum", "Rabby"]}},

    {"id":57, "x":8, "y":10, "label":"Calle Mort", "d": {
        a:["Calle Mort"], 
        b:[], 
        m:["Chandler", "Ghost Potum", "Phobos"]}},

    {"id":55, "x":8, "y":11, "label":"Dunkel Valley", "d": {
        a:["Dunkel Valley"], 
        b:[], 
        m:["Fimera", "Ropple"]}},





    {"id":98, "x":9, "y":5, "label":"Wazeero Street", "d": {
        a:["Wazeero Street"], 
        b:["Grimuckus"], 
        m:["Tulin", "Biped Frog", "Muckus"]}},

    {"id":135, "x":9, "y":8, "label":"Celarra Plateau" , "d": {
        a:["Celarra Plateau"], 
        b:[], 
        m:["Ovinymon", "Shroomymon", "Arbonymon"]}},

    {"id":132, "x":9, "y":9, "label":"Lunagent Cliff Base", "d": {
        a:["Lunagent Cliff Base"], 
        b:[], 
        m:["Flooray", "Necrome", "Porgy"]}},

    {"id":58, "x":9, "y":10, "label":"Lunagent Mountain", "d": {
        a:["Area 1", "Area 2", "Area 3", "Summit"], 
        b:["Evil Crystal Beast"], 
        m:["Phobos", "Noir Nemico", "Hangged Mummy", "Soul Reaper"]}},

    {"id":56, "x":9, "y":11, "label":"Abyss of No Return", "d": {
        a:["Area 1", "Area 2", "Area 3", "Deepest Part"], 
        b:["Black Knight of Delusion"], 
        m:["Shell Mask", "Targa", "Shell Kraken", "Gramp"]}},

    {"id":99, "x":10, "y":5, "label":"Eryldan Street", "d": {
        a:["Area 1", "Area 2", "Area 3", "Near the Forest of Ein"], 
        b:["Tuscog"], 
        m:["Mille", "Antbee", "Roca", "Wolfret"]}},

    {"id":136, "x":10, "y":8, "label":"Arche Valley", "d": {
        a:["Area 1", "Area 2", "Area 3", "Depths"], 
        b:["Arachnidemon"], 
        m:["Sumari", "Fronymon", "Besy"]}},

    {"id":133, "x":10, "y":9, "label":"Inje Village", "d": {
        a:["Inje Village"], 
        b:[], 
        m:["Flooray", "Climber Potum"]}},

    {"id":130, "x":10, "y":10, "label":"Geist Desert", "d": {
        a:["Area 1", "Area 2", "Area 3", "Depths"], 
        b:["Sand Bandtis Leader", "Vulture"], 
        m:["Sand Bandits Potum", "Sand Bandits Chopper", "Sand Bandits Gan"]}},

    {"id":129, "x":10, "y":11, "label":"Inanis Wilderness", "d": {
        a:["Inanis Wilderness"], 
        b:[], 
        m:["Coronella", "Minimyu", "Sandsaur"]}},

    {"id":134, "x":11, "y":9, "label":"Ducia Coast", "d": {
        a:["Area 1", "Area 2", "Area 3"], 
        b:["Pisteus"], 
        m:["Porgy", "Cabello", "Lutris", "Depths"]}},





    {"id":68, "x":13, "y":9, "label":"Plastida", "d": {
        a:["Area 1", "Area 2", "Deepest Part"], 
        b:["Imitator"], 
        m:["Strange Tentacle", "Wandering Life Form", "Blood Draining Jelly", "Flying Crystal"]}},

    {"id":59, "x":13, "y":10, "label":"Dark Wasteland", "d": {
        a:["Dark Wasteland"], 
        b:[], 
        m:["Parasiztized Dog", "Corroded Fighter", "Corrded Knight"]}},

    {"id":60, "x":13, "y":11, "label":"Dark Castle", "d": {
        a:["Area 1", "Area 2", "Area 3", "Grand Hall"], 
        b:["Memecoleous", "Imitacia"], 
        m:["Controlled Knight", "Controlled Fighter", "Shadow Fly", "Corroded Sentry Knight", "Corroded Sentry Fighter", "Manticore"]}},

    {"id":67, "x":14, "y":9, "label":"Dark Manor", "d": {
        a:["Area 1", "Area 2"], 
        b:["Corroded Knight Captain"], 
        m:["Corroded Brawler", "Evil Dark Book", "Corroded Shielder", ""]}},

    {"id":61, "x":14, "y":10, "label":"Garden of Beginning", "d": {
        a:["Garden of Beginning"], 
        b:["Nightmare Potum"], 
        m:["Ghost Potum"]}},

    {"id":1059, "x":14, "y":11, "label":"Spring of Rebirth", "d": { // TODO: CHECK IF OVERLAPP / FIX ID!
        a:["Lower", "Middle", "Upper", "Top"], 
        b:["Daddy Finpen", "Cerberus"], 
        m:["Corroded Fighter", "Corroded Knight", "Finpen", "Jewel Eye"]}},

    {"id":66, "x":15, "y":8, "label":"Cradle of Soldiers", "d": {
        a:["Entrance", "Inside", "Deepest Part"], 
        b:["Bexiz"], 
        m:["Pecora", "Flying Executioner", "Corroded Fighter", "Moxiz"]}},
 
    {"id":65, "x":15, "y":9, "label":"Trace of Dark River", "d": {
        a:["Trace of Dark River"], 
        b:["Lapin the Necromancer"], 
        m:["Corroded Knight", "Bunny Summoner", "Infested Mushroom", "Ogler"]}},

    {"id":63, "x":15, "y":10, "label":"Dark Mirror", "d": {
        a:["Dark Mirror"], 
        b:["Zolban the Dark Captain of Wind"], 
        m:["Corroded Fighter", "Sunion"]}},

    {"id":64, "x":16, "y":10, "label":"Garden of Sublimation", "d": {
        a:["Area 1", "Area 2", "Area 3", "Central Part"], 
        b:["Aranea"], 
        m:["Corroded Fighter", "Corroded Knight", "Kodama", "Shiny Roar", "Aramia"]}},





    {"id":111, "x":3, "y":2, "label":"Shrine of Blessings Gods", "d": {
        a:["Shrine of the gods Area 1", "Shrine of the gods Area 2", "Shrine of the gods Area 3", "Hall of the Blessings Gods"], 
        b:["Mardula"], 
        m:["Destiny Cube", "Bubble Angel", "Gods of Blessing's Guardian", "Zaman"]}},

    {"id":110, "x":3, "y":3, "label":"Barbaros Corridor", "d": {
        a:["Barbaros Corridor"], 
        b:["Bubble Bogey"], 
        m:["Berylfree", "Aternus", "Planet Head"]}},

    {"id":112, "x":4, "y":2, "label":"Heresy Corridor", "d": {
        a:["Heresy Corridor"], 
        b:[], 
        m:["Bubble Angel", "Meditating Potum", "Hermit Doll"]}},

    {"id":109, "x":4, "y":3, "label":"Ruins of Mt. Mithurna", "d": {
        a:["Stylobate", "Stairs", "Open Air", "Summit"], 
        b:["Zelbuse"], 
        m:["Ardvan", "Mitta Tret", "Haliabubo", "Moss Granite"]}},

    {"id":108, "x":4, "y":4, "label":"Forgotten Cave", "d": {
        a:["Forgotten Cave"], 
        b:["Mom Fluck"], 
        m:["Stone", "Melon Soda Potum", "Fluck"]}},

    {"id":115, "x":5, "y":0, "label":"Elf Mountains", "d": {
        a:["Area 1", "Area 2", "Area 3", "Elf Mountains Shrine"], 
        b:["King Piton"], 
        m:["Snowman", "Corloup", "Silveria" ,"Goldenia", "Ice Stinger"]}},

    {"id":114, "x":5, "y":1, "label":"Garden of Ice & Snow", "d": {
        a:["Garden of Ice & Snow"], 
        b:[], 
        m:["Acernix" ,"Snowman", "Billy"]}},

    {"id":113, "x":5, "y":2, "label":"Shrine of Construction Gods", "d": {
        a:["Shrine of the Gods Area 4", "Hall of Construction Gods", "Hall of Special Gods", "Shrine of the Goddess of Species"], 
        b:["Seele Zauga"], 
        m:["Oddy", "Bubble Angel", "Destiny Cube", "Sanctuary Guardian"]}},

    {"id":106, "x":5, "y":3, "label":"Mt. Mithurna: Entrance", "d": {
        a:["Mt. Mithurna Entrance"], 
        b:[], 
        m:["Tenoblepas", "Muddy Gnome", "Tylul"]}},

    {"id":107, "x":5, "y":4, "label":"Rokoko Plains", "d": {
        a:["Rokoko Plains"], 
        b:[], 
        m:["Leedle Colon", "Kijimu", "Tenoblepas"]}},

    {"id":137, "x":5, "y":5, "label":"Rokoko City Ruins", "d": {
        a:["Rokoko City Ruins"], 
        b:["Black Shadow"], 
        m:["Boon", "Coofer"]}},

    {"id":138, "x":5, "y":6, "label":"Witch's Woods", "d": {
        a:["Area 1", "Area 2", "Area 3", "Depths"], 
        b:["Grim Reaper Scarecrow", "Hexter"], 
        m:["Eerie Scarecrow", "Bayaga", "Enty"]}},

    {"id":116, "x":6, "y":0, "label":"Dark Dragon Shrine", "d": {
        a:["Lower", "Middle", "Upper", "Near the Top", "Elf Mountains Watchtower"], 
        b:["Finstern the Dark Dragon"], 
        m:["Soul Reaper", "Death Hound", "Ivy", "Baby Finstern"]}},

    {"id":105, "x":6, "y":3, "label":"Curonne Forest: North Area", "d": {
        a:["Area 1", "Area 2", "Decaying Ruins"], 
        b:["Crystal Titan"], 
        m:["Tehon", "Leaf Ghost", "Fanalizard", "Shark Wolf", "Fanadon"]}},

    {"id":1116, "x":6, "y":4, "label":"Nov Saterica", "d": { // TODO: FIX ID
        a:["Nov Saterica"], 
        b:[], 
        m:["Sentry", "General Store Litoa"]}},

    {"id":139, "x":6, "y":5, "label":"Nezim Wetlands", "d": {
        a:["Nezim Wetlands"], 
        b:["Lord of Nezim"], 
        m:["Strider", "Spirabol", "Kappadon", "Coofer"]}},

    {"id":140, "x":6, "y":6, "label":"Nov Diela", "d": {
        a:["Area 1", "Area 2",  "Area 3", "Central"], 
        b:["Trocostida", "Irestida"], 
        m:["Juvestida", "Walkastida", "Flystida"]}},

    {"id":103, "x":7, "y":4, "label":"Curonne Forest: East", "d": {
        a:["Curonne Forest East"], 
        b:[], 
        m:["Fanalizard", "Squirreen", "Tehon"]}},

    {"id":102, "x":8, "y":4, "label":"Turnus Mine", "d": {
        a:["Area 1", "Area 2", "Area 3", "Hall"], 
        b:[], 
        m:["Pelle", "Molemet", "Solopy", "Light Angler", "Rockmadillo", "Comraby"]}},
    




    {"id":118, "x":9, "y":3, "label":"Fractum Sector", "d": {
        a:["Area 1", "Area 2", "Area 3", "Brdige Entrance"], 
        b:["Pyxtica"], 
        m:["Floragonet", "Moculus", "Corroded Floragonet", "Povidone"]}},
    
    {"id":117, "x":9, "y":4, "label":"Fabriska Sector", "d": {
        a:["Fabriska Sector"], 
        b:[], 
        m:["Bombermeow", "Mobster Golem", "Sentreast"]}},

    {"id":122, "x":10, "y":2, "label":"Avant Plastida", "d": {
        a:["Area 1", "Area 2", "Area 3", "Deepest Area  "], 
        b:["Bloodie Crystal", "Sapphire Roga"], 
        m:["Corroded Goblin", "Wandering Blood Crystal", "Strange Tentacle", "Flying Tentacle"]}},

    {"id":101, "x":10, "y":3, "label":"Morthell Swell", "d": {
        a:["Area 1", "Area 2", "Area 3", "Deep Area"], 
        b:["Eroded Pilz"], 
        m:["Rafflesian", "Nectivorider", "Petally", "Kinote", ""]}},

    {"id":100, "x":10, "y":4, "label":"Forest of Ein", "d": {
        a:["Forest of Ein"], 
        b:[], 
        m:["Elizard", "Moss Mole", "Lilliset"]}},

    {"id":131, "x":11, "y":1, "label":"Ruins of Urban Elban", "d": {
        a:["Ruins of Urban Elban", "Neo Plastida"], 
        b:["Venena Metacoenubia"], 
        m:["Stapp", "Cabrigo", "Wallkong", "Tappler"]}},

    {"id":121, "x":11, "y":2, "label":"Dikkit Sector", "d": {
        a:["Dikkit Sector"], 
        b:[], 
        m:["Coryn", "Alpoca", "Baloot"]}},

    {"id":120, "x":11, "y":3, "label":"Labilans Sector", "d": {
        a:["Area 1", "Area 2", "Area 3", "Square"], 
        b:["Kuzto"], 
        m:["Insector", "Toretta", "Laurus", "Alpoca", "Laurus"]}},

    {"id":119, "x":11, "y":4, "label":"Altoale Sector", "d": {
        a:["Altoale Sector"], 
        b:[], 
        m:["Monstletoe", "Mossy Mousey", "Insector"]}},

    {"id":123, "x":12, "y":2, "label":"Pupalov Sector", "d": {
        a:["Pubalov Sector"], 
        b:[], 
        m:["Earustica", "Cadaverustica", "Orustica"]}},

    {"id":124, "x":13, "y":2, "label":"Recetacula Sector", "d": {
        a:["Area 1", "Area 2", "Area 3", "Depot Rooftop"], 
        b:["Canemofish", "Gravicep"], 
        m:["Weltacle", "Actinirania", "Toxinaria", "Bladefish"]}},

    {"id":125, "x":13, "y":3, "label":"Old Lufenas Mansion Ruins", "d": {
        a:["Old Lufenas Mansion Ruins"], 
        b:["Tardigrademon"], 
        m:["Lazulligator", "Marquis Colon", "Tardigrande"]}},

    {"id":126, "x":13, "y":4, "label":"Deltzon Research Zone", "d": {
        a:["Area 1", "Area 2", "Area 3", "Deepest Area"], 
        b:["Repthon"], 
        m:["Swirly Whirly", "Corphibi", "Monoglare"]}}
]);

const edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 2, to: 3},
    {from: 2, to: 5},
    {from: 4, to: 5},
    {from: 5, to: 6},
    {from: 5, to: 8},
    {from: 6, to: 7},
    {from: 8, to: 9},
    {from: 9, to: 10},
    {from: 9, to: 11},

    {from: 8, to: 12},
    {from: 12, to: 13},
    {from: 12, to: 14},
    {from: 14, to: 16},
    {from: 14, to: 15},
    {from: 15, to: 17},
    {from: 17, to: 18},
    {from: 17, to: 19},
    {from: 19, to: 20},
    {from: 20, to: 21},
    {from: 21, to: 22},
    {from: 15, to: 23},
    {from: 23, to: 24},

    {from: 29, to: 30},
    {from: 30, to: 31},
    {from: 30, to: 32},
    {from: 32, to: 33},

    {from: 23, to: 25},
    {from: 25, to: 26},
    {from: 25, to: 27},
    {from: 27, to: 29},
    {from: 27, to: 28},
    {from: 27, to: 34},
    {from: 34, to: 35},
    {from: 34, to: 36},
    {from: 36, to: 37},
    {from: 37, to: 38},
    {from: 36, to: 39},

    {from: 39, to: 40},
    {from: 40, to: 41},
    {from: 40, to: 42},
    {from: 42, to: 43},
    {from: 43, to: 44},
    {from: 44, to: 45},
    {from: 45, to: 46},
    {from: 46, to: 47},

    {from: 39, to: 48},
    {from: 48, to: 49},
    {from: 49, to: 50},
    {from: 49, to: 129},
    {from: 129, to: 130},
    {from: 49, to: 51},
    {from: 51, to: 52},
    {from: 51, to: 53},
    {from: 53, to: 54},
    {from: 53, to: 55},

    {from: 55, to: 56},
    {from: 55, to: 57},
    {from: 57, to: 58},
    {from: 57, to: 132},
    {from: 132, to: 135},
    {from: 135, to: 136},
    {from: 132, to: 133},
    {from: 133, to: 134},
    {from: 57, to: 69},

    {from: 69, to: 70},
    {from: 69, to: 71},
    {from: 71, to: 72},
    {from: 72, to: 73},
    {from: 72, to: 74},
    {from: 74, to: 75},
    {from: 75, to: 76},
    {from: 74, to: 77},
    {from: 77, to: 78},

    {from: 78, to: 79},
    {from: 78, to: 80},
    {from: 80, to: 81},
    {from: 80, to: 82},
    {from: 82, to: 83},
    {from: 83, to: 84},
    {from: 84, to: 85},
    {from: 83, to: 86},

    {from: 86, to: 90},
    {from: 86, to: 87},
    {from: 87, to: 96},
    {from: 87, to: 88},
    {from: 88, to: 94},
    {from: 94, to: 95},
    {from: 88, to: 89},
    {from: 88, to: 90},

    {from: 90, to: 91},
    {from: 90, to: 92},
    {from: 92, to: 93},
    {from: 93, to: 127},
    {from: 127, to: 128},

    {from: 71, to: 97},
    {from: 97, to: 98},
    {from: 98, to: 99},
    {from: 99, to: 100},
    {from: 100, to: 117},
    {from: 117, to: 118},
    {from: 100, to: 101},
    {from: 100, to: 119},
    {from: 119, to: 120},
    {from: 120, to: 121},
    {from: 121, to: 122},
    {from: 121, to: 131},
    {from: 121, to: 123},
    {from: 123, to: 124},
    {from: 124, to: 125},
    {from: 125, to: 126},

    {from: 97, to: 102},
    {from: 102, to: 103},
    {from: 103, to: 104},
    {from: 104, to: 105},
    {from: 105, to: 106},
    {from: 106, to: 107},
    {from: 107, to: 108},
    {from: 107, to: 137},
    {from: 137, to: 138},
    {from: 137, to: 139},
    {from: 139, to: 140},
    {from: 106, to: 109},
    {from: 109, to: 110},
    {from: 110, to: 111},
    {from: 111, to: 112},
    {from: 112, to: 113},
    {from: 113, to: 114},
    {from: 114, to: 115},
    {from: 115, to: 116},

    {from: 105, to: 1116},
    {from: 103, to: 1116},

    {from: 59, to: 60},
    {from: 59, to: 61},
    {from: 61, to: 62},
    {from: 61, to: 63},
    {from: 63, to: 64},
    {from: 63, to: 65},
    {from: 65, to: 66},
    {from: 65, to: 67},
    {from: 67, to: 68}
]);
        
const networkdata = { nodes: nodes, edges: edges };