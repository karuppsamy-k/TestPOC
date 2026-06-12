import React from 'react';
import { AnimatedPage } from '../shared/components/layout/AnimatedPage';
import { User, Settings, Package, Heart } from 'lucide-react';

export const ProfilePage = () => {
  return (
    <AnimatedPage className="pt-8 px-4 pb-24">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 flex items-center space-x-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            S
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">SShop User</h2>
            <p className="text-gray-500 font-medium">Premium Member</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProfileMenuCard icon={<Package />} title="My Orders" desc="Track, return, or buy things again" />
          <ProfileMenuCard icon={<Heart />} title="Wishlist" desc="Your curated list of favorites" />
          <ProfileMenuCard icon={<Settings />} title="Settings" desc="Manage account and preferences" />
        </div>
      </div>
    </AnimatedPage>
  );
};

const ProfileMenuCard = ({ icon, title, desc }) => (
  <div className="glass-panel p-5 rounded-2xl flex items-center space-x-4 hover:bg-white/80 cursor-pointer transition-colors group">
    <div className="p-3 bg-gray-50 rounded-xl text-gray-600 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);
