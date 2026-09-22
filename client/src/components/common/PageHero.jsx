import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PageHero = ({ eyebrow, title, breadcrumbs, image }) => {
  return (
    <section className="relative h-[360px] flex items-end bg-[#12181C] overflow-hidden font-lato">

      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#12181C] via-[#12181C]/70 to-[#12181C]/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10 w-full">

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs mb-4">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <ChevronRight size={12} className="text-[#F6F2E9]/40" />}

              {crumb.to ? (
                <Link
                  to={crumb.to}
                  className="px-3 py-1 rounded-full border border-[#F6F2E9]/25 text-[#F6F2E9]/75 hover:border-[#C97A3E] hover:text-[#C97A3E] hover:bg-[#C97A3E]/10 transition-all duration-300"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="px-3 py-1 rounded-full bg-[#C97A3E]/15 text-[#C97A3E] font-medium">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-[#C97A3E] text-sm font-semibold tracking-wide mb-3">
            {eyebrow}
          </p>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-[#F6F2E9]">
          {title}
        </h1>

      </div>
    </section>
  );
};

export default PageHero;


// import { Link } from 'react-router-dom'
// import { ChevronRight } from 'lucide-react'

// const PageHero = ({ eyebrow, title, breadcrumbs, image }) => {
//   return (
//     <section className="relative h-[360px] flex items-end bg-[#12181C] overflow-hidden">
//       {image && (
//         <img
//           src={image}
//           alt=""
//           className="absolute inset-0 w-full h-full object-cover opacity-40"
//         />
//       )}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#12181C] via-[#12181C]/70 to-[#12181C]/30" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10 w-full">
//         <div className="flex items-center gap-1.5 text-xs text-[#F6F2E9]/60 mb-4">
//           {breadcrumbs.map((crumb, i) => (
//             <span key={crumb.label} className="flex items-center gap-1.5">
//               {i > 0 && <ChevronRight size={12} />}
//               {crumb.to ? (
//                 <Link to={crumb.to} className="hover:text-[#C97A3E] transition-colors">
//                   {crumb.label}
//                 </Link>
//               ) : (
//                 <span className="text-[#C97A3E]">{crumb.label}</span>
//               )}
//             </span>
//           ))}
//         </div>

//         {eyebrow && (
//           <p className="text-[#C97A3E] text-sm font-semibold tracking-wide mb-3">{eyebrow}</p>
//         )}
//         <h1 className="text-4xl md:text-5xl font-semibold text-[#F6F2E9]">{title}</h1>
//       </div>
//     </section>
//   )
// }

// export default PageHero;