import React from "react";
import './Home.css'
import Header from "../componants/Header/Header";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div class="full">
     <div class="contener">
        <Header/>
     
     <h1>welcome to the dog section</h1>
     <div id="div1">
      <img src="/images/American dog.jpeg" alt="American dog" className="img"/>
    <h2 className="nameleft">American Eskimo Dog</h2>
     <p>The American Eskimo Dog is a breed of companion dog, originating in Germany. The American Eskimo Dog is a member of the Spitz family. The breed's progenitors were German Spitz, but due to anti-German sentiment during the First World War, it was renamed "American Eskimo Dog." Although modern American Eskimo Dogs have been exported as German Spitz Gross (or Mittel, depending on the dog's height), the breeds have diverged and the standards are significantly different. In addition to serving as a watchdog and companion, the American Eskimo Dog also achieved a high degree of popularity in the United States in the 1930s and 1940s as a circus performer.</p>
     <a href="/americandog" className="dog1">more info</a>
     </div>

     <div id="div2">
     <img src="/images/german shepherd.jpeg" alt="german shephered" className="img1"/>
     <h2 className="nameright">german shepherd</h2>
     <p>cThe German Shepherd,also known in Britain as an Alsatian, is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899.
It was originally bred as a herding dog, for herding sheep. It has since been used in many other types of work, including disability assistance, search-and-rescue, police work, and warfare. It is commonly kept as a companion dog, and according to the Fédération Cynologique Internationale had the second-highest number of annual registrations in 2013</p>
     <a href="/germanshepard" className="dog2">more info</a>
      </div>

    <div id="div3">
     <img src="/images/golden retriever.jpeg" alt="golden retriever" class="img"/>
     <h2 className="nameleft">golden retrieve</h2>
     <p>The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is a working dog, and registration is subject to successful completion of a working trial. It is commonly kept as a companion dog and is among the most frequently registered breeds in several Western countries; some may compete in dog shows or obedience trials, or work as guide dogs.
The Golden Retriever was bred by Sir Dudley Marjoribanks at his Scottish estate Guisachan in the late nineteenth century. He cross-bred Flat-coated Retrievers with Tweed Water Spaniels, with some further infusions of Red Setter, Labrador Retriever and Bloodhound. It was recognised by the Kennel Club in 1913, and during the interwar period spread to many parts of the world.</p>
     <a href="/goldenretriever" className="dog1">more info</a>
     </div>

     <div id="div4">
          <img src="/images/pomeranian.jpeg" alt="pomeranian" class="img1"/>
         <h2 className="nameright">pomeranian</h2>
    <p className="p4">The Pomeranian (also known as a Pom, Pommy or Pome) is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe. Classed as a toy dog breed because of its small size, the Pomeranian is descended from larger Spitz-type dogs, specifically the German Spitz.
The breed has been made popular by a number of royal owners since the 18th century. Queen Victoria owned a particularly small Pomeranian, and consequently, the smaller variety became universally popular. During Queen Victoria's lifetime alone, the size of the breed decreased by half. As of 2017, in terms of registration figures, since at least 1998, the breed has ranked among the top fifty most popular breeds in the United States, and the current fashion for small dogs has increased their popularity worldwide.</p>
      <a href="/pomeranian" className="dog2">more info</a>
      </div>
   
    <div id="div5">
     <img src="/images/shiba.jpeg" alt="shiba" class="img"/>
    <h2 className="nameleft">shiba</h2> 
    <p>The Shiba Inu is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original dog breeds native to Japan. The Shiba Inu was originally bred for hunting. Its name literally translates to "brushwood dog", as it is used to flush game.
The Shiba Inu is a small, alert, and agile dog that copes very well with mountainous terrain and hiking trails.Its appearance is similar to other Japanese dog breeds such as the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct bloodline, temperament, and smaller size than other Japanese dog breeds</p>
     <a href="/shiba" className="dog1">more info</a>
     </div>
    
     <div id="div6">
  <img src="/images/siberian husky.jpeg" alt="siberian" class="img1"/>
   <h2 className="nameright">siberian husky</h2>
    <p>The Siberian Husky is a breed of medium-sized working sled dog. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute.
Siberian Huskies originated in Northeast Asia where they are bred by the Chukchi people as well as the Koryak, Yukaghir and Kamchadal people of Siberia for sled pulling and companionship.
 It is an active, energetic, resilient breed, whose ancestors lived in the extremely cold and harsh environment of the Siberian Arctic. William Goosak, a Russian fur trader, introduced them to Nome, Alaska, during the Nome Gold Rush, initially as sled dogs to work the mining fields and for expeditions through otherwise impassable terrain. Today, the Siberian Husky is typically kept as a house pet, though they are still frequently used as sled dogs by competitive and recreational mushers</p>
     <a href="/shiberianhusky" className="dog2">more info</a>
     </div>
    </div>
    </div>
  )
}
export default Home;