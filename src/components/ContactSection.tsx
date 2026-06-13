import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, Share2, Compass } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="relative min-h-[100dvh] flex flex-col justify-center bg-[#120a07] text-[#FAF6F0] py-16 px-4 overflow-hidden ruyi-pattern"
    >
      <div className="max-w-md mx-auto w-full z-10 flex flex-col justify-between flex-1">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[#E5D285] font-mono text-[10px] tracking-[0.3em] uppercase mb-1">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT WITH US</span>
          </div>
          <h2 className="text-2xl font-normal tracking-widest text-[#E5D285]">品鉴预约与联系</h2>
          <div className="h-0.5 w-12 bg-[#E5D285] mt-2 rounded-full" />
        </div>

        {/* Info Grid / Bento Cards info */}
        <div className="space-y-3.5 my-auto">
          {/* Address Card */}
          <div className="bg-[#1c120c]/90 border border-[#E5D285]/20 rounded-xl p-3.5 flex gap-3 shadow-md">
            <MapPin className="w-4 h-4 text-[#E5D285] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[10px] font-mono text-stone-400 tracking-widest uppercase mb-1">品鉴展馆&生产厂址</h4>
              <p className="text-xs text-stone-200 leading-relaxed font-light text-justify">
                {CONTACT_INFO.address}
              </p>
              <div className="h-px w-full bg-[#E5D285]/10 my-1.5" />
              <p className="text-xs text-stone-200 leading-relaxed font-light text-justify">
                {CONTACT_INFO.address2}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Email Contact Card */}
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="bg-[#1c120c]/90 border border-[#E5D285]/20 rounded-xl p-3.5 flex flex-col justify-between hover:border-[#E5D285]/50 transition-all duration-300 cursor-pointer group shadow-md"
            >
              <Mail className="w-4 h-4 text-[#E5D285] mb-2" />
              <div>
                <h4 className="text-[9px] font-mono text-stone-400 tracking-widest uppercase">经理邮箱</h4>
                <p className="text-xs text-stone-300 font-light group-hover:text-white truncate">
                  {CONTACT_INFO.email}
                </p>
              </div>
            </a>

            {/* Telephone Call Card */}
            <a 
              href={`tel:${CONTACT_INFO.phone.split(' / ')[0]}`}
              className="bg-[#1c120c]/90 border border-[#E5D285]/20 rounded-xl p-3.5 flex flex-col justify-between hover:border-[#E5D285]/50 transition-all duration-300 cursor-pointer group shadow-md"
            >
              <Phone className="w-4 h-4 text-[#E5D285] mb-2" />
              <div>
                <h4 className="text-[9px] font-mono text-stone-400 tracking-widest uppercase">尊享品鉴专线</h4>
                <p className="text-xs text-stone-300 font-light group-hover:text-white truncate">
                  {CONTACT_INFO.phone.split(' / ')[0]}
                </p>
              </div>
            </a>
          </div>

          {/* Service Hours */}
          <div className="bg-[#1c120c]/50 border border-[#E5D285]/15 rounded-xl p-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-stone-400" />
              <span className="text-[11px] text-stone-300 font-mono tracking-widest">预约馆室段</span>
            </div>
            <span className="text-[11px] text-[#E5D285] font-mono font-light tracking-wider">{CONTACT_INFO.hours}</span>
          </div>

          {/* WeChat QR Code */}
          <div className="bg-[#1c120c]/90 border border-[#E5D285]/20 rounded-xl p-4 flex flex-col items-center justify-center shadow-md">
            <h4 className="text-[10px] font-mono text-[#E5D285] tracking-widest uppercase mb-3 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4" />
              微信咨询
            </h4>
            <div className="bg-white p-2 rounded-lg">
              <img 
                src="/廖宇微信.jpg" 
                alt="主理人微信" 
                className="w-40 h-auto object-contain"
              />
            </div>
            <p className="text-[10px] text-stone-400 mt-3 tracking-widest">截屏保存后在微信中扫一扫</p>
          </div>
        </div>

        {/* Footer info & handles */}
        <div className="mt-6 pt-4 border-t border-[#E5D285]/15 text-center">
          <p className="text-[9.5px] text-stone-500 font-mono tracking-widest mt-2">
            雍檀阁 • © SINCE 1984 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </section>
  );
}
