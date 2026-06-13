
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useBookingStore } from '@/lib/store';
import { toast } from 'sonner';

export default function CheckIn() {
  const navigate = useNavigate();
  const { checkIn, status } = useBookingStore();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    arrivalTime: '15:00',
    passportOrHKID: '',
    nationality: '',
  });

  if (status === 'checked-in') {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Already Checked In</h2>
        <p className="text-muted-foreground mb-8">You have successfully completed your check-in and joined the Runway 1331 community.</p>
        <Button onClick={() => navigate('/status')} className="w-full">
          View Digital Pass
        </Button>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    checkIn(formData);
    toast.success('Check-in successful!');
    setIsLoading(false);
    navigate('/status');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col min-h-full pb-8"
    >
      {/* Header */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-white/5 px-4 py-4 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold ml-2">Online Check-in</h1>
      </div>

      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-light mb-2">Guest Details</h2>
          <p className="text-sm text-muted-foreground">Please confirm your details to begin your residency at Runway 1331.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                required 
                className="bg-secondary/50 border-white/10 focus:border-primary"
                value={formData.firstName}
                onChange={e => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                required 
                className="bg-secondary/50 border-white/10 focus:border-primary"
                value={formData.lastName}
                onChange={e => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nationality">Nationality</Label>
            <Input 
              id="nationality" 
              required 
              placeholder="e.g. Hong Kong"
              className="bg-secondary/50 border-white/10 focus:border-primary"
              value={formData.nationality}
              onChange={e => setFormData({...formData, nationality: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="passportOrHKID">Passport / HKID Number</Label>
            <Input 
              id="passportOrHKID" 
              required 
              placeholder="Enter passport or HKID number"
              className="bg-secondary/50 border-white/10 focus:border-primary font-mono"
              value={formData.passportOrHKID}
              onChange={e => setFormData({...formData, passportOrHKID: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              className="bg-secondary/50 border-white/10 focus:border-primary"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              type="tel" 
              required 
              className="bg-secondary/50 border-white/10 focus:border-primary"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label>Estimated Arrival Time</Label>
            <Select 
              value={formData.arrivalTime} 
              onValueChange={v => setFormData({...formData, arrivalTime: v})}
            >
              <SelectTrigger className="bg-secondary/50 border-white/10 focus:border-primary">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="14:00">14:00 - 15:00</SelectItem>
                <SelectItem value="15:00">15:00 - 16:00</SelectItem>
                <SelectItem value="16:00">16:00 - 17:00</SelectItem>
                <SelectItem value="17:00">17:00 - 18:00</SelectItem>
                <SelectItem value="18:00">18:00 - 19:00</SelectItem>
                <SelectItem value="19:00+">After 19:00</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-medium rounded-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                'Complete Check-in'
              )}
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
