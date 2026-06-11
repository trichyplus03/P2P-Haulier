import React from "react";

import {
  motion
} from "framer-motion";

import {
  ChevronRight,
  Truck,
  Globe,
  Layers,
  Clock,
  BarChart3,
  Shield
} from "lucide-react";



const services=[

{
title:"Road Transportation",
desc:"Full Truck Load (FTL) and Less than Truck Load (LTL) scheduled network infrastructure across tier-1 corridors.",
icon:Truck,
size:"md:col-span-8",
},

{
title:"Freight Forwarding",
desc:"Reliable coordination global multi-modal routes.",
icon:Globe,
size:"md:col-span-4",
},

{
title:"Smart Warehousing",
desc:"Strategic high-grade fulfillment hubs packed with tracking technology and optimized inventory indexing.",
icon:Layers,
size:"md:col-span-4",
},

{
title:"Last Mile Delivery",
desc:"Hyper-localized high frequency parcel distribution infrastructure built for quick SLA closeouts.",
icon:Clock,
size:"md:col-span-8",
},

{
title:"Supply Chain Solutions",
desc:"End-to-end bespoke logistical diagnostic architecture engineered for asset heavy industries.",
icon:BarChart3,
size:"md:col-span-6",
},

{
title:"International Cargo",
desc:"Cross-border secure transit handling with absolute clarity on legal clearance and real-time custom statuses.",
icon:Shield,
size:"md:col-span-6",
}

];





export default function Services(){


return (


<section

id="services"

className="
py-32
px-4
max-w-7xl
mx-auto
relative
z-10
"

>




{/* HEADER */}

<div

className="
text-center
max-w-3xl
mx-auto
mb-20
space-y-4
"

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

Core Capabilities

</div>





<h2

className="
text-4xl
md:text-6xl
font-black
tracking-tight
"

>

Architectural Logistics Services

</h2>




<p

className="
text-[#94A3B8]
text-lg
font-light
"

>

Engineered to fulfill complex enterprise supply chains with zero friction.

</p>


</div>










<div

className="
grid
grid-cols-1
md:grid-cols-12
gap-6
"

>


{

services.map((srv,index)=>(


<motion.div

key={srv.title}


initial={{
opacity:0,
y:25
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true,
amount:.15
}}

transition={{
duration:.45,
delay:index*.03
}}



className={`

${srv.size}

relative
group
rounded-2xl
border
border-white/5
p-8
flex
flex-col
justify-between
overflow-hidden
hover:border-white/10
transition-colors
duration-300

`}


style={{

backgroundColor:
"rgba(17,24,39,.35)"

}}

>




{/* SAFE HOVER GLOW */}

<div

className="
absolute
inset-0
opacity-0
group-hover:opacity-100
transition-opacity
duration-500
"

style={{

background:
"linear-gradient(135deg,rgba(37,99,235,.08),transparent)"

}}

/>








<div>


<div

className="
w-12
h-12
rounded-xl
border
border-white/10
flex
items-center
justify-center
text-brand-orange
mb-6
relative
z-10
"

style={{

backgroundColor:
"rgba(255,255,255,.05)"

}}

>


<srv.icon className="w-6 h-6"/>


</div>






<h3

className="
text-xl
font-bold
mb-3
relative
z-10
text-white
group-hover:text-brand-orange
transition-colors
"

>

{srv.title}

</h3>





<p

className="
text-sm
text-[#94A3B8]
leading-relaxed
relative
z-10
max-w-md
"

>

{srv.desc}

</p>


</div>








<div

className="
mt-8
flex
items-center
gap-2
text-xs
font-bold
uppercase
tracking-wider
text-white
opacity-0
group-hover:opacity-100
transition-opacity
duration-300
relative
z-10
"

>


Explore Tech Stack

<ChevronRight className="w-4 h-4"/>


</div>





</motion.div>


))

}










{/* BANNER */}


<motion.div


initial={{
opacity:0,
y:25
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}



className="
col-span-1
md:col-span-12
mt-8
relative
rounded-2xl
border
border-white/5
p-1
overflow-hidden
"

style={{

backgroundColor:
"rgba(3,7,18,.45)"

}}

>



<div

className="
grid
grid-cols-1
lg:grid-cols-12
items-center
gap-6
p-6
md:p-8
"

>


<div className="lg:col-span-4 space-y-4">


<span

className="
text-[10px]
font-mono
font-bold
uppercase
tracking-widest
text-brand-orange
px-2.5
py-1
rounded-md
bg-orange-500/10
"

>

Time-Critical Infrastructure

</span>





<h3

className="
text-2xl
font-black
text-white
"

>

Express Asset Routing

</h3>





<p

className="
text-sm
text-[#94A3B8]
leading-relaxed
"

>

Synchronized distribution models combining heavy linehaul platforms with agile fleet configurations for absolute transit speed.


</p>


</div>







<div

className="
lg:col-span-8
rounded-xl
overflow-hidden
border
border-white/5
bg-white/5
"

>



<img

src="/img3.jpg"

alt="Fleet"

loading="lazy"

className="
w-full
h-auto
object-cover
max-h-[240px]
"

/>



</div>



</div>




</motion.div>





</div>



</section>


)

}