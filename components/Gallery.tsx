
import React from 'react';

const archiveData = [
  {
    id: "CAT_REF_101",
    breed: "Munchkin",
    url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    id: "CAT_REF_102",
    breed: "Russian Blue",
    url: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    id: "CAT_REF_103",
    breed: "Siamese",
    url: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    id: "CAT_REF_104",
    breed: "Persian",
    url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    id: "CAT_REF_105",
    breed: "Felis Catus (Grey Tabby)",
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    id: "CAT_REF_106",
    breed: "Felis Catus (Calico)",
    url: "https://images.unsplash.com/photo-1573865668131-97305988582e?auto=format&fit=crop&q=80&w=800&h=800",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 shadow-2xl">
      {archiveData.map((item, index) => (
        <div 
          key={item.id} 
          className="aspect-square overflow-hidden bg-white group relative cursor-crosshair"
        >
          <img 
            src={item.url} 
            alt={`${item.breed} Archive`} 
            className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 left-4 text-[9px] font-bold tracking-widest text-white bg-slate-900/60 backdrop-blur-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
            {item.breed.toUpperCase()}
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-all transform -translate-y-2 group-hover:translate-y-0 bg-black/50 px-2 py-1">
            {item.id}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
