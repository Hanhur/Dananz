import image1 from "../../img/person/image1.png";
import image2 from "../../img/person/image2.png";
import image3 from "../../img/person/image3.png";
import image4 from "../../img/person/image4.png";
import image5 from "../../img/person/image5.png";
import image6 from "../../img/person/image6.png";
import image7 from "../../img/person/image7.png";
import image8 from "../../img/person/image8.png";

import "./person.css";

const personArray = [image1, image2, image3, image4, image5, image6, image7, image8]; 


export function getPerson() 
{
    const personBlock = document.createElement("div");
    personBlock.className = "person-block";

    const listItems = personArray.map(imageSrc => `
       <ul class="person-list">
            <li class="person-item">
                <img class="person-img" src="${imageSrc}" alt="Person Image">
                <div class="person-box">
                    <h2 class="person-title">Shoo Phar Dhie</h2>
                    <p class="person-text">CEO</p>
                </div>
            </li>
       </ul>
    `).join("");

    personBlock.innerHTML = listItems;
   
    return personBlock;
}