// src/components/react/TechStack.jsx
import Marquee from "react-fast-marquee";
import { SiAstro, SiReact, SiNodedotjs, SiTailwindcss, SiPython, SiBootstrap, SiGooglecloud, SiShopify } from "react-icons/si";

const tech = [
    { name: "Astro", icon: SiAstro },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Python", icon: SiPython },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Shopify", icon: SiShopify },
];

export default function TechStack() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Marquee
                speed={30}
                pauseOnHover
                gradient
                gradientColor={[2, 6, 23]}
                gradientWidth={120}
            >
                {tech.map(({ name, icon: Icon }) => (
                    <div key={name} className="flex items-center gap-4 mx-8 text-slate-400">
                        <Icon className="w-12 h-12" />
                        <span className="text-xl font-semibold">{name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}