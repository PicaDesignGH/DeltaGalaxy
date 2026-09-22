import React, { useState } from "react";
import PageHero from "../components/common/PageHero";
import TileArt from "../components/common/TileArt";

const ORANGE = "#F98D21";
const DEEP_BLUE = "#07426A";

const DIVISIONS = [
  {
    id: "mining",
    tag: "Division 01",
    name: "Mining",
    sub: "Overburden removal, controlled blasting, crushing and haulage for granite, iron ore and bauxite clients.",
    ongoing: [
      {
        client: "Shani Granites (Gwalior)",
        machinery:
          "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane",
        work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders.",
      },
      {
        client: "Amravati Mines (Gwalior)",
        machinery:
          "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane",
        work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders.",
      },
      {
        client: "PNC Infratech",
        machinery: "Tractor Trailer Truck, Front Wheel Loader",
        work: "Supply of stone aggregate with transportation in Meerut (U.P).",
      },
      {
        client: "Patel Engineering Ltd.",
        machinery: "Tractor Trailer Truck, Front Wheel Loader",
        work: "Supply of stone aggregate with transportation in Katni (M.P).",
      },
      {
        client: "Afcon Infrastructure",
        machinery: "Tipper, Road Roller, Grader",
        work: "Approach road construction for heavy machinery movement across gram panchayats, district Jaunpur (U.P).",
      },
      {
        client: "Afcon Infrastructure",
        machinery: "Excavators, Mining Tipper",
        work: "Cleaning of drain inside tunnel at various locations, Maharashtra Samruddhi Mahamarg, districts Thane & Nashik.",
      },
      {
        client: "Patel Engineering Ltd.",
        machinery: "Excavators, Mining Tipper",
        work: "Transportation of haulage of excavated muck in District Kishtwar (J&K).",
      },
      {
        client: "Patel Engineering Ltd.",
        machinery:
          "Concrete Mixture Machine, Back Hoe Loader, Excavator, Hydra Crane",
        work: "Construction of staff quarters, labor camp, VIP guest house including all ancillary work in District Kishtwar (J&K).",
      },
      {
        client: "Tulsiani Inventours Pvt Ltd",
        machinery:
          "Concrete Mixture Machine, Back Hoe Loader, Excavator, Hydra Crane",
        work: "Construction of building & finishing in Lucknow (U.P).",
      },
      {
        client: "Vretanta Clean Ind Pvt Ltd",
        machinery: "Tractor Trailer Truck, Front Wheel Loader",
        work: "Supply of stone metal.",
      },
    ],
    completed: [
      {
        client: "Teleworld Mines & Minerals Pvt Ltd (Gwalior)",
        machinery:
          "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane",
        work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders.",
      },
      {
        client: "Arcon Mines & Minerals Pvt Ltd (Gwalior)",
        machinery:
          "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane",
        work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders.",
      },
      {
        client: "Priska Infratech Pvt Ltd (Bhind)",
        machinery:
          "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane",
        work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders.",
      },
      {
        client: "Rudraya Mines & Minerals Pvt Ltd (Gwalior)",
        machinery:
          "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane",
        work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders.",
      },
      {
        client: "Highway Crusher & Suppliers (Haridwar)",
        machinery: "Excavators, Mining Tipper",
        work: "Complete mining of river bed material with transportation.",
      },
      {
        client: "Patel Engineering Ltd.",
        machinery: "Excavators, Mining Tipper",
        work: "Transportation of haulage of excavated muck in District Kinnaur (HP).",
      },
      {
        client: "Grewal Minerals & Metals LLP (Orissa)",
        machinery: "Crusher, Scanner, Excavator, Dumper, Loader",
        work: "Iron ore mining development and operations.",
      },
      {
        client: "Rungta Sons Pvt. Ltd",
        machinery: "Excavator, Dumper, Loaders, Tippers",
        work: "Mining, mechanical lifting and carrying of ROM and fines of iron and bauxite from Sanindpur Mines, Orissa.",
      },
    ],
  },

  {
    id: "infrastructure",
    tag: "Division 02",
    name: "Infrastructure",
    sub: "Civil, architectural and structural works for large-scale power and industrial infrastructure projects.",
    ongoing: [
      {
        client: "Vishnu Prakash Puglia Ltd.",
        machinery: "Excavator, Tipper, RMC Plant, Transit Mixer Truck",
        work: "Civil, architectural and structural works of the entire power block area including power house, boiler, chimney, transformer yard, pump house, compressor etc. for the 800 MW NTPC Project, Sipat.",
      },
    ],
    completed: [],
  },

  {
    id: "water",
    tag: "Division 03",
    name: "Water Treatment & Supply",
    sub: "Tubewell development, pipe laying and automated bacteriology treatment across rural water supply missions.",
    ongoing: [
      {
        client: "Afcons Infrastructure Limited",
        machinery:
          "Vertical & Horizontal Drill Machine, OP Unit, Compressor Unit, Back Hoe Loader, Self Loading Concrete Mixture, Butt Fusion Welding Machine",
        work: "Tubewell development, pump house, OHT of different capacity, pipe laying & house connection under rural water supply mission across district Jaunpur (U.P).",
      },
    ],
    completed: [
      {
        client: "Mercury International Pvt. Ltd. (Kanpur)",
        machinery:
          "Concrete Mixture Machine, Back Hoe Loader, Excavator, Hydra Crane",
        work: "Installation of PLC based automatic bacteriology treatment plant with online comprehensive analyzer at various locations across district Bagpat (UP).",
      },
    ],
  },

  {
    id: "automation",
    tag: "Division 04",
    name: "Industrial Automation",
    sub: "Erection and commissioning of rolling mills and high-speed production lines for industrial manufacturers.",
    ongoing: [],
    completed: [
      {
        client: "Raviraj Foils Ltd (Ahmedabad)",
        machinery: "Cold Rolling Mill",
        work: "Installation & commissioning of cold rolling of aluminum foil for 10 micron thickness.",
      },
      {
        client: "Jindal Aluminum Ltd (Bangalore)",
        machinery: "Cold Rolling Mill",
        work: "Installation & commissioning of cold rolling of aluminum foil for 6 mm thickness.",
      },
      {
        client: "Fablous Commercial Pvt Ltd (Siliguri)",
        machinery: "TMT Plant",
        work: "Installation & commissioning of hot rolling TMT bar plant for 32mm to 8mm TMT bar production.",
      },
      {
        client: "Procter & Gamble",
        machinery: "Baby Diaper Machine",
        work: "Erection & commissioning of baby diaper unit.",
      },
      {
        client: "Procter & Gamble",
        machinery: "Sanitary Pad Machine",
        work: "Erection & commissioning of sanitary pad unit.",
      },
    ],
  },
];


// ============================================================
// PROJECT CARD
// Each individual project is displayed using this component.
// ============================================================
const ProjectCard = ({ client, machinery, work }) => (
  <div className="group relative overflow-hidden rounded-xl border border-[#DDD2BE] bg-white/60 p-5 transition hover:-translate-y-1 hover:shadow-lg">

    {/* Orange hover indicator */}
    <span
      className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
      style={{ backgroundColor: ORANGE }}
    />

    {/* Client Name */}
    <h4 className="mb-3 text-base font-bold text-[#07426A]">
      {client}
    </h4>

    {/* Machinery */}
    <div className="mb-2">
      <span
        className="block text-[11px] font-bold uppercase tracking-wider"
        style={{ color: ORANGE }}
      >
        Machinery
      </span>

      <span className="text-sm text-[#4B5459]">
        {machinery}
      </span>
    </div>

    {/* Work Description */}
    <div>
      <span
        className="block text-[11px] font-bold uppercase tracking-wider"
        style={{ color: ORANGE }}
      >
        Work Description
      </span>

      <span className="text-sm text-[#4B5459]">
        {work}
      </span>
    </div>
  </div>
);


// ============================================================
// EMPTY STATE
// Shown when a division has no projects in the selected tab.
// ============================================================
const EmptyState = ({ kind }) => (
  <div className="max-w-md rounded-xl border border-dashed border-[#DDD2BE] bg-white/40 p-8 text-center text-sm text-[#4B5459]">
    At present, the company{" "}
    {kind === "ongoing"
      ? "does not have any active projects in execution"
      : "has no completed projects"}.
  </div>
);


// ============================================================
// PROJECT DIVISION BLOCK
// Handles each division + ongoing/completed toggle + cards.
// ============================================================
const DivisionBlock = ({ division }) => {
  const [tab, setTab] = useState("ongoing");
  const list = division[tab];

  return (
    <section id={division.id} className="py-10">

      {/* Division Label */}
      <span
        className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
        style={{
          color: ORANGE,
          backgroundColor: `${ORANGE}1F`,
        }}
      >
        {division.tag}
      </span>

      {/* Division Heading */}
      <h2 className="mt-3 text-2xl font-extrabold text-[#07426A] sm:text-3xl">
        {division.name}
      </h2>

      {/* Division Description */}
      <p className="mt-2 max-w-xl text-sm text-[#4B5459]">
        {division.sub}
      </p>


      {/* ======================================================
          ONGOING / COMPLETED TOGGLE
          ====================================================== */}
      <div className="my-6 inline-flex gap-1 rounded-full border border-[#DDD2BE] bg-white/40 p-1">

        {["ongoing", "completed"].map((kind) => (
          <button
            key={kind}
            type="button"
            onClick={() => setTab(kind)}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold capitalize transition ${
              tab === kind
                ? "text-white shadow"
                : "text-[#4B5459]"
            }`}
            style={
              tab === kind
                ? { backgroundColor: ORANGE }
                : {}
            }
          >
            {kind}

            {/* Project Count */}
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                tab === kind
                  ? "bg-white/25 text-white"
                  : "bg-[#07426A]/10 text-[#4B5459]"
              }`}
            >
              {division[kind].length}
            </span>
          </button>
        ))}

      </div>


      {/* ======================================================
          PROJECT CARDS SECTION
          ====================================================== */}
      {list.length === 0 ? (
        <EmptyState kind={tab} />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {list.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}

        </div>
      )}

    </section>
  );
};


// ============================================================
// PROJECTS PAGE
// ============================================================
const Projects = () => {
  return (
    <div className="bg-[#F6F2E9]">


      {/* ======================================================
          1. PAGE HERO
          Common PageHero component used across the website.
          ====================================================== */}
      <PageHero
        eyebrow="Our Projects"
        title="Our Projects, across different sectors"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Projects" },
        ]}
        image="https://tse1.mm.bing.net/th/id/OIP.spANbmJl9oD4dGSnAIttdQHaE8?r=0&pid=Api&h=220&P=0"
      />


      {/* ======================================================
          2. TOP PROJECT INTRODUCTION SECTION
          
          ONLY THIS SECTION HAS THE ORANGE BACKGROUND.
          
          Change this bg-orange-400 if you want to experiment
          with the color of the top content area.
          ====================================================== */}
      <section className="relative overflow-hidden bg-orange-200">

        <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
          <div>
                {/* Intro Description */}
            <p className="max-w-lg text-base font-medium text-[#4B5459]">
              Various divisions, one standard of craft — from overburden removal
              at a granite quarry to a PLC-controlled water treatment plant.
              Explore what's currently underway and what we've already
              delivered.
            </p>


            {/* ==================================================
                PROJECT STATISTICS
                ================================================== */}
            <div className="mt-10 flex flex-wrap gap-10">

              {/* Divisions */}
              <div>
                <b className="block text-2xl font-extrabold text-[#07426A]">
                  4+
                </b>

                <span className="text-xs uppercase tracking-wider text-[#4B5459]">
                  Divisions
                </span>
              </div>

              {/* Client Engagements */}
              <div>
                <b className="block text-2xl font-extrabold text-[#07426A]">
                  25+
                </b>

                <span className="text-xs uppercase tracking-wider text-[#4B5459]">
                  Client Engagements
                </span>
              </div>

              {/* Project Footprint */}
              <div>
                <b className="block text-2xl font-extrabold text-[#07426A]">
                  Pan-India
                </b>

                <span className="text-xs uppercase tracking-wider text-[#4B5459]">
                  Project Footprint
                </span>
              </div>

            </div>


            {/* ==================================================
                PROJECT INTRODUCTION / QUALITY CARD
                ================================================== */}
            <div className="mt-12 max-w-3xl rounded-2xl border border-[#DDD2BE] bg-white/60 p-10 shadow-sm">

              <p className="mb-4 leading-relaxed text-[#4B5459]">
                We take great pleasure at Delta Galaxy in our consistent
                dedication to quality. Our projects embrace our fundamental
                principles of{" "}
                <strong className="text-[#07426A]">
                  safety, sustainability, and efficient resource management
                </strong>
                , alongside our commitment to innovation and excellence.
              </p>

              <p className="leading-relaxed text-[#4B5459]">
                Presented below are detailed breakdowns across our four
                divisions —{" "}
                <strong className="text-[#07426A]">
                  Mining, Infrastructure, Water Treatment & Supply,
                </strong>{" "}
                and{" "}
                <strong className="text-[#07426A]">
                  Industrial Automation
                </strong>{" "}
                — each toggled between ongoing and completed work.
              </p>
            </div>
          </div>

          <div className="mt-16 flex justify-end lg:mt-0 lg:-mr-55">
            <TileArt className="max-w-[340px] sm:max-w-[400px] lg:max-w-[440px]" />
          </div>
          
        </div>

      </section>


      {/* ======================================================
          3. PROJECT DIVISIONS SECTION
          
          IMPORTANT:
          This is a COMPLETELY SEPARATE section from the orange
          introduction above.
          
          The orange background DOES NOT continue here.
          
          This controls the background behind:
          - Division headings
          - Ongoing/Completed buttons
          - Project cards
          ====================================================== */}
      <section className="bg-[#F6F2E9]">

        <div className="mx-auto max-w-6xl px-6">

          {/* ==================================================
              4. ALL PROJECT DIVISIONS
              ================================================== */}
          {DIVISIONS.map((division, i) => (
            <React.Fragment key={division.id}>

              {/* Individual Division */}
              <DivisionBlock division={division} />

              {/* Divider between divisions */}
              {i < DIVISIONS.length - 1 && (
                <hr className="border-[#DDD2BE]" />
              )}

            </React.Fragment>
          ))}

        </div>


        {/* Bottom spacing */}
        <div className="h-20" />

      </section>

    </div>
  );
};

export default Projects;



// import React, { useState } from "react";

// const ORANGE = "#ED7D31"; // swap this to restyle the accent later

// const DIVISIONS = [
//   {
//     id: "mining",
//     tag: "Division 01",
//     name: "Mining",
//     sub: "Overburden removal, controlled blasting, crushing and haulage for granite, iron ore and bauxite clients.",
//     ongoing: [
//       { client: "Shani Granites (Gwalior)", machinery: "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane", work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders." },
//       { client: "Amravati Mines (Gwalior)", machinery: "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane", work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders." },
//       { client: "PNC Infratech", machinery: "Tractor Trailer Truck, Front Wheel Loader", work: "Supply of stone aggregate with transportation in Meerut (U.P)." },
//       { client: "Patel Engineering Ltd.", machinery: "Tractor Trailer Truck, Front Wheel Loader", work: "Supply of stone aggregate with transportation in Katni (M.P)." },
//       { client: "Afcon Infrastructure", machinery: "Tipper, Road Roller, Grader", work: "Approach road construction for heavy machinery movement across gram panchayats, district Jaunpur (U.P)." },
//       { client: "Afcon Infrastructure", machinery: "Excavators, Mining Tipper", work: "Cleaning of drain inside tunnel at various locations, Maharashtra Samruddhi Mahamarg, districts Thane & Nashik." },
//       { client: "Patel Engineering Ltd.", machinery: "Excavators, Mining Tipper", work: "Transportation of haulage of excavated muck in District Kishtwar (J&K)." },
//       { client: "Patel Engineering Ltd.", machinery: "Concrete Mixture Machine, Back Hoe Loader, Excavator, Hydra Crane", work: "Construction of staff quarters, labor camp, VIP guest house including all ancillary work in District Kishtwar (J&K)." },
//       { client: "Tulsiani Inventours Pvt Ltd", machinery: "Concrete Mixture Machine, Back Hoe Loader, Excavator, Hydra Crane", work: "Construction of building & finishing in Lucknow (U.P)." },
//       { client: "Vretanta Clean Ind Pvt Ltd", machinery: "Tractor Trailer Truck, Front Wheel Loader", work: "Supply of stone metal." },
//     ],
//     completed: [
//       { client: "Teleworld Mines & Minerals Pvt Ltd (Gwalior)", machinery: "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane", work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders." },
//       { client: "Arcon Mines & Minerals Pvt Ltd (Gwalior)", machinery: "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane", work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders." },
//       { client: "Priska Infratech Pvt Ltd (Bhind)", machinery: "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane", work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders." },
//       { client: "Rudraya Mines & Minerals Pvt Ltd (Gwalior)", machinery: "Excavators, Mining Dumpers, Front Wheel Loader, Back Hoe, Hydra Crane", work: "Complete mining work, overburden removal, drilling, control blasting, loading, transportation, crushing boulders." },
//       { client: "Highway Crusher & Suppliers (Haridwar)", machinery: "Excavators, Mining Tipper", work: "Complete mining of river bed material with transportation." },
//       { client: "Patel Engineering Ltd.", machinery: "Excavators, Mining Tipper", work: "Transportation of haulage of excavated muck in District Kinnaur (HP)." },
//       { client: "Grewal Minerals & Metals LLP (Orissa)", machinery: "Crusher, Scanner, Excavator, Dumper, Loader", work: "Iron ore mining development and operations." },
//       { client: "Rungta Sons Pvt. Ltd", machinery: "Excavator, Dumper, Loaders, Tippers", work: "Mining, mechanical lifting and carrying of ROM and fines of iron and bauxite from Sanindpur Mines, Orissa." },
//     ],
//   },
//   {
//     id: "infrastructure",
//     tag: "Division 02",
//     name: "Infrastructure",
//     sub: "Civil, architectural and structural works for large-scale power and industrial infrastructure projects.",
//     ongoing: [
//       { client: "Vishnu Prakash Puglia Ltd.", machinery: "Excavator, Tipper, RMC Plant, Transit Mixer Truck", work: "Civil, architectural and structural works of the entire power block area including power house, boiler, chimney, transformer yard, pump house, compressor etc. for the 800 MW NTPC Project, Sipat." },
//     ],
//     completed: [],
//   },
//   {
//     id: "water",
//     tag: "Division 03",
//     name: "Water Treatment & Supply",
//     sub: "Tubewell development, pipe laying and automated bacteriology treatment across rural water supply missions.",
//     ongoing: [
//       { client: "Afcons Infrastructure Limited", machinery: "Vertical & Horizontal Drill Machine, OP Unit, Compressor Unit, Back Hoe Loader, Self Loading Concrete Mixture, Butt Fusion Welding Machine", work: "Tubewell development, pump house, OHT of different capacity, pipe laying & house connection under rural water supply mission across district Jaunpur (U.P)." },
//     ],
//     completed: [
//       { client: "Mercury International Pvt. Ltd. (Kanpur)", machinery: "Concrete Mixture Machine, Back Hoe Loader, Excavator, Hydra Crane", work: "Installation of PLC based automatic bacteriology treatment plant with online comprehensive analyzer at various locations across district Bagpat (UP)." },
//     ],
//   },
//   {
//     id: "automation",
//     tag: "Division 04",
//     name: "Industrial Automation",
//     sub: "Erection and commissioning of rolling mills and high-speed production lines for industrial manufacturers.",
//     ongoing: [],
//     completed: [
//       { client: "Raviraj Foils Ltd (Ahmedabad)", machinery: "Cold Rolling Mill", work: "Installation & commissioning of cold rolling of aluminum foil for 10 micron thickness." },
//       { client: "Jindal Aluminum Ltd (Bangalore)", machinery: "Cold Rolling Mill", work: "Installation & commissioning of cold rolling of aluminum foil for 6 mm thickness." },
//       { client: "Fablous Commercial Pvt Ltd (Siliguri)", machinery: "TMT Plant", work: "Installation & commissioning of hot rolling TMT bar plant for 32mm to 8mm TMT bar production." },
//       { client: "Procter & Gamble", machinery: "Baby Diaper Machine", work: "Erection & commissioning of baby diaper unit." },
//       { client: "Procter & Gamble", machinery: "Sanitary Pad Machine", work: "Erection & commissioning of sanitary pad unit." },
//     ],
//   },
// ];

// const ProjectCard = ({ client, machinery, work }) => (
//   <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
//     <span
//       className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
//       style={{ backgroundColor: ORANGE }}
//     />
//     <h4 className="mb-3 text-base font-bold text-black">{client}</h4>
//     <div className="mb-2">
//       <span className="block text-[11px] font-bold uppercase tracking-wider" style={{ color: ORANGE }}>
//         Machinery
//       </span>
//       <span className="text-sm text-gray-600">{machinery}</span>
//     </div>
//     <div>
//       <span className="block text-[11px] font-bold uppercase tracking-wider" style={{ color: ORANGE }}>
//         Work Description
//       </span>
//       <span className="text-sm text-gray-600">{work}</span>
//     </div>
//   </div>
// );

// const EmptyState = ({ kind }) => (
//   <div className="max-w-md rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-500">
//     At present, the company{" "}
//     {kind === "ongoing" ? "does not have any active projects in execution" : "has no completed projects"}.
//   </div>
// );

// const DivisionBlock = ({ division }) => {
//   const [tab, setTab] = useState("ongoing");
//   const list = division[tab];

//   return (
//     <section id={division.id} className="py-10">
//       <span
//         className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
//         style={{ color: ORANGE, backgroundColor: `${ORANGE}1F` }}
//       >
//         {division.tag}
//       </span>
//       <h2 className="mt-3 text-2xl font-extrabold text-black sm:text-3xl">{division.name}</h2>
//       <p className="mt-2 max-w-xl text-sm text-gray-600">{division.sub}</p>

//       {/* toggle */}
//       <div className="my-6 inline-flex gap-1 rounded-full border border-gray-200 bg-gray-100 p-1">
//         {["ongoing", "completed"].map((kind) => (
//           <button
//             key={kind}
//             type="button"
//             onClick={() => setTab(kind)}
//             className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold capitalize transition ${
//               tab === kind ? "text-white shadow" : "text-gray-500"
//             }`}
//             style={tab === kind ? { backgroundColor: ORANGE } : {}}
//           >
//             {kind}
//             <span
//               className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
//                 tab === kind ? "bg-white/25 text-white" : "bg-black/10 text-gray-500"
//               }`}
//             >
//               {division[kind].length}
//             </span>
//           </button>
//         ))}
//       </div>

//       {list.length === 0 ? (
//         <EmptyState kind={tab} />
//       ) : (
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {list.map((p, i) => (
//             <ProjectCard key={i} {...p} />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// const Projects = () => {
//   return (
//     <div className="bg-[#F6F2E9]">
//       <div className="mx-auto max-w-6xl px-6 pt-16">
//         <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-black sm:text-5xl">
//           Our Projects, across mining & infrastructure
//         </h1>
//         <p className="mt-4 max-w-lg text-base text-gray-600">
//           Four divisions, one standard of craft — from overburden removal at a granite quarry to a
//           PLC-controlled water treatment plant. Explore what's currently underway and what we've
//           already delivered.
//         </p>

//         <div className="mt-10 flex flex-wrap gap-10">
//           <div>
//             <b className="block text-2xl font-extrabold text-black">4</b>
//             <span className="text-xs uppercase tracking-wider text-gray-500">Divisions</span>
//           </div>
//           <div>
//             <b className="block text-2xl font-extrabold text-black">25+</b>
//             <span className="text-xs uppercase tracking-wider text-gray-500">Client Engagements</span>
//           </div>
//           <div>
//             <b className="block text-2xl font-extrabold text-black">Pan-India</b>
//             <span className="text-xs uppercase tracking-wider text-gray-500">Project Footprint</span>
//           </div>
//         </div>

//         <div className="mt-12 max-w-3xl rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
//           <p className="mb-4 leading-relaxed text-gray-600">
//             We take great pleasure at Delta Galaxy in our consistent dedication to quality. Our
//             projects embrace our fundamental principles of{" "}
//             <strong className="text-black">safety, sustainability, and efficient resource management</strong>,
//             alongside our commitment to innovation and excellence.
//           </p>
//           <p className="leading-relaxed text-gray-600">
//             Presented below are detailed breakdowns across our four divisions —{" "}
//             <strong className="text-black">Mining, Infrastructure, Water Treatment & Supply,</strong> and{" "}
//             <strong className="text-black">Industrial Automation</strong> — each toggled between
//             ongoing and completed work.
//           </p>
//         </div>

//         {DIVISIONS.map((division, i) => (
//           <React.Fragment key={division.id}>
//             <DivisionBlock division={division} />
//             {i < DIVISIONS.length - 1 && <hr className="border-gray-200" />}
//           </React.Fragment>
//         ))}
//       </div>
//       <div className="h-20" />
//     </div>
//   );
// };

// export default Projects;