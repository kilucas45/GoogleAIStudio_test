
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
    url: "https://images.unsplash.com/photo-1599582292739-d37615cc7882?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    id: "CAT_REF_103",
    breed: "Siamese",
    url: "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    id: "CAT_REF_104",
    breed: "Persian",
    url: "https://images.unsplash.com/photo-1536590158209-e9d615d525e4?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    id: "CAT_REF_105",
    breed: "Felis Catus (Grey Tabby)",
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800&h=800",
  },
  {
    id: "CAT_REF_106",
    breed: "Korean Short Hair",
    url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=800&h=800",
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
