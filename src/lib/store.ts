
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Guest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  arrivalTime: string;
  passportOrHKID?: string;
  nationality?: string;
  specialRequests?: string;
}

interface BookingState {
  bookingRef: string;
  status: 'pending' | 'checked-in';
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  guest: Guest | null;
  roomNumber: string | null;
  checkIn: (guest: Guest) => void;
  reset: () => void;
}

const INITIAL_BOOKING = {
  bookingRef: 'RWY-8X92',
  status: 'pending' as const,
  roomType: 'Runway Residency Suite',
  checkInDate: '2026-10-15',
  checkOutDate: '2026-10-18',
  guest: null,
  roomNumber: null,
};

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      ...INITIAL_BOOKING,
      checkIn: (guest) => set({ 
        guest, 
        status: 'checked-in',
        // Assign a mock room number upon check-in
        roomNumber: '1331-A' 
      }),
      reset: () => set(INITIAL_BOOKING),
    }),
    {
      name: 'runway1331-storage',
    }
  )
);
