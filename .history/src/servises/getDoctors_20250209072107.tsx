
export interface TimeSlotType { 
    from: string; 
    to: string; 
    available: string; 
} 
export interface WorkingHoursType { 
    day: string; 
    time_slots: TimeSlotType[]; 
} 
export interface PositionType { 
    x: number; 
    y: number; 
} 
export interface DoctorType { 
    name: string; 
    specialty: string; 
    address: string; 
    phone: string; 
    image: string; 
    coordinates: PositionType; 
    rating: number; 
    id: string; 
    accepting_patients: boolean; 
    working_hours: WorkingHoursType[]; 
}

export async function getchDoctors() {
    try {
        const response = await fetch('http://localhost:9000/doctors', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();


        
       return data as DoctorType[] ;
    }
     catch (error) {
        console.error('Error:', error);
    }
}



export async function getchDoctor({id}:string) {
    try {
        const response = await fetch(`http://localhost:9000/doctors/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        return data as DoctorType;
    }
     catch (error) {
        console.error('Error:', error);
    }
}
