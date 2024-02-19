"use client"
import {React,useState} from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Bg from "/app/assets/image/places-bg.jpg";


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
              src={Bg}
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
              src={Bg}
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
              src={Bg}
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
              src={Bg}
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
              src={Bg}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Biladwara:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card2')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card2' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Biladwara:</h2>
                  <p> On the way to the Kukke Shri Subrahmanya temple from Kumaradhara, there is a place called Biladwara which is 3 km fromthe temple. It is said that Vasuki (Serpent king) lay hiding in this cave to escape from Garude. It is a cave surrounded by a
garden.</p>
                  <button onClick={() => handleButtonClick('card2')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
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
              src={Bg}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Shri Vanadurga Devi Temple:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card3')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card3' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Shri Vanadurga Devi Temple:</h2>
                  <p>This temple is about 2.9 km away from the temple. Goddess Durga is worshipped here, and daily poojas are conducted for devotees.</p>
                  <button onClick={() => handleButtonClick('card3')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
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
              src={Bg}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Shree Abhaya Mahaganapathi:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card1')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card1' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Shree Abhaya Mahaganapathi:</h2>
                  <p>Situated on the right side of the main road to Subrahmanya, about 2.9 km from the temple, it is one of the biggest monolithic statues of Lord Ganesha, standing at 21 feet (6.4 m) tall. The architecture of the shrine is in Nepali style.</p>
                  <button onClick={() => handleButtonClick('card1')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
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
              src={Bg}
              width={270}
            />
          </div>
          <div className="pb-0 pt-2 px-4 flex flex-col items-center">
            <h4 className="font-bold text-large">Agrahara Shri Somanatha Temple:</h4>
            {/* Button to show details */}
            <button onClick={() => handleButtonClick('card2')} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
            {/* Modal for showing details */}
            {activeCard === 'card2' && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-10">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-xl font-bold">Agrahara Shri Somanatha Temple:</h2>
                  <p>This ancient temple, also called Panchami Theertha, is situated on the left bank of the Kumaradhara, 3.7 kilometers from Shree Basaveshwara temple. There is a temple dedicated to Lord Shiva here, and swamijis of Shree Subrahmanya Mutt are entombed in this place</p>
                  <button onClick={() => handleButtonClick('card2')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
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
              src={Bg}
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

      {/* tenth card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* eleventh card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* twelvth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* thirteen card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* fourteenth card*/}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* fifteenth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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
              src={Bg}
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
              src={Bg}
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
              src={Bg}
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
              src={Bg}
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

      {/*fifith card */}        
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* sixth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* seventh card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* eighth card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* ninth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* tenth card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* eleventh card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* twelvth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* thirteen card */}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* fourteenth card*/}
      <div className="w-full sm:w-1/3 px-2">
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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

      {/* fifteenth card */}
      <div className="w-full sm:w-1/3 px-2">      
        <div className="py-4 mx-auto my-2 border border-white p-5 rounded-lg bg-white">
          <div className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={Bg}
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
    </div>
  </div>
  </div>
  );
};
export default PlacesToVisit;
