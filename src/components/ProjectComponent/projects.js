import { v4 as uuid } from 'uuid';

const projects = {
    'Institutions': [
        {
            name: 'Indian Institute of Information Technology, Dharwad',
            details: {
                projectPromoters: "IIIT Dharwad",
                status: 'On Going',
                location: "Hubali-Dharwad, Karnataka - 580029",
                superBuiltUpArea: '123151 SQMT',
                images: [
                    {
                        name: 'Indian Institute of Information Technology, Dharwad',
                        url: '/images/Institutions/IIIT-D/1.jpg'
                    },
                    {
                        name: 'Boys Hostel Block',
                        url: [
                            '/images/Institutions/IIIT-D/BoysHostelBlock.png',
                            '/images/Institutions/IIIT-D/BoysHostelLGF.jpg',
                        ]
                    },
                    {
                        name: 'Academic Block',
                        url: [
                            '/images/Institutions/IIIT-D/AcademicBlockCons.jpg',
                            '/images/Institutions/IIIT-D/AcademicBlock.png',
                            '/images/Institutions/IIIT-D/Academic Block.jpg',
                            '/images/Institutions/IIIT-D/AcademicBlockUGF.jpg',
                        ]
                    },
                    {
                        name: 'Main Block - Administration and Sports Complex',
                        url: [
                            '/images/Institutions/IIIT-D/MainBlockCons.jpg',
                            '/images/Institutions/IIIT-D/MainBlock.png',
                            '/images/Institutions/IIIT-D/MainBlockAndSports.jpg',
                            '/images/Institutions/IIIT-D/Complex.jpg'
                        ]
                    },
                    {
                        name: 'Health and Fitness Block',
                        url: [
                            '/images/Institutions/IIIT-D/HealthAndFitnessBlock.jpg',
                            '/images/Institutions/IIIT-D/HealthAndFitnessCons.jpg',
                        ]
                    },
                    {
                        name: 'Sports Complex',
                        url: [
                            '/images/Institutions/IIIT-D/SportsComplex.jpg',
                            '/images/Institutions/IIIT-D/SportsComplex1.jpg'
                        ]
                    },
                    {
                        name: 'Conference Room',
                        url: '/images/Institutions/IIIT-D/ConferenceRoom.jpg'
                    },
                    {
                        name: 'Director\'s Room',
                        url:  '/images/Institutions/IIIT-D/DirectorRoom.jpg'
                    },
                    {
                        name: 'Director\'s Bunglow',
                        url:  '/images/Institutions/IIIT-D/DirectorBuglow.jpg'
                    },
                    {
                        name: 'Board Room',
                        url:  '/images/Institutions/IIIT-D/BoardRoom.jpg'
                    },
                    {
                        name: 'Knowledge Resource',
                        url:  '/images/Institutions/IIIT-D/KnowledgeResource.jpg'
                    },
                    {
                        name: 'Academic Block -120 Seater Classroom',
                        url:  '/images/Institutions/IIIT-D/Classroom.jpg'
                    },
                    {
                        name: 'Boys Hostel – Guest Room - 2 Beds',
                        url:  [
                            '/images/Institutions/IIIT-D/BoysHostel1.jpg',
                            '/images/Institutions/IIIT-D/BoysHostel2.jpg'
                        ]
                    },
                    {
                        name: 'Boys hostel Dinning - Total seating capacity: 300',
                        url:  [
                            '/images/Institutions/IIIT-D/BoysHostelDining.jpg',
                            '/images/Institutions/IIIT-D/BoysHostelDining1.jpg',
                            '/images/Institutions/IIIT-D/BoysHostelDining2.jpg'
                        ]
                    },
                    {
                        name: 'Girls Hostel',
                        url:  [
                            '/images/Institutions/IIIT-D/GirlsHostel.jpg',
                            '/images/Institutions/IIIT-D/GirlsHostel1.jpg',
                        ]
                    },
                    {
                        name: 'Main Entrance gateway',
                        url:  '/images/Institutions/IIIT-D/MainEntrance.jpg'
                    },
                ]
            },
            
        },
    ],
    'Hospitals': [
        {
            name: 'Victoria Hospital - 1000 Beds',
            details: {
                projectPromoters: "Victoria Hospital",
                status: 'Under Construction',
                location: "Fort Rd, Near City Market, New Tharagupet, Bengaluru, Karnataka 560002",
                superBuiltUpArea: '',
                images: [
                    {
                        name: 'Proposed Building',
                        url: '/images/Hospitals/VictoriaHospital/Proposed.jpg'
                    },
                    {
                        name: 'Victoria Hospital',
                        url: '/images/Hospitals/VictoriaHospital/2.jpg'
                    },
                    {
                        name: 'Victoria Hospital',
                        url: '/images/Hospitals/VictoriaHospital/3.jpg'
                    },
                ]
            },
            
        }
    ],
    'Apartments': [
        {
            name: 'Suvarna Apartments',
            details: {
                projectPromoters: "Vinay Sirsi",
                status: 'Completed',
                location: "Kumara Park, Bangalore",
                superBuiltUpArea: '25,000 SFT',
                images: [
                    {
                        name: 'Suvarna Apartments',
                        url: '/images/Apartments/SuvarnaApartments/1.jpg'
                    },
                ]
            },
            
        },
    ],
    'Sports Facilities': [
        {
            name: 'Contours Gym',
            details: {
                projectPromoters: "Contours",
                status: 'Completed',
                location: "Bengaluru",
                superBuiltUpArea: '',
                images: [
                    {
                        name: 'Contours Gym',
                        url: '/images/Sports Facilities/ContoursGm/1.jpg'
                    },
                ]
            },
            
        }
    ],
    'Hospitality': [
        {
            name: 'Temple Tree Studios',
            details: {
                projectPromoters: "Mr.Vikrant Jagannath",
                status: 'Completed',
                location: "Alfred Street, Bangalore",
                superBuiltUpArea: '20,000 SFT',
                images: [
                    {
                        name: 'Temple Tree Studios',
                        url: '/images/Hospitality/TempleTreeStudios/1.jpg'
                    },
                ]
            },
            
        }
    ],
    'Commercial Complex': [
        {
            name: 'Lotus Tower',
            details: {
                projectPromoters: "Lotus Towers",
                status: 'Completed',
                location: "Race Course Road, Bangalore",
                superBuiltUpArea: '55,000 SFT',
                images: [
                    {
                        name: 'Lotus Tower',
                        url: '/images/Commercial Complex/LotusTower/1.jpg'
                    },
                ]
            },
            
        }
    ],
    'Industrial Buildings & Warehouses': [
        {
            name: 'Random hospital',
            details: {
                projectPromoters: "Manipal",
                status: 'Completed',
                location: "Hubali-Dharwad, Karnataka - 580029",
                superBuiltUpArea: '123151 SQMT',
                images: [
                    {
                        name: 'Trial test',
                        url: '/images/Institutions/IIIT-D/1.jpg'
                    },
                ]
            },
            
        }
    ],
    'Interiors': [
        {
            name: 'Random hospital',
            details: {
                projectPromoters: "Manipal",
                status: 'Completed',
                location: "Hubali-Dharwad, Karnataka - 580029",
                superBuiltUpArea: '123151 SQMT',
                images: [
                    {
                        name: 'Trial test',
                        url: '/images/Institutions/IIIT-D/1.jpg'
                    },
                ]
            },
            
        }
    ]
}

// const projects = [
//     {
//         name: "Project Construction 1",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         meta: {},
//         category: "Construction",
//         images: [
//             {
//                 id: uuid(),
//                 featured: true,
//                 url: '/images/construction1.jpg'
//             },
//             {
//                 id: uuid(),
//                 featured: false,
//                 url: '/images/2.jpg'
//             }
//         ]
//     },
//     {
//         name: "Interior Project 2",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         meta: {},
//         category: "Interior",
//         images: [
//             {
//                 id: uuid(),
//                 featured: true,
//                 url: '/images/interior1.jpg'
//             },
//             {
//                 id: uuid(),
//                 featured: false,
//                 url: '/images/2.jpg'
//             }
//         ]
//     },
//     {
//         name: "Designing Project 3",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         meta: {},
//         category: "Design",
//         images: [
//             {
//                 id: uuid(),
//                 featured: true,
//                 url: '/images/design1.jpg'
//             },
//             {
//                 id: uuid(),
//                 featured: false,
//                 url: '/images/2.jpg'
//             }
//         ]
//     },
//     {
//         name: "Modeling Project 4",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         meta: {},
//         category: "Model",
//         images: [
//             {
//                 id: uuid(),
//                 featured: true,
//                 url: '/images/model1.jpg'
//             },
//             {
//                 id: uuid(),
//                 featured: false,
//                 url: '/images/2.jpg'
//             }
//         ]
//     },
//     {
//         name: "Modeling Project 4",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         meta: {},
//         category: "Model",
//         images: [
//             {
//                 id: uuid(),
//                 featured: true,
//                 url: '/images/model2.jpg'
//             },
//             {
//                 id: uuid(),
//                 featured: false,
//                 url: '/images/2.jpg'
//             }
//         ]
//     },
//     {
//         name: "Modeling Project 4",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         meta: {},
//         category: "Design",
//         images: [
//             {
//                 id: uuid(),
//                 featured: true,
//                 url: '/images/design2.jpg'


//             },
//             {
//                 id: uuid(),
//                 featured: false,
//                 url: '/images/2.jpg'
//             }
//         ]
//     }
// ]

export default projects;