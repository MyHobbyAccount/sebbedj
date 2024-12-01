import React from 'react';

const About = () => {
  return (
    <section className="section-height animated-bg py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <div className="aspect-square relative overflow-hidden rounded-lg neon-box glow-image">
              <img
                src="/media/images/disco dude.jpeg"
                alt="#sebbedj med diskokula"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 neon-text">
              Om #sebbedj
            </h2>
            <div className="space-y-4 text-white opacity-90">
              <p>
                Välkommen till en värld där musiken sätter stämningen och varje fest blir unik! Jag är sebbedj – en engagerad och erfaren underhållare som brinner för att skapa oförglömliga stunder på dansgolvet. Jag utgår några mil söder om Växjö och kan enkelt ta mig runt i södra Sverige.
              </p>
              <p>
                Med en naturlig känsla för att läsa av publiken och en bred musikalisk repertoar levererar jag precis det som behövs för att din kväll ska bli magisk. Oavsett om det handlar om att sätta takten på ett bröllop, arrangera ett skräddarsytt musikquiz, eller skapa en kväll full av energi och glädje, så är mitt mål att ge dig och dina gäster en upplevelse ni sent kommer glömma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;