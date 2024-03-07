"use client"
import {React,useState} from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Bg from "/app/assets/image/places-bg.jpg";
import P1 from "/app/assets/image/p1.jpg";
import P2 from "/app/assets/image/p2.jpg";
import P3 from "/app/assets/image/p3.jpeg";
import P4 from "/app/assets/image/p4.jpeg";
import P5 from "/app/assets/image/p5.jpg";
import P6 from "/app/assets/image/p6.jpg";
import P7 from "/app/assets/image/p7.jpg";
import P8 from "/app/assets/image/p8.jpeg";
import P9 from "/app/assets/image/p9.jpeg";
import P10 from "/app/assets/image/p10.jpeg";
import P11 from "/app/assets/image/p11.jpeg";
import P12 from "/app/assets/image/p12.jpeg";
import P13 from "/app/assets/image/p13.jpeg";
import P14 from "/app/assets/image/p14.jpeg";
import P15 from "/app/assets/image/p15.jpeg";



const PlacesToVisit = () => {
  const { langName } = useSelector((state) => state.lang);
  const [activeCard, setActiveCard] = useState(null);

  const handleButtonClick = (cardId) => {
    setActiveCard(cardId === activeCard ? null : cardId);
  };

  return (
    <div>
  <div className={`pt-10 pb-10 lg:pt-10 ${
      langName === "Kannada" ? "hidden" : "block"
    } `}
  >
    <div className="flex w-full h-screen relative">
      <Image
        src={Bg}
        alt="background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-white text-center">
          <h1 className="text-2xl md:text-3xl font-semibold mt-10">Places to Visit near Kulkunda Shree Basaveshwara Temple</h1>
        </div>
      </div>
    </div>
    
    <div className="flex flex-wrap justify-center sm:justify-between p-5">
      {/* first card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P1}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Kukke Shri Subrahmanya Temple:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card1')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card1' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Kukke Shri Subrahmanya Temple:</h2>
                  <p> This famous Hindu temple is located in Subrahmanya, situated at a distance of 4 km away from Kulkunda temple.</p>
                  <button onClick={() => handleButtonClick('card1')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* second card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P2}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Adi Subrahmanya Temple:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card2')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card2' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Adi Subrahmanya Temple:</h2>
                  <p>Located in Kukke Subrahmanya, Karnataka, this temple is dedicated to Lord Subrahmanya and is worshipped for serpent-related afflictions in the form of a valmika (ant hill). It is located at a distance of 4 km from the Kulkunda temple.</p>
                  <button onClick={() => handleButtonClick('card2')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

     {/* third card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P3}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Shri Subrahmanya Mutt:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card3')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card3' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Shri Subrahmanya Mutt:</h2>
                  <p>Belonging to the Dwaitha tradition, thismutt is situated to the southeast of the outer quadrangle of KukkeShri Subrahmanya Temple. Sri Madwacharya made his brother, Vishnuteerthacharya, his disciple and gave this mutt. The present seer of this mutt is Sri Sri Sri Vidyaprasanna Theertha Swamiji. Shri Abhaya Ganapathi Temple, Sri Vanadurga Devi Temple, Agrahara Somanatha Temple, and Samputa Narasimha Temple are also managed by this mutt.</p>
                  <button onClick={() => handleButtonClick('card3')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* fourth card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P4}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Kashikatte Shri Ganapathi Temple:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card4')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card4' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Kashikatte Shri Ganapathi Temple:</h2>
                  <p> Situated beside the main road
              at Kashikatte, Subrahmanya, about 3.3 km from the temple, this place features temples of Ganapathi and Anjaneya.</p>
                  <button onClick={() => handleButtonClick('card4')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*fifith card */}        
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P5}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Biladwara:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card5')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card5' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Biladwara:</h2>
                  <p> On the way to the Kukke Shri Subrahmanya temple from Kumaradhara, there is a place called Biladwara which is 3 km fromthe temple. It is said that Vasuki (Serpent king) lay hiding in this cave to escape from Garude. It is a cave surrounded by a
garden.</p>
                  <button onClick={() => handleButtonClick('card5')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* sixth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P6}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Shri Vanadurga Devi Temple:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card6')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card6' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Shri Vanadurga Devi Temple:</h2>
                  <p>This temple is about 2.9 km away from the temple. Goddess Durga is worshipped here, and daily poojas are conducted for devotees.</p>
                  <button onClick={() => handleButtonClick('card6')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* seventh card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P7}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Shree Abhaya Mahaganapathi:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card7')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card7' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Shree Abhaya Mahaganapathi:</h2>
                  <p>Situated on the right side of the main road to Subrahmanya, about 2.9 km from the temple, it is one of the biggest monolithic statues of Lord Ganesha, standing at 21 feet (6.4 m) tall. The architecture of the shrine is in Nepali style.</p>
                  <button onClick={() => handleButtonClick('card7')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* eighth card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P8}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Agrahara Shri Somanatha Temple:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card8')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card8' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Agrahara Shri Somanatha Temple:</h2>
                  <p>This ancient temple, also called Panchami Theertha, is situated on the left bank of the Kumaradhara, 3.7 kilometers from Shree Basaveshwara temple. There is a temple dedicated to Lord Shiva here, and swamijis of Shree Subrahmanya Mutt are entombed in this place</p>
                  <button onClick={() => handleButtonClick('card8')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ninth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P9}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Shree Harihareshwara Temple: </h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card9')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card9' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Shree Harihareshwara Temple: </h2>
                  <p>This ancient temple is situated at
              the village Hariharapallathadka, 12.4 kilometers away from
              Kulkunda. It is the abode of both Lord Vishnu (Hari) and Lord
              Shiva (Hara). A panoramic view of Shesha Parvatha (Western Ghats)
              can be seen from this temple, which is famous for Shani Pooja.</p>
                  <button onClick={() => handleButtonClick('card9')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* tenth card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P10}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Kumaradhara River (Bathing Ghat):</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card10')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card10' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Kumaradhara River (Bathing Ghat):</h2>
                  <p> Originating from
              Kumaraparvatha, this river is the primary tributary of River
              Nethravathi and joins the Arabian Sea. The tradition suggests
              bathing at the bathing ghat at Kumaradhara, which is 2 km away
              from Kukke Shri Subrahmanya Temple and 1 km away from Shree
              Basaveshwara Temple.</p>
                  <button onClick={() => handleButtonClick('card10')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* eleventh card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P11}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Shri Kshethra Dharmasthala: </h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card11')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card11' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Shri Kshethra Dharmasthala: </h2>
                  <p>Dharmasthala Manjunatha Swamy
              Temple is a significant Hindu pilgrimage site in Karnataka, India,
              dedicated to Lord Shiva. It is known for its unique management by
              the Jain Pergade family, fostering religious harmony, and
              providing free meals to all visitors. This temple is 50 km away
              from Kulkunda.
           </p>
                  <button onClick={() => handleButtonClick('card11')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* twelvth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P12}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Bisle Ghat Viewpoint:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card12')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card12' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Bisle Ghat Viewpoint::</h2>
                  <p>Bisle Ghat is situated between
              Subrahmanya and Sakleshpura in Karnataka, approximately 21 km from
              Kulkunda. The viewpoint offers beautiful views of Kumara Parvatha
              and other mountain ranges in the Western Ghats. This viewpoint is
              the confluence of three districts: Dakshina Kannada, Hassan, and
              Kodagu.</p>
                  <button onClick={() => handleButtonClick('card12')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* thirteen card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P13}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large"> Patla Betta:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card13')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card13' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold"> Patla Betta:</h2>
                  <p>Patla Betta is a picturesque hill located in
              Sakleshpur, Karnataka, standing at an elevation of 3500 feet above
              sea level. It offers panoramic views of the surrounding mountains
              and valleys, ideal for trekking. It is 29 km away from Kulkunda.</p>
                  <button onClick={() => handleButtonClick('card13')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* fourteenth card*/}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P14}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Mallalli Falls:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card14')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card14' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Mallalli Falls:</h2>
                  <p> Located near Somwarpet in Coorg, Karnataka,
              Mallalli Falls is a majestic waterfall with a height of around 200
              feet, formed by the Kumaradhara River. Best visited during the
              monsoon season, the falls offer a picturesque setting amidst lush
              greenery, attracting nature enthusiasts and trekkers exploring the
              surrounding landscapes in the Western Ghats. It is approximately
              46 km away from Kulkunda.</p>
                  <button onClick={() => handleButtonClick('card14')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* fifteenth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P15}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Kumara Parvatha Trek:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card15')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card15' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Kumara Parvatha Trek:</h2>
                  <p>For adventure enthusiasts, the Kumara
              Parvatha trek is a must-try experience. Known as Pushpagiri, it is
              the fourth-highest peak in the Western Ghats and offers a
              challenging yet rewarding trekking trail. The trek takes you
              through dense forests, grasslands, and rocky terrains, providing
              breathtaking views of the surrounding landscapes. The base camp is
              in Kukke Subrahmanya, making it a thrilling adventure just 5 km
              away from Kulkunda Shree Basaveshwara Temple.</p>
                  <button onClick={() => handleButtonClick('card15')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  </div>


  `<div className={`pb-10  ${
        langName === "English" ? "hidden" : "block"
      } `}
    >`
    <div className="flex w-full h-screen relative">
      <Image
        src={Bg}
        alt="background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-white text-center">
          <h1 className="text-2xl md:text-3xl font-semibold mt-10">ಹತ್ತಿರದಲ್ಲಿ ಭೇಟಿ ಮಾಡಬಹುದಾದ ಸ್ಥಳಗಳು</h1>
        </div>
      </div>
    </div>
    
    <div className="flex flex-wrap justify-center sm:justify-between p-5">
      {/* first card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P1}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card1')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card1' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ:</h2>
                  <p> ಈ ಪ್ರಸಿದ್ಧ ಹಿಂದೂ ದೇವಾಲಯವು
              ಸುಬ್ರಹ್ಮಣ್ಯದಲ್ಲಿದೆ, ಇದು ಕುಲ್ಕುಂದ ದೇವಸ್ಥಾನದಿಂದ 4 ಕಿಮೀ ದೂರದಲ್ಲಿದೆ.</p>
                  <button onClick={() => handleButtonClick('card1')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* second card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P2}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಆದಿ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card2')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card2' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಆದಿ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ:</h2>
                  <p>ಕರ್ನಾಟಕದ ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯದಲ್ಲಿರುವ ಈ
              ದೇವಸ್ಥಾನದಲ್ಲಿ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವರನ್ನು ವಾಲ್ಮೀಕ (ಹುತ್ತ) ರೂಪದಲ್ಲಿ
              ಪೂಜಿಸಲಾಗುತ್ತದೆ. ಇದು ಕುಲ್ಕುಂದ ದೇವಸ್ಥಾನದಿಂದ 4 ಕಿ.ಮೀ ದೂರದಲ್ಲಿದೆ</p>
                  <button onClick={() => handleButtonClick('card2')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

     {/* third card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P3}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಮಠ: </h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card3')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card3' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಮಠ: </h2>
                  <p>ದ್ವೈತ ಸಂಪ್ರದಾಯಕ್ಕೆ ಸೇರಿದ ಈ ಮಠವು ಕುಕ್ಕೆ
              ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನದ ಆಗ್ನೇಯಕ್ಕೆ ನೆಲೆಗೊಂಡಿದೆ. ಶ್ರೀ
              ಮದ್ವಾಚಾರ್ಯರು ತಮ್ಮ ಸಹೋದರ ವಿಷ್ಣುತೀರ್ಥಾಚಾರ್ಯರನ್ನು ತಮ್ಮ ಶಿಷ್ಯನನ್ನಾಗಿ
              ನೇಮಿಸಿ ಈ ಮಠವನ್ನು ಅವರ ಸುಪರ್ದಿಗೆ ಕೊಟ್ಟರು. ಪ್ರಸ್ತುತ ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ
              ವಿದ್ಯಾಪ್ರಸನ್ನ ತೀರ್ಥ ಸ್ವಾಮೀಜಿ ಮಠದ ಪೀಠಾಧಿಪತಿಗಳಾಗಿದ್ದಾರೆ. ಶ್ರೀ ಅಭಯ
              ಗಣಪತಿ ದೇವಸ್ಥಾನ, ಶ್ರೀ ವನದುರ್ಗಾ ದೇವಿ ದೇವಸ್ಥಾನ, ಅಗ್ರಹಾರ ಸೋಮನಾಥ
              ದೇವಸ್ಥಾನ ಮತ್ತು ಸಂಪುಟ ನರಸಿಂಹ ದೇವಸ್ಥಾನವನ್ನು ಸಹ ಈ ಮಠದಿಂದ
              ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ.</p>
                  <button onClick={() => handleButtonClick('card3')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* fourth card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P4}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಕಾಶಿಕಟ್ಟೆ ಶ್ರೀ ಗಣಪತಿ ದೇವಸ್ಥಾನ:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card4')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card4' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಕಾಶಿಕಟ್ಟೆ ಶ್ರೀ ಗಣಪತಿ ದೇವಸ್ಥಾನ:</h2>
                  <p>  ಕುಲ್ಕುಂದ ದೇವಸ್ಥಾನದಿಂದ ಸುಮಾರು 3.3
              ಕಿ.ಮೀ ದೂರದಲ್ಲಿರುವ ಸುಬ್ರಹ್ಮಣ್ಯದ ಕಾಶಿಕಟ್ಟೆಯಲ್ಲಿ ಮುಖ್ಯ ರಸ್ತೆಯ
              ಪಕ್ಕದಲ್ಲಿರುವ ಈ ಸ್ಥಳವು ಗಣಪತಿ ಮತ್ತು ಆಂಜನೇಯನ ದೇವಾಲಯಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.</p>
                  <button onClick={() => handleButtonClick('card4')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*fifith card */}        
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P5}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಬಿಲದ್ವಾರ:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card5')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card5' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಬಿಲದ್ವಾರ:</h2>
                  <p>ಕುಮಾರಧಾರದಿಂದ ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನಕ್ಕೆ
              ಹೋಗುವ ದಾರಿಯಲ್ಲಿ ದೇವಸ್ಥಾನದಿಂದ 3 ಕಿ.ಮೀ ದೂರದಲ್ಲಿ ಬಿಲದ್ವಾರ ಎಂಬ
              ಸ್ಥಳವಿದೆ. ವಾಸುಕಿ (ಸರ್ಪ ರಾಜ) ಗರುಡನಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಈ ಗುಹೆಯಲ್ಲಿ
              ಅಡಗಿಕೊಂಡು,ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವರ ತಪ್ಪಸ್ಸು ಮಾಡಿದನು ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ.</p>
                  <button onClick={() => handleButtonClick('card5')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* sixth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P6}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large"> ಶ್ರೀ ವನದುರ್ಗಾ ದೇವಿ ದೇವಸ್ಥಾನ:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card6')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card6' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold"> ಶ್ರೀ ವನದುರ್ಗಾ ದೇವಿ ದೇವಸ್ಥಾನ:</h2>
                  <p>ಈ ದೇವಸ್ಥಾನವು ದೇವಸ್ಥಾನದಿಂದ ಸುಮಾರು
              2.9 ಕಿ.ಮೀ ದೂರದಲ್ಲಿದೆ. ಇಲ್ಲಿ ದುರ್ಗಾ ದೇವಿಯನ್ನು ಪೂಜಿಸಲಾಗುತ್ತದೆ.</p>
                  <button onClick={() => handleButtonClick('card6')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* seventh card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P7}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಶ್ರೀ ಅಭಯ ಮಹಾಗಣಪತಿ: </h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card7')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card7' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಶ್ರೀ ಅಭಯ ಮಹಾಗಣಪತಿ: </h2>
                  <p>ದೇವಸ್ಥಾನದಿಂದ ಸುಮಾರು 2.9 ಕಿಮೀ ದೂರದಲ್ಲಿ
              ಸುಬ್ರಹ್ಮಣ್ಯಕ್ಕೆ ಹೋಗುವ ಮುಖ್ಯ ರಸ್ತೆಯ ಬಲಭಾಗದಲ್ಲಿದೆ, ಇದು 21 ಅಡಿ (6.4
              ಮೀ) ಎತ್ತರದ ಗಣೇಶನ ಅತಿದೊಡ್ಡ ಏಕಶಿಲೆಯ ವಿಗ್ರಹ ಆಗಿದೆ. ದೇವಾಲಯದ
              ವಾಸ್ತುಶಿಲ್ಪವು ನೇಪಾಳಿ ಶೈಲಿಯಲ್ಲಿದೆ. .
           </p>
                  <button onClick={() => handleButtonClick('card7')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* eighth card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P8}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಅಗ್ರಹಾರ ಶ್ರೀ ಸೋಮನಾಥ ದೇವಸ್ಥಾನ:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card8')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card8' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಅಗ್ರಹಾರ ಶ್ರೀ ಸೋಮನಾಥ ದೇವಸ್ಥಾನ:</h2>
                  <p>ಪಂಚಮಿ ತೀರ್ಥ ಎಂದೂ ಕರೆಯಲ್ಪಡುವ ಈ
              ಪುರಾತನ ದೇವಾಲಯವು ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ 3.7 ಕಿಲೋಮೀಟರ್
              ದೂರದಲ್ಲಿರುವ ಕುಮಾರಧಾರದ ಎಡದಂಡೆಯಲ್ಲಿದೆ. ಇಲ್ಲಿ ಶಿವನಿಗೆ ಸಮರ್ಪಿತವಾದ
              ದೇವಾಲಯವಿದ್ದು, ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಮಠದ ಸ್ವಾಮೀಜಿಗಳು ಈ ಸ್ಥಳದಲ್ಲಿ
              ವೃಂದಾವನಸ್ಥರಾಗಿದ್ದಾರೆ.</p>
                  <button onClick={() => handleButtonClick('card8')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ninth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P9}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card9')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card9' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ:</h2>
                  <p>ಈ ಪುರಾತನ ದೇವಸ್ಥಾನವು ಕುಲ್ಕುಂದದಿಂದ 12.4
              ಕಿಲೋಮೀಟರ್ ದೂರದಲ್ಲಿರುವ ಹರಿಹರಪಲ್ಲತ್ತಡ್ಕ ಗ್ರಾಮದಲ್ಲಿದೆ. ವಿಷ್ಣು (ಹರಿ)
              ಮತ್ತು ಶಿವ (ಹರ) ಇಬ್ಬರನ್ನು ಜೊತೆಯಾಗಿ ನೋಡಬಹುದು. ಶನಿ ಪೂಜೆಗೆ
              ಹೆಸರುವಾಸಿಯಾದ ಈ ದೇವಾಲಯದಿಂದ ಶೇಷ ಪರ್ವತದ (ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು) ವಿಹಂಗಮ
              ನೋಟವನ್ನು ಕಾಣಬಹುದು.</p>
                  <button onClick={() => handleButtonClick('card9')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* tenth card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P10}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಕುಮಾರಧಾರ ನದಿ (ಸ್ನಾನದ ಘಟ್ಟ): </h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card10')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card10' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಕುಮಾರಧಾರ ನದಿ (ಸ್ನಾನದ ಘಟ್ಟ): </h2>
                  <p> ಕುಮಾರಪರ್ವತದಿಂದ ಹುಟ್ಟುವ ಈ ನದಿಯು
              ನೇತ್ರಾವತಿ ನದಿಯ ಪ್ರಾಥಮಿಕ ಉಪನದಿಯಾಗಿದ್ದು ಅರಬ್ಬೀ ಸಮುದ್ರವನ್ನು
              ಸೇರುತ್ತದೆ. ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನದಿಂದ 2 ಕಿಮೀ ಮತ್ತು ಶ್ರೀ
              ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ 1 ಕಿಮೀ ದೂರದಲ್ಲಿರುವ ಕುಮಾರಧಾರ ಸ್ನಾನಘಟ್ಟದಲ್ಲಿ
              ಸ್ನಾನ ಮಾಡಿ ಶ್ರೀ ದೇವರ ದರ್ಶನ ಮಾಡವುದು ಸಂಪ್ರದಾಯವಾಗಿದೆ.</p>
                  <button onClick={() => handleButtonClick('card10')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* eleventh card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P11}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಶ್ರೀ ಕ್ಷೇತ್ರ ಧರ್ಮಸ್ಥಳ: </h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card11')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card11' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಶ್ರೀ ಕ್ಷೇತ್ರ ಧರ್ಮಸ್ಥಳ: </h2>
                  <p>ಧರ್ಮಸ್ಥಳ ಮಂಜುನಾಥ ಸ್ವಾಮಿ ದೇವಾಲಯವು ಭಾರತದ
              ಕರ್ನಾಟಕದಲ್ಲಿ ಶಿವ ದೇವರಿಗೆ ಸಮರ್ಪಿತವಾದ ಮಹತ್ವದ ಹಿಂದೂ ಯಾತ್ರಾ
              ಸ್ಥಳವಾಗಿದೆ. ಇದು ಜೈನ ಧರ್ಮದ ಪೆರ್ಗಡೆ ಕುಟುಂಬದ ವಿಶಿಷ್ಟ ನಿರ್ವಹಣೆಗೆ
              ಹೆಸರುವಾಸಿಯಾಗಿದೆ, ಧಾರ್ಮಿಕ ಸಾಮರಸ್ಯವನ್ನು ಬೆಳೆಸುವುದರ
              ಜೊತೆಗೆ,ಕ್ಷೇತ್ರಕ್ಕೆ ಬರುವ ಎಲ್ಲಾ ಭಕ್ತರಿಗೆ ಅನ್ನಪ್ರಸಾದವನ್ನು
              ಒದಗಿಸಲಾಗುತ್ತಿದೆ. ಈ ದೇವಾಲಯವು ಕುಲ್ಕುಂದದಿಂದ 50 ಕಿಮೀ ದೂರದಲ್ಲಿದೆ.</p>
                  <button onClick={() => handleButtonClick('card11')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* twelvth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P12}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಬಿಸ್ಲೆ ಘಾಟ್ ವ್ಯೂಪಾಯಿಂಟ್: </h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card12')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card12' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಬಿಸ್ಲೆ ಘಾಟ್ ವ್ಯೂಪಾಯಿಂಟ್: </h2>
                  <p>ಬಿಸ್ಲೆ ಘಾಟ್ ಕರ್ನಾಟಕದ ಸುಬ್ರಹ್ಮಣ್ಯ
              ಮತ್ತು ಸಕಲೇಶಪುರದ ನಡುವೆ, ಕುಲ್ಕುಂದದಿಂದ ಸರಿಸುಮಾರು 21 ಕಿಮೀ ದೂರದಲ್ಲಿದೆ.
              ಈ ವ್ಯೂಪಾಯಿಂಟ್ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳಲ್ಲಿನ ಕುಮಾರ ಪರ್ವತ ಮತ್ತು ಇತರ ಪರ್ವತ
              ಶ್ರೇಣಿಗಳ ಸುಂದರ ನೋಟವನ್ನು ನೀಡುತ್ತದೆ. ಈ ದೃಷ್ಟಿಕೋನವು ದಕ್ಷಿಣ ಕನ್ನಡ,
              ಹಾಸನ ಮತ್ತು ಕೊಡಗು ಮೂರು ಜಿಲ್ಲೆಗಳ ಸಂಗಮವಾಗಿದೆ</p>
                  <button onClick={() => handleButtonClick('card12')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* thirteen card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P13}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಪಟ್ಲ ಬೆಟ್ಟ:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card13')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card13' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಪಟ್ಲ ಬೆಟ್ಟ:</h2>
                  <p> ಪಟ್ಲ ಬೆಟ್ಟವು ಕರ್ನಾಟಕದ ಸಕಲೇಶಪುರದಲ್ಲಿರುವ ಒಂದು
              ಸುಂದರವಾದ ಬೆಟ್ಟವಾಗಿದ್ದು, ಸಮುದ್ರ ಮಟ್ಟದಿಂದ 3500 ಅಡಿ ಎತ್ತರದಲ್ಲಿದೆ. ಇದು
              ಸುತ್ತಮುತ್ತಲಿನ ಪರ್ವತಗಳು ಮತ್ತು ಕಣಿವೆಗಳ ವಿಹಂಗಮ ನೋಟವನ್ನು ನೀಡುತ್ತದೆ,
              ಚಾರಣಕ್ಕೆ ಸೂಕ್ತವಾಗಿದೆ. ಇದು ಕುಲ್ಕುಂದದಿಂದ 29 ಕಿ.ಮೀ ದೂರದಲ್ಲಿದೆ.</p>
                  <button onClick={() => handleButtonClick('card13')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* fourteenth card*/}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P14}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಮಲ್ಲಳ್ಳಿ ಜಲಪಾತ: </h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card14')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card14' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಮಲ್ಲಳ್ಳಿ ಜಲಪಾತ: </h2>
                  <p>ಕರ್ನಾಟಕದ ಕೊಡಗಿನ ಸೋಮವಾರಪೇಟೆ ಬಳಿ ಇರುವ ಮಲ್ಲಳ್ಳಿ
              ಜಲಪಾತವು ಕುಮಾರಧಾರ ನದಿಯಿಂದ ರೂಪುಗೊಂಡ ಸುಮಾರು 200 ಅಡಿ ಎತ್ತರದ ಭವ್ಯವಾದ
              ಜಲಪಾತವಾಗಿದೆ. ಮಾನ್ಸೂನ್ ಅವಧಿಯಲ್ಲಿ ಭೇಟಿ ನೀಡುವ ಅತ್ಯುತ್ತಮವಾದ, ಈ ಜಲಪಾತವು
              ಹಚ್ಚ ಹಸಿರಿನ ನಡುವೆ ಸುಂದರವಾದ ವಾತಾವರಣವನ್ನು ನೀಡುತ್ತದೆ, ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ
              ಸುತ್ತಮುತ್ತಲಿನ ಭೂದೃಶ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸುವ ಪ್ರಕೃತಿ ಉತ್ಸಾಹಿಗಳನ್ನು ಮತ್ತು
              ಚಾರಣಿಗರನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ. ಇದು ಕುಲ್ಕುಂದದಿಂದ ಸರಿಸುಮಾರು 46 ಕಿಮೀ
              ದೂರದಲ್ಲಿದೆ.</p>
                  <button onClick={() => handleButtonClick('card14')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* fifteenth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={P15}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">ಕುಮಾರ ಪರ್ವತ ಟ್ರೆಕ್:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card15')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card15' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">ಕುಮಾರ ಪರ್ವತ ಟ್ರೆಕ್:</h2>
                  <p>ಸಾಹಸ ಉತ್ಸಾಹಿಗಳಿಗೆ, ಕುಮಾರ ಪರ್ವತ ಚಾರಣವು
              ಪ್ರಯತ್ನಿಸಲೇಬೇಕಾದ ಅನುಭವವಾಗಿದೆ. ಪುಷ್ಪಗಿರಿ ಎಂದು ಕರೆಯಲ್ಪಡುವ ಇದು ಪಶ್ಚಿಮ
              ಘಟ್ಟಗಳಲ್ಲಿನ ನಾಲ್ಕನೇ ಅತಿ ಎತ್ತರದ ಶಿಖರವಾಗಿದೆ ಮತ್ತು ಸವಾಲಿನ ಚಾರಣ ಎಂದು
              ಖ್ಯಾತಿ ಪಡೆದಿದೆ.ಚಾರಣವು ದಟ್ಟವಾದ ಕಾಡುಗಳು, ಹುಲ್ಲುಗಾವಲುಗಳು ಮತ್ತು ಕಲ್ಲಿನ
              ಭೂಪ್ರದೇಶಗಳ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಕರೆದೊಯ್ಯುತ್ತದೆ, ಸುತ್ತಮುತ್ತಲಿನ ಭೂದೃಶ್ಯಗಳ
              ಉಸಿರು ನೋಟಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಮೂಲ ಶಿಬಿರವು ಕುಕ್ಕೆ
              ಸುಬ್ರಹ್ಮಣ್ಯದಲ್ಲಿದೆ, ಇದು ಕುಲ್ಕುಂದ ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ ಕೇವಲ 5
              ಕಿಮೀ ದೂರದಲ್ಲಿ ರೋಮಾಂಚಕ ಸಾಹಸವಾಗಿದೆ.</p>
                  <button onClick={() => handleButtonClick('card15')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};
export default PlacesToVisit;
