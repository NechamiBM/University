import { Course, InstructionMode } from "src/model/course.model";
import { Category } from "src/model/category.model";

export const COURSES: Course[] = [
    {
        id: 1,
        name: 'Introduction to Programming',
        categoryId: 1,
        lessonsCount: 10,
        startDate: new Date('2024-05-01'),
        syllabus: ['Basics of programming', 'Data structures', 'Algorithms'],
        instructionMode: InstructionMode.FaceToFace,
        lecturerId: 1,
        image: 'https://images.deepai.org/publication-preview/tsdf-a-multi-object-formulation-for-dynamic-object-tracking-and-reconstruction-page-1-medium.jpg'
    },
    {
        id: 2,
        name: 'Web Development Fundamentals',
        categoryId: 1,
        lessonsCount: 8,
        startDate: new Date('2024-06-01'),
        syllabus: ['HTML', 'CSS', 'JavaScript'],
        instructionMode: InstructionMode.Zoom,
        lecturerId: 2,
        image: '../../../assets/courses-images/computers.png'
    },
    {
        id: 3,
        name: 'Data Science Essentials',
        categoryId: 2,
        lessonsCount: 12,
        startDate: new Date('2024-07-01'),
        syllabus: ['Statistics', 'Machine Learning', 'Data Visualization'],
        instructionMode: InstructionMode.FaceToFace,
        lecturerId: 3,
        image: '../../../assets/courses-images/computers.png'
    },
    {
        id: 4,
        name: 'Mobile App Development',
        categoryId: 1,
        lessonsCount: 10,
        startDate: new Date('2024-08-01'),
        syllabus: ['Native App Development', 'Cross-Platform Development', 'UI/UX Design'],
        instructionMode: InstructionMode.Zoom,
        lecturerId: 4,
        image: '../../../assets/courses-images/camera.jpg'
    },
    {
        id: 5,
        name: 'Cybersecurity Fundamentals',
        categoryId: 3,
        lessonsCount: 8,
        startDate: new Date('2024-09-01'),
        syllabus: ['Network Security', 'Encryption', 'Threat Analysis'],
        instructionMode: InstructionMode.FaceToFace,
        lecturerId: 5,
        image: '../../../assets/courses-images/camera.jpg'
    },
    {
        id: 6,
        name: 'Cloud Computing Basics',
        categoryId: 5,
        lessonsCount: 6,
        startDate: new Date('2024-10-01'),
        syllabus: ['Cloud Infrastructure', 'Virtualization', 'Containerization'],
        instructionMode: InstructionMode.Zoom,
        lecturerId: 6,
        image: '../../../assets/courses-images/computers.png'
    },
    {
        id: 7,
        name: 'Graphic Design Fundamentals',
        categoryId: 4,
        lessonsCount: 8,
        startDate: new Date('2024-11-01'),
        syllabus: ['Design Principles', 'Adobe Photoshop', 'Adobe Illustrator'],
        instructionMode: InstructionMode.FaceToFace,
        lecturerId: 7,
        image: '../../../assets/courses-images/english.jpg'
    },
    {
        id: 8,
        name: 'Financial Planning Basics',
        categoryId: 6,
        lessonsCount: 6,
        startDate: new Date('2025-01-01'),
        syllabus: ['Budgeting', 'Investment Strategies', 'Retirement Planning'],
        instructionMode: InstructionMode.Zoom,
        lecturerId: 8,
        image: '../../../assets/courses-images/english.jpg'
    },
    {
        id: 9,
        name: 'Photography Essentials',
        categoryId: 4,
        lessonsCount: 8,
        startDate: new Date(),
        syllabus: ['Camera Basics', 'Composition Techniques', 'Image Editing'],
        instructionMode: InstructionMode.FaceToFace,
        lecturerId: 9,
        image: '../../../assets/courses-images/camera.jpg'
    },
    {
        id: 10,
        name: 'Artificial Intelligence Fundamentals',
        categoryId: 5,
        lessonsCount: 12,
        startDate: new Date('2024-05-08'),
        syllabus: ['Neural Networks', 'Deep Learning', 'Natural Language Processing'],
        instructionMode: InstructionMode.Zoom,
        lecturerId: 10,
        image: '../../../assets/courses-images/english.jpg'
    }
];


export const CATEGORIES: Category[] = [
    {
        id: 1,
        name: 'Programming',
        iconRouting: 'desktop_mac'
    },
    {
        id: 2,
        name: 'Data Science',
        iconRouting: 'blur_linear'
    },
    {
        id: 3,
        name: 'Cybersecurity',
        iconRouting: 'adb'
    },
    {
        id: 4,
        name: 'Design',
        iconRouting: 'brush'
    },
    {
        id: 5,
        name: 'Technology',
        iconRouting: 'filter_drama'
    },
    {
        id: 6,
        name: 'Financial Planning',
        iconRouting: 'attach_money'
    }
];