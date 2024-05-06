export class Course {
    id: number;
    name: string;
    categoryId: number;
    lessonsCount: number;
    startDate: Date;
    syllabus: string[];
    instructionMode: InstructionMode;
    lecturerId: number;
    image: string;
}

export enum InstructionMode {
    FaceToFace,
    Zoom
}