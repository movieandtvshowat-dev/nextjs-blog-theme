// // components/MovieCard.tsx
// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Play } from 'lucide-react'

// export default function MovieCard({ movie }: { movie: any }) {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <div 
//       className="relative group cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Link href={`/movie/${movie.slug}`}>
//         <div className={`aspect-[2/3] rounded-lg overflow-hidden bg-gray-800 transition-all duration-300 ${
//           isHovered ? 'movie-card-hover shadow-2xl' : ''
//         }`}>
//           <img
//             src={movie.thumbnail}
//             alt={movie.title}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </Link>

//       {/* Hover Overlay */}
//       {isHovered && (
//         <div className="absolute inset-0 bg-black bg-opacity-90 rounded-lg z-30 p-4 animate-fade-in flex flex-col justify-end">
//           <h3 className="font-semibold text-white mb-2 line-clamp-2">
//             {movie.title}
//           </h3>
//           <Link 
//             href={`/movie/${movie.slug}`}
//             className="btn-red w-full"
//           >
//             <Play size={16} className="mr-1" />
//             Play
//           </Link>
//         </div>
//       )}
//     </div>
//   )
// }




// components/MovieCard.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play } from 'lucide-react'

export default function MovieCard({ movie }: { movie: any }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/movie/${movie.slug}`}>
        <div className={`aspect-[2/3] rounded-lg overflow-hidden bg-gray-800 transition-all duration-300 ${
          isHovered ? 'scale-105 shadow-2xl' : ''
        }`}>
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Clean Hover Overlay - No Background */}
          {isHovered && (
            <>
              {/* Top Gradient for Title */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent" />
              
              {/* Bottom Gradient for Play Button */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
              
              {/* Movie Title - Top */}
              <div className="absolute top-2 left-2 right-2">
                <h3 className="text-white font-bold text-sm drop-shadow-2xl line-clamp-2">
                  {movie.title}
                </h3>
              </div>

              {/* Play Button - Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform transition-all duration-300 group-hover:scale-110">
                  <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110">
                    <Play size={24} className="text-white" />
                  </div>
                  <p className="text-white text-sm font-semibold mt-2 text-center drop-shadow-2xl">
                    Play
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </Link>

      {/* Movie Title (Always visible below card) */}
      <div className="mt-2">
        <h3 className="text-white text-sm font-medium line-clamp-1">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-xs mt-1">
          {movie.releaseYear} • {movie.genre.split(',')[0]}
        </p>
      </div>
    </div>
  )
}