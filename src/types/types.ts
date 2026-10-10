interface User {
    id: number;
    username: string;
    password: string;
    email:string;
    pairCode: string;
    createdAt: Date;
}

interface Partnership {
    id: number;
    user1Id: number;
    user2Id: number;
    status: 'Pendiente' | 'Aceptada' | 'Rechazada';
    createdAt: Date;
}

interface Plan {
    id:number;
    creatorUserId:number;
    title:string;
    description:string;
    status: "Activa" | "Completada" | "Cancelada";
    category: "Plan Casual" | "Cita" | "Otro";
    createdAt: Date;
    isShared: boolean;
    sharedWithUserId?: number;
}

