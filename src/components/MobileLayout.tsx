
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, QrCode, Info, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useBookingStore } from '@/lib/store';

export default function MobileLayout() {
  const location = useLocation();
  const { status } = useBookingStore();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { 
      icon: QrCode, 
      label: status === 'checked-in' ? 'Key' : 'Check-in', 
      path: status === 'checked-in' ? '/status' : '/check-in' 
    },
    { icon: MapPin, label: 'Status', path: '/status' },
    { icon: Info, label: 'Hotel', path: '/info' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/90 p-0 sm:p-4 md:p-8">
      {/* Mobile Device Simulator Container */}
      <div className="w-full h-[100dvh] sm:h-[844px] sm:w-[390px] bg-background sm:rounded-[3rem] sm:border-[8px] border-neutral-900 relative overflow-hidden flex flex-col shadow-2xl">
        
        {/* Main Scrollable Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-24">
          <Outlet />
        </main>

        {/* Bottom Navigation Bar */}
        <nav className="absolute bottom-0 left-0 right-0 h-20 bg-card/80 backdrop-blur-xl border-t border-white/5 flex items-center justify-around px-2 pb-safe sm:pb-0 z-50">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
                            (item.path === '/check-in' && location.pathname === '/check-in') ||
                            (item.path === '/status' && location.pathname === '/status' && item.label === 'Key');
            
            return (
              <Link
                key={item.label}
                to={item.path}
                className="flex flex-col items-center justify-center w-16 h-full gap-1 group"
              >
                <div className={cn(
                  "p-2 rounded-xl transition-all duration-300",
                  isActive ? "bg-primary/20 text-primary" : "text-muted-foreground group-hover:text-foreground"
                )}>
                  <item.icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={cn(
                  "text-[10px] font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
