import { v4 as uuid } from 'uuid';

const projects = [
    {
        name: "Project Construction 1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        meta: {},
        category: "Construction",
        images: [
            {
                id: uuid(),
                featured: true,
                url: '/images/construction1.jpg'
            },
            {
                id: uuid(),
                featured: false,
                url: '/images/2.jpg'
            }
        ]
    },
    {
        name: "Interior Project 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        meta: {},
        category: "Interior",
        images: [
            {
                id: uuid(),
                featured: true,
                url: '/images/interior1.jpg'
            },
            {
                id: uuid(),
                featured: false,
                url: '/images/2.jpg'
            }
        ]
    },
    {
        name: "Designing Project 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        meta: {},
        category: "Design",
        images: [
            {
                id: uuid(),
                featured: true,
                url: '/images/design1.jpg'
            },
            {
                id: uuid(),
                featured: false,
                url: '/images/2.jpg'
            }
        ]
    },
    {
        name: "Modeling Project 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        meta: {},
        category: "Model",
        images: [
            {
                id: uuid(),
                featured: true,
                url: '/images/model1.jpg'
            },
            {
                id: uuid(),
                featured: false,
                url: '/images/2.jpg'
            }
        ]
    },
    {
        name: "Modeling Project 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        meta: {},
        category: "Model",
        images: [
            {
                id: uuid(),
                featured: true,
                url: '/images/model2.jpg'
            },
            {
                id: uuid(),
                featured: false,
                url: '/images/2.jpg'
            }
        ]
    },
    {
        name: "Modeling Project 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        meta: {},
        category: "Design",
        images: [
            {
                id: uuid(),
                featured: true,
                url: '/images/design2.jpg'


            },
            {
                id: uuid(),
                featured: false,
                url: '/images/2.jpg'
            }
        ]
    }
]

export default projects;