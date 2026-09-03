import React from 'react';
import { Server, Network, Boxes, CloudLightning, Activity, Cpu } from 'lucide-react';
import { computeInfrastructure } from '../data/eventsData';

const iconMap = {
  Server: <Server size={22} />,
  Network: <Network size={22} />,
  Boxes: <Boxes size={22} />,
  CloudLightning: <CloudLightning size={22} />
};

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan mb-3">
            <Activity size={14} />
            <span>High-Performance Computing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight mb-3">
            Institutional <span className="text-ai-cyan">Compute Power & Mesh</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Empowering researchers and students with enterprise-grade GPU acceleration, distributed high-speed clusters, and sensorized prototyping bays across all 6 campuses.
          </p>
        </div>

        {/* Grid - Clean borderless cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {computeInfrastructure.map((infra, idx) => (
            <div key={idx} className="bg-slate-50 hover:bg-slate-100/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all text-left">
              <div className="w-11 h-11 rounded-xl bg-purple-100/70 flex items-center justify-center text-purple-600 mb-4">
                {iconMap[infra.icon] || <Cpu size={22} />}
              </div>
              <h3 className="text-lg font-bold text-christ-blue mb-1">{infra.title}</h3>
              <div className="text-xs font-mono font-bold text-ai-cyan mb-3">{infra.spec}</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{infra.desc}</p>
            </div>
          ))}
        </div>

        {/* Inter-Campus Compute VPN Banner - Clean borderless card */}
        <div className="mt-10 p-6 sm:p-8 bg-slate-50 rounded-2xl shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-sky-100/70 flex items-center justify-center text-ai-cyan shrink-0">
              <Network size={20} />
            </div>
            <div>
              <div className="font-extrabold text-base text-christ-blue">Inter-Campus Compute VPN</div>
              <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
                All 6 campuses are interconnected via an internal 10Gbps low-latency data spine for distributed model training and real-time syncing.
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3.5 py-1.5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              10Gbps Dedicated Spine
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
