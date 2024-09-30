// du må kun bruge importerede moduler her...
import moduleOne from "./modules/moduleOne/moduleOne.js";
import { headerText } from "./modules/moduleOne/moduleOne.js";
import moduleTwo from "./modules/moduleTwo/moduleTwo.js";
import moduleThree from "./modules/moduleThree/moduleThree.js";

moduleOne();
moduleTwo();
moduleThree(headerText);
