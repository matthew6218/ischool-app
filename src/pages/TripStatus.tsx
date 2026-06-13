
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Key, Calendar, MapPin, CheckCircle2, Circle } from 'lucide-react';
import { useBookingStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TripStatus() {
  const { status, bookingRef, roomType, checkInDate, checkOutDate, guest, roomNumber } = useBookingStore();

  const qrData = JSON.stringify({
    ref: bookingRef,
    name: guest ? `${guest.firstName} ${guest.lastName}` : '',
    nationality: guest?.nationality || '',
    id: guest?.passportOrHKID || '',
    room: roomNumber || 'Pending',
    type: 'runway1331-digital-key'
  });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col min-h-full p-6 pt-12"
    >
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-light mb-1">Digital Pass</h1>
        <p className="text-muted-foreground text-sm">Runway1331 Hotel & Suites</p>
      </div>

      {status === 'checked-in' ? (
        <Card className="bg-gradient-to-b from-secondary to-card border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative cutouts for boarding pass look */}
          <div className="absolute top-[60%] -left-4 w-8 h-8 bg-background rounded-full border-r border-white/10" />
          <div className="absolute top-[60%] -right-4 w-8 h-8 bg-background rounded-full border-l border-white/10" />
          
          <CardContent className="p-0">
            {/* Top Section: Room & Status */}
            <div className="p-6 bg-primary/10 border-b border-dashed border-white/20">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-1">Room Number</p>
                  <p className="text-4xl font-mono font-bold text-white">{roomNumber}</p>
                </div>
                <div className="flex items-center gap-1.5 text-primary bg-primary/10 px-3 py-1.5 rounded-full text-xs font-medium">
                  <Key className="w-3.5 h-3.5" />
                  Active Key
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Guest</p>
                <p className="text-lg font-medium text-white">{guest?.firstName} {guest?.lastName}</p>
                {guest?.nationality && (
                  <p className="text-sm text-white/70 mt-1">{guest.nationality}</p>
                )}
                {guest?.passportOrHKID && (
                  <p className="text-xs font-mono text-white/60 mt-0.5 tracking-wider">{guest.passportOrHKID}</p>
                )}
              </div>
            </div>

            {/* Middle Section: QR Code */}
            <div className="p-8 flex flex-col items-center justify-center bg-white">
              <div className="p-2 border-4 border-black/5 rounded-xl">
                <QRCodeSVG 
                  value={qrData} 
                  size={180} 
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"Q"}
                  includeMargin={false}
                />
              </div>
              <p className="text-black/50 text-xs mt-4 font-mono">Scan at elevators and room door</p>
            </div>

            {/* Bottom Section: Details */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Check-in</p>
                  <p className="text-sm font-medium text-white">{checkInDate}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Check-out</p>
                  <p className="text-sm font-medium text-white">{checkOutDate}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                <p className="text-xs text-muted-foreground">Booking Ref</p>
                <p className="font-mono text-sm text-white">{bookingRef}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-secondary/50 border-white/10 p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
            <QrCodeIcon className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Check-in Required</h2>
          <p className="text-muted-foreground text-sm mb-8">
            Complete your online check-in to generate your digital room key and boarding pass.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="/check-in">Start Check-in</a>
          </Button>
        </Card>
      )}

      {/* Trip Timeline */}
      <div className="mt-8 px-2">
        <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Trip Timeline</h3>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-secondary text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-secondary/50">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-white text-sm">Booking Confirmed</h4>
                <span className="text-xs text-muted-foreground">{checkInDate}</span>
              </div>
              <p className="text-xs text-muted-foreground">{roomType}</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ${status === 'checked-in' ? 'bg-secondary text-primary' : 'bg-background text-muted-foreground'}`}>
              {status === 'checked-in' ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-4 h-4" />}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-secondary/50">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-white text-sm">Online Check-in</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                {status === 'checked-in' ? 'Completed successfully.' : 'Pending completion.'}
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background text-muted-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
              <Circle className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-secondary/50 opacity-50">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-white text-sm">Check-out</h4>
                <span className="text-xs text-muted-foreground">{checkOutDate}</span>
              </div>
              <p className="text-xs text-muted-foreground">Before 11:00 AM</p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

// Simple fallback icon
function QrCodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}
