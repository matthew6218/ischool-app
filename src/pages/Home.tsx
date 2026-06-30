
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Clock, CalendarDays, MapPin, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useBookingStore } from '@/lib/store';

import runwayHero from '../../img.jpg';

export default function Home() {
  const { status, bookingRef, checkInDate, checkOutDate } = useBookingStore();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col min-h-full"
    >
      {/* Hero Section */}
      <div className="relative h-[340px] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <img 
          src={runwayHero} 
          alt="Runway 1331 Kai Tak" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-12 left-6 z-20">
          <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-sm mb-1">
            <Plane className="w-4 h-4" />
            <span>RUNWAY 1331</span>
          </div>
          <h1 className="text-3xl font-light text-white tracking-tight">
            Welcome to <br />
            <span className="font-semibold">Your Destination.</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 -mt-12 z-20 relative flex flex-col gap-6">
        
        {/* Booking Card */}
        <Card className="bg-card/90 backdrop-blur-md border-white/10 shadow-xl overflow-hidden">
          <div className="h-1 w-full bg-primary" />
          <CardContent className="p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Booking Ref</p>
                <p className="font-mono text-lg font-medium text-white">{bookingRef}</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                {status === 'checked-in' ? 'Checked In' : 'Upcoming'}
              </div>
            </div>

            <div className="flex items-center gap-4 py-4 border-y border-white/5 mb-4">
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">Check-in</p>
                <p className="text-sm font-medium text-white">{checkInDate}</p>
                <p className="text-xs text-muted-foreground mt-0.5">15:00</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">Check-out</p>
                <p className="text-sm font-medium text-white">{checkOutDate}</p>
                <p className="text-xs text-muted-foreground mt-0.5">11:00</p>
              </div>
            </div>

            {status === 'pending' ? (
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/check-in">
                  Start Online Check-in
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            ) : (
              <Button asChild variant="secondary" className="w-full bg-white/10 hover:bg-white/20 text-white">
                <Link to="/status">
                  View Digital Key & Pass
                  <QrCode className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link to="/info" className="bg-secondary/50 border border-white/5 p-4 rounded-2xl flex flex-col items-start gap-3 hover:bg-secondary transition-colors">
            <div className="p-2 bg-white/5 rounded-full text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Location</p>
              <p className="text-xs text-muted-foreground">Get directions</p>
            </div>
          </Link>
          <div className="bg-secondary/50 border border-white/5 p-4 rounded-2xl flex flex-col items-start gap-3 hover:bg-secondary transition-colors opacity-70">
            <div className="p-2 bg-white/5 rounded-full text-primary">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Public Programs</p>
              <p className="text-xs text-muted-foreground">Workshops & Events</p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
