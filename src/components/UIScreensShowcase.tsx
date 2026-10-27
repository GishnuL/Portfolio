import React, { useState } from 'react';
import { UI_SCREENS_SHOWCASE } from '../data/portfolioData';
import { UIScreenItem } from '../types';
import {
  LayoutDashboard,
  Table,
  FormInput,
  LineChart,
  GitBranch,
  UserCheck,
  Activity,
  Briefcase,
  Boxes,
  CalendarDays,
  Search,
  Filter,
  Download,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

export const UIScreensShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(UI_SCREENS_SHOWCASE[0].id);

  const activeScreen = UI_SCREENS_SHOWCASE.find((s) => s.id === activeTab) || UI_SCREENS_SHOWCASE[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Dashboard': return <LayoutDashboard className="w-3.5 h-3.5" />;
      case 'Data Tables': return <Table className="w-3.5 h-3.5" />;
      case 'Forms': return <FormInput className="w-3.5 h-3.5" />;
      case 'Analytics': return <LineChart className="w-3.5 h-3.5" />;
      case 'Workflow': return <GitBranch className="w-3.5 h-3.5" />;
      case 'Employee Management': return <UserCheck className="w-3.5 h-3.5" />;
      case 'Healthcare': return <Activity className="w-3.5 h-3.5" />;
      case 'CRM': return <Briefcase className="w-3.5 h-3.5" />;
      case 'Inventory': return <Boxes className="w-3.5 h-3.5" />;
      case 'Timesheet': return <CalendarDays className="w-3.5 h-3.5" />;
      default: return <LayoutDashboard className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="enterprise-showcase" className="py-20 sm:py-28 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header (Centered like Three Pillars of Expertise) */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-cream-300/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-terracotta-500" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 font-bold">
              ENTERPRISE UI SHOWCASE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight">
            Real interfaces. Real workflows.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-xl font-normal leading-relaxed pt-1">
            300+ Responsive Screens • Web • Mobile • Enterprise SaaS
          </p>
        </div>

        {/* Category Tab Bar (Horizontal scroll on mobile) */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-8 gap-1 no-scrollbar">
          {UI_SCREENS_SHOWCASE.map((screen) => {
            const isActive = screen.id === activeTab;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-charcoal-900 text-white shadow-card'
                    : 'bg-white/80 hover:bg-white text-charcoal-600 border border-cream-300'
                }`}
              >
                <span className={isActive ? 'text-terracotta-400' : 'text-charcoal-400'}>
                  {getCategoryIcon(screen.category)}
                </span>
                <span>{screen.category}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Screen Preview Container in Browser Frame */}
        <div className="bg-white rounded-3xl border border-cream-300 shadow-elevated overflow-hidden">
          
          {/* Browser Window Bar */}
          <div className="bg-cream-200/80 px-4 sm:px-6 py-3 border-b border-cream-300 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-amber-400/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <div className="hidden sm:flex items-center space-x-1.5 ml-4 bg-white/70 px-3 py-1 rounded-md text-[11px] font-mono text-charcoal-500 border border-cream-300">
                <span className="text-charcoal-400">https://</span>
                <span className="font-semibold text-charcoal-800">app.enterprise.io/v2/{activeScreen.category.toLowerCase().replace(/\s+/g, '-')}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-charcoal-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="hidden sm:inline">Verified System UI</span>
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Interactive Mockup View (8 cols) */}
            <div className="lg:col-span-8 bg-cream-50 rounded-2xl p-4 sm:p-6 border border-cream-300/80 shadow-inner min-h-[380px] flex flex-col justify-between">
              
              {/* Mockup Toolbar Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-cream-200">
                <div>
                  <h4 className="text-base font-extrabold text-charcoal-900">{activeScreen.title}</h4>
                  <p className="text-xs text-charcoal-500">Live operational view with dynamic filtering</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center bg-white px-2.5 py-1 rounded-lg border border-cream-200 text-xs text-charcoal-600">
                    <Search className="w-3.5 h-3.5 text-charcoal-400 mr-1.5" />
                    <span className="hidden sm:inline">Search records...</span>
                  </div>
                  <button className="p-1.5 bg-white rounded-lg border border-cream-200 text-charcoal-600">
                    <Filter className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1.5 bg-terracotta-500 text-white rounded-lg">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Dynamic Mockup Body based on Category */}
              <div className="py-4 space-y-4">
                {activeScreen.category === 'Dashboard' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white p-3.5 rounded-xl border border-cream-200">
                        <span className="text-[10px] uppercase font-mono text-charcoal-400">Total Pipeline</span>
                        <h5 className="text-lg font-bold text-charcoal-900">$1,420,000</h5>
                        <span className="text-[10px] text-emerald-600 font-semibold">+14.2% MoM</span>
                      </div>
                      <div className="bg-white p-3.5 rounded-xl border border-cream-200">
                        <span className="text-[10px] uppercase font-mono text-charcoal-400">Active Workflows</span>
                        <h5 className="text-lg font-bold text-charcoal-900">184 Jobs</h5>
                        <span className="text-[10px] text-terracotta-600 font-semibold">98.4% On-time</span>
                      </div>
                      <div className="bg-white p-3.5 rounded-xl border border-cream-200">
                        <span className="text-[10px] uppercase font-mono text-charcoal-400">Team SLA</span>
                        <h5 className="text-lg font-bold text-charcoal-900">99.8%</h5>
                        <span className="text-[10px] text-charcoal-500 font-semibold">Healthy</span>
                      </div>
                    </div>
                    {/* Visual Bar Graph */}
                    <div className="bg-white p-4 rounded-xl border border-cream-200 space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-charcoal-700">
                        <span>Workforce Load Distribution</span>
                        <span className="font-mono text-terracotta-600">Avg. 82%</span>
                      </div>
                      <div className="flex items-end gap-2 h-20 pt-2">
                        {[40, 65, 80, 50, 95, 75, 88, 60, 90, 70].map((val, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              className={`w-full rounded-t-sm transition-all duration-300 ${
                                idx === 4 || idx === 8 ? 'bg-terracotta-500' : 'bg-charcoal-800/20'
                              }`}
                              style={{ height: `${val}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen.category === 'Data Tables' && (
                  <div className="bg-white rounded-xl border border-cream-200 overflow-hidden text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-cream-100/90 text-charcoal-500 font-mono text-[10px] uppercase border-b border-cream-200">
                        <tr>
                          <th className="p-2.5">ID</th>
                          <th className="p-2.5">Entity / User</th>
                          <th className="p-2.5">Domain</th>
                          <th className="p-2.5">Status</th>
                          <th className="p-2.5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-cream-100 font-medium text-charcoal-800">
                        {[
                          { id: '#ENT-401', name: 'Global Asset Ledger', domain: 'ERP / Inventory', status: 'Active', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                          { id: '#ENT-402', name: 'Clinical Triage Queue', domain: 'Healthcare EHR', status: 'Critical', badge: 'bg-terracotta-50 text-terracotta-700 border-terracotta-200' },
                          { id: '#ENT-403', name: 'Software Seat Governance', domain: 'License Ops', status: 'Pending Approval', badge: 'bg-amber-50 text-amber-700 border-amber-200' },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-cream-50 transition-colors">
                            <td className="p-2.5 font-mono text-charcoal-400">{row.id}</td>
                            <td className="p-2.5 font-bold">{row.name}</td>
                            <td className="p-2.5 text-charcoal-500">{row.domain}</td>
                            <td className="p-2.5">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${row.badge}`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="p-2.5 text-right text-terracotta-600 font-bold hover:underline cursor-pointer">
                              View →
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeScreen.category !== 'Dashboard' && activeScreen.category !== 'Data Tables' && (
                  <div className="bg-white p-5 rounded-xl border border-cream-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-terracotta-600 font-bold">
                        {activeScreen.category} Architecture
                      </span>
                      <span className="text-[10px] font-mono bg-cream-100 px-2 py-0.5 rounded text-charcoal-600">
                        High Density UI
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {activeScreen.features.map((feat, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-cream-50 border border-cream-200 flex items-center space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-terracotta-500" />
                          <span className="font-medium text-charcoal-800">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Screen Status */}
              <div className="pt-3 border-t border-cream-200 flex items-center justify-between text-[11px] font-mono text-charcoal-400">
                <span>Responsive View: Desktop / Tablet / Mobile</span>
                <span className="text-charcoal-700 font-semibold">WCAG 2.1 AA Compliant</span>
              </div>
            </div>

            {/* Right Screen Information (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta-600 font-bold block mb-1">
                  Module Breakdown
                </span>
                <h3 className="text-xl font-extrabold text-charcoal-900">{activeScreen.title}</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed">
                  {activeScreen.description}
                </p>
              </div>

              {/* Stats Tiles */}
              <div className="grid grid-cols-2 gap-3">
                {activeScreen.stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-cream-100 border border-cream-300/80">
                    <span className="text-[10px] font-mono uppercase text-charcoal-500 block">{stat.label}</span>
                    <span className="text-base font-extrabold text-terracotta-600 tracking-tight">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Core Features List */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-charcoal-500">Engineered Features</span>
                <div className="space-y-1.5">
                  {activeScreen.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-charcoal-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
