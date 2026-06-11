import React, {
  useState,
  useEffect
} from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  Menu,
  X
} from "lucide-react";


const NAV_ITEMS=[
"Home",
"Services",
"Technology",
"Fleet",
"Industries"
];



export default function Navbar(){

const [isMenuOpen,setIsMenuOpen]=useState(false);
const [activeSection,setActiveSection]=useState("home");



useEffect(()=>{


const sections=[
...NAV_ITEMS.map(i=>i.toLowerCase()),
"contact"
];


const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

setActiveSection(
entry.target.id
);

}

});

},

{
rootMargin:
"-20% 0px -60% 0px",

threshold:0
}

);



sections.forEach(id=>{

const el =
document.getElementById(id);

if(el)
observer.observe(el);

});



return ()=>{

observer.disconnect();

};



},[]);





return (

<nav

className="
fixed
top-4
inset-x-0
max-w-7xl
mx-auto
z-50
px-4
"

>


<div

className="
border
border-white/10
rounded-2xl
px-6
py-3
flex
items-center
justify-between
shadow-2xl
transition-colors
duration-300
hover:border-white/20
"

style={{

backgroundColor:
"rgba(3,7,18,0.9)",

transform:
"translate3d(0,0,0)"

}}

>





{/* LOGO */}

<a

href="#home"

className="
flex
items-center
"

style={{

WebkitTapHighlightColor:
"transparent"

}}

>


<div

className="
relative
overflow-hidden
"

style={{

width:"8rem",
height:"2.5rem"

}}

>


<img

src="/p2p_logo.png"

alt="P2P Logo"


className="
absolute
w-full
h-full
object-cover
"

/>



</div>


</a>










{/* DESKTOP NAV */}

<div

className="
hidden
xl:flex
items-center
gap-8
text-sm
font-medium
text-[#94A3B8]
"

>


{

NAV_ITEMS.map(item=>{


const id=item.toLowerCase();

const active =
activeSection===id;



return (

<a

key={item}

href={`#${id}`}

className={`
relative
py-1
transition-colors

${
active
?
"text-white"
:
"hover:text-white"
}

`}

>


{item}



<span

className={`
absolute
bottom-0
left-0
h-[2px]
bg-brand-orange
transition-all
duration-300

${
active
?
"w-full"
:
"w-0"
}

`}

/>


</a>

)

})

}


</div>









{/* CTA */}

<a

href="#contact"

className={`
hidden
md:block

px-5
py-2.5
rounded-xl
text-sm
font-semibold
transition-colors


${
activeSection==="contact"
?
"bg-brand-orange text-white"
:
"bg-white text-black"
}

`}

>

Get Quote

</a>











{/* MOBILE BUTTON */}


<button

onClick={()=>setIsMenuOpen(!isMenuOpen)}

className="
xl:hidden
text-white
p-1
"

style={{

WebkitTapHighlightColor:
"transparent"

}}

>


{
isMenuOpen
?
<X className="w-6 h-6"/>
:
<Menu className="w-6 h-6"/>

}


</button>




</div>









{/* MOBILE MENU */}

<AnimatePresence>


{

isMenuOpen &&


<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

transition={{
duration:.2
}}



className="
absolute
top-24
inset-x-4
border
border-white/10
rounded-2xl
p-6
xl:hidden
shadow-2xl
"

style={{

backgroundColor:
"rgba(3,7,18,.98)"

}}

>



<div

className="
flex
flex-col
gap-4
text-lg
font-medium
text-[#94A3B8]
"

>


{
[
...NAV_ITEMS,
"Contact"

].map(item=>{


const id=
item.toLowerCase();



return (

<a

key={item}

href={`#${id}`}

onClick={()=>setIsMenuOpen(false)}

className={`
py-2
border-b
border-white/5


${
activeSection===id
?
"text-white"
:
""
}

`}

>

{item}

</a>

)

})

}




<a

href="#contact"

onClick={()=>setIsMenuOpen(false)}

className="
mt-4
text-center
py-3
rounded-xl
bg-brand-orange
text-black
font-semibold
"

>

Get Quote

</a>


</div>


</motion.div>


}


</AnimatePresence>



</nav>

)

}