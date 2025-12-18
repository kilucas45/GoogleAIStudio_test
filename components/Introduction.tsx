
import React from 'react';

const breeds = [
  {
    name: "Munchkin",
    desc: "골격 변이에 따른 짧은 사지가 특징이나, 운동 능력은 여타 품종에 뒤처지지 않는 활동적인 개체입니다.",
    scientific: "Felis catus v. Munchkin",
    border: "border-slate-200"
  },
  {
    name: "Russian Blue",
    desc: "이중모 구조의 청회색 피모와 선명한 녹색 홍채가 특징인, 우아하고 내성적인 성향의 개체입니다.",
    scientific: "Felis catus v. Russian Blue",
    border: "border-slate-200"
  },
  {
    name: "Siamese",
    desc: "특유의 포인트 패턴을 지닌 태국 기원의 품종으로, 고도의 사회성과 보컬 소통 능력을 갖추고 있습니다.",
    scientific: "Felis catus v. Siamese",
    border: "border-slate-200"
  },
  {
    name: "Persian",
    desc: "긴 모질과 평탄한 안면 구조가 특징이며, 안정적이고 정적인 성향을 선호하는 환경에 적합한 모델입니다.",
    scientific: "Felis catus v. Persian",
    border: "border-slate-200"
  }
];

const Introduction: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 flex flex-col justify-center">
        <h2 className="text-3xl font-serif font-bold mb-8 text-slate-900 leading-tight">
          Phenotypical Taxonomy <br/> 품종별 특성 분석
        </h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          고양이의 각 품종은 수세기에 걸친 선택적 교배와 자연적 적응을 통해 고유한 생물학적 및 행동학적 형질을 구축해 왔습니다. 
          본 연구소는 이러한 다양성을 기록하고 체계화합니다.
        </p>
        <div className="p-6 bg-slate-50 border-l-4 border-slate-900">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Notice</p>
          <p className="text-sm text-slate-600 italic">
            "고유한 형질은 개체별 환경 적응 방식에 따라 다르게 발현될 수 있습니다."
          </p>
        </div>
      </div>
      
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {breeds.map((breed, idx) => (
          <div 
            key={idx} 
            className="p-8 border border-slate-100 bg-white hover:border-slate-900 transition-colors duration-500 group"
          >
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 group-hover:text-slate-900 transition-colors">
              {breed.scientific}
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-slate-800">{breed.name}</h3>
            <div className="w-8 h-[1px] bg-slate-200 mb-4 group-hover:w-16 group-hover:bg-slate-900 transition-all"></div>
            <p className="text-sm text-slate-500 leading-relaxed">{breed.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
