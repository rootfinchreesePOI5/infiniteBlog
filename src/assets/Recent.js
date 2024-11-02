import Lifestyle from '../assets/images/Life_style.jpg';
import Business from '../assets/images/Business.jpg';
import Technology from '../assets/images/Technology_2.jpg';
import Fashion from '../assets/images/Fashion.jpg';
import Food from '../assets/images/Food.jpg';
import Technology_2 from '../assets/images/Technology.jpg';
import Tailor from '../assets/images/Tailor.jpg';
import Architecture from '../assets/images/Rome.jpg';
import Skate from '../assets/images/Skate.jpg';

import Movies from '../assets/images/Movies.jpg';
import Company from '../assets/images/comapany.jpg';
import Tech from '../assets/images/Tech.jpg';
import Boxing from '../assets/images/Boxing.jpg';
import Food2 from '../assets/images/Food2.jpg';
import Designer from '../assets/images/Designer.jpg';

export const Recent = [
    {
        img: Lifestyle,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "Lifestyle Insights for 2023",
        key: "Lifestyle",
        path: "/categories/lifestyle"
    },
    {
        img: Business,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "Business Strategies for Sustainable Growth",
        key: "Business",
        path: "/categories/economy"
    },
    {
        img: Technology_2,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "Advancements in Technology",
        key: "Technology",
        path: "/categories/technology"
    }
];

export const Trendy = [
    { img: Technology, Read: `6min Read__ ${new Date().toLocaleDateString()}`, Title: "Technology's Impact on Business", key: "Technology", path: "/categories/technology" },
    { img: Food, Read: `6min Read__ ${new Date().toLocaleDateString()}`, Title: "Future of Food and Sustainable Eating", key: "Food", path: "/categories/food" },
    { img: Fashion, Read: `6min Read__ ${new Date().toLocaleDateString()}`, Title: "Fashion Trends in 2023", key: "Fashion", path: "/categories/fashion" }
];

export const Editors_choice = [
    {
        img: Architecture,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "Architectural Wonders in Lifestyle",
        key: "Architecture",
        path: "/categories/life_style"
    },
    {
        img: Skate,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "Entertainment Trends for 2023",
        key: "Entertainment",
        path: "/categories/life_style"
    }
];

export const editors_first = [
    {
        img: Tailor,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "Handiwork and Fashion Styles",
        key: "Fashion",
        path: "/categories/Life_style"
    }
];

export const AllChoices = [
    {
        img: Movies,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "Latest in the Movie Industry",
        key: "Business",
        path: "/categories/life_style/"
    },
    {
        img: Designer,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "Trends in Modern Design",
        key: "Food",
        path: "/categories/life_style/"
    },
    {
        img: Food2,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "The Future of Food and Sustainability",
        key: "Tech",
        path: "/categories/food"
    },
    {
        img: Business,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "Top Business Insights for 2023",
        key: "Movies",
        path: "/categories/economy"
    },
    {
        img: Tech,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "Technological Innovations of 2023",
        key: "Sports",
        path: "/categories/technology"
    },
    {
        img: Boxing,
        Read: `6min Read__ ${new Date().toLocaleDateString()}`,
        Title: "The Rise of Boxing in Modern Sports",
        key: "Fashion",
        path: "/categories/life_style"
    }
];
