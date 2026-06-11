import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Users,
  Activity,
  Cpu,
} from "lucide-react";

export default function About() {
  const bulletPoints = [
    "Comprehensive nationwide physical operational hubs",
    "Advanced live system visibility tracking interfaces",
    "Rigid security protocols safeguarding valuable custom freight",
  ];


  // iOS SAFE glass card
  const cardStyle = {
    backgroundColor: "rgba(17,24,39,0.45)",
  };


  return (
    <section
      className="
      py-32 
      border-y 
      border-white/5 
      relative 
      z-10
      bg-[#030712]/20
      "
    >
      <div
        className="
        max-w-7xl 
        mx-auto 
        px-4 
        grid 
        grid-cols-1 
        lg:grid-cols-2 
        gap-16 
        items-center
        "
      >


        {/* LEFT CONTENT */}

        <motion.div
          initial={{
            opacity:0,
            x:-30
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true,
            amount:0.2
          }}

          transition={{
            duration:0.6,
            ease:"easeOut"
          }}

          className="space-y-6"
        >

          <div
          className="
          text-xs 
          font-bold 
          tracking-widest 
          text-brand-orange 
          uppercase
          "
          >
            Corporate Backbone
          </div>


          <h2
          className="
          text-4xl 
          md:text-5xl 
          font-black 
          tracking-tight 
          leading-tight
          "
          >
            Driving Logistics Through Technology & Integrity
          </h2>


          <p
          className="
          text-[#94A3B8] 
          text-base 
          leading-relaxed 
          font-light
          "
          >
            P2P Haulier & Services balances deep operational logistics mastery
            with cutting-edge analytical tools. We operate a highly synchronized
            multi-modal transport layout, engineered specifically to wipe away
            execution blindspots for modern enterprise businesses.
          </p>



          <div className="space-y-4 pt-4">

            {bulletPoints.map((item,idx)=>(

              <div
              key={idx}
              className="
              flex 
              items-start 
              gap-3
              "
              >

                <div
                className="
                mt-1 
                p-0.5 
                rounded-full 
                text-brand-orange
                bg-orange-500/20
                "
                >

                  <CheckCircle2 
                  className="w-4 h-4" 
                  />

                </div>


                <span
                className="
                text-sm 
                font-medium 
                text-gray-300
                "
                >
                  {item}
                </span>


              </div>

            ))}

          </div>

        </motion.div>




        {/* RIGHT CARDS */}

        <div
        className="
        grid 
        grid-cols-2 
        gap-4
        "
        >


          <div className="space-y-4">


            <div
            className="
            p-6 
            rounded-2xl 
            border 
            border-white/5 
            space-y-2
            "
            style={cardStyle}
            >

              <Award 
              className="w-8 h-8 text-brand-orange"
              />

              <h4 className="font-bold">
                Premium Quality
              </h4>

              <p className="text-xs text-gray-400">
                Consistently meeting and exceeding rigid customer SLAs.
              </p>

            </div>




            <div
            className="
            p-6 
            rounded-2xl 
            border 
            border-white/5 
            space-y-2
            translate-y-4
            "
            style={cardStyle}
            >

              <Users 
              className="w-8 h-8 text-blue-400"
              />

              <h4 className="font-bold">
                Expert Fleet Crew
              </h4>

              <p className="text-xs text-gray-400">
                Professional drivers managed programmatically.
              </p>

            </div>


          </div>






          <div
          className="
          space-y-4 
          -translate-y-4
          "
          >


            <div
            className="
            p-6 
            rounded-2xl 
            border 
            border-white/5 
            space-y-2
            "
            style={cardStyle}
            >

              <Activity 
              className="w-8 h-8 text-emerald-400"
              />

              <h4 className="font-bold">
                Continuous Stream
              </h4>

              <p className="text-xs text-gray-400">
                24/7 centers maintaining continuous oversight patterns.
              </p>


            </div>




            <div
            className="
            p-6 
            rounded-2xl 
            border 
            border-white/5 
            space-y-2
            "
            style={cardStyle}
            >

              <Cpu 
              className="w-8 h-8 text-purple-400"
              />

              <h4 className="font-bold">
                Proprietary API
              </h4>

              <p className="text-xs text-gray-400">
                Seamless integration into enterprise asset tooling.
              </p>


            </div>


          </div>


        </div>

      </div>

    </section>
  );
}